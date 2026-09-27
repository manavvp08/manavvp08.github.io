import assert from "node:assert/strict";
import { createHash } from "node:crypto";
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

test("portfolio navigation separates case studies, projects, and toolkit", () => {
  const navigation = readFileSync("app/components/nav-items.tsx", "utf8");
  assert.match(navigation, /id:\s*["']case-studies["'],\s*label:\s*["']Case Studies["']/);
  assert.match(navigation, /id:\s*["']projects["'],\s*label:\s*["']Projects["']/);
  assert.match(navigation, /id:\s*["']toolkit["'],\s*label:\s*["']Toolkit["']/);
  assert.doesNotMatch(navigation, /label:\s*["'](?:Work|Stack)["']/);

  for (const path of [
    "app/components/sections/case-studies.tsx",
    "app/components/sections/projects.tsx",
  ]) {
    assert.equal(existsSync(path), true, `${path} should exist`);
  }

  const home = readFileSync("app/page.tsx", "utf8");
  const data = readFileSync("app/lib/data.ts", "utf8");
  const caseStudyCards = readFileSync("app/components/case-study-block.tsx", "utf8");
  const projectCards = readFileSync("app/components/project-list.tsx", "utf8");
  const askEngine = readFileSync("app/lib/ask-engine.ts", "utf8");

  assert.match(home, /<CaseStudies\s*\/>/);
  assert.match(home, /<Projects\s*\/>/);
  assert.match(data, /category:\s*["']Real work["']/);
  assert.match(caseStudyCards, /c\.category/);
  assert.match(caseStudyCards, /c\.status/);
  assert.match(projectCards, /p\.status/);
  assert.match(askEngine, /\/#toolkit/);
  assert.doesNotMatch(askEngine, /\/#stack/);
});

test("Manav's supplied portrait appears only in the desktop sidebar", () => {
  const portraitPath = "public/sidebar-profile.jpg";
  assert.equal(existsSync(portraitPath), true, `${portraitPath} should exist`);

  const sidebar = readFileSync("app/components/sidebar.tsx", "utf8");
  assert.match(sidebar, /src=["']\/sidebar-profile\.jpg["']/);
  assert.match(sidebar, /alt=["']Manav Purswani["']/);
  assert.match(sidebar, /className=["']object-cover object-top["']/);
  assert.equal(source.match(/\/sidebar-profile\.jpg/g)?.length, 1);

  const digest = createHash("sha256").update(readFileSync(portraitPath)).digest("hex");
  assert.equal(digest, "4a32529690147af67cb2d079ef63019d6f99f209e4d4ea11b00f3f62a7f55cda");
});
