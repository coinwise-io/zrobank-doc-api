#!/usr/bin/env node
// Builds docs/baas/api-overview/changelog.md from the OpenAPI contract diff
// between consecutive zrobank-services releases. Specs come from the release
// asset `api-baas.openapi.json` (generated with APP_ENV=production), so the
// changelog can only describe what production exposes.
//
//   node specs/changelog/generate.mjs [--tag vX.Y.Z] [--force] [--local-specs <dir>]
//
// Exit code 0 always when the file was written; the report on stdout and the
// GITHUB_OUTPUT keys (changed, gate, tags) drive the workflow decision.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const REPO = 'coinwise-io/zrobank-services';
const ASSET = 'api-baas.openapi.json';
const OUT = path.join(ROOT, 'docs/baas/api-overview/changelog.md');
const FROM = 'v1.84.0';
const FLOOD = 5;

const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? undefined : argv[i + 1] === undefined || argv[i + 1].startsWith('--') ? true : argv[i + 1];
};
const onlyTag = typeof flag('tag') === 'string' ? flag('tag') : undefined;
const force = flag('force') === true;
const localSpecs = typeof flag('local-specs') === 'string' ? flag('local-specs') : undefined;
const oasdiffBin = typeof flag('oasdiff') === 'string' ? flag('oasdiff') : 'oasdiff';
const workDir = path.join(ROOT, '.cache/changelog');

const compareTags = (a, b) => {
  const pa = a.slice(1).split('.').map(Number);
  const pb = b.slice(1).split('.').map(Number);
  // v1.88.01 and v1.88.1 are numerically equal; keep the order stable.
  return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2] || a.localeCompare(b);
};
// Releases are ordered by publish date first: patch tags were not always cut in numeric order.
const compareReleases = (a, b) => (a.date || '').localeCompare(b.date || '') || compareTags(a.tag, b.tag);
const isReleaseTag = (t) => /^v\d+\.\d+\.\d+$/.test(t);

function gh(args) {
  return execFileSync('gh', args, { encoding: 'utf8', maxBuffer: 64e6 });
}

function listReleases() {
  if (localSpecs) {
    return fs.readdirSync(localSpecs)
      .filter((t) => isReleaseTag(t) && fs.existsSync(path.join(localSpecs, t, ASSET)))
      .map((t) => ({ tag: t, date: fs.statSync(path.join(localSpecs, t, ASSET)).mtime.toISOString().slice(0, 10), hasAsset: true }));
  }
  const rows = JSON.parse(gh(['release', 'list', '--repo', REPO, '--limit', '500', '--json', 'tagName,publishedAt,isDraft']));
  return rows
    .filter((r) => !r.isDraft && isReleaseTag(r.tagName))
    .map((r) => ({ tag: r.tagName, date: (r.publishedAt || '').slice(0, 10), hasAsset: undefined }));
}

function specPath(tag) {
  if (localSpecs) return path.join(localSpecs, tag, ASSET);
  const dir = path.join(workDir, tag);
  const file = path.join(dir, ASSET);
  if (!fs.existsSync(file)) {
    fs.mkdirSync(dir, { recursive: true });
    try {
      gh(['release', 'download', tag, '--repo', REPO, '--pattern', ASSET, '--dir', dir, '--clobber']);
    } catch {
      return null;
    }
  }
  return fs.existsSync(file) ? file : null;
}

const severityFile = path.join(HERE, 'severity.txt');
const deny = fs.readFileSync(path.join(HERE, 'denylist.txt'), 'utf8').split('\n').map((s) => s.trim()).filter(Boolean)
  .map((s) => new RegExp(`(^|[^A-Za-z])${s}([^A-Za-z]|$)`, 'i'));

function changelog(base, head) {
  const out = execFileSync(oasdiffBin, ['changelog', base, head, '-f', 'json', '--severity-levels', severityFile], { encoding: 'utf8', maxBuffer: 64e6 });
  const headSpec = JSON.parse(fs.readFileSync(head, 'utf8'));
  return JSON.parse(out || '[]').filter((c) => c.section === 'paths').filter((c) => keep(c, headSpec));
}

function keep(c, headSpec) {
  if (c.id === 'response-media-type-removed' && /status .[45]\d\d/.test(c.text)) return false;
  const op = headSpec.paths?.[c.path]?.[c.operation?.toLowerCase()];
  if (op?.deprecated && !/deprecat|removed/.test(c.id)) return false;
  return true;
}

const REWORD = {
  'api-path-removed-without-deprecation': 'endpoint removed',
  'api-path-removed-with-deprecation': 'endpoint removed (was deprecated)',
};
const clean = (t) => t.replace(/(?:oneOf|allOf|anyOf)\[#\/components\/schemas\/([^\]]+)\]\/?/g, '$1/').replace(/'\/?([^']*?)\/'/g, "'$1'");

function render(entries) {
  const byEndpoint = new Map();
  for (const c of entries) {
    const key = `${c.operation} ${c.path}`;
    (byEndpoint.get(key) || byEndpoint.set(key, []).get(key)).push(c);
  }
  const lines = [];
  const sorted = [...byEndpoint.entries()].sort(([a], [b]) => a.split(' ')[1].localeCompare(b.split(' ')[1]) || a.localeCompare(b));
  for (const [endpoint, list] of sorted) {
    lines.push(`### \`${endpoint}\``);
    const byId = new Map();
    for (const c of list) (byId.get(c.id) || byId.set(c.id, []).get(c.id)).push(c);
    for (const [id, cs] of byId) {
      const warn = cs[0].level >= 2 ? '⚠️ **Attention:** ' : '';
      if (cs.length > FLOOD && /enum-value-(added|removed)$/.test(id)) {
        const m = cs[0].text.match(/(?:property|parameter) '([^']+)'|'([^']+)' (?:request|response) (?:property|parameter)/);
        const prop = (m && (m[1] || m[2])) || '?';
        const verb = id.endsWith('removed') ? 'removed from' : 'added to';
        const sample = cs.slice(0, 3).map((c) => (c.text.match(/'([^']+)'/) || [])[1]).join(', ');
        lines.push(`- ${warn}${cs.length} enum values ${verb} '${prop}' (${sample}, …)`);
      } else {
        for (const c of cs) lines.push(`- ${warn}${REWORD[c.id] || clean(c.text.trim())}`);
      }
    }
    lines.push('');
  }
  return lines.join('\n').trim();
}

// ---- main -------------------------------------------------------------------

const releases = listReleases().filter((r) => compareTags(r.tag, FROM) >= 0).sort(compareReleases);
let content = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '# Changelog\n';
const sectionRe = (tag) => new RegExp(`^## ${tag.replace(/\./g, '\\.')}\\b[^\\n]*\\n[\\s\\S]*?(?=^## |(?![\\s\\S]))`, 'm');
const hasSection = (tag) => new RegExp(`^## ${tag.replace(/\./g, '\\.')}\\b`, 'm').test(content);

const report = [];
const newSections = [];
let previous = null;
for (const release of releases) {
  const file = specPath(release.tag);
  if (!file) { report.push({ tag: release.tag, status: 'no-asset' }); continue; }
  if (!previous) { previous = release; report.push({ tag: release.tag, status: 'baseline' }); continue; }
  const inScope = onlyTag ? release.tag === onlyTag : true;
  if (!inScope) { previous = release; continue; }
  if (hasSection(release.tag) && !force) { previous = release; report.push({ tag: release.tag, status: 'exists' }); continue; }

  const entries = changelog(specPath(previous.tag), file);
  if (entries.length === 0) {
    if (force && hasSection(release.tag)) content = content.replace(sectionRe(release.tag), '');
    previous = release;
    report.push({ tag: release.tag, status: 'no-contract-change' });
    continue;
  }
  const body = render(entries);
  const removals = entries.filter((c) => /-(removed|deprecated)$/.test(c.id)).length;
  const denyHits = body.split('\n').filter((l) => deny.some((re) => re.test(l)));
  const section = `## ${release.tag} (${release.date})\n\n${body}\n`;
  if (force && hasSection(release.tag)) content = content.replace(sectionRe(release.tag), '');
  newSections.push({ tag: release.tag, section });
  report.push({
    tag: release.tag, from: previous.tag, status: removals || denyHits.length ? 'REVIEW' : 'auto',
    entries: entries.length, breaking: entries.filter((c) => c.level === 3).length,
    endpointsAdded: entries.filter((c) => c.id === 'endpoint-added').length, removals, denyHits: denyHits.map((l) => l.slice(0, 120)),
  });
  previous = release;
}

if (newSections.length) {
  // Sections are newest-first. Insert before the first existing section, or at the end.
  const block = newSections.reverse().map((s) => s.section).join('\n');
  const firstSection = content.search(/^## v\d+\.\d+\.\d+/m);
  content = firstSection === -1
    ? `${content.trimEnd()}\n\n${block}`
    : `${content.slice(0, firstSection).trimEnd()}\n\n${block}\n${content.slice(firstSection)}`;
  content = `${content.replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
  const require = createRequire(path.join(ROOT, 'package.json'));
  require('@mdx-js/mdx').sync(content);
  fs.writeFileSync(OUT, content);
}

const changed = newSections.length > 0;
const gate = report.some((r) => r.status === 'REVIEW');
const summary = report.filter((r) => ['auto', 'REVIEW'].includes(r.status))
  .map((r) => `${r.tag}: ${r.entries} mudanças, ${r.breaking} breaking, ${r.endpointsAdded} endpoints novos, ${r.removals} remoções${r.denyHits.length ? `, denylist: ${r.denyHits.length}` : ''}`).join('\n');
console.log(JSON.stringify({ changed, gate, sections: newSections.map((s) => s.tag), report }, null, 2));
if (process.env.GITHUB_OUTPUT) {
  const tags = newSections.map((s) => s.tag).join(' ');
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\ngate=${gate}\ntags=${tags}\nsummary<<EOS\n${summary}\nEOS\n`);
}
