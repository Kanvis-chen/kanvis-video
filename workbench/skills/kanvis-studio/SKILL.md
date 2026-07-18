---
name: kanvis-studio
description: Open or resume the project-local Kanvis Studio workspace, inspect its status, and apply structured video editing operations. Use after a Kanvis Video workflow finishes, when the user asks to open Studio directly, or when scenes, text, captions, assets, timing, transforms, and rendered outputs need visual inspection or adjustment.
---

# Kanvis Studio

Use the Kanvis Studio interface and its internal VisualHyper MCP contracts instead of editing generated composition HTML directly. VisualHyper is an implementation detail; the public product name is Kanvis Studio.

## Choose the launch mode

- **Automatic handoff**: when Kanvis Video finishes and the current project already contains `visualhyper.artifact.json`, open that project without replacing its editable artifact.
- **Direct open**: resolve the user's requested project directory, or the most recent Kanvis project when the user does not provide one, then open it in Studio.
- **Flat output handoff**: when only an MP4 exists, register it as a flat video output. State clearly that already composited layers cannot be reconstructed.

## Open inside Codex

1. Resolve the user's active workspace as an absolute `projectDir`.
2. Call `open_visualhyper_panel` with that directory and `displayMode: "fullscreen"`.
3. The tool renders `ui://widget/visualhyper/editor.html` as a native Codex widget. Do not open a browser or navigate to a localhost URL.
4. Report the returned project file and that Kanvis Studio is embedded in the current Codex task.

Use `open_visualhyper_web_panel` only when the user explicitly requests the web fallback or the current host cannot render MCP Apps. Never silently replace the native widget with a browser window.

## Work with a project

- Call `create_visualhyper_project` only when no project exists or the user explicitly wants a new project.
- Call `get_visualhyper_project` before proposing edits that depend on current scene or selection state.
- Use `apply_visualhyper_operations` for changes. Include the current `baseRevision`; on a revision conflict, reload and rebase instead of overwriting newer work.
- Use `list_visualhyper_assets` to discover media. Never invent asset paths.
- The embedded UI calls these same tools through the Codex MCP host bridge. Keep `visualhyper.project.json` as the shared source of truth.

## Boundaries for this version

- This version provides the local project shell, declared artifact editor, rendered-output playback, and Codex integration. Do not claim that a flat MP4 recovers original layers or that Jianying/CapCut project export is already complete.
- Keep HyperFrames HTML as generated output. The editable source of truth is `visualhyper.project.json`.
- Do not transmit large local media as Base64 through MCP.
