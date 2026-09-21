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
const operation = { responses: { 200: { description: 'OK' } } };
const spec = (paths) => ({ openapi: '3.0.3', info: { title: 'Test', version: '1.0' }, paths });
const stable = spec({ '/keep': { get: operation } });
const withEndpoint = spec({ ...stable.paths, '/new': { get: operation } });

function fixture(t, releases, content = '# Changelog\n\nPublic API changes.\n') {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'baas-changelog-test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  fs.mkdirSync(path.join(dir, 'specs/changelog'), { recursive: true });
  for (const name of ['generate.mjs', 'severity.txt', 'denylist.txt']) {
    const source = name === 'generate.mjs' && process.env.GENERATOR_UNDER_TEST
      ? process.env.GENERATOR_UNDER_TEST : path.join(here, name);
    fs.copyFileSync(source, path.join(dir, 'specs/changelog', name));
  }
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(dir, 'node_modules'), 'dir');
  const out = path.join(dir, 'docs/baas/api-overview/changelog.md');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content);
  const releasesDir = path.join(dir, 'specs/baas/releases');
  const index = {};
  for (const [tag, publishedAt, data] of releases) {
    fs.mkdirSync(path.join(releasesDir, tag), { recursive: true });
    fs.writeFileSync(path.join(releasesDir, tag, 'api-baas.openapi.json'), JSON.stringify(data));
    index[tag] = { publishedAt, apps: ['api-baas'] };
  }
  fs.writeFileSync(path.join(releasesDir, 'index.json'), JSON.stringify(index));
  return {
    run(...args) {
      const outputs = path.join(dir, 'outputs');
      fs.writeFileSync(outputs, '');
      const report = JSON.parse(execFileSync(process.execPath,
        [path.join(dir, 'specs/changelog/generate.mjs'), '--oasdiff', oasdiff, ...args],
        { encoding: 'utf8', env: { ...process.env, GITHUB_OUTPUT: outputs } }));
      return { ...report, content: fs.readFileSync(out, 'utf8'), outputs: fs.readFileSync(outputs, 'utf8') };
    },
  };
}

for (const deprecated of [false, true]) {
  test(`endpoint removal requires editorial review (previously deprecated: ${deprecated})`, (t) => {
    const before = spec({ ...stable.paths, '/removed': { get: { ...operation, deprecated } } });
    const f = fixture(t, [
      ['v1.84.0', '2026-09-20T08:00:00Z', before],
      ['v1.84.1', '2026-09-21T08:00:00Z', stable],
    ]);
    const result = f.run();
    assert.equal(result.gate, true);
    assert.equal(result.report[1].removals, 1);
    assert.equal(result.report[1].status, 'REVIEW');
    assert.match(result.content, /endpoint removed/);
    assert.match(result.outputs, /gate=true/);
  });
}

test('compatible endpoint addition stays public and automatic; reruns including force are no-ops', (t) => {
  const f = fixture(t, [
    ['v1.84.0', '2026-09-20T08:00:00Z', stable],
    ['v1.84.1', '2026-09-21T08:00:00Z', withEndpoint],
  ]);
  const first = f.run();
  assert.equal(first.gate, false);
  assert.equal(first.changed, true);
  assert.match(first.content, /GET \/new/);
  for (const args of [[], ['--force', '--tag', 'v1.84.1']]) {
    const again = f.run(...args);
    assert.equal(again.content, first.content);
    assert.equal(again.changed, false);
    assert.match(again.outputs, /changed=false/);
  }
});

test('force persists deletion of a stale section when the corrected specs have no changes', (t) => {
  const f = fixture(t, [
    ['v1.84.0', '2026-09-20T08:00:00Z', stable],
    ['v1.84.1', '2026-09-21T08:00:00Z', stable],
  ], '# Changelog\n\nIntroduction stays.\n\n## v1.84.1 (2026-09-21)\n\nStale entry\n');
  const result = f.run('--force', '--tag', 'v1.84.1');
  assert.equal(result.changed, true);
  assert.doesNotMatch(result.content, /Stale entry|## v1.84.1/);
  assert.match(result.content, /Introduction stays/);
  assert.match(result.outputs, /tags=v1.84.1/);
  assert.equal(f.run('--force', '--tag', 'v1.84.1').changed, false);
});

test('regenerating an older release keeps chronological order and untouched editorial text', (t) => {
  const f = fixture(t, [
    ['v1.84.0', '2026-09-19T08:00:00Z', stable],
    ['v1.84.1', '2026-09-20T08:00:00Z', withEndpoint],
    ['v1.84.2', '2026-09-21T08:00:00Z', stable],
  ], '# Changelog\n\n## v1.84.2 (2026-09-21)\n\nReviewed text stays.\n\n## Migration notes\n\nManual migration guidance.\n\n## v1.84.1 (2026-09-20)\n\nOld rendering\n');
  const result = f.run('--force', '--tag', 'v1.84.1');
  assert.deepEqual([...result.content.matchAll(/^## (v\S+)/gm)].map((m) => m[1]), ['v1.84.2', 'v1.84.1']);
  assert.match(result.content, /Reviewed text stays/);
  assert.match(result.content, /## Migration notes\n\nManual migration guidance/);
  assert.doesNotMatch(result.content, /Old rendering/);
});

test('late backfill inserts an older section in place instead of above a newer release', (t) => {
  const f = fixture(t, [
    ['v1.84.0', '2026-09-19T08:00:00Z', stable],
    ['v1.84.1', '2026-09-20T08:00:00Z', withEndpoint],
    ['v1.84.2', '2026-09-21T08:00:00Z', stable],
  ], '# Changelog\n\n## v1.84.2 (2026-09-21)\n\nReviewed text stays.\n');
  const result = f.run();
  assert.deepEqual([...result.content.matchAll(/^## (v\S+)/gm)].map((m) => m[1]), ['v1.84.2', 'v1.84.1']);
  assert.match(result.content, /Reviewed text stays/);
});

test('same-day releases use publication time so a removed endpoint is not reported as added', (t) => {
  const f = fixture(t, [
    ['v1.84.0', '2026-09-20T08:00:00Z', stable],
    ['v1.84.2', '2026-09-21T08:00:00Z', withEndpoint],
    ['v1.84.1', '2026-09-21T10:00:00Z', stable],
  ]);
  const result = f.run();
  const removal = result.report.find((r) => r.tag === 'v1.84.1');
  assert.equal(removal.from, 'v1.84.2');
  assert.equal(removal.removals, 1);
  assert.deepEqual(result.sections, ['v1.84.1', 'v1.84.2']);
  assert.match(result.content, /## v1\.84\.1 \(2026-09-21\)[\s\S]*endpoint removed/);
});

test('existing provider terminology review rule remains unchanged', (t) => {
  const providerEndpoint = spec({ ...stable.paths, '/caf': { get: operation } });
  const f = fixture(t, [
    ['v1.84.0', '2026-09-20T08:00:00Z', stable],
    ['v1.84.1', '2026-09-21T08:00:00Z', providerEndpoint],
  ]);
  const result = f.run();
  assert.equal(result.gate, true);
  assert.equal(result.report[1].denyHits.length, 1);
  assert.match(result.content, /GET \/caf/);
});
