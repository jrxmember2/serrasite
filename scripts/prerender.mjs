// Gera um HTML estático por rota a partir do build SSR, para que buscadores
// recebam title, description, canonical e conteúdo sem depender de execução de JS.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const distDir = resolve(root, 'dist');
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js');

const SITE_URL = process.env.VITE_SITE_URL || 'https://serratech.tec.br';

function fileNameFor(path) {
  return path === '/' ? 'index.html' : `${path.replace(/^\//, '')}.html`;
}

function replaceBetween(html, startMarker, endMarker, replacement) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker);

  if (start === -1 || end === -1) {
    throw new Error(`Marcadores ${startMarker}/${endMarker} não encontrados em dist/index.html`);
  }

  return html.slice(0, start) + replacement + html.slice(end + endMarker.length);
}

function buildSitemap(paths) {
  const urls = paths
    .map((path) => `  <url>\n    <loc>${new URL(path, SITE_URL).toString()}</loc>\n  </url>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const { render, indexablePaths } = await import(pathToFileURL(ssrEntry).href);
const template = await readFile(resolve(distDir, 'index.html'), 'utf8');

const routes = [...indexablePaths, '/404'];

for (const path of routes) {
  const { html, head } = render(path);

  const page = replaceBetween(template, '<!--seo-start-->', '<!--seo-end-->', head).replace(
    '<!--app-html-->',
    html,
  );

  await writeFile(resolve(distDir, fileNameFor(path)), page, 'utf8');
  console.log(`pré-renderizado  ${path.padEnd(16)} -> dist/${fileNameFor(path)}`);
}

await writeFile(resolve(distDir, 'sitemap.xml'), buildSitemap(indexablePaths), 'utf8');
console.log(`sitemap          ${indexablePaths.length} URLs -> dist/sitemap.xml`);

await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true });
