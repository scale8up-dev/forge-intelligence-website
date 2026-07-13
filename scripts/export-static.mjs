import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = process.cwd();
const sourceDirectory = resolve(root, "dist/server/prerendered-routes");
const publishDirectory = resolve(root, "dist/client");
const sourceFontsDirectory = resolve(root, ".vinext/fonts");
const publishFontsDirectory = join(publishDirectory, "_vinext/fonts");

function rewriteFontPaths(html) {
  return html
    .replaceAll(
      /(href|src)=["'][^"']*?\.vinext\/fonts\/([^"']+)["']/g,
      (_, attribute, filename) => `${attribute}="/_vinext/fonts/${filename}"`,
    )
    .replaceAll(
      /url\((?:["'])?[^)'"\s]*?\.vinext\/fonts\/([^)'"\s]+)(?:["'])?\)/g,
      (_, filename) => `url("/_vinext/fonts/${filename}")`,
    );
}

await cp(sourceFontsDirectory, publishFontsDirectory, { recursive: true });

for (const filename of await readdir(sourceDirectory)) {
  if (!filename.endsWith(".html")) continue;

  const route = filename.slice(0, -".html".length);
  const target = route === "index" || route === "404"
    ? join(publishDirectory, filename)
    : join(publishDirectory, route, "index.html");

  await mkdir(resolve(target, ".."), { recursive: true });
  await writeFile(target, rewriteFontPaths(await readFile(join(sourceDirectory, filename), "utf8")));
}
