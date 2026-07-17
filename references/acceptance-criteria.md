# Acceptance Criteria

## Blocking

- Output MP4 is missing, unreadable, silent when narration is expected, or has the wrong dimensions/FPS.
- Duration exceeds the configured maximum.
- Avatar or voice consent is not confirmed.
- A caption covers the face or critical content.
- Text is clipped, contains placeholder values, or contradicts the source article.
- Pronunciation changes the meaning of a name, number, or core claim.
- Avatar generation shows severe mouth, face, hand, edge, or temporal artifacts.
- Paid cost exceeds the configured ceiling.

## Non-blocking warnings

- A scene remains visually unchanged for more than 12 seconds.
- Background music is absent when optional.
- Minor chroma spill is visible only at enlarged inspection.
- The video uses fewer than three visual roles but remains understandable.

## Release report

Record file path, resolution, FPS, duration, audio presence, provider job IDs, known cost, automated checks, visual-review result, and warnings. Mark `publish_ready` true only when all blocking checks pass.
