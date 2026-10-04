import { siteConfig } from './siteContent';

// Fonte única dos metadados por rota. Consumida em runtime pelo componente Seo
// e em build time pelo pré-renderizador (scripts/prerender.mjs), para que o HTML
// estático servido ao Googlebot já contenha title, description e canonical corretos.
export const seoByPath = {
  '/': {
    title: 'Fábrica de software e ÂncoraHUB',
    description:
      'Fábrica de software e criadora do ÂncoraHUB. Sistemas que simplificam o trabalho, protegem informações e devolvem tempo para novos negócios.',
    keywords:
      'fábrica de software, Serratech, ÂncoraHUB, SindÂncora, ÂncorADV, desenvolvimento de sistemas, segurança, automação',
  },
  '/sobre': {
    title: 'Sobre a Serratech',
    description:
      'Conheça a Serratech: experiência em data centers, operações críticas e desenvolvimento em multinacionais, com validação externa de cibersegurança.',
    keywords:
      'Serratech, consultoria em TI, tecnologia para empresas, tecnologia condominial, suporte técnico corporativo',
  },
  '/solucoes': {
    title: 'Produtos e soluções',
    description:
      'Software sob medida, integração de sistemas e ÂncoraHUB. Soluções Serratech para melhorar fluxos de trabalho com qualidade, segurança e continuidade.',
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
    title: 'ÂncoraHUB, o ecossistema de software da Serratech',
    description:
      'Conheça o ÂncoraHUB: SindÂncora disponível para síndicos e ÂncorADV para advogados em breve. Tecnologia desenvolvida e mantida pela Serratech.',
    keywords:
      'ÂncoraHUB, Serratech, SindÂncora, ÂncorADV, software para síndicos, software para advogados',
  },
  '/ancoradv': {
    title: 'ÂncorADV para advogados · Em breve',
    description:
      'O ÂncorADV está em desenvolvimento. A próxima solução do ÂncoraHUB vai ajudar advogados a organizar o trabalho e ganhar tempo para seus clientes.',
    keywords:
      'ÂncorADV, ÂncoraHUB, software para advogados, Serratech, software jurídico',
  },
  '/app-sindico': {
    title: 'SindÂncora, app e sistema para síndico',
    description:
      'SindÂncora: sistema e aplicativo para síndicos, com administradoras parceiras. Atendimento, manutenção e documentos organizados para ganhar tempo.',
    keywords:
      'app para síndico, aplicativo para síndico Android, SindÂncora, sistema para condomínios, gestão de condomínios, software para administradora de condomínios, assembleia digital, portaria digital',
  },
  '/contato': {
    title: 'Contato',
    description:
      'Converse com a Serratech sobre desenvolvimento de software, ÂncoraHUB, SindÂncora, ÂncorADV e parcerias com administradoras.',
    keywords:
      'contato Serratech, consultoria em TI, suporte técnico corporativo, automação empresarial, app para síndico, Âncora sistema',
  },
  '/portal-cliente': {
    title: 'Acesse seu produto',
    description:
      'Acesse o ambiente oficial do SindÂncora e encontre o contato de suporte da Serratech. ÂncorADV em breve.',
    keywords:
      'portal do cliente, chamados de TI, suporte técnico corporativo, portal Serratech, app para síndico',
  },
  // Fica fora do menu, fora do sitemap e fora do índice de busca — é um
  // documento de referência, não uma página de venda. A URL precisa ser estável
  // e pública porque é ela que consta na ficha do app na Google Play.
  '/legal/politica-de-privacidade': {
    title: 'Política de Privacidade',
    description:
      'Como a Serratech trata dados pessoais no site, no Portal do Cliente e no Âncora: dados coletados, finalidades, compartilhamento, retenção, direitos do titular e exclusão. O SindÂncora tem política própria.',
    keywords:
      'política de privacidade Serratech, LGPD, tratamento de dados pessoais, Âncora, encarregado de dados',
    noindex: true,
  },
  // URL informada na ficha do app na Google Play. Precisa continuar
  // respondendo enquanto o app estiver publicado — nao renomear.
  '/legal/rebeca-medina-advocacia/politica-de-privacidade': {
    title: 'Política de Privacidade do app Rebeca Medina Advocacia',
    description:
      'Como o aplicativo Android do escritório Rebeca Medina Advocacia trata dados pessoais: dados, permissões, biometria no aparelho, o que ele não coleta, compartilhamento, retenção, direitos e exclusão.',
    keywords:
      'política de privacidade, Rebeca Medina Advocacia, aplicativo advocacia, LGPD, permissões do app, exclusão de dados',
    noindex: true,
  },
  '/404': {
    title: 'Página não encontrada',
    description:
      'A página solicitada não foi encontrada. Volte para o site da Serratech e continue sua navegação.',
    keywords: 'Serratech',
    noindex: true,
  },
};

// Rotas publicadas no sitemap e indexáveis pelos buscadores.
export const indexablePaths = Object.keys(seoByPath).filter(
  (path) => !seoByPath[path].noindex,
);

// Tudo que vira HTML estático no build. Inclui as rotas noindex: elas não vão
// ao sitemap, mas precisam responder direto no servidor, sem depender de JS.
export const prerenderPaths = Object.keys(seoByPath);

export function resolveSeo(path) {
  const meta = seoByPath[path] ?? seoByPath['/404'];

  return {
    ...meta,
    pageTitle: `${meta.title} | ${siteConfig.name}`,
    canonicalUrl: new URL(path, siteConfig.siteUrl).toString(),
    imageUrl: `${siteConfig.siteUrl}/og-cover.png`,
  };
}
