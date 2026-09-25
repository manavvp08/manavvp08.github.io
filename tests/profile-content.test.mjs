import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const files = [
  "app/lib/data.ts",
  "app/lib/ask-engine.ts",
  "app/lib/seo.ts",
  "app/layout.tsx",
  "app/manifest.ts",
  "app/opengraph-image.tsx",
  "app/components/ask-chat.tsx",
  "app/components/ask-widget.tsx",
  "app/components/command-palette.tsx",
  "app/components/mobile-dock.tsx",
  "app/components/sidebar.tsx",
  "app/components/project-grid.tsx",
  "app/components/case-study-block.tsx",
  "app/components/sections/intro.tsx",
  "app/components/sections/work.tsx",
  "app/components/sections/stack.tsx",
  "app/components/sections/about.tsx",
  "app/components/sections/contact.tsx",
  "app/work/page.tsx",
  "app/work/[slug]/page.tsx",
];

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
