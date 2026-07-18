# Kanvis Video Naming and Studio Launch Modes

## Product hierarchy

```text
Kanvis System
├── Kanvis Content OS          # Obsidian content management
└── Kanvis Video               # open-source video capability layer
    ├── kanvis-article-to-video
    ├── future video Skills
    └── Kanvis Studio          # local visual workspace
```

The repository is named `kanvis-video`. It is broader than one Skill and narrower than the full Kanvis System.

`Kanvis Content OS` is not a suitable repository name because this repository does not own content management. `Kanvis Skill` is too generic because future non-video Skills also belong to Kanvis System. `Kanvis Cut` is retired because Studio covers creation, inspection, timeline editing, rendering, and future project export rather than only cutting.

## Public names

| Surface | Public name | Invocation or identifier |
|---|---|---|
| Repository | Kanvis Video | `kanvis-video` |
| First production Skill | Kanvis Article to Video | `$kanvis-article-to-video` |
| Local editor | Kanvis Studio | `$kanvis-studio` |
| Project contract | Kanvis Video Project | `kanvis-video-project` |

VisualHyper remains an internal engine and MCP contract name. It should not appear as a competing public product name.

## Launch mode A: automatic handoff

After the production Skill renders `output/video.mp4` and the quality gate passes:

1. preserve an existing `visualhyper.artifact.json` when available;
2. otherwise register the MP4 as a flat Studio artifact;
3. start or reuse the local Kanvis Studio service;
4. open the current project in the Studio editor view.

```bash
node scripts/open-studio.mjs \
  --project ./project \
  --video ./project/output/video.mp4
```

This behavior is controlled by `workbench.enabled` and `workbench.open_after_render` in `kanvis-video.config.json`.

## Launch mode B: direct open

Users can invoke `$kanvis-studio` and provide a project directory. When no directory is supplied, the Skill may offer the most recent valid Kanvis project rather than guessing from unrelated folders.

Native artifacts retain declared layers and editable parameters. MP4-only imports are flat outputs: they can be played, inspected, split, annotated, and extended, but cannot reconstruct layers already composited into the file.

## Migration from v0.2.x

- `Kanvis Cut` -> `Kanvis Video`
- `article-to-avatar-video` -> `kanvis-article-to-video`
- `Kanvis Video Workbench` -> `Kanvis Studio`
- `kanvis-cut.config.json` -> `kanvis-video.config.json`
- `kanvis-cut-project` -> `kanvis-video-project`

Renaming the GitHub repository from `article-to-avatar-video` to `kanvis-video` should preserve GitHub redirects for existing repository links. Release notes must still call out the Skill invocation and config-file changes because those are local breaking changes.
