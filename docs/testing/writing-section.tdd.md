# Writing section

- Source plan: user journey derived from the request to restore the removed blog area without copying the source author's articles.
- Journey: a visitor can open Manav's Writing page from desktop or mobile navigation and see an honest empty state until his first article is ready.

| Guarantee | Evidence | Result |
|---|---|---|
| `/writing` exists with Manav-only copy | `npm test` | PASS (5/5) |
| Desktop, mobile, command palette, and sitemap expose Writing | `npm test` | PASS (5/5) |
| The static GitHub Pages export includes `/writing` | `NEXT_PUBLIC_SITE_URL=https://manavvp08.github.io npm run build` | PASS |
| TypeScript remains valid | `npm run lint` | PASS |
| The page and responsive navigation render without application errors | Local browser QA at `http://localhost:3000/writing/` | PASS |

- RED: the new test failed because `app/writing/page.tsx` did not exist.
- GREEN: all five tests passed after the route and navigation entry points were added.
- Coverage: no coverage script exists; the integration-style source test, typecheck, production build, and browser smoke test cover this change.
- Browser note: local development logged one existing Next.js smooth-scroll advisory; no application errors were reported.
- Intentional gap: article parsing and individual post routes are deferred until Manav has a first article.
