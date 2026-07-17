# Kanvis Video Workbench

An open-source basic visual video editing workbench for Agent-generated projects.

The workbench exists so users can inspect, correct, and lightly adjust generated projects. It is not the full commercial production backend.

## Features

- visual canvas with selectable, draggable, and resizable layers;
- basic multi-track timeline with seek, split, delete, and layer selection;
- text, position, size, opacity, timing, and effect parameter editing;
- live preview and rendered-output playback;
- undo/redo;
- local project and artifact storage;
- HyperFrames preview/render adapter;
- Codex and MCP embedded-app integration;
- three creation modes: faceless animation, avatar presenter, and real footage enhancement.

## Boundary

This open workbench intentionally stops at basic project inspection and adjustment. It does not include:

- customer project management;
- batch production queues;
- account, provider, billing, or publishing operations;
- private template packs or client assets;
- team delivery SOPs;
- commercial Jianying/CapCut draft-package adapters;
- hosted infrastructure or managed production service.

Those belong in implementation services or separate products once real demand and delivery evidence justify them.

## Development

Requirements:

- Node.js 22 or newer;
- pnpm 9;
- HyperFrames only when previewing or rendering a native composition.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm build
pnpm test
pnpm start
```

Open the URL printed by `pnpm start`. The included privacy-safe fixture provides a small editable project for local verification.

## Packages

```text
packages/core                    project and artifact contracts
packages/ui                      React editing interface
packages/server                  project, preview, and render service
packages/hyperframes-adapter     native engine integration
packages/digital-human-provider avatar provider boundary
packages/codex-client            Codex app-server client
packages/mcp-server              MCP tools and embedded app
```

## License

MIT. See `THIRD_PARTY_NOTICES.md` for dependency and reference notices.
