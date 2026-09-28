# Overview hero redesign

## User journey

As a recruiter, I immediately understand Manav's product direction while his work and personality remain easy to scan.

## Evidence

| Guarantee | Evidence | Result |
| --- | --- | --- |
| The opening story, product questions, and CTAs are present | `tests/profile-content.test.mjs` | RED at `54100f3`; GREEN 13/13 |
| TypeScript remains valid | `npm run lint` | PASS |
| GitHub Pages static output builds | `npm run build` | PASS — 12 pages |
| Desktop layout has no horizontal overflow | 1280 × 900 browser check | PASS |
| Mobile uses a 64 px portrait and has no horizontal overflow | 390 × 844 browser check | PASS |

No coverage command is configured; the repository's complete 13-test suite passed.
