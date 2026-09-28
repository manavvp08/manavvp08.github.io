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

test("homepage leads with About and presents recruiter-ready Experience", () => {
  const home = readFileSync("app/page.tsx", "utf8");
  const navigation = readFileSync("app/components/nav-items.tsx", "utf8");
  const intro = readFileSync("app/components/sections/intro.tsx", "utf8");
  const experience = readFileSync("app/components/sections/about.tsx", "utf8");

  assert.match(navigation, /id:\s*["']about["'],\s*label:\s*["']About["']/);
  assert.match(
    navigation,
    /id:\s*["']experience["'],\s*label:\s*["']Experience["']/,
  );
  assert.doesNotMatch(navigation, /label:\s*["']Overview["']/);
  assert.match(intro, /<Section id=["']about["']/);
  assert.doesNotMatch(intro, /GithubHeatmap|Lately on GitHub/);
  assert.ok(
    home.indexOf("<Toolkit />") < home.indexOf("<Experience />"),
    "Experience should follow Toolkit",
  );

  for (const expected of [
    "Deloitte logo",
    "Business Systems Analyst",
    "Role progression",
    "79",
    "100%",
    "35%",
    "40%",
  ]) {
    assert.match(
      experience,
      new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    );
  }
  assert.match(experience, /text-fg/);
  assert.match(experience, /bg-surface/);
});

test("YouTube Search teardown is original, transparent, and decision-complete", () => {
  const data = readFileSync("app/lib/data.ts", "utf8");

  for (const expected of [
    'slug: "rethinking-youtube-search"',
    'category: "Teardown"',
    'status: "Concept"',
    "Independent concept study",
    "Unshipped proposal",
    "Intent routing",
    "Research Synthesis & Key Insights",
    "Experiment design",
    "Target +8pp",
    "No regression",
    "support.google.com/youtube/answer/16090438",
    "research.google/pubs/deep-neural-networks-for-youtube-recommendations",
    "cloud.google.com/vertex-ai/docs/vector-search/overview",
  ]) {
    assert.match(data, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.equal(existsSync("public/photos/youtube-search.svg"), true);
  assert.doesNotMatch(source, /Kashish Kataria|kashishpm/i);
});

test("YouTube Search teardown shows the PM work through original visual artifacts", () => {
  const data = readFileSync("app/lib/data.ts", "utf8");
  const diagrams = [
    "youtube-search-current-loop.svg",
    "youtube-search-keyword-flow.svg",
    "youtube-search-semantic-flow.svg",
    "youtube-search-result-concept.svg",
    "youtube-search-architecture.svg",
    "youtube-search-data-flow.svg",
  ];

  for (const diagram of diagrams) {
    assert.equal(existsSync(`public/photos/${diagram}`), true, `${diagram} should exist`);
    assert.match(data, new RegExp(diagram.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const expected of [
    "I started with a familiar frustration",
    "North Star",
    "MVP",
    "guardrail metrics",
    "kill criteria",
    "opportunity sizing",
    "Problem Statement & User Pain",
    "Jobs to Be Done (JTBD)",
    "Product Scope: Goals & Non-Goals",
    "Product Strategy & Target Journey",
    "Key Product Decisions & Trade-offs",
    "Technical & Product Architecture",
    "Success Metrics & Guardrails",
    "Strategic Trade-off Analysis",
    "MVP Scope & Product Roadmap",
    "Key Learnings",
  ]) {
    assert.match(
      data,
      new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
    );
  }

  const detail = readFileSync("app/components/case-study-detail.tsx", "utf8");
  assert.match(detail, /s\.figures/);
  assert.match(detail, /study\.metricsTitle/);
  assert.match(detail, /m\.kind/);
});

test("YouTube Search diagrams keep long labels inside their visual containers", () => {
  const currentJourney = readFileSync(
    "public/photos/youtube-search-current-loop.svg",
    "utf8",
  );
  const failureMode = readFileSync(
    "public/photos/youtube-search-keyword-flow.svg",
    "utf8",
  );
  const targetJourney = readFileSync(
    "public/photos/youtube-search-semantic-flow.svg",
    "utf8",
  );
  const resultConcept = readFileSync(
    "public/photos/youtube-search-result-concept.svg",
    "utf8",
  );
  const architecture = readFileSync(
    "public/photos/youtube-search-architecture.svg",
    "utf8",
  );

  assert.match(currentJourney, /textLength="520"[^>]*>More effort/);
  assert.match(failureMode, />PM HYPOTHESIS<\/text>/);
  assert.match(failureMode, />Meaning-heavy queries may weaken candidate recall<\/text>/);
  assert.match(targetJourney, />Describe the<\/text>/);
  assert.match(targetJourney, />problem naturally<\/text>/);
  assert.match(targetJourney, /textLength="490"[^>]*>Right video/);
  assert.match(resultConcept, /x="1400"[^>]*text-anchor="end"[^>]*>Shown only when useful/);
  assert.match(architecture, />Merge<\/text>/);
  assert.match(architecture, />\+ diversify<\/text>/);
  assert.match(architecture, /textLength="820"[^>]*>Product boundary/);
});

test("Manav's supplied portrait is limited to the sidebar and profile panel", () => {
  const portraitPath = "public/sidebar-profile.jpg";
  assert.equal(existsSync(portraitPath), true, `${portraitPath} should exist`);

  const sidebar = readFileSync("app/components/sidebar.tsx", "utf8");
  assert.match(sidebar, /src=["']\/sidebar-profile\.jpg["']/);
  assert.match(sidebar, /alt=["']Manav Purswani["']/);
  assert.match(sidebar, /className=["']duotone object-cover object-top["']/);
  const intro = readFileSync("app/components/sections/intro.tsx", "utf8");
  const styles = readFileSync("app/globals.css", "utf8");
  assert.match(intro, /src=["']\/sidebar-profile\.jpg["']/);
  assert.match(intro, /className=["'][^"']*duotone[^"']*["']/);
  assert.doesNotMatch(intro, />\s*MP\s*</);
  assert.equal(source.match(/\/sidebar-profile\.jpg/g)?.length, 2);
  assert.match(styles, /\[data-theme=["']dark["']\]\s+\.duotone/);
  assert.match(styles, /\[data-theme=["']dark["']\]\s+\.group:hover\s+\.duotone/);
  assert.match(styles, /grayscale\(0\)/);

  const digest = createHash("sha256").update(readFileSync(portraitPath)).digest("hex");
  assert.equal(digest, "4a32529690147af67cb2d079ef63019d6f99f209e4d4ea11b00f3f62a7f55cda");
});
