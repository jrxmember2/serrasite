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
  '/fabrica-de-software': {
    title: 'Fábrica de software',
    description:
      'Fábrica de software da Serratech: sistemas web sob medida, portais, dashboards, apps, integrações e automação, do discovery ao deploy em produção.',
    keywords:
      'fábrica de software, desenvolvimento de sistemas sob medida, software sob medida, desenvolvimento web, squad dedicado, integração de sistemas, automação de processos, modernização de sistemas legados',
  },
  '/ancora': {
    title: 'Âncora, ERP jurídico',
    description:
      'Âncora: ERP jurídico multitenant para escritórios de advocacia, com processos, cálculo de prazos, publicações, documentos, honorários e financeiro em ambiente isolado por escritório.',
    keywords:
      'ERP jurídico, software para advogados, sistema para escritório de advocacia, controle de prazos processuais, gestão de processos, honorários advocatícios, timesheet jurídico, Âncora sistema',
  },
  '/app-sindico': {
    title: 'SindÂncora, app e sistema para síndico',
    description:
      'SindÂncora: plataforma de gestão condominial com atendimento por WhatsApp, obras, assembleias digitais, portaria, cobrança e a LemeIA respondendo pelos documentos do condomínio.',
    keywords:
      'app para síndico, SindÂncora, sistema para condomínios, gestão condominial digital, software para administradora de condomínios, assembleia digital, portaria digital, tecnologia condominial',
  },
  '/contato': {
    title: 'Contato',
    description:
      'Entre em contato com a Serratech para falar sobre infraestrutura em TI, consultoria, sistemas, automação, Âncora, SindÂncora e suporte técnico corporativo.',
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
