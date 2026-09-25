# Original portfolio — TDD evidence

## Source

Journeys were derived from the portfolio request and the verified content in `Future_Product_Analyst_Resume.md` plus Manav's public GitHub profile.

## User journeys

- As a recruiter, I can immediately understand Manav's Product Analyst positioning and Product Manager direction.
- As a reviewer, I can inspect real product work without encountering invented projects or résumé placeholders.
- As a visitor, I can navigate from the overview to featured products on desktop and mobile.

## RED → GREEN

- RED: `node --test tests/portfolio-content.test.mjs` failed with `ERR_MODULE_NOT_FOUND` before the portfolio content existed.
- GREEN: `npm test` passed all 3 content guarantees after `src/data/portfolio.mjs` was added.
- Coverage: `npm run test:coverage` reported 100% line, branch, and function coverage for the content module.

## Guarantees

| # | Guarantee | Evidence | Type | Result |
|---|---|---|---|---|
| 1 | The portfolio names Manav and states both the Product Analyst and Product Manager direction | `portfolio-content.test.mjs` | Unit | PASS |
| 2 | At least three unique featured projects link to Manav's own GitHub account | `portfolio-content.test.mjs` | Unit | PASS |
| 3 | Published content contains no bracketed résumé placeholders | `portfolio-content.test.mjs` | Unit | PASS |
| 4 | The portfolio compiles, type-checks, and statically renders | `npm run build` | Integration | PASS |
| 5 | Product navigation lands on the product section and all six project links open in new tabs | Local browser verification | E2E smoke | PASS |

## Known gaps

The first version intentionally has no form, database, analytics SDK, or client-side state. Visual checks covered the desktop layout and the 390px responsive breakpoint; full cross-browser regression coverage can be added when the site is deployed.
