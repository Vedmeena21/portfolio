/**
 * Build-time prerender: renders the app to static HTML and injects it into the
 * built index.html, then emits robots.txt and sitemap.xml from the same site config.
 *
 * Runs after `vite build` and `vite build --ssr`. Keeping this a post-build step means
 * no component has to know it is being server-rendered.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { siteConfig } from "../src/config/site";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = join(projectRoot, "dist");
const serverEntry = join(projectRoot, "dist-ssr", "entry-server.js");
const ROOT_PLACEHOLDER = '<div id="root"></div>';

interface ServerEntryModule {
  render: () => string;
}

function isServerEntryModule(value: unknown): value is ServerEntryModule {
  return typeof value === "object" && value !== null && typeof Reflect.get(value, "render") === "function";
}

async function loadServerEntry(): Promise<ServerEntryModule> {
  const loaded: unknown = await import(pathToFileURL(serverEntry).href);

  if (!isServerEntryModule(loaded)) {
    throw new Error(`SSR bundle at ${serverEntry} does not export a render() function`);
  }

  return loaded;
}

async function prerenderIndexHtml(): Promise<number> {
  const indexPath = join(clientDir, "index.html");
  const template = await readFile(indexPath, "utf8");

  if (!template.includes(ROOT_PLACEHOLDER)) {
    throw new Error(`Expected ${ROOT_PLACEHOLDER} in dist/index.html; the build output changed shape`);
  }

  const { render } = await loadServerEntry();
  const appHtml = render();

  if (appHtml.trim().length === 0) {
    throw new Error("Prerender produced empty markup; refusing to ship an empty shell");
  }

  await writeFile(indexPath, template.replace(ROOT_PLACEHOLDER, `<div id="root">${appHtml}</div>`), "utf8");
  return appHtml.length;
}

async function writeRobotsTxt(): Promise<void> {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${new URL("/sitemap.xml", siteConfig.url).toString()}`,
    "",
  ].join("\n");

  await writeFile(join(clientDir, "robots.txt"), body, "utf8");
}

async function writeSitemapXml(buildDate: string): Promise<void> {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteConfig.url}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

  await writeFile(join(clientDir, "sitemap.xml"), body, "utf8");
}

async function main(): Promise<void> {
  await mkdir(clientDir, { recursive: true });

  const renderedChars = await prerenderIndexHtml();
  const buildDate = new Date().toISOString().slice(0, 10);

  await writeRobotsTxt();
  await writeSitemapXml(buildDate);

  process.stdout.write(
    `prerender: injected ${renderedChars.toLocaleString()} chars into dist/index.html\n` +
      `prerender: wrote robots.txt and sitemap.xml\n`,
  );
}

main().catch((error: unknown) => {
  process.stderr.write(`prerender failed: ${error instanceof Error ? error.stack : String(error)}\n`);
  process.exitCode = 1;
});
