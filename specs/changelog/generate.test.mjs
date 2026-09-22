import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const oasdiff = process.env.OASDIFF_BIN || 'oasdiff';
const ok = { responses: { 200: { description: 'OK' } } };
const op = (summary, extra = {}) => ({ summary, tags: ['Test'], ...ok, ...extra });
const spec = (paths) => ({ openapi: '3.0.3', info: { title: 'Test', version: '1.0' }, paths });
const stable = spec({ '/keep': { get: op('Keep things') } });
const withEndpoint = spec({ ...stable.paths, '/new': { get: op('List new things') } });
const enumResponse = (values) => spec({
  '/keep': { get: { ...op('Keep things'), responses: { 200: { description: 'OK', content: { 'application/json': { schema: { type: 'object', properties: { data: { type: 'array', items: { type: 'object', properties: { type: { type: 'string', enum: values } } } } } } } } } } } },
});

function fixture(t, releases) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'baas-changelog-test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const specs = path.join(dir, 'releases');
  const posts = path.join(dir, 'posts');
  const index = {};
  for (const [tag, publishedAt, data] of releases) {
    fs.mkdirSync(path.join(specs, tag), { recursive: true });
    fs.writeFileSync(path.join(specs, tag, 'api-baas.openapi.json'), JSON.stringify(data));
    index[tag] = { publishedAt, apps: ['api-baas'] };
  }
  fs.writeFileSync(path.join(specs, 'index.json'), JSON.stringify(index));
  return {
    posts,
    run(...args) {
      const outputs = path.join(dir, 'outputs');
      fs.writeFileSync(outputs, '');
      const report = JSON.parse(execFileSync(process.execPath,
        [path.join(here, 'generate.mjs'), '--specs-dir', specs, '--posts-dir', posts, '--oasdiff', oasdiff, ...args],
        { cwd: root, encoding: 'utf8', env: { ...process.env, GITHUB_OUTPUT: outputs } }));
      const files = fs.existsSync(posts) ? fs.readdirSync(posts).sort() : [];
      const content = Object.fromEntries(files.map((f) => [f, fs.readFileSync(path.join(posts, f), 'utf8')]));
      return { ...report, files, content, outputs: fs.readFileSync(outputs, 'utf8') };
    },
  };
}

test('new endpoints become a table with the spec summary, auto-published, idempotent', (t) => {
  const f = fixture(t, [['v1.84.0', '2026-09-20T08:00:00Z', stable], ['v1.84.1', '2026-09-21T08:00:00Z', withEndpoint]]);
  const first = f.run();
  assert.deepEqual(first.files, ['2026-09-21-v1.84.1.md']);
  const post = first.content['2026-09-21-v1.84.1.md'];
  assert.match(post, /^---\ntitle: v1\.84\.1\nslug: v1\.84\.1\ndate: 2026-09-21\ntags: \[new-endpoints\]\n---/);
  assert.match(post, /No breaking changes · 1 new endpoint\.\n\n<!-- truncate -->/);
  assert.match(post, /## New endpoints\n\n\| Endpoint \| Description \|\n\| --- \| --- \|\n\| `GET \/new` \| List new things \|/);
  assert.equal(first.gate, false);
  assert.match(first.outputs, /changed=true\ngate=false\ntags=v1\.84\.1/);
  for (const args of [[], ['--force', '--tag', 'v1.84.1']]) {
    const again = f.run(...args);
    assert.equal(again.changed, false, JSON.stringify(args));
    assert.equal(again.content['2026-09-21-v1.84.1.md'], post);
  }
});

for (const deprecated of [false, true]) {
  test(`removed endpoint lands in "Removed endpoints" and requires review (was deprecated: ${deprecated})`, (t) => {
    const before = spec({ ...stable.paths, '/gone': { delete: op('Delete gone', { deprecated }) } });
    const f = fixture(t, [['v1.84.0', '2026-09-20T08:00:00Z', before], ['v1.84.1', '2026-09-21T08:00:00Z', stable]]);
    const result = f.run();
    assert.equal(result.gate, true);
    const post = result.content['2026-09-21-v1.84.1.md'];
    assert.match(post, /## Removed endpoints\n\n\| Endpoint \| Description \|\n\| --- \| --- \|\n\| `DELETE \/gone` \| Delete gone \|/);
    assert.match(post, /1 endpoint removed/);
    assert.match(post, /tags: \[removed\]/);
  });
}

test('response enum additions are reworded, flagged and grouped across endpoints', (t) => {
  const base = enumResponse(['A']);
  const head = enumResponse(['A', 'B']);
  head.paths['/other'] = { get: { ...head.paths['/keep'].get, summary: 'Other' } };
  base.paths['/other'] = { get: { ...base.paths['/keep'].get, summary: 'Other' } };
  const f = fixture(t, [['v1.84.0', '2026-09-20T08:00:00Z', base], ['v1.84.1', '2026-09-21T08:00:00Z', head]]);
  const post = f.run().content['2026-09-21-v1.84.1.md'];
  assert.match(post, /## Changed\n\n- ⚠️ New value `B` in response field `data\[\]\.type` \(200\) — `GET \/keep`, `GET \/other`\n/);
  assert.match(post, /_⚠️ marks changes/);
  assert.doesNotMatch(post, /added the new 'B' enum value/);
});

test('a flood of enum values collapses into one line', (t) => {
  const values = Array.from({ length: 8 }, (_, i) => `V${i}`);
  const f = fixture(t, [['v1.84.0', '2026-09-20T08:00:00Z', enumResponse(['A'])], ['v1.84.1', '2026-09-21T08:00:00Z', enumResponse(['A', ...values])]]);
  const post = f.run().content['2026-09-21-v1.84.1.md'];
  assert.match(post, /- ⚠️ 8 values added to enum `data\[\]\.type` \(V0, V1, V2, …\) — `GET \/keep`/);
});

test('force removes a post whose corrected specs show no contract change', (t) => {
  const f = fixture(t, [['v1.84.0', '2026-09-20T08:00:00Z', stable], ['v1.84.1', '2026-09-21T08:00:00Z', stable]]);
  fs.mkdirSync(f.posts, { recursive: true });
  fs.writeFileSync(path.join(f.posts, '2026-09-21-v1.84.1.md'), '---\ntitle: v1.84.1\n---\nstale\n');
  const result = f.run('--force', '--tag', 'v1.84.1');
  assert.equal(result.changed, true);
  assert.deepEqual(result.files, []);
  assert.match(result.outputs, /tags=v1\.84\.1/);
  assert.equal(f.run('--force', '--tag', 'v1.84.1').changed, false);
});

test('same-day releases pair by publication time', (t) => {
  const f = fixture(t, [
    ['v1.84.0', '2026-09-20T08:00:00Z', stable],
    ['v1.84.2', '2026-09-21T08:00:00Z', withEndpoint],
    ['v1.84.1', '2026-09-21T10:00:00Z', stable],
  ]);
  const result = f.run();
  const late = result.report.find((r) => r.tag === 'v1.84.1');
  assert.equal(late.from, 'v1.84.2');
  assert.match(result.content['2026-09-21-v1.84.1.md'], /## Removed endpoints[\s\S]*`GET \/new`/);
});

test('denylist terms require review even for compatible additions', (t) => {
  const provider = spec({ ...stable.paths, '/caf': { get: op('Provider check') } });
  const f = fixture(t, [['v1.84.0', '2026-09-20T08:00:00Z', stable], ['v1.84.1', '2026-09-21T08:00:00Z', provider]]);
  const result = f.run();
  assert.equal(result.gate, true);
  assert.equal(result.report[1].denyHits.length, 1);
});

test('a new required request field is a breaking change', (t) => {
  const body = (required) => spec({ '/keep': { post: { ...op('Create'), requestBody: { content: { 'application/json': { schema: { type: 'object', required, properties: { a: { type: 'string' }, b: { type: 'string' } } } } } } } } });
  const f = fixture(t, [['v1.84.0', '2026-09-20T08:00:00Z', body(['a'])], ['v1.84.1', '2026-09-21T08:00:00Z', body(['a', 'b'])]]);
  const result = f.run();
  const post = result.content['2026-09-21-v1.84.1.md'];
  assert.match(post, /1 breaking change/);
  assert.match(post, /## Breaking changes\n\n- Request field `b` is now required — `POST \/keep`/);
  assert.equal(result.gate, true);
});
