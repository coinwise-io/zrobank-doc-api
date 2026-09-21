#!/usr/bin/env node
// Builds docs/baas/api-overview/changelog.md from the OpenAPI contract diff
// between consecutive zrobank-services releases. Specs live in
// specs/baas/releases/<tag>/api-baas.openapi.json, mirrored here by the
// zrobank-services release workflow (generated with APP_ENV=production), so
// the changelog can only describe what production exposes.
//
//   node specs/changelog/generate.mjs [--tag vX.Y.Z] [--force] [--specs-dir <dir>]
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
const ASSET = 'api-baas.openapi.json';
const RELEASES_DIR = path.join(ROOT, 'specs/baas/releases');
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
const specsDir = typeof flag('specs-dir') === 'string' ? path.resolve(flag('specs-dir')) : RELEASES_DIR;
const oasdiffBin = typeof flag('oasdiff') === 'string' ? flag('oasdiff') : 'oasdiff';

const compareTags = (a, b) => {
  const pa = a.slice(1).split('.').map(Number);
  const pb = b.slice(1).split('.').map(Number);
  // v1.88.01 and v1.88.1 are numerically equal; keep the order stable.
  return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2] || a.localeCompare(b);
};
// Releases are ordered by publish date first: patch tags were not always cut in numeric order.
const compareReleases = (a, b) => (a.publishedAt || '').localeCompare(b.publishedAt || '') || compareTags(a.tag, b.tag);
const isReleaseTag = (t) => /^v\d+\.\d+\.\d+$/.test(t);

function listReleases() {
  const indexPath = path.join(specsDir, 'index.json');
  const index = fs.existsSync(indexPath) ? JSON.parse(fs.readFileSync(indexPath, 'utf8')) : {};
  return fs.readdirSync(specsDir)
    .filter((tag) => isReleaseTag(tag) && fs.existsSync(path.join(specsDir, tag, ASSET)))
    .map((tag) => ({ tag, publishedAt: index[tag]?.publishedAt || '' }));
}

const specPath = (tag) => path.join(specsDir, tag, ASSET);

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
const originalContent = content;
const matches = [...content.matchAll(/^## (v\d+\.\d+\.\d+)\b[^\n]*\n[\s\S]*?(?=^## v\d+\.\d+\.\d+\b|(?![\s\S]))/gm)];
const introduction = matches.length ? content.slice(0, matches[0].index) : content;
const sections = new Map(matches.map((match) => [match[1], match[0].trimEnd()]));
const hasSection = (tag) => sections.has(tag);
const releaseByTag = new Map(releases.map((release) => [release.tag, release]));
const changedTags = new Set();

const report = [];
let previous = null;
for (const release of releases) {
  const file = specPath(release.tag);
  if (!previous) { previous = release; report.push({ tag: release.tag, status: 'baseline' }); continue; }
  const inScope = onlyTag ? release.tag === onlyTag : true;
  if (!inScope) { previous = release; continue; }
  if (hasSection(release.tag) && !force) { previous = release; report.push({ tag: release.tag, status: 'exists' }); continue; }

  const entries = changelog(specPath(previous.tag), file);
  if (entries.length === 0) {
    const removed = force && sections.delete(release.tag);
    if (removed) changedTags.add(release.tag);
    previous = release;
    report.push({ tag: release.tag, status: removed ? 'section-removed' : 'no-contract-change' });
    continue;
  }
  const body = render(entries);
  const removals = entries.filter((c) => /-(removed|deprecated)(?:-|$)/.test(c.id)).length;
  const denyHits = body.split('\n').filter((l) => deny.some((re) => re.test(l)));
  const section = `## ${release.tag} (${release.publishedAt.slice(0, 10)})\n\n${body}`;
  if (sections.get(release.tag) !== section) changedTags.add(release.tag);
  sections.set(release.tag, section);
  report.push({
    tag: release.tag, from: previous.tag, status: removals || denyHits.length ? 'REVIEW' : 'auto',
    entries: entries.length, breaking: entries.filter((c) => c.level === 3).length,
    endpointsAdded: entries.filter((c) => c.id === 'endpoint-added').length, removals, denyHits: denyHits.map((l) => l.slice(0, 120)),
  });
  previous = release;
}

const releaseFor = (tag) => releaseByTag.get(tag) || {
  tag, publishedAt: sections.get(tag)?.match(/^## [^\n]*\((\d{4}-\d{2}-\d{2})\)/)?.[1] || '',
};
const newestFirst = (a, b) => compareReleases(releaseFor(b), releaseFor(a));
if (changedTags.size) {
  // Merge regenerated/backfilled sections with existing editorial text, then sort
  // the complete history. A deletion alone must also reach disk and the workflow.
  const block = [...sections.keys()].sort(newestFirst).map((tag) => sections.get(tag)).join('\n\n');
  content = `${[introduction.trimEnd(), block].filter(Boolean).join('\n\n')}\n`;
}
const changed = content !== originalContent;
if (changed) {
  const require = createRequire(path.join(ROOT, 'package.json'));
  require('@mdx-js/mdx').sync(content);
  fs.writeFileSync(OUT, content);
}

const gate = report.some((r) => r.status === 'REVIEW');
const summary = report.filter((r) => ['auto', 'REVIEW', 'section-removed'].includes(r.status))
  .map((r) => r.status === 'section-removed' ? `${r.tag}: seção obsoleta removida (sem mudança de contrato)`
    : `${r.tag}: ${r.entries} mudanças, ${r.breaking} breaking, ${r.endpointsAdded} endpoints novos, ${r.removals} remoções${r.denyHits.length ? `, denylist: ${r.denyHits.length}` : ''}`).join('\n');
const updatedTags = [...changedTags].sort(newestFirst);
console.log(JSON.stringify({ changed, gate, sections: updatedTags, report }, null, 2));
if (process.env.GITHUB_OUTPUT) {
  const tags = updatedTags.join(' ');
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\ngate=${gate}\ntags=${tags}\nsummary<<EOS\n${summary}\nEOS\n`);
}
