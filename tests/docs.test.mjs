import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function markdownFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...markdownFiles(full));
    if (entry.isFile() && entry.name.endsWith('.md')) files.push(full);
  }
  return files;
}

test('local Markdown links resolve to repository files', () => {
  const missing = [];
  for (const file of markdownFiles(root)) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].trim().split(/\s+/)[0];
      if (!target || target.startsWith('#') || target.startsWith('<') || /^[a-z]+:/i.test(target)) continue;
      const withoutAnchor = target.split('#')[0];
      if (!withoutAnchor) continue;
      const resolved = path.resolve(path.dirname(file), decodeURIComponent(withoutAnchor));
      if (!fs.existsSync(resolved)) missing.push(`${path.relative(root, file)} -> ${target}`);
    }
  }
  assert.deepEqual(missing, []);
});
