const siteUrl = import.meta.env.VITE_SITE_URL || 'https://serratech.tec.br';
const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL || 'contato@serratech.tec.br';

export const siteConfig = {
  name: 'Serratech',
  fullName: 'Serratech Soluções Digitais Corporativas e Condominiais',
  tagline:
    'Fábrica de software e desenvolvedora do ÂncoraHUB. Mais tempo para novos negócios.',
  siteUrl,
  contactEmail,
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL || '',
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || '',
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || '',
  serviceRegion: 'Atendimento remoto e presencial sob agendamento',
  serviceHours: 'Segunda a sexta, das 8h às 18h',
};
export const playStoreUrl =
  'https://play.google.com/store/apps/details?id=br.com.sindancora.app&hl=pt_BR';

// Existing product routes are retained to preserve shared links and indexing.
export const navigation = [
  { label: 'Fábrica de software', to: '/fabrica-de-software' },
  { label: 'ÂncoraHUB', to: '/ancora' },
  { label: 'Infraestrutura', to: '/#infraestrutura' },
  { label: 'Serratech', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];
export const featuredProducts = [
  { title: 'ÂncoraHUB', to: '/ancora' },
  { title: 'SindÂncora', to: '/app-sindico' },
  { title: 'ÂncorADV · Em breve', to: '/ancoradv' },
];
export const contactInterests = [
  'Fábrica de software',
  'SindÂncora',
  'ÂncorADV',
  'Parceria com administradora',
  'Integração e automação',
  'Infraestrutura e segurança',
  'Suporte',
  'Outro',
];

export const factoryPitch =
  'Software sob medida para simplificar o trabalho, proteger informações e devolver tempo para novos negócios. A Serratech reúne desenvolvimento e experiência em operação para cuidar do seu projeto, do primeiro diagnóstico à evolução do sistema.';
export const factoryCapabilities = [
  {
    title: 'Sistemas sob medida',
    text: 'Construímos em torno do seu fluxo de trabalho, com escopo claro e foco no que realmente faz a operação avançar.',
  },
  {
    title: 'Portais para clientes e parceiros',
    text: 'Informações organizadas, acessos definidos e acompanhamento para quem participa de cada etapa do trabalho.',
  },
  {
    title: 'Painéis para decidir com contexto',
    text: 'Reunimos os dados que a sua equipe precisa para acompanhar o negócio e identificar o próximo passo.',
  },
  {
    title: 'Aplicativos para o trabalho em movimento',
    text: 'Consulta, registro e acompanhamento pelo celular, para equipes que precisam trabalhar além do escritório.',
  },
  {
    title: 'Integração entre sistemas',
    text: 'Conectamos ferramentas para reduzir a cópia manual de informações e dar continuidade ao fluxo entre as áreas.',
  },
  {
    title: 'Automação de processos',
    text: 'Rotinas repetitivas com mais consistência e acompanhamento, devolvendo tempo para o trabalho que depende de pessoas.',
  },
  {
    title: 'Evolução de sistemas existentes',
    text: 'Modernização planejada, com cuidado na transição e na continuidade da operação.',
  },
];
export const factoryProcess = [
  {
    title: 'Entender o seu fluxo',
    text: 'Mapeamos a rotina com quem opera, identificamos os pontos de atrito e definimos o que o projeto precisa melhorar.',
  },
  {
    title: 'Definir o projeto',
    text: 'Escopo, prioridades, prazo e investimento alinhados. Você sabe o que vai receber e como acompanhar.',
  },
  {
    title: 'Desenhar a experiência',
    text: 'Fluxos e telas tornam a solução concreta antes do desenvolvimento. A equipe participa das decisões.',
  },
  {
    title: 'Construir com acompanhamento',
    text: 'Entregas por etapas, com comunicação e espaço para validar o avanço do produto.',
  },
  {
    title: 'Validar qualidade e segurança',
    text: 'Verificamos o comportamento dos fluxos e a proteção das informações. A validação externa em cibersegurança amplia o olhar sobre o sistema.',
  },
  {
    title: 'Preparar a entrada em operação',
    text: 'Planejamos a publicação, a proteção dos dados e o acompanhamento da transição para o sistema.',
  },
  {
    title: 'Evoluir com o negócio',
    text: 'Manutenção e evolução para acompanhar as mudanças da sua operação e as próximas oportunidades.',
  },
];
export const factoryModels = [
  {
    title: 'Projeto definido',
    detail: 'Objetivo e escopo alinhados',
    text: 'Para resolver uma necessidade concreta, com entregas, prioridades e investimento definidos depois do diagnóstico.',
  },
  {
    title: 'Time dedicado',
    detail: 'Evolução contínua',
    text: 'Uma equipe voltada ao seu produto, com prioridades revistas a cada ciclo e continuidade no desenvolvimento.',
  },
  {
    title: 'Evolução do que já existe',
    detail: 'Cuidado com a sua operação',
    text: 'Correções, melhorias e modernização planejada para sistemas que já fazem parte do negócio.',
  },
];
export const factoryDifferentials = [
  {
    title: 'Experiência em ambientes críticos',
    text: 'Repertório em data centers, varejo com picos de demanda e projetos em multinacionais orienta as decisões de engenharia.',
  },
  {
    title: 'Tecnologia que nasce aqui',
    text: 'A Serratech é desenvolvedora do ÂncoraHUB. O SindÂncora está disponível e o ÂncorADV está em desenvolvimento.',
  },
  {
    title: 'Qualidade e segurança no processo',
    text: 'A validação das entregas e a cibersegurança externa de ponta a ponta fazem parte do cuidado com os nossos sistemas.',
  },
  {
    title: 'Infraestrutura preparada para incidentes',
    text: 'Servidores conectados em Helsinki, Nuremberg, Ohio e São Paulo, com espelhamento entre regiões e política rigorosa de backup.',
  },
];
