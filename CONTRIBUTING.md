# Contributing

Thanks for improving Kanvis Video.

## Before opening a change

1. Keep `SKILL.md` focused on decisions and workflow. Put provider-specific facts in `references/`.
2. Do not commit API keys, authorization headers, signed URLs, private portraits, voice samples, client videos, or real provider job state.
3. Use only fictional or explicitly redistributable assets in examples and tests.
4. Preserve source fidelity, consent, cost controls, preview approval, and release gates.

## Development

Requirements: Node.js 20+, plus `ffmpeg` and `ffprobe` for the media QA test.

```bash
npm ci
npm run check
```

The media test skips when FFmpeg is unavailable. Pull requests that change media validation should run it locally before submission.

## Good contribution areas

- provider adapters with documented retry, cache, cost, and secret handling;
- Chinese pronunciation resources and spoken-adaptation rules;
- scene grammar and platform-safe layout presets;
- deterministic QA checks and privacy-safe examples;
- documentation corrections backed by current official provider sources.

## Pull requests

Keep changes scoped. Explain the user-facing behavior, include tests for scripts, and state whether the change can trigger paid network actions. Provider integrations must never run paid calls in CI.
