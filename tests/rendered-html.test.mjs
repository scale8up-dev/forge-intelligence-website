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
  assert.match(html, /<title>Forge Intelligence AI \| Production-ready software<\/title>/i);
  assert.match(html, /Turn your next/);
  assert.match(html, /production-ready SaaS MVPs/);
  assert.match(html, /MVP engineering/);
  assert.match(html, /How quickly can we launch an MVP\?/);
  assert.match(html, /Start a conversation/);
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
  assert.match(page, /How quickly can we launch an MVP/);
  assert.match(page, /forge-intelligence-logo\.png/);
  assert.match(page, /aria-roledescription="carousel"/);
  assert.match(layout, /Forge Intelligence AI/);
  assert.doesNotMatch(page, /_sites-preview|codex-preview|SkeletonPreview|react-loading-skeleton/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(css, /react-loading-skeleton|sites-skeleton/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
