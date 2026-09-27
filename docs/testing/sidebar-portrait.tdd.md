# Portfolio portrait

- Source plan: user requests to use the supplied `IMG_1568.JPG` in the sidebar and hero portrait circle, with local review before publishing.
- Journey: a visitor sees Manav's supplied portrait in the sidebar and hero panel; both are coloured in light mode, grayscale in dark mode, and restore colour on hover.

| Guarantee | Evidence | Result |
|---|---|---|
| The supplied portrait asset exists and matches the supplied file | `npm test` SHA-256 assertion | PASS (7/7) |
| The portrait path is limited to the sidebar and hero profile panel | `npm test` | PASS (7/7) |
| The sidebar image has Manav's name as alternative text | `npm test` | PASS (7/7) |
| The portrait is top-aligned so the full hairstyle remains visible | `npm test` and desktop browser QA at 1440×900 | PASS |
| Both portraits are coloured in light mode and grayscale in dark mode | Desktop and mobile browser QA | PASS |
| Dark-mode hover restores full colour | `npm test` CSS assertion | PASS (7/7) |
| The local server serves the JPEG successfully | `curl -I http://127.0.0.1:3000/sidebar-profile.jpg` | PASS (HTTP 200) |
| TypeScript remains valid | `npm run lint` | PASS |
| The static GitHub Pages export builds successfully | `NEXT_PUBLIC_SITE_URL=https://manavvp08.github.io npm run build` | PASS |

- RED: the new test failed because `public/sidebar-profile.jpg` did not exist.
- GREEN: all seven tests passed after adding the supplied file and rendering it in the sidebar.
- Coverage: no coverage script exists; the source-level integration test, typecheck, static build, and local asset check cover this change.
- Alignment RED: the placement test failed while the image used the default centered crop.
- Alignment GREEN: the test and desktop browser QA passed with `object-position: 50% 0%`; no browser warnings or horizontal overflow were found.
- Hero RED: the profile-panel test failed while the hero still displayed the `MP` initials.
- Hero GREEN: all seven tests passed after reusing the supplied portrait and adding theme-aware grayscale styling.
- Sidebar theme RED/GREEN: the class assertion failed before the sidebar reused the shared `duotone` treatment, then passed after the one-class fix.
- Visual acceptance: light and dark modes passed desktop/mobile browser QA without console warnings or horizontal overflow; final hover feel remains available for Manav's local review.
