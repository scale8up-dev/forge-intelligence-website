import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
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
  assert.match(html, /Scope/);
  assert.match(html, /Strategy before development/);
  assert.match(html, /aria-roledescription="carousel"/);
  assert.match(html, /What can you help us build\?/);
  assert.match(html, /Book a discovery call/);
});

test("server-renders detailed Forge services without placeholder proof", async () => {
  const response = await render("/services");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Forge \/ Capabilities/);
  assert.match(html, /Three disciplines/);
  assert.match(html, /Digital products that are ready for real work/);
  assert.match(html, /A clearer path before development begins/);
  assert.match(html, /Automation that keeps useful work moving/);
  assert.match(html, /FORGE \/ CAPABILITY SIGNALS/);
  assert.match(html, /FORGE \/ DELIVERY CURRENT/);
  assert.match(html, /Strategy → software → automation/);
  assert.match(html, /FORGE \/ WORKFLOW/);
  assert.doesNotMatch(html, /Northstar|Pulse financial|Jordan Lee|Samira Patel|Marcus Reed/);
});

test("exports Netlify-ready static routes", async () => {
  const [home, services] = await Promise.all([
    readFile(new URL("../dist/client/index.html", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/services/index.html", import.meta.url), "utf8"),
  ]);

  assert.match(home, /Build the right/);
  assert.match(home, /\/_vinext\/fonts\//);
  assert.match(services, /Three disciplines/);
});

test("keeps the production page free of starter preview dependencies", async () => {
  const [page, layout, css, packageJson, deliveryImage, architectureImage] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../public/images/forge-delivery-flow.webp", import.meta.url)),
    readFile(new URL("../public/images/forge-glass-architecture.webp", import.meta.url)),
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
  assert.match(page, /forge-delivery-flow\.webp/);
  assert.match(page, /forge-glass-architecture\.webp/);
  assert.doesNotMatch(css, /forge-delivery-flow\.png|forge-glass-architecture\.png/);
  assert.match(css, /\.process-intro h2 \{[^}]*font-size: clamp\(50px, 4\.25vw, 74px\)/);
  assert.match(css, /\.process-intro \.section-note \{[^}]*font-size: clamp\(19px, 1\.45vw, 23px\)/);
  assert.ok(deliveryImage.byteLength > 10_000);
  assert.ok(architectureImage.byteLength > 10_000);
});
