# Demo Video Script

Target length: 60-90 seconds.

Goal: prove that this project is article-native and visually directed, not another talking-head generator.

## Structure

### 0-5s: Hook

Visual: split screen.

- Left: avatar reading a dense article paragraph.
- Right: same article broken into scenes.

Narration:

> Digital humans should not just read articles aloud. Articles need direction.

### 5-15s: Source Fidelity

Visual: original article with highlighted claims.

Narration:

> The pipeline starts with the source article, marks the core claim, supporting points, and risk flags, then rewrites prose into spoken narration without inventing new facts.

Show:

- `input/source.md`
- `work/content-brief.json`
- `work/voiceover.md`

### 15-30s: Semantic Scene Planning

Visual: `scene-plan.json` next to a storyboard strip.

Narration:

> Each beat gets a visual role: comparison, process, number, quote, evidence, diagram, or presenter-led explanation.

Show:

- presenter-led scene;
- comparison scene;
- full-screen evidence scene;
- presenter picture-in-picture scene.

### 30-45s: Avatar Is Not Always The Main Screen

Visual: avatar moves from full frame to PIP while graphics take over.

Narration:

> When the information matters more than the face, the presenter moves aside and the canvas carries the idea.

### 45-60s: Cost, Consent, And Preview Gates

Visual: config panel or terminal output.

Narration:

> Before paid generation, the Skill checks consent, cost policy, provider readiness, and asks for a short preview before full-length generation.

Show:

- `paid_calls: confirm`
- cost ceiling;
- preview gate.

### 60-75s: Release QA

Visual: quality report.

Narration:

> A video is not publish-ready until media checks and visual review pass.

Show:

- `quality-report.json`
- `publish_ready: true`

### 75-90s: Call To Action

Visual: GitHub repository and install command.

Narration:

> Article to Avatar Video is an MIT-licensed Codex Skill for Chinese long-form creators and video automation developers. Try the privacy-safe example, open an issue, or contribute scene grammar and provider adapters.

## Production Notes

- Use fictional or explicitly redistributable article text.
- Do not show real provider keys, client assets, private portraits, or voice samples.
- Use the article-to-video pipeline as the hero. Do not make provider logos the hero.
- Avoid saying "alternative to <competitor>" or referencing competitor names in the public video.
