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
  assert.match(html, /Strategy · Development · AI automation/);
  assert.match(html, /Technology that moves/);
  assert.match(html, /the work forward/);
  assert.match(html, /Forge in numbers/);
  assert.match(html, /Selected projects/);
  assert.match(html, /CORY AI Premium Intelligence/);
  assert.match(html, /CuerPOWER/);
  assert.match(html, /View all projects/);
  assert.doesNotMatch(html, /Envision HR 360|Vennture/);
  assert.match(html, /Solution stories/);
  assert.match(html, /Scope/);
  assert.match(html, /Strategy before development/);
  assert.match(html, /aria-roledescription="carousel"/);
  assert.match(html, /What can you help us build\?/);
  assert.match(html, /Book a discovery call/);
  assert.match(html, /mailto:domingo@oneenterprise\.ai/);
});

test("server-renders the complete Forge projects catalogue", async () => {
  const response = await render("/projects");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Projects \| Forge Intelligence AI<\/title>/i);
  assert.match(html, /class="projects-count">19/i);
  assert.match(html, /Strategic Divorce Directory/);
  assert.match(html, /CORY AI Premium Intelligence/);
  assert.match(html, /CuerPOWER/);
  assert.match(html, /OnyxFlow/);
  assert.match(html, /CastlR Mobile/);
  assert.match(html, /\/projects\/praxis-media\.jpg/);
  assert.match(html, /\/projects\/cuerpower\.png/);
  assert.match(html, /mailto:domingo@oneenterprise\.ai/);
  assert.doesNotMatch(html, /Envision HR 360|Vennture/);
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
  assert.match(html, /mailto:domingo@oneenterprise\.ai/);
  assert.doesNotMatch(html, /Northstar|Pulse financial|Jordan Lee|Samira Patel|Marcus Reed/);
});

test("exports static routes with RSC fallbacks", async () => {
  const [home, services, projects, homeRsc, servicesRsc, projectsRsc, headers, redirects, vercelConfig] = await Promise.all([
    readFile(new URL("../dist/client/index.html", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/services/index.html", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/projects/index.html", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/index.rsc", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/services.rsc", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/projects.rsc", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/_headers", import.meta.url), "utf8"),
    readFile(new URL("../dist/client/_redirects", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  ]);

  assert.match(home, /Technology that moves/);
  assert.match(home, /\/_vinext(?:_fonts|\/fonts)\//);
  assert.match(services, /Three disciplines/);
  assert.match(projects, /Strategic Divorce Directory/);
  assert.match(homeRsc, /"__route":"route:\/"/);
  assert.match(servicesRsc, /"__route":"route:\/services"/);
  assert.match(projectsRsc, /"__route":"route:\/projects"/);
  assert.match(headers, /Content-Type: text\/x-component/);
  assert.match(redirects, /^\/.rsc \/index\.rsc 200$/m);
  assert.match(vercelConfig, /"source": "\/.rsc"/);
  assert.match(vercelConfig, /"destination": "\/index\.rsc"/);
});

test("keeps the production page free of starter preview dependencies", async () => {
  const [page, servicesPage, projectsPage, projectData, layout, css, packageJson, deliveryImage, architectureImage, projectImage, headerFile] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/services/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/projects/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/projects/data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../public/images/forge-delivery-flow.webp", import.meta.url)),
    readFile(new URL("../public/images/forge-glass-architecture.webp", import.meta.url)),
    readFile(new URL("../public/projects/cory-ai.png", import.meta.url)),
    readFile(new URL("../app/Header.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /useState/);
  assert.match(page, /aria-expanded/);
  assert.match(page, /useForm\("mkodnbyq"\)/);
  assert.match(page, /@formspree\/react/);
  assert.match(page, /formState\.submitting/);
  assert.match(headerFile, /\["Home", "\/"\],\s+\["About", "\/about"\],\s+\["Services", "\/services"\],\s+\["Projects", "\/projects"\]/);
  assert.match(page, /What can you help us build/);
  assert.match(page, /forge-mark\.png/);
  assert.match(page, /mailto:domingo@oneenterprise\.ai/);
  assert.match(servicesPage, /mailto:domingo@oneenterprise\.ai/);
  assert.match(projectsPage, /mailto:domingo@oneenterprise\.ai/);
  assert.equal((projectData.match(/name: "/g) ?? []).length, 19);
  assert.doesNotMatch(projectData, /Envision HR 360|Vennture/);
  assert.doesNotMatch(page, /hello@forgeintelligence\.ai/);
  assert.doesNotMatch(servicesPage, /hello@forgeintelligence\.ai/);
  assert.doesNotMatch(projectsPage, /hello@forgeintelligence\.ai/);
  assert.doesNotMatch(page, /Northstar|Pulse financial|Jordan Lee|Samira Patel|Marcus Reed/);
  assert.match(layout, /Forge Intelligence AI/);
  assert.doesNotMatch(page, /_sites-preview|codex-preview|SkeletonPreview|react-loading-skeleton/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(css, /react-loading-skeleton|sites-skeleton/);
  assert.match(css, /html \{[^}]*scroll-behavior: smooth/);
  assert.match(css, /html \{[^}]*scroll-padding-top: 96px/);
  assert.match(css, /body \{[^}]*overflow-x: clip/);
  assert.doesNotMatch(css, /\.site-main \{[^}]*overflow-x:/);
  assert.match(css, /\.site-main > \.site-header \{[^}]*position: fixed[^}]*top: 0/);
  assert.match(css, /\.process-layout \{ grid-template-columns: minmax\(0, 1fr\); gap: 36px; \}/);
  assert.match(css, /\.process-grid \{ grid-template-columns: minmax\(0, 1fr\); width: 100%; \}/);
  assert.match(css, /\.main-nav \{ background: rgba\(248, 252, 255, \.98\)/);
  assert.match(css, /\.delivery-stack \{ grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.featured-project-grid \{ display: grid; grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/);
  assert.doesNotMatch(css, /\.site-main\s*\{[^}]*padding-top/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(page, /forge-delivery-flow\.webp/);
  assert.match(page, /forge-glass-architecture\.webp/);
  assert.doesNotMatch(css, /forge-delivery-flow\.png|forge-glass-architecture\.png/);
  assert.match(css, /\.process-intro h2 \{[^}]*font-size: clamp\(50px, 4\.25vw, 74px\)/);
  assert.match(css, /\.process-intro \.section-note \{[^}]*font-size: clamp\(19px, 1\.45vw, 23px\)/);
  assert.ok(deliveryImage.byteLength > 10_000);
  assert.ok(architectureImage.byteLength > 10_000);
  assert.ok(projectImage.byteLength > 10_000);
});
