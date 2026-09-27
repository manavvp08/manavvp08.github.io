# Sidebar portrait

- Source plan: user request to use the supplied `IMG_1568.JPG` only in the sidebar and review locally before publishing.
- Journey: a desktop visitor sees Manav's supplied portrait in the sidebar, while the mobile header and other portfolio surfaces remain unchanged.

| Guarantee | Evidence | Result |
|---|---|---|
| The supplied portrait asset exists and matches the supplied file | `npm test` SHA-256 assertion | PASS (7/7) |
| The portrait path is referenced exactly once in application source | `npm test` | PASS (7/7) |
| The sidebar image has Manav's name as alternative text | `npm test` | PASS (7/7) |
| The portrait is top-aligned so the full hairstyle remains visible | `npm test` and desktop browser QA at 1440×900 | PASS |
| The local server serves the JPEG successfully | `curl -I http://127.0.0.1:3000/sidebar-profile.jpg` | PASS (HTTP 200) |
| TypeScript remains valid | `npm run lint` | PASS |
| The static GitHub Pages export builds successfully | `NEXT_PUBLIC_SITE_URL=https://manavvp08.github.io npm run build` | PASS |

- RED: the new test failed because `public/sidebar-profile.jpg` did not exist.
- GREEN: all seven tests passed after adding the supplied file and rendering it only in `sidebar.tsx`.
- Coverage: no coverage script exists; the source-level integration test, typecheck, static build, and local asset check cover this change.
- Alignment RED: the placement test failed while the image used the default centered crop.
- Alignment GREEN: the test and desktop browser QA passed with `object-position: 50% 0%`; no browser warnings or horizontal overflow were found.
- Visual acceptance: pending Manav's review of the corrected local preview before publishing.
