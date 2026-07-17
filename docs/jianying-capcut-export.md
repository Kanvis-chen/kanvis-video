# Jianying / CapCut Export Strategy

The safest position is:

```text
Kanvis Cut prepares editable project assets.
Jianying/CapCut remains the final manual editing surface when needed.
```

Do not promise perfect draft import until the target format is tested against current app versions.

## Level 1: stable asset package

This is the first supported export target:

```text
export-package/
├── project.md
├── project.json
├── subtitles.srt
├── cover.png
├── assets/
└── import-guide.md
```

This package is low risk because creators can import or copy assets into their existing editor.

## Level 2: assisted draft package

Later versions may generate an editor draft directory when the format is understood and version-tested.

This layer should be treated as experimental because editor draft formats can change without notice.

## Level 3: commercial adapter

The paid workbench may include a tested adapter for specific app versions:

- tested Jianying/CapCut version;
- supported media tracks;
- supported caption export;
- supported cover export;
- known limitations;
- recovery instructions.

Keep this adapter out of the open-source core until it is stable and safe to maintain publicly.

