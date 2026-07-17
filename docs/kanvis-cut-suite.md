# Kanvis Cut Suite Direction

Kanvis Cut is the public project name for this open-source content-to-video system. `article-to-avatar-video` is the first bundled workflow.

The long-term shape is a small skill suite, not one oversized prompt and not a closed editor:

```text
Kanvis Cut
├── article-to-avatar-video   # article/script -> directed video project
├── cut-project-protocol      # shared project format and validation rules
├── subtitle-director         # caption line breaks, emphasis, platform rhythm
├── effect-director           # transitions, emphasis, camera motion, visual beats
├── cover-director            # cover title, layout, image prompt, click promise
└── export-checker            # release readiness and handoff checks
```

## Why start with one skill?

The public release starts with the `article-to-avatar-video` workflow because it proves the hardest part:

- preserve a Chinese long-form source;
- rewrite it for spoken delivery;
- turn meaning into scenes instead of reading paragraphs;
- keep avatar, voice, cost, consent, rendering, and QA behind explicit gates.

The other skills should grow from real usage, issues, and examples. They should not be split out until the project has repeated cases that justify stable contracts.

## Router model

DBS and g-stack use a router pattern: one visible entry point routes to smaller specialist skills. Kanvis Cut should follow the same idea when the suite becomes multi-skill.

Suggested public entry:

```text
/kanvis-cut
```

Routing examples:

| User request | Route |
|---|---|
| "Turn this article into a video project" | `article-to-avatar-video` |
| "Check whether this project file is valid" | `cut-project-protocol` |
| "Make the captions punchier for Xiaohongshu" | `subtitle-director` |
| "Add motion and transitions to scene 3" | `effect-director` |
| "Generate a cover title and image prompt" | `cover-director` |
| "Can this be released or exported?" | `export-checker` |

Keep the external project name focused on `Kanvis Cut`. Add the router command only after at least two more workflows have real examples and tests.

## Naming

Use these names consistently:

- `Kanvis Cut`: the open-source project and public brand.
- `Article to Avatar Video`: the first workflow inside Kanvis Cut.
- `Kanvis Cut Skills`: the future workflow suite.
- `Kanvis Video Workbench`: the open-source basic visual editing workbench.
- `Kanvis Business Skills`: the future higher-level business skill ecosystem.

This keeps the public project from trapping the creator in a narrow "video tool" identity. The video skill is one production module inside a larger business system.
