import assert from "node:assert/strict";
import test from "node:test";

import { portfolio } from "../src/data/portfolio.mjs";

test("the portfolio introduces Manav as a product analyst", () => {
  assert.equal(portfolio.name, "Manav Purswani");
  assert.match(portfolio.positioning, /Product Analyst/i);
  assert.match(portfolio.positioning, /Product Manager/i);
});

test("featured work uses real, uniquely linked projects", () => {
  assert.ok(portfolio.projects.length >= 3);

  const urls = portfolio.projects.map((project) => project.url);
  assert.equal(new Set(urls).size, urls.length);
  assert.ok(urls.every((url) => url.startsWith("https://github.com/manavvp08/")));
});

test("published content contains no resume placeholders", () => {
  const strings = [];
  const collectStrings = (value) => {
    if (typeof value === "string") strings.push(value);
    else if (value && typeof value === "object") {
      Object.values(value).forEach(collectStrings);
    }
  };

  collectStrings(portfolio);
  assert.ok(strings.every((value) => !/\[[^\]]+\]/.test(value)));
});
