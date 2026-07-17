# Good First Issues

Create these issues after the repository is public. They are designed to attract useful contributors without turning the project into a generic talking-head generator.

## Issue 1: Add one platform preset for Chinese vertical video

Labels:

```text
good first issue
help wanted
platform-preset
```

Body:

```markdown
Add a privacy-safe platform preset for one Chinese vertical-video publishing target.

The preset should define:

- aspect ratio;
- safe margins;
- caption-safe area;
- recommended maximum duration;
- cover image notes;
- any platform-specific disclosure or QA reminders.

Do not add provider credentials, platform cookies, private account state, or real client assets.

Useful files:

- `references/configuration.md`
- `references/acceptance-criteria.md`
- `assets/avatar-video.config.example.json`
```

## Issue 2: Add a scene-grammar example for one article beat

Labels:

```text
good first issue
help wanted
scene-grammar
```

Body:

```markdown
Add one example showing how an article paragraph becomes a semantic video beat.

The example should include:

- source paragraph, using fictional or public-domain text;
- spoken adaptation;
- selected scene role;
- why the avatar should be full-screen, PIP, or absent;
- expected layout notes.

Keep the focus on article direction, not provider APIs.

Useful files:

- `references/scene-grammar.md`
- `examples/knowledge-video/scene-plan.json`
- `examples/knowledge-video/voiceover.md`
```

## Issue 3: Add a mock provider-adapter note

Labels:

```text
good first issue
help wanted
provider-adapter
```

Body:

```markdown
Document a mock provider adapter for local or fake voice/avatar generation.

The goal is to help contributors test the orchestration flow without paid network calls.

The note should cover:

- input contract;
- output contract;
- job ID or cache behavior;
- failure behavior;
- cost reporting format;
- how to avoid paid calls in CI.

Do not include real provider keys, account screenshots, signed URLs, or reverse-engineered private APIs.

Useful files:

- `references/providers.md`
- `assets/avatar-video.config.example.json`
- `SKILL.md`
```

