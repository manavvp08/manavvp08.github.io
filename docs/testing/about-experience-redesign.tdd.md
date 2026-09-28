# About and Experience redesign

## Acceptance criteria

- The homepage starts with About and no longer exposes Overview as a navigation section.
- Experience follows Toolkit and makes Deloitte, the current role, progression, and delivery outcomes easy to scan.
- The GitHub activity banner is not rendered.
- The Experience layout remains legible in light mode, dark mode, and a 390 px mobile viewport.

## Evidence

| Check | Result |
| --- | --- |
| RED: `npm test` failed on the new homepage structure test | PASS — commit `c9b4028` |
| GREEN: `npm test` | PASS — 11/11 |
| TypeScript: `npm run lint` | PASS |
| GitHub Pages production build | PASS — 12 static pages generated |
| Dependency audit | PASS — 0 vulnerabilities |
| Browser: desktop light and dark themes | PASS |
| Browser: 390 × 844 mobile viewport | PASS — no horizontal overflow |
| Browser console errors | PASS — none |
