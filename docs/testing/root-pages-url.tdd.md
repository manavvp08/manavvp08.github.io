# Root GitHub Pages URL

- Acceptance: deploy from `manavvp08.github.io` with no project base path.
- Red: `npm test` failed while the workflow still targeted `/product-portfolio`.
- Green: 4 tests passed after switching the workflow to `https://manavvp08.github.io`.
- Verified: `npm run lint`, root-URL static export, and `git diff --check` passed.
