import { siteConfig } from './siteContent';

// Fonte única dos metadados por rota. Consumida em runtime pelo componente Seo
// e em build time pelo pré-renderizador (scripts/prerender.mjs), para que o HTML
// estático servido ao Googlebot já contenha title, description e canonical corretos.
export const seoByPath = {
  '/': {
    title: 'TI para empresas, condomínios e escritórios',
    description:
      'Infraestrutura em TI, consultoria, automação, segurança digital, sistemas próprios e tecnologia condominial para operações que não podem parar.',
    keywords:
      'TI para empresas, TI para condomínios, consultoria em TI, infraestrutura de TI, automação empresarial, segurança digital, portal do cliente, Serratech',
  },
  '/sobre': {
    title: 'Sobre a Serratech',
    description:
      'Conheça a Serratech: tecnologia com visão prática, estratégica e humana para empresas, escritórios, síndicos e condomínios.',
    keywords:
      'Serratech, consultoria em TI, tecnologia para empresas, tecnologia condominial, suporte técnico corporativo',
  },
  '/solucoes': {
    title: 'Produtos e soluções',
    description:
      'Soluções completas para empresas, escritórios, condomínios e síndicos: infraestrutura em TI, consultoria, sistemas, automação, segurança digital e produtos próprios.',
    keywords:
      'infraestrutura de TI, consultoria em TI, sistema para escritórios, sistema para condomínios, automação empresarial, segurança digital, portal do cliente',
  },
  '/ancora': {
    title: 'Âncora sistema',
    description:
      'Âncora: hub inteligente para centralizar clientes, contratos, cobranças, documentos, atendimento e automações em operações jurídicas, condominiais e administrativas.',
    keywords:
      'Âncora sistema, sistema para escritórios, sistema para condomínios, portal do cliente, automação empresarial, gestão condominial digital',
  },
  '/app-sindico': {
    title: 'App para síndico',
    description:
      'Âncora Síndico: app moderno para organizar chamados, documentos, comunicados, solicitações e rotinas condominiais com integração ao ecossistema Serratech.',
    keywords:
      'app para síndico, gestão condominial digital, tecnologia condominial, sistema para condomínios, app de condomínio, Serratech',
  },
  '/contato': {
    title: 'Contato',
    description:
      'Entre em contato com a Serratech para falar sobre infraestrutura em TI, consultoria, sistemas, automação, Âncora, App do Síndico e suporte técnico corporativo.',
    keywords:
      'contato Serratech, consultoria em TI, suporte técnico corporativo, automação empresarial, app para síndico, Âncora sistema',
  },
  '/portal-cliente': {
    title: 'Portal do cliente',
    description:
      'Portal do Cliente Serratech: acompanhe chamados, solicitações, documentos e atendimentos em um só lugar.',
    keywords:
      'portal do cliente, chamados de TI, suporte técnico corporativo, portal Serratech, app para síndico',
  },
  '/404': {
    title: 'Página não encontrada',
    description:
      'A página solicitada não foi encontrada. Volte para o site da Serratech e continue sua navegação.',
    keywords: 'Serratech',
    noindex: true,
  },
};

// Rotas publicadas no sitemap e pré-renderizadas como HTML indexável.
export const indexablePaths = Object.keys(seoByPath).filter((path) => !seoByPath[path].noindex);

export function resolveSeo(path) {
  const meta = seoByPath[path] ?? seoByPath['/404'];

  return {
    ...meta,
    pageTitle: `${meta.title} | ${siteConfig.name}`,
    canonicalUrl: new URL(path, siteConfig.siteUrl).toString(),
    imageUrl: `${siteConfig.siteUrl}/logo-serratech.svg`,
  };
}
