# Rethinking YouTube Search case study

- **Source brief:** `docs/product/rethinking-youtube-search.md`
- **User journey:** As a product recruiter, I can open a clearly labelled concept study and evaluate Manav's problem framing, evidence discipline, trade-offs, system thinking, experiment design, and rollout judgement without confusing proposed targets for shipped results.

| Guarantee | Evidence | Result |
|---|---|---|
| The portfolio includes `/work/rethinking-youtube-search` as a static route | `npm test`; GitHub Pages production build | PASS |
| The study is labelled `Teardown`, `Concept`, `Independent concept study`, and `Unshipped proposal` | `tests/profile-content.test.mjs` | PASS (10/10) |
| Proposed targets are visibly distinct from measured outcomes | Source assertions for `Target +8pp`, `Target −20%`, and `No regression` | PASS |
| Recruiter scan paths cover JTBD, goals/non-goals, strategy, trade-offs, architecture, success metrics, guardrails, roadmap, and learnings | `tests/profile-content.test.mjs` | PASS |
| The study links to official YouTube, Google Research, and Google Cloud sources | `tests/profile-content.test.mjs` and browser QA | PASS |
| The supplied reference author's identity and domain are absent | Source-wide negative assertion | PASS |
| Six original decision artifacts show the current journey, failure hypothesis, target journey, result concept, architecture, and detailed data flow | Source assertions and browser QA | PASS |
| The cover and all six diagrams decode and have descriptive alternative text | Browser asset inspection | PASS (7/7) |
| Long SVG labels remain inside their cards, badges, and decision frames | Regression test plus native-size and 375px browser QA | PASS |
| The full study renders without horizontal overflow | Browser QA at 1440×900 and 375×812 | PASS |
| Light and dark modes remain readable | Desktop light-mode and mobile dark-mode browser QA | PASS |
| TypeScript remains valid | `npm run lint` | PASS |
| The static GitHub Pages export succeeds | `NEXT_PUBLIC_SITE_URL=https://manavvp08.github.io npm run build` | PASS |
| Production dependencies have no reported known vulnerabilities | `npm audit --omit=dev` | PASS (0 vulnerabilities) |

- **RED:** The original source-level test failed because the study and cover did not exist. Follow-up tests failed until the page exposed reusable figures, recruiter-facing PM language, metric types, and proposed guardrails.
- **GREEN:** All ten tests pass after adding the ten-section study, official sources, six original diagrams, PM scan labels, experiment targets, guardrails, and label-fit regression coverage.
- **Overflow regression:** Commit `61ff8e4` captured the failing label-fit assertions. The corrected SVGs wrap, shorten, or constrain long labels; all ten tests, XML validation, typecheck, production build, and responsive browser checks pass.
- **Coverage:** This repository has no coverage command. The source integration test, typecheck, static export, and browser checks cover the new data-driven route.
- **Known gap:** No visual-regression baseline exists, so pixel-level regression comparison is inconclusive. Browser QA found one existing Next.js smooth-scroll development warning and no page errors.
