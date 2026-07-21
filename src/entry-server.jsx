import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import { Layout } from './App';
import { resolveSeo } from './data/seo';
import { siteConfig } from './data/siteContent';

export { indexablePaths } from './data/seo';

function escapeAttr(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function meta(attribute, name, content) {
  return `    <meta ${attribute}="${name}" content="${escapeAttr(content)}" />`;
}

function organizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo-serratech.svg`,
    description: siteConfig.tagline,
    email: siteConfig.contactEmail,
    areaServed: 'BR',
  };

  return `    <script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function renderHead(path) {
  const { pageTitle, description, keywords, canonicalUrl, imageUrl, noindex } = resolveSeo(path);

  const tags = [
    `    <title>${escapeAttr(pageTitle)}</title>`,
    meta('name', 'description', description),
    meta('name', 'keywords', keywords),
    `    <link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`,
    meta('property', 'og:title', pageTitle),
    meta('property', 'og:description', description),
    meta('property', 'og:url', canonicalUrl),
    meta('property', 'og:image', imageUrl),
    meta('name', 'twitter:title', pageTitle),
    meta('name', 'twitter:description', description),
    meta('name', 'twitter:image', imageUrl),
  ];

  if (noindex) {
    tags.push(meta('name', 'robots', 'noindex, follow'));
  }

  if (path === '/') {
    tags.push(organizationJsonLd());
  }

  return tags.join('\n');
}

export function render(path) {
  const html = renderToString(
    <StaticRouter location={path}>
      <Layout />
    </StaticRouter>,
  );

  return { html, head: renderHead(path) };
}
