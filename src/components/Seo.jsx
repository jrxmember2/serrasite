import { useEffect } from 'react';
import { resolveSeo } from '../data/seo';

function upsertMeta(attribute, value, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

// O head já vem correto do HTML pré-renderizado; este efeito mantém os metadados
// em dia durante a navegação client-side do SPA.
export default function Seo({ path = '/' }) {
  useEffect(() => {
    const { pageTitle, description, keywords, canonicalUrl, imageUrl } = resolveSeo(path);

    document.title = pageTitle;
    document.documentElement.lang = 'pt-BR';

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('property', 'og:title', pageTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('name', 'twitter:title', pageTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalUrl);
  }, [path]);

  return null;
}
