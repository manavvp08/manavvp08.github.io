# Interactive About section

## User journey

As a recruiter or future teammate, I can choose a familiar situation and quickly understand how Manav thinks, acts, and behaves outside work.

## Evidence

| Guarantee | Evidence | Result |
| --- | --- | --- |
| Four accessible scenarios and their responses are present | `tests/profile-content.test.mjs` | RED at `90b6c5d`; GREEN 15/15 |
| Scenario language stays plain, conversational, and distinct | `tests/profile-content.test.mjs` | RED at `2a8be44`; GREEN 15/15 |
| Every scenario updates the visible response | Local browser interaction check | PASS — 4/4 |
| TypeScript remains valid | `npm run lint` | PASS |
| GitHub Pages static output builds | `npm run build` | PASS — 12 pages |
| Layout has no horizontal overflow | 390 × 844, 768 × 900, and 1440 × 900 browser checks | PASS |
| Accent colours remain legible | Manual dark- and light-mode browser checks | PASS |

No coverage script or committed visual baseline is configured; visual-regression comparison is therefore inconclusive.
