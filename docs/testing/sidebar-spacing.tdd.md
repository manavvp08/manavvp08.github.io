# Cross-platform sidebar spacing

## User journey

As a desktop visitor, I see the same compact navigation position regardless of browser viewport height.

## Evidence

| Guarantee | Evidence | Result |
| --- | --- | --- |
| Sidebar no longer distributes spare height around the navigation | `tests/profile-content.test.mjs` | RED at `258f039`; GREEN 15/15 |
| Navigation position is stable | Browser checks at 768, 900, and 1080 px height | PASS — navigation starts at 186.5 px in all three |
| Short desktop viewport does not overflow horizontally | 1366 × 768 browser check | PASS |
| TypeScript remains valid | `npm run lint` | PASS |
| GitHub Pages static output builds | `npm run build` | PASS — 12 pages |

No coverage command is configured; the repository's complete 15-test suite passed.
