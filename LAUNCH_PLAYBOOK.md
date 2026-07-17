# Launch Playbook

This file turns the release goal into operating rules: win attention on the project's own merits, avoid looking like a copy of any digital-human talking-head skill, and use public evidence instead of hype.

## Current public benchmark

As of 2026-07-17, the current public benchmark repo has 33 GitHub stars and 8 forks. Its README positions it as a Codex Skill for authorized digital-human talking-head videos using MiniMax voice cloning and HeyGen Image-to-Video.

Our release target is:

```text
First public milestone: 50 stars
30-day stretch milestone: 100 stars
Quality milestone: 5 real issues/discussions, 3 external use cases, 2 external PRs/examples
```

Do not optimize for stars alone. Stars are only useful when they come from people who understand the article-to-video problem.

## Non-copy positioning

Never describe this project as "a localized version of another digital-human repo" or "another digital-human production skill."

Use this positioning:

> An open-source Codex Skill and basic video workbench that turns long-form content into directed, release-gated video projects.

The durable difference:

| Area | This project must emphasize |
|---|---|
| Source | article-native input, source preservation, risk flags |
| Editorial work | spoken adaptation, not script-only generation |
| Direction | semantic scene planning and information graphics |
| Composition | avatar as presenter/PIP, not always full-screen |
| QA | release gates, visual review, media checks, consent, cost |
| Ecosystem | provider adapters are replaceable, not the product center |

## Things not to copy

Avoid mirroring a competitor's language, folder emphasis, and demo framing when a more accurate article-native framing exists.

Do not center the launch around:

- MiniMax + HeyGen provider pairing;
- "15-second preview" as the primary hook;
- portrait + voice + script as the main project layout;
- "talking-head production" as the category;
- provider job-state tracking as the main value proposition.

It is fine to keep consent, preview, cost, and job-safety gates because they are necessary safety practices. Present them as part of article-to-video release control, not as the main story.

## Launch assets that should outperform a generic talking-head skill

1. **Before/after video**
   - A: avatar reads an article paragraph.
   - B: the same article becomes narrated scenes with evidence, comparison, process, and presenter PIP.
   - Draft script: `docs/demo-video-script.md`.

2. **Scene-plan proof**
   - Show `scene-plan.json` and explain why each beat chooses comparison, process, quote, evidence, number, or PIP.

3. **Release-gate proof**
   - Show `quality-report.json`, `publish_ready`, visual review, and paid-call policy.

4. **Provider neutrality**
   - Show that HeyGen, MiniMax, ElevenLabs, local CosyVoice, and future adapters are replaceable edges, not the core product.

5. **Chinese creator specificity**
   - Use examples from Chinese long-form articles, WeChat posts, course scripts, and knowledge-base content.

Supporting docs:

- Launch posts: `docs/launch-copy.md`
- Good first issue drafts: `docs/good-first-issues.md`
- Social preview brief: `docs/social-preview-brief.md`
- Demo video script: `docs/demo-video-script.md`
- Non-copy positioning: `docs/positioning-vs-talking-head-skills.md`
- Star growth plan: `docs/star-growth-plan.md`
- Roadmap: `docs/roadmap.md`
- FAQ: `docs/faq.md`

## 7-day launch sequence

### Day 0: Repository public

- Replace repository links with `npm run release:set-url -- https://github.com/<owner>/kanvis-cut`.
- Add GitHub topics:
  `codex-skill`, `ai-video`, `article-to-video`, `video-automation`, `content-creation`, `open-core`, `agent-workflow`, `hyperframes`, `digital-human`, `multilingual`.
- Enable Issues, Discussions, private vulnerability reporting, and read-only Actions permissions.
- Publish `v0.2.1` release.

### Day 1: Proof video

Publish the before/after demo with this hook:

> Digital humans should not read articles aloud. Articles need direction.

Include GitHub link, one install command, and the privacy-safe example.

### Day 2: Technical teardown

Post a written teardown:

- why article prose fails when read verbatim;
- how spoken adaptation preserves source claims;
- how scene grammar chooses visuals;
- why presenter PIP beats full-screen avatar for evidence-heavy content;
- how release gates reduce accidental paid calls and low-quality output.

### Day 3: Developer invitation

Open 3 `good first issue` items:

- add a platform preset;
- add a scene-grammar example;
- add a provider-adapter mock or documentation fix.

### Day 4-7: Community proof

- Ask 5 people with real Chinese long-form content to try the privacy-safe example.
- Convert every failure into an issue or FAQ entry.
- Ship a patch release only if it fixes a real first-run problem.

## README checklist before public release

- [ ] Repository URL points to the final `kanvis-cut` repository.
- [ ] README has a demo video or GIF link.
- [ ] Launch copy has real repository URL.
- [ ] Social preview image follows `docs/social-preview-brief.md` and uses `assets/social-preview.svg` or a PNG export.
- [ ] README states "article-to-video pipeline" before "avatar."
- [ ] README includes the "How it differs" section.
- [ ] README does not imply bundled provider SDKs, credits, accounts, or hosted service.
- [ ] README points to a privacy-safe example.
- [ ] README has clear contribution areas beyond provider APIs.
- [ ] `SUPPORT.md`, `CHANGELOG.md`, and `docs/repository-setup.md` exist.
- [ ] `docs/launch-copy.md`, `docs/good-first-issues.md`, `docs/social-preview-brief.md`, `docs/positioning-vs-talking-head-skills.md`, and `docs/star-growth-plan.md` exist.
- [ ] `docs/roadmap.md` and `examples/knowledge-video/quality-report.example.json` exist.
- [ ] `docs/faq.md` exists and answers the talking-head/generic-provider confusion.
- [ ] `assets/social-preview.svg` exists.
- [ ] `npm run check` and `npm run release:audit` pass after the real repository URL is inserted.
- [ ] SECURITY.md explains not to publish keys, portraits, voice samples, client videos, or signed URLs.

## Anti-misunderstanding language

Use:

- "article-native video pipeline"
- "semantic scene planning"
- "information graphics + presenter PIP"
- "release-gated avatar video"
- "provider-adaptable contracts"

Avoid:

- "digital-human production clone"
- "talking-head generator"
- "HeyGen/MiniMax workflow" as the main label
- "one-click avatar video"
- "automatic viral video"

## Star growth principle

The project can pass 33 stars faster by being narrower, not broader.

People should star it because they immediately understand:

```text
I have articles.
I do not want a digital human to read them flatly.
I want a repeatable way to turn them into visual videos.
This repo shows the pipeline, checks, and extension points.
```
