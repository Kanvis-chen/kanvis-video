#!/usr/bin/env node
import fs from 'node:fs';

const file = process.argv[2];
if (!file || !fs.existsSync(file)) {
  console.error('Usage: node validate-scene-plan.mjs <scene-plan.json>');
  process.exit(2);
}

let plan;
try {
  plan = JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
} catch (error) {
  console.error(`Invalid scene plan JSON: ${error.message}`);
  process.exit(1);
}
const errors = [];
const roles = new Set(['presenter-led', 'split-layout', 'content-led', 'evidence-fullscreen']);
if (plan.version !== 1) errors.push('version must be 1');
if (!Array.isArray(plan.scenes) || plan.scenes.length === 0) errors.push('scenes must be a non-empty array');

const ids = new Set();
for (const [index, scene] of (plan.scenes || []).entries()) {
  const at = `scenes[${index}]`;
  for (const key of ['id', 'purpose', 'voiceover', 'visual_role', 'graphic_type', 'avatar_layout']) {
    if (typeof scene[key] !== 'string' || !scene[key].trim()) errors.push(`${at}.${key} is required`);
  }
  if (typeof scene.id === 'string' && scene.id.trim()) {
    if (ids.has(scene.id)) errors.push(`${at}.id is duplicated`);
    ids.add(scene.id);
  }
  if (scene.visual_role && !roles.has(scene.visual_role)) errors.push(`${at}.visual_role is invalid`);
  if (!Array.isArray(scene.source_refs) || scene.source_refs.length === 0) errors.push(`${at}.source_refs must identify source support`);
  if (!Number.isFinite(scene.estimated_seconds) || scene.estimated_seconds <= 0) errors.push(`${at}.estimated_seconds must be positive`);
  if (String(scene.voiceover || '').includes('REPLACE_ME')) errors.push(`${at}.voiceover contains a placeholder`);
}

const total = (plan.scenes || []).reduce((sum, scene) => sum + (Number(scene.estimated_seconds) || 0), 0);
if (!Number.isFinite(plan.target_duration_seconds) || plan.target_duration_seconds <= 0) {
  errors.push('target_duration_seconds must be a positive number');
}
if (Number.isFinite(plan.target_duration_seconds) && total > plan.target_duration_seconds * 1.15) {
  errors.push(`estimated scene duration ${total}s exceeds target by more than 15%`);
}

if (errors.length) {
  console.error(errors.map((e) => `- ${e}`).join('\n'));
  process.exit(1);
}
console.log(`OK: ${plan.scenes.length} scenes, estimated ${total.toFixed(1)}s`);
