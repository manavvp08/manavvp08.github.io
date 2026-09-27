# Portfolio information architecture

- Source plan: recruiter-focused navigation approved by Manav before implementation.
- Journey: a recruiter can distinguish evidence-backed case studies, hands-on projects, product skills, writing, and contact information without guessing what each item represents.

| Guarantee | Evidence | Result |
|---|---|---|
| Navigation separates Case Studies, Projects, and Toolkit | `npm test` | PASS (6/6) |
| Case studies show evidence category and delivery status | `npm test` | PASS (6/6) |
| Projects show build status separately from case studies | `npm test` | PASS (6/6) |
| TypeScript and lint rules remain valid | `npm run lint` | PASS |
| The GitHub Pages static export builds successfully | `NEXT_PUBLIC_SITE_URL=https://manavvp08.github.io npm run build` | PASS |
| Desktop and mobile layouts render without overflow or browser errors | Local browser QA at `http://localhost:3000/#case-studies` | PASS |

- RED: the new structure test failed while the navigation still exposed Work and Stack.
- GREEN: all six tests passed after separating Case Studies and Projects and renaming Stack to Toolkit.
- Coverage: no coverage script exists; source-level integration tests, lint, production build, and browser QA cover this content and routing change.
- Intentional gap: filters are deferred until there are at least five case studies; category labels already establish the future taxonomy without adding empty controls.
