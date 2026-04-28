import { useEffect } from 'react';
import { siteConfig } from '../data/siteContent';

function upsertMeta(attribute, value, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

export default function Seo({ title, description, keywords, path = '/' }) {
  useEffect(() => {
    const pageTitle = `${title} | Serratech`;
    const canonicalUrl = new URL(path, siteConfig.siteUrl).toString();

    document.title = pageTitle;
    document.documentElement.lang = 'pt-BR';

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('property', 'og:title', pageTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', `${siteConfig.siteUrl}/og-cover.svg`);
    upsertMeta('name', 'twitter:title', pageTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', `${siteConfig.siteUrl}/og-cover.svg`);

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalUrl);
  }, [description, keywords, path, title]);

  return null;
}
