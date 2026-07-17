# Provider Adapters

Treat providers as replaceable adapters. Store inputs, remote job IDs, status, outputs, billable duration, and reported cost in `work/provider-jobs.json`.

## Avatar adapter contract

An avatar adapter must accept final audio or narration plus an authorized avatar ID, then return a local video file and metadata. Prefer audio-driven generation so the final voice controls timing. Request transparent output when supported; otherwise use a solid chroma background and key it during composition.

Recommended production starting point: HeyGen custom avatar or photo avatar API. Local talking-head models may be added as a cost-saving adapter, but do not make them the default until they pass the same visual acceptance tests.

## Voice adapter contract

A voice adapter must accept final narration, pronunciation overrides, language, speed, and an authorized voice ID. It must return local audio plus sentence or word timings when available.

Start by auditioning the target Chinese voice in HeyGen, ElevenLabs, MiniMax, or the local CosyVoice adapter. Select one provider per channel for consistency. Do not switch voices automatically on transient failure.

## Local CosyVoice 3.0 adapter

Use this adapter when `paid_calls` is `off` or the user wants a local/free voice clone. Read `references/local-cosyvoice.md` before running it.

Requirements:

- authorized reference recording from the user;
- 16–30 seconds of clean prompt audio at 24 kHz mono;
- prompt text that matches the prompt audio;
- CosyVoice 3.0 model directory and Python environment configured outside the skill package.

Known constraints:

- CPU inference works but is slow; prefer CUDA PyTorch when available.
- CosyVoice 3.0 prompt text should include the instruction prefix `You are a helpful assistant.<|endofprompt|>`.
- The prompt audio must be 30 seconds or shorter.
- This adapter clones voice only; use HeyGen or a local lip-sync/avatar adapter for true mouth-synced avatar footage.

## Retry and cache policy

- Generate a content hash from provider, asset ID, normalized input, and settings.
- Reuse a completed output with the same hash.
- Query an existing job before retrying.
- Use exponential polling with a maximum wait.
- Record provider error bodies without recording API keys.
- Stop when the configured cost ceiling would be exceeded.
