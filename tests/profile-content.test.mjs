import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import test from "node:test";

const files = readdirSync("app", { recursive: true })
  .map(String)
  .filter((file) => /\.(?:ts|tsx|css|svg)$/.test(file))
  .map((file) => `app/${file}`);

const source = files.map((file) => readFileSync(file, "utf8")).join("\n");

test("main portfolio surfaces use Manav's verified LinkedIn profile", () => {
  for (const expected of [
    "Manav Purswani",
    "Business System Analyst",
    "Product Analyst",
    "Deloitte",
    "Thadomal Shahani Engineering College",
    "manav-purswani",
    "manavvp08",
    "manavp080@gmail.com",
    "79",
    "100%",
    "35%",
    "40%",
  ]) {
    assert.match(source, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("main portfolio surfaces no longer present the source author's identity", () => {
  assert.doesNotMatch(
    source,
    /Siddharth Singh|sidonweb|siddonweb|heysid88|Houston Systems|Raasta/i,
  );
});

test("source-author assets and content are removed", () => {
  for (const path of ["public/profile.jpg", "public/resume.pdf", "content", "context.md"]) {
    assert.equal(existsSync(path), false, `${path} should not remain in Manav's portfolio`);
  }
});

test("GitHub Pages static export is configured", () => {
  const nextConfig = readFileSync("next.config.mjs", "utf8");
  const workflow = readFileSync(".github/workflows/deploy-pages.yml", "utf8");
  assert.match(nextConfig, /output:\s*["']export["']/);
  assert.match(nextConfig, /basePath/);
  assert.match(workflow, /actions\/deploy-pages/);
  assert.match(workflow, /NEXT_PUBLIC_SITE_URL: https:\/\/manavvp08\.github\.io\s/);
  assert.doesNotMatch(workflow, /NEXT_PUBLIC_BASE_PATH|\/product-portfolio/);
});

test("Writing is available for Manav's future articles", () => {
  assert.equal(existsSync("app/writing/page.tsx"), true);

  const navigation = readFileSync("app/components/nav-items.tsx", "utf8");
  const sidebar = readFileSync("app/components/sidebar.tsx", "utf8");
  const mobileDock = readFileSync("app/components/mobile-dock.tsx", "utf8");
  const commandPalette = readFileSync("app/components/command-palette.tsx", "utf8");
  const sitemap = readFileSync("app/sitemap.ts", "utf8");

  assert.match(navigation, /label:\s*["']Writing["']/);
  assert.match(navigation, /href:\s*["']\/writing["']/);
  assert.match(sidebar, /writingNav/);
  assert.match(mobileDock, /writingNav/);
  assert.match(commandPalette, /writingNav/);
  assert.match(sitemap, /\$\{SITE_URL\}\/writing/);
});
