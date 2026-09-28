# Overview, About, and Experience redesign

## Acceptance criteria

- Overview and About remain separate navigation sections.
- Experience follows Toolkit and uses a connected, card-free timeline for Deloitte role progression.
- The heading is “The Journey.”, the earlier role is labelled “Internship”, and achievements use compact `→` markers.
- Company logos sit beside role titles, PM skills remain scannable, and Academic Background stays a subtopic within Experience.
- The GitHub activity banner is not rendered.
- The Experience layout remains legible in light mode, dark mode, and a 390 px mobile viewport.

## Evidence

| Check | Result |
| --- | --- |
| RED: `npm test` failed on the separate-section requirement | PASS — commit `a210211` |
| RED: `npm test` failed on the timeline design requirement | PASS — commit `8458835` |
| GREEN: `npm test` | PASS — 11/11 |
| TypeScript: `npm run lint` | PASS |
| GitHub Pages production build | PASS — 12 static pages generated |
| Dependency audit | PASS — 0 vulnerabilities |
| Browser: desktop dark theme | PASS |
| Browser: 390 × 844 mobile viewport | PASS — no horizontal overflow |
