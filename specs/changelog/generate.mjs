#!/usr/bin/env node
// Builds one changelog post per zrobank-services release from the OpenAPI
// contract diff between consecutive releases of a public API. Specs live in
// specs/<api>/releases/<tag>/<asset> (mirrored by the zrobank-services release
// workflow, generated with APP_ENV=production), so a post can only describe what
// production exposes. Posts land in changelog/<api>/ and are served by a
// docusaurus blog instance (listing, per-release pages, tags, RSS).
//
//   node specs/changelog/generate.mjs [--api baas] [--tag vX.Y.Z] [--force]
//                                     [--specs-dir <dir>] [--posts-dir <dir>] [--oasdiff <bin>]
//
// Exit code 0 whenever posts were written; the JSON report on stdout and the
// GITHUB_OUTPUT keys (changed, gate, tags) drive the workflow decision.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const FLOOD = 5;

export const APIS = {
  baas: {
    label: 'BaaS API',
    asset: 'api-baas.openapi.json',
    releasesDir: 'specs/baas/releases',
    postsDir: 'changelog/baas',
  },
};

const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  if (i === -1) return undefined;
  const next = argv[i + 1];
  return next === undefined || next.startsWith('--') ? true : next;
};
const str = (name) => (typeof flag(name) === 'string' ? flag(name) : undefined);

const apiKey = str('api') || 'baas';
const api = APIS[apiKey];
if (!api) throw new Error(`unknown api "${apiKey}"; known: ${Object.keys(APIS).join(', ')}`);
const onlyTag = str('tag');
const force = flag('force') === true;
const specsDir = str('specs-dir') ? path.resolve(str('specs-dir')) : path.join(ROOT, api.releasesDir);
const postsDir = str('posts-dir') ? path.resolve(str('posts-dir')) : path.join(ROOT, api.postsDir);
const oasdiffBin = str('oasdiff') || 'oasdiff';

const isReleaseTag = (t) => /^v\d+\.\d+\.\d+$/.test(t);
const compareTags = (a, b) => {
  const pa = a.slice(1).split('.').map(Number);
  const pb = b.slice(1).split('.').map(Number);
  return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2] || a.localeCompare(b);
};
// Releases are ordered by publish time first: patch tags were not always cut in numeric order.
const compareReleases = (a, b) => (a.publishedAt || '').localeCompare(b.publishedAt || '') || compareTags(a.tag, b.tag);

function listReleases() {
  const indexPath = path.join(specsDir, 'index.json');
  const index = fs.existsSync(indexPath) ? JSON.parse(fs.readFileSync(indexPath, 'utf8')) : {};
  return fs.readdirSync(specsDir)
    .filter((tag) => isReleaseTag(tag) && fs.existsSync(path.join(specsDir, tag, api.asset)))
    .map((tag) => ({ tag, publishedAt: index[tag]?.publishedAt || '' }))
    .sort(compareReleases);
}
const specPath = (tag) => path.join(specsDir, tag, api.asset);
const loadSpec = (tag) => JSON.parse(fs.readFileSync(specPath(tag), 'utf8'));

const severityFile = path.join(HERE, 'severity.txt');
const deny = fs.readFileSync(path.join(HERE, 'denylist.txt'), 'utf8').split('\n').map((s) => s.trim()).filter(Boolean)
  .map((s) => new RegExp(`(^|[^A-Za-z])${s}([^A-Za-z]|$)`, 'i'));

function diff(baseTag, headTag, headSpec) {
  const out = execFileSync(oasdiffBin, ['changelog', specPath(baseTag), specPath(headTag), '-f', 'json', '--severity-levels', severityFile], { encoding: 'utf8', maxBuffer: 64e6 });
  return JSON.parse(out || '[]').filter((c) => c.section === 'paths').filter((c) => keep(c, headSpec));
}

function keep(c, headSpec) {
  if (c.id === 'response-media-type-removed' && /status '[45]\d\d'/.test(c.text)) return false;
  const op = headSpec.paths?.[c.path]?.[c.operation?.toLowerCase()];
  // Deprecated operations are hidden from the reference pages; only their deprecation/removal is news.
  if (op?.deprecated && !/deprecat|removed/.test(c.id)) return false;
  return true;
}

// ---- integrator-facing wording ------------------------------------------------

const code = (s) => `\`${s}\``;
const field = (p) => code(
  p.replace(/(?:oneOf|allOf|anyOf)\[#\/components\/schemas\/([^\]]+)\]\/?/g, '$1/')
    .replace(/\/items(?=\/|$)/g, '[]').replace(/^\/|\/$/g, '').replace(/\//g, '.'),
);
const Q = "'([^']+)'";
const WORDING = [
  [/^added the new Q enum value to the Q response property for the response status Q$/, (m) => `New value ${code(m[1])} in response field ${field(m[2])} (${m[3]})`],
  [/^removed the Q enum value from the Q response property for the response status Q$/, (m) => `Value ${code(m[1])} removed from response field ${field(m[2])} (${m[3]})`],
  [/^added the new Q enum value to the request property Q$/, (m) => `New value ${code(m[1])} accepted in request field ${field(m[2])}`],
  [/^removed the enum value Q of the request property Q$/, (m) => `Value ${code(m[1])} no longer accepted in request field ${field(m[2])}`],
  [/^added the new enum value Q to the Q request parameter Q$/, (m) => `New value ${code(m[1])} accepted in ${m[2]} parameter ${code(m[3])}`],
  [/^removed the enum value Q from the Q request parameter Q$/, (m) => `Value ${code(m[1])} no longer accepted in ${m[2]} parameter ${code(m[3])}`],
  [/^added the required property Q to the response with the Q status$/, (m) => `New field ${field(m[1])} in response (${m[2]}), always present`],
  [/^added the optional property Q to the response with the Q status$/, (m) => `New field ${field(m[1])} in response (${m[2]})`],
  [/^removed the (?:optional|required) property Q from the response with the Q status$/, (m) => `Field ${field(m[1])} removed from response (${m[2]})`],
  [/^the response property Q became required for the status Q$/, (m) => `Response field ${field(m[1])} is now always present (${m[2]})`],
  [/^added the new optional request property Q$/, (m) => `New optional request field ${field(m[1])}`],
  [/^added the new required request property Q$/, (m) => `New required request field ${field(m[1])}`],
  [/^the request property Q became optional$/, (m) => `Request field ${field(m[1])} is now optional`],
  [/^the request property Q became required$/, (m) => `Request field ${field(m[1])} is now required`],
  [/^the Q request property type\/format changed from Q\/Q to Q\/Q$/, (m) => `Request field ${field(m[1])} type changed from ${code(fmt(m[2], m[3]))} to ${code(fmt(m[4], m[5]))}`],
  [/^added the new optional Q request parameter Q$/, (m) => `New optional ${m[1]} parameter ${code(m[2])}`],
  [/^deleted the Q request parameter Q$/, (m) => `${cap(m[1])} parameter ${code(m[2])} removed`],
  [/^the Q request parameter Q was restricted to a list of enum values$/, (m) => `${cap(m[1])} parameter ${code(m[2])} now accepts only a fixed set of values`],
  [/^removed the media type Q for the response with the status Q$/, (m) => `Response (${m[2]}) no longer returns ${code(m[1])}`],
].map(([re, fn]) => [new RegExp(re.source.replaceAll('Q', Q)), fn]);
const fmt = (type, format) => (format ? `${type}/${format}` : type);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function wording(c) {
  for (const [re, fn] of WORDING) {
    const m = c.text.match(re);
    if (m) return fn(m);
  }
  return c.text.trim();
}

const endpoint = (c) => code(`${c.operation} ${c.path}`);
const bucketOf = (c) => {
  if (c.id === 'endpoint-added') return 'added';
  if (c.id === 'endpoint-deprecated') return 'deprecated';
  if (/^api-path-removed|^endpoint-removed/.test(c.id)) return 'removed';
  return c.level >= 3 ? 'breaking' : 'changed';
};

// Same enum flooding many values into one field reads better as one line.
const enumTarget = (c) => {
  if (!/enum-value-(added|removed)$/.test(c.id)) return null;
  const m = c.text.match(/the '([^']+)' response property/) || c.text.match(/request property '([^']+)'/) || c.text.match(/request parameter '([^']+)'/);
  return m ? m[1] : null;
};

function collapseFloods(entries) {
  const groups = new Map();
  for (const c of entries) {
    const target = enumTarget(c);
    const key = target ? `${c.operation} ${c.path} ${c.id} ${target}` : null;
    if (!key) { groups.set(Symbol(), [c]); continue; }
    (groups.get(key) || groups.set(key, []).get(key)).push(c);
  }
  const out = [];
  for (const cs of groups.values()) {
    if (cs.length <= FLOOD) { out.push(...cs); continue; }
    const first = cs[0];
    const target = enumTarget(first);
    const values = cs.map((c) => (c.text.match(/'([^']+)'/) || [])[1]);
    const verb = first.id.endsWith('removed') ? 'removed from' : 'added to';
    out.push({ ...first, wording: `${cs.length} values ${verb} enum ${field(target)} (${values.slice(0, 3).join(', ')}, …)` });
  }
  return out;
}

// Feature area from the operation tag: "Pix | Compliance | Infraction Notifications" → "Pix Infraction Notifications".
function opFeature(spec, c) {
  const tag = (spec?.paths?.[c.path]?.[c.operation.toLowerCase()]?.tags || [])[0] || 'Other';
  const parts = tag.split('|').map((t) => t.trim()).filter(Boolean);
  return parts.length > 1 ? `${parts[0]} ${parts.at(-1)}` : parts[0] || 'Other';
}

function opSummary(spec, c) {
  const op = spec?.paths?.[c.path]?.[c.operation.toLowerCase()];
  // Table cell: escape backslashes first, then pipes; collapse line breaks.
  return (op?.summary || (op?.tags || [])[0] || '').replace(/\\/g, '\\\\').replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ').trim();
}

function render(entries, { headSpec, baseSpec }) {
  const buckets = { breaking: [], removed: [], deprecated: [], added: [], changed: [] };
  for (const c of collapseFloods(entries)) buckets[bucketOf(c)].push(c);

  const lines = [];
  const grouped = (list) => {
    // One line per change, listing every endpoint it touches (v1/v2, list/detail).
    const byText = new Map();
    for (const c of list) {
      const text = `${c.level >= 2 && c.level < 3 ? '⚠️ ' : ''}${c.wording || wording(c)}`;
      (byText.get(text) || byText.set(text, []).get(text)).push(endpoint(c));
    }
    return [...byText.entries()].map(([text, eps]) => `- ${text} — ${[...new Set(eps)].join(', ')}`);
  };
  const sortedEndpoints = (list) => list.sort((a, b) => a.path.localeCompare(b.path) || a.operation.localeCompare(b.operation));
  const endpointTable = (list, spec) => [
    '| Endpoint | Description |',
    '| --- | --- |',
    ...sortedEndpoints(list).map((c) => `| ${endpoint(c)} | ${opSummary(spec, c)} |`),
  ];
  // New endpoints read as product features: grouped by tag, biggest group first.
  const features = [...buckets.added.reduce((m, c) => {
    const f = opFeature(headSpec, c);
    return m.set(f, [...(m.get(f) || []), c]);
  }, new Map()).entries()].sort(([, a], [, b]) => b.length - a.length);
  const featureTables = features.length > 1
    ? features.flatMap(([name, list]) => [`### ${name}`, '', ...endpointTable(list, headSpec), ''])
    : [...endpointTable(buckets.added, headSpec), ''];

  if (buckets.breaking.length) lines.push('## Breaking changes', '', ...grouped(buckets.breaking), '');
  if (buckets.removed.length) lines.push('## Removed endpoints', '', ...endpointTable(buckets.removed, baseSpec), '');
  if (buckets.deprecated.length) lines.push('## Deprecated endpoints', '', ...endpointTable(buckets.deprecated, headSpec), '');
  if (buckets.added.length) lines.push('## New endpoints', '', ...featureTables);
  if (buckets.changed.length) lines.push('## Changed', '', ...grouped(buckets.changed), '');
  if (entries.some((c) => c.level === 2)) lines.push('_⚠️ marks changes that may require action on your side, such as new enum values in responses._', '');

  const plural = (n, word) => `${n} ${word}${n > 1 ? 's' : ''}`;
  const changedEndpoints = new Set([...buckets.breaking, ...buckets.changed].map(endpoint)).size;
  const shown = features.slice(0, 4).map(([name]) => name);
  if (features.length > 4) shown.push(`${plural(features.length - 4, 'more area')}`);
  const parts = [
    buckets.breaking.length && plural(buckets.breaking.length, 'breaking change'),
    features.length && `New: ${shown.join(', ')} (${plural(buckets.added.length, 'endpoint')})`,
    buckets.removed.length && `${plural(buckets.removed.length, 'endpoint')} removed`,
    buckets.deprecated.length && `${plural(buckets.deprecated.length, 'endpoint')} deprecated`,
    changedEndpoints && plural(changedEndpoints, 'changed endpoint'),
    !buckets.breaking.length && 'No breaking changes',
  ].filter(Boolean);
  const tags = Object.entries(buckets).filter(([, l]) => l.length).map(([k]) => ({ breaking: 'breaking', removed: 'removed', deprecated: 'deprecated', added: 'new-endpoints', changed: 'changes' })[k]);
  return { body: lines.join('\n').trim(), summary: parts.join(' · '), tags, buckets };
}

function post(release, rendered) {
  return [
    '---',
    `title: ${release.tag}`,
    `slug: ${release.tag}`,
    `date: ${release.publishedAt.slice(0, 10)}`,
    `tags: [${rendered.tags.join(', ')}]`,
    `description: "${rendered.summary.replace(/"/g, "'")}"`,
    '---',
    '',
    `${rendered.summary}.`,
    '',
    '<!-- truncate -->',
    '',
    rendered.body,
    '',
  ].join('\n');
}

const postFile = (release) => path.join(postsDir, `${release.publishedAt.slice(0, 10) || '0000-00-00'}-${release.tag}.md`);
const existingPost = (tag) => fs.existsSync(postsDir) && fs.readdirSync(postsDir).find((f) => f.endsWith(`-${tag}.md`));

// ---- main ---------------------------------------------------------------------

fs.mkdirSync(postsDir, { recursive: true });
const releases = listReleases();
const report = [];
const written = [];
const removedPosts = [];
let previous = null;
for (const release of releases) {
  if (!previous) { previous = release; report.push({ tag: release.tag, status: 'baseline' }); continue; }
  const inScope = onlyTag ? release.tag === onlyTag : true;
  const existing = existingPost(release.tag);
  if (!inScope || (existing && !force)) { previous = release; if (inScope) report.push({ tag: release.tag, status: 'exists' }); continue; }

  const headSpec = loadSpec(release.tag);
  const baseSpec = loadSpec(previous.tag);
  const entries = diff(previous.tag, release.tag, headSpec);
  if (entries.length === 0) {
    if (existing) { fs.rmSync(path.join(postsDir, existing)); removedPosts.push(release.tag); }
    report.push({ tag: release.tag, from: previous.tag, status: existing ? 'post-removed' : 'no-contract-change' });
    previous = release;
    continue;
  }
  const rendered = render(entries, { headSpec, baseSpec });
  const content = post(release, rendered);
  const denyHits = content.split('\n').filter((l) => deny.some((re) => re.test(l)));
  const gated = rendered.buckets.breaking.length + rendered.buckets.removed.length + rendered.buckets.deprecated.length > 0 || denyHits.length > 0;
  const target = postFile(release);
  const unchanged = existing && fs.readFileSync(path.join(postsDir, existing), 'utf8') === content && path.join(postsDir, existing) === target;
  if (!unchanged) {
    const require = createRequire(path.join(ROOT, 'package.json'));
    require('@mdx-js/mdx').sync(content.replace(/^---[\s\S]*?---\n/, ''));
    if (existing && path.join(postsDir, existing) !== target) fs.rmSync(path.join(postsDir, existing));
    fs.writeFileSync(target, content);
    written.push(release.tag);
  }
  report.push({
    tag: release.tag, from: previous.tag, status: gated ? 'REVIEW' : 'auto', changed: !unchanged, summary: rendered.summary,
    entries: entries.length, breaking: rendered.buckets.breaking.length, endpointsAdded: rendered.buckets.added.length,
    removals: rendered.buckets.removed.length + rendered.buckets.deprecated.length, denyHits: denyHits.map((l) => l.slice(0, 120)),
  });
  previous = release;
}

const changed = written.length + removedPosts.length > 0;
const gate = report.some((r) => r.status === 'REVIEW' && r.changed);
const touched = [...written, ...removedPosts];
const summary = report.filter((r) => r.changed || r.status === 'post-removed')
  .map((r) => r.status === 'post-removed' ? `${r.tag}: post removido (sem mudança de contrato)` : `${r.tag}: ${r.summary}${r.denyHits.length ? ` · denylist: ${r.denyHits.length}` : ''}`).join('\n');
console.log(JSON.stringify({ api: apiKey, changed, gate, sections: touched, report }, null, 2));
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\ngate=${gate}\ntags=${touched.join(' ')}\nsummary<<EOS\n${summary}\nEOS\n`);
}
