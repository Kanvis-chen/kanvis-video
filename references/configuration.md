# Configuration

Use `assets/kanvis-cut.config.example.json` as the portable configuration contract. `assets/avatar-video.config.example.json` remains as an avatar-mode example.

## Required choices

- `production.presenter_mode`: `human`, `none`, or `avatar`.
- `runtime.mode`: `auto`, `local`, `cloud`, `mock`, or `byo`.
- `publishing`: target platform, dimensions, FPS, and maximum duration.
- `human`: source footage and consent, required only in human mode.
- `avatar`: source type, provider adapter, asset ID, consent, and compositing mode, required only in avatar mode.
- `voice`: `original`, `tts`, or `clone` strategy plus provider settings.
- `effects`: shared effect switch and intensity.
- `workbench`: shared project format and workbench switch.
- `brand`: asset directory, palette, and font family.
- `cost`: paid-call policy and per-video ceiling.

Reject unknown aspect ratios when width and height disagree. Recommended presets are 1080×1920, 1920×1080, and 1080×1080.

## Secrets

Resolve secrets from environment variables. Suggested names:

- `HEYGEN_API_KEY`
- `ELEVENLABS_API_KEY`

Do not place secrets, consent recordings, raw voice training data, or private avatar source footage in an open-source repository. Commit only IDs, example placeholders, and documentation.

## Per-channel overrides

Keep stable channel identity in one configuration. Override only article-specific fields inside the job directory. Do not duplicate the whole skill for every channel.

## Runtime fallback

Keep `allow_cloud_fallback` false when the user has not explicitly accepted paid cloud execution. `auto` must choose `mock` instead of silently calling a cloud provider when local hardware is insufficient.
