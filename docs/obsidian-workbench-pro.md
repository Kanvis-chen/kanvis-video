# Obsidian Workbench Pro

`Kanvis Cut Workbench Pro` is the recommended paid product that can sit above this open-source skill.

It should be positioned as a project workbench, not as a full replacement for Jianying, CapCut, Premiere, or ChatCut.

## First useful screen

```text
Kanvis Cut Workbench
├── left: project list and templates
├── center: scene cards and project structure
├── right: Agent actions and parameters
└── bottom: cover, export, and release-check results
```

The first version should focus on scene-level editing:

- project list;
- scene list;
- voiceover text editing;
- caption editing;
- effect parameter editing;
- cover title and prompt generation;
- release check;
- export project JSON/Markdown.

Avoid building a full timeline editor in v1. The fastest useful product is a visual project workbench with Agent buttons.

## One-click Agent actions

The paid workbench can expose buttons such as:

- Generate cover;
- Optimize captions;
- Adjust effects;
- Check release readiness;
- Export project package;
- Prepare Jianying/CapCut import assets.

The plugin can implement lightweight runner behavior inside the Obsidian plugin:

```text
Obsidian button
-> read project Markdown/JSON
-> call model/API or local runner
-> write result files
-> refresh workbench panel
```

For heavy work such as batch rendering, avatar generation queues, or draft-package generation, use a background runner later.

## Course packaging

The paid course or kit can include:

- Obsidian workbench installation;
- example project pack;
- cover generation workflow;
- caption/effect adjustment workflow;
- export workflow;
- business use cases;
- troubleshooting;
- service delivery examples.

Do not market the paid product as "paying for the open-source skill." Market it as the complete workbench and implementation path around the open skill.

