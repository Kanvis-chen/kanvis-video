# Star Growth Plan

Goal: pass the current public benchmark of 33 stars with useful attention, not empty traffic.

## Baseline

As checked on 2026-07-17, the comparison repository has:

```text
33 stars
8 forks
```

The first milestone is therefore:

```text
50 stars with at least 5 real interactions
```

Real interactions mean issues, discussions, forks with visible changes, external examples, or feedback from people who tried the privacy-safe example.

## Why People Should Star This

People should not star it because it is "another avatar repo."

They should star it because they recognize this problem:

```text
I have articles.
I need video output.
A talking head reading the article is not enough.
I want a structured pipeline that preserves claims, directs scenes, controls cost, and checks release quality.
```

## 7-Day Action Plan

### Day 0: GitHub Public

- Push `main`.
- Publish `v0.2.1`.
- Add the recommended description and topics.
- Create 3 good first issues from `docs/good-first-issues.md`.
- Open one discussion from `docs/launch-copy.md`.

### Day 1: Proof Video

Publish a 60-90 second before/after demo:

```text
article paragraph read flatly
-> same paragraph directed as video
-> scene plan and QA report
```

Use the hook:

```text
数字人不应该把文章念一遍。
```

### Day 2: Technical Post

Publish one teardown:

- why article prose fails as narration;
- how source fidelity is preserved;
- how scene roles are selected;
- why evidence scenes need the avatar in PIP or absent;
- how paid-call gates protect users.

### Day 3: Contributor Invitation

Ask for three specific contributions:

- one platform preset;
- one scene grammar example;
- one provider mock or adapter note.

### Day 4-7: First-Run Proof

Ask five real users with Chinese long-form content to run:

```bash
npm run check
node scripts/init-project.mjs --article examples/knowledge-video/article.md --config examples/knowledge-video/avatar-video.config.json --out ./demo-project
```

Turn every failure into:

- a README fix;
- an issue;
- a FAQ entry;
- a `v0.1.1` patch.

## Channels

Prioritize:

- GitHub README and topics;
- X/Twitter for English builders;
- 即刻 / 小红书 / 朋友圈 for Chinese creators;
- Codex / AI video / digital-human communities;
- direct messages to people who already make video automation tools.

Do not mass-message unrelated users. The project needs qualified attention.

## Metrics To Record Weekly

- stars;
- forks;
- watchers;
- unique visitors;
- clones;
- issues/discussions;
- external examples;
- first-run failures;
- which post brought visitors.

## What Not To Do

- Do not run star exchanges.
- Do not use a competitor name as the main hook.
- Do not imply bundled provider credits or accounts.
- Do not promise viral video generation.
- Do not publish private portraits, voice samples, keys, signed URLs, client videos, cookies, or account state.
