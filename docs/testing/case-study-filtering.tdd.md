# Case-study filtering

## User journey

As a recruiter, I can select a case-study type and see only the work relevant to that evidence category.

## Evidence

| Guarantee | Evidence | Result |
| --- | --- | --- |
| Filter options are generated from the case-study categories | `tests/profile-content.test.mjs` | RED at `402376f`; GREEN 14/14 |
| The selected filter exposes its state and updates the visible cards | `aria-pressed` browser interaction | PASS |
| Mobile and desktop layouts avoid horizontal overflow | 390 × 844 and 1280 × 900 browser checks | PASS |
| TypeScript remains valid | `npm run lint` | PASS |
| GitHub Pages static output builds | `npm run build` | PASS — 12 pages |

No coverage command is configured; the repository's complete 14-test suite passed.
