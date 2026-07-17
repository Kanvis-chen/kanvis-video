# Three Production Modes

One Kanvis Cut project uses one shared content, scene, effect, cover, QA, and export pipeline. The presenter source is the variable.

## Human enhancement

```yaml
production:
  presenter_mode: human
```

Use recorded presenter footage as the source of truth. Keep the original performance and add captions, information graphics, effects, cover assets, and release QA.

Required checks:

- footage belongs to the user or is authorized;
- the selected voice strategy matches the recording;
- captions and graphics do not cover the face;
- edits do not misrepresent what the presenter said.

## Faceless visual

```yaml
production:
  presenter_mode: none
```

Use narration, typography, diagrams, screenshots, licensed footage, and motion graphics. This is the default privacy-safe and low-hardware demo mode.

It must remain useful without a paid avatar provider.

## Avatar presenter

```yaml
production:
  presenter_mode: avatar
```

Avatar mode has two transparent source types:

```yaml
avatar:
  source_type: generated_avatar
```

or:

```yaml
avatar:
  source_type: performance_lipsync
```

`performance_lipsync` means a real authorized performance is retained while AI changes voice and/or lip motion. Do not describe it as a fully generated avatar. Preserve this disclosure in demos and release metadata.

## Shared workbench

The workbench is not a fourth production mode. It is the common interface for all three modes:

- inspect scenes;
- edit narration and captions;
- adjust effect parameters;
- generate cover directions;
- run QA;
- export project assets.

