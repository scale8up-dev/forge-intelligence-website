import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Forge Intelligence AI landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Forge Intelligence AI \| Development, strategy &amp; AI automations<\/title>/i);
  assert.match(html, /Build smarter/);
  assert.match(html, /Development · Strategy · AI automations/);
  assert.match(html, /Build the right/);
  assert.match(html, /One clear path/);
  assert.match(html, /AI-powered workflows/);
  assert.match(html, /Solution stories/);
  assert.match(html, /aria-roledescription="carousel"/);
  assert.match(html, /What can you help us build\?/);
  assert.match(html, /Book a discovery call/);
});

test("keeps the production page free of starter preview dependencies", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /useState/);
  assert.match(page, /aria-expanded/);
  assert.match(page, /checkValidity/);
  assert.match(page, /What can you help us build/);
  assert.match(page, /forge-intelligence-logo\.png/);
  assert.match(page, /mailto:hello@forgeintelligence\.ai/);
  assert.doesNotMatch(page, /Northstar|Pulse financial|Jordan Lee|Samira Patel|Marcus Reed/);
  assert.match(layout, /Forge Intelligence AI/);
  assert.doesNotMatch(page, /_sites-preview|codex-preview|SkeletonPreview|react-loading-skeleton/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(css, /react-loading-skeleton|sites-skeleton/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
