const siteUrl = import.meta.env.VITE_SITE_URL || 'https://serratech.tec.br';
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'contato@serratech.tec.br';
const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL || '/contato#canais';
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || '#';
const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || '#';

export const siteConfig = {
  name: 'Serratech',
  fullName: 'Serratech Soluções Digitais Corporativas e Condominiais',
  tagline: 'Tecnologia, segurança e inovação para empresas e condomínios.',
  siteUrl,
  contactEmail,
  whatsappUrl,
  linkedinUrl,
  instagramUrl,
  phoneLabel: 'WhatsApp consultivo sob demanda',
  serviceRegion: 'Atendimento remoto e presencial sob agendamento',
  serviceHours: 'Segunda a sexta, das 8h às 18h',
};

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Âncora', to: '/ancora' },
  { label: 'App Síndico', to: '/app-sindico' },
  { label: 'Contato', to: '/contato' },
];

export const heroKeywords = [
  'Segurança',
  'Automação',
  'Infraestrutura',
  'Condomínios',
  'Sistemas',
  'Suporte',
  'Nuvem',
];

export const homePainPoints = [
  {
    icon: 'server',
    title: 'TI desorganizada e reativa',
    text: 'Ambientes sem padrão, sem documentação e sempre correndo atrás do problema comprometem produtividade e previsibilidade.',
  },
  {
    icon: 'building',
    title: 'Condomínios sem controle digital',
    text: 'Documentos, demandas, comunicados e ocorrências dispersos geram ruído, atrasos e desgaste operacional.',
  },
  {
    icon: 'users',
    title: 'Síndicos sobrecarregados',
    text: 'Rotinas manuais, cobranças descentralizadas e excesso de mensagens tiram foco da gestão estratégica.',
  },
  {
    icon: 'shield',
    title: 'Segurança da informação frágil',
    text: 'Falhas de backup, acessos sem controle e ausência de boas práticas aumentam risco de perda e exposição de dados.',
  },
  {
    icon: 'workflow',
    title: 'Processos repetitivos e manuais',
    text: 'Tarefas que poderiam ser automatizadas consomem horas de trabalho e travam a escalabilidade da operação.',
  },
  {
    icon: 'layers',
    title: 'Sistemas que não conversam',
    text: 'Sem integrações, a empresa perde visão do todo, duplica esforço e fica dependente de retrabalho humano.',
  },
  {
    icon: 'portal',
    title: 'Atendimento sem canal estruturado',
    text: 'Sem portal ou fluxo claro, chamados, solicitações e retornos ficam desorganizados e difíceis de acompanhar.',
  },
  {
    icon: 'chart',
    title: 'Gestão sem visão centralizada',
    text: 'Escritórios e operações que decidem no escuro têm mais dificuldade para crescer com consistência e controle.',
  },
];

export const homeSolutions = [
  {
    icon: 'server',
    title: 'Infraestrutura em TI',
    text: 'Planejamento, organização e evolução da base tecnológica para operações corporativas e condominiais.',
  },
  {
    icon: 'spark',
    title: 'Consultoria tecnológica',
    text: 'Diagnóstico, estratégia e apoio decisório para alinhar tecnologia, operação e crescimento.',
  },
  {
    icon: 'app',
    title: 'Sistemas sob medida',
    text: 'Plataformas, portais, dashboards e módulos internos pensados para resolver fluxos reais do dia a dia.',
  },
  {
    icon: 'workflow',
    title: 'Automações com n8n, APIs e IA',
    text: 'Integração de processos, atendimento e dados para reduzir gargalos e acelerar respostas.',
  },
  {
    icon: 'building',
    title: 'Soluções para condomínios',
    text: 'Ferramentas e processos digitais para síndicos, administradoras e operações que atendem condomínios.',
  },
  {
    icon: 'support',
    title: 'Suporte técnico consultivo',
    text: 'Atendimento orientado à causa e à melhoria estrutural, não apenas ao reparo pontual.',
  },
  {
    icon: 'shield',
    title: 'Segurança digital',
    text: 'Boas práticas, controle de acesso, backup, rastreabilidade e proteção da informação.',
  },
  {
    icon: 'portal',
    title: 'Portais de atendimento',
    text: 'Experiências digitais para clientes acompanharem chamados, documentos, contratos e solicitações.',
  },
];

export const homeMetrics = [
  { value: '+20 anos', label: 'de experiência em tecnologia aplicada a operações reais' },
  { value: '100%', label: 'foco em soluções corporativas com visão consultiva' },
  { value: 'Mercado condominial', label: 'como especialidade estratégica em evolução' },
  { value: 'Sistemas próprios', label: 'em construção contínua com visão de produto SaaS' },
  { value: 'Atendimento próximo', label: 'para decisões técnicas mais seguras e inteligentes' },
];

export const pillars = [
  { icon: 'shield', title: 'Segurança', text: 'Dados protegidos, acessos controlados e operação mais resiliente.' },
  { icon: 'chart', title: 'Performance', text: 'Mais estabilidade, visibilidade e ritmo para a sua equipe.' },
  { icon: 'workflow', title: 'Automação', text: 'Menos retrabalho, mais fluxo inteligente e ganho de escala.' },
  { icon: 'building', title: 'Gestão', text: 'Organização para decisões melhores e processos mais claros.' },
  { icon: 'support', title: 'Atendimento', text: 'Relacionamento consultivo com foco em resultado e continuidade.' },
  { icon: 'spark', title: 'Inovação', text: 'Tecnologia aplicada com visão prática, estratégica e evolutiva.' },
];

export const featuredProducts = [
  {
    icon: 'anchor',
    title: 'Âncora',
    text: 'Hub de gestão jurídica, condominial e empresarial para centralizar clientes, contratos, cobranças, documentos e atendimento.',
    to: '/ancora',
  },
  {
    icon: 'app',
    title: 'Âncora Síndico',
    text: 'Gestão condominial na palma da mão com chamados, comunicados, documentos, agenda e integrações inteligentes.',
    to: '/app-sindico',
  },
  {
    icon: 'portal',
    title: 'Portal do Cliente',
    text: 'Área digital para chamados, solicitações, documentos, contratos e acompanhamento organizado de atendimentos.',
    to: '/portal-cliente',
  },
  {
    icon: 'workflow',
    title: 'Automações Inteligentes',
    text: 'Fluxos com WhatsApp, n8n, APIs e inteligência artificial para conectar setores, reduzir atrito e acelerar respostas.',
    to: '/solucoes#automacoes',
  },
];

export const aboutReasons = [
  {
    icon: 'spark',
    title: 'Vivência de campo',
    text: 'A Serratech nasce da prática, entendendo o que trava a operação e o que realmente precisa funcionar no dia a dia.',
  },
  {
    icon: 'shield',
    title: 'Tecnologia com responsabilidade',
    text: 'Cada decisão técnica precisa proteger dados, reduzir riscos e sustentar o crescimento do negócio.',
  },
  {
    icon: 'workflow',
    title: 'Processos simplificados',
    text: 'Tecnologia boa não complica: organiza, integra, automatiza e deixa o time mais produtivo.',
  },
  {
    icon: 'building',
    title: 'Especialização condominial',
    text: 'Há uma leitura clara das dores de síndicos, administradoras, escritórios jurídicos e prestadores de serviço.',
  },
  {
    icon: 'support',
    title: 'Atendimento próximo',
    text: 'Relacionamento consultivo para evoluir estrutura, rotina, ferramentas e tomada de decisão.',
  },
];

export const values = [
  'Compromisso',
  'Transparência',
  'Segurança',
  'Inovação',
  'Atendimento próximo',
  'Soluções práticas',
  'Evolução contínua',
];

export const solutionsCategories = [
  {
    id: 'infraestrutura',
    icon: 'server',
    title: 'Infraestrutura em TI',
    description:
      'Planejamento, implantação, organização e manutenção da estrutura tecnológica da empresa ou condomínio.',
    items: [
      'Redes cabeadas e Wi-Fi',
      'Servidores',
      'Computadores e estações de trabalho',
      'Backup',
      'Segurança',
      'Controle de acesso',
      'Organização de ambiente tecnológico',
      'Diagnóstico técnico',
      'Documentação da infraestrutura',
    ],
  },
  {
    id: 'consultoria',
    icon: 'spark',
    title: 'Consultoria em TI',
    description:
      'Acompanhamento estratégico para empresas e condomínios que precisam tomar melhores decisões tecnológicas.',
    items: [
      'Planejamento tecnológico',
      'Análise de sistemas',
      'Redução de riscos',
      'Melhoria de processos',
      'Escolha de ferramentas',
      'Governança básica de TI',
      'Relatórios e diagnósticos',
    ],
  },
  {
    id: 'sistemas',
    icon: 'app',
    title: 'Sistemas e Desenvolvimento',
    description:
      'Criação e evolução de sistemas digitais para organizar processos, centralizar informações e automatizar tarefas.',
    items: [
      'Sistemas web',
      'Portais de cliente',
      'Dashboards',
      'Módulos administrativos',
      'Sistemas internos',
      'Integrações com APIs',
      'Relatórios e automações',
    ],
  },
  {
    id: 'automacoes',
    icon: 'workflow',
    title: 'Automação e Integrações',
    description: 'Automatização de processos repetitivos com ferramentas modernas.',
    items: [
      'n8n',
      'WhatsApp',
      'E-mail',
      'APIs',
      'Webhooks',
      'CRMs',
      'Planilhas',
      'Sistemas jurídicos',
      'Sistemas condominiais',
      'Inteligência artificial',
    ],
  },
  {
    id: 'condominios',
    icon: 'building',
    title: 'Tecnologia para Condomínios',
    description:
      'Soluções voltadas para síndicos, administradoras, escritórios jurídicos condominiais e prestadores de serviço.',
    items: [
      'Organização de cadastros',
      'Comunicação com moradores',
      'Chamados',
      'Documentos',
      'Controle de demandas',
      'Relatórios',
      'Apoio à gestão',
      'Integração com WhatsApp',
      'Portal do síndico',
      'App do síndico',
    ],
  },
  {
    id: 'seguranca',
    icon: 'shield',
    title: 'Segurança Digital',
    description:
      'Proteção de dados, boas práticas, controle de acesso e prevenção de perdas para uma operação mais segura.',
    items: [
      'Backup',
      'Controle de usuários',
      'Senhas',
      'Proteção contra perda de dados',
      'Organização de permissões',
      'Auditoria',
      'Logs',
      'Segurança de sistemas',
    ],
  },
];

export const ancoraAudience = [
  'Escritórios de advocacia',
  'Escritórios especializados em Direito Condominial',
  'Administradoras',
  'Consultorias',
  'Empresas prestadoras de serviço',
  'Operações que atendem condomínios',
  'Equipes que precisam organizar clientes, documentos, processos e cobranças',
];

export const ancoraModules = [
  {
    icon: 'chart',
    title: 'Dashboard Executivo',
    bullets: [
      'Visão geral da operação',
      'Indicadores e atalhos inteligentes',
      'Cards de produtividade',
      'Acompanhamento de áreas estratégicas',
    ],
  },
  {
    icon: 'clients',
    title: 'Módulo de Clientes',
    bullets: [
      'Cadastro centralizado de pessoas e empresas',
      'Condomínios, blocos, torres e unidades',
      'Proprietários, locatários, síndicos e administradoras',
      'Timeline, anexos, filtros avançados e rastreabilidade',
    ],
  },
  {
    icon: 'building',
    title: 'Módulo de Condomínios',
    bullets: [
      'Cadastro completo do condomínio',
      'Dados do síndico, endereço e conta bancária',
      'Documentos como convenção, regimento, atas e contratos',
      'Base preparada para importação por planilhas',
    ],
  },
  {
    icon: 'document',
    title: 'Módulo de Propostas',
    bullets: [
      'Criação de propostas comerciais',
      'Templates profissionais e visual premium',
      'Serviços contratados e dados do cliente',
      'Base para assinatura e conversão futura em contrato',
    ],
  },
  {
    icon: 'contract',
    title: 'Módulo de Contratos',
    bullets: [
      'Cadastro e templates padronizados',
      'Geração automática de documentos',
      'Preview antes da emissão',
      'Controle de vigência e anexos',
    ],
  },
  {
    icon: 'cash',
    title: 'Financeiro 360º',
    bullets: [
      'Faturamento, contas a pagar e a receber',
      'Controle de caixa, receitas e despesas',
      'Relatórios gerenciais',
      'Exportação em CSV, XLSX e PDF',
    ],
  },
  {
    icon: 'message',
    title: 'Módulo de Cobrança',
    bullets: [
      'Gestão de cobranças e inadimplentes',
      'Importação por planilhas',
      'Histórico de cobrança por unidade e referência',
      'Base para automações por WhatsApp, e-mail e SMS',
    ],
  },
  {
    icon: 'portal',
    title: 'Portal do Cliente',
    bullets: [
      'Área exclusiva com login próprio',
      'Consulta de informações e documentos',
      'Abertura e acompanhamento de solicitações',
      'Comunicação organizada com o escritório ou empresa',
    ],
  },
  {
    icon: 'workflow',
    title: 'Módulo de Processos',
    bullets: [
      'Cadastro de processos e andamentos',
      'Audiências, prazos e histórico',
      'Integração futura com bases públicas',
      'Atualizações automáticas via portal, WhatsApp e API',
    ],
  },
  {
    icon: 'document',
    title: 'Gerador de Convenção e Regimento Interno',
    bullets: [
      'Geração assistida de documentos condominiais',
      'Organização por cláusulas e templates',
      'Adequação por perfil do condomínio',
      'Base para apoio legal municipal, estadual e federal',
    ],
  },
  {
    icon: 'workflow',
    title: 'Integrações e API',
    bullets: [
      'Integração com n8n, WhatsApp e webhooks',
      'APIs externas e consulta automática de informações',
      'Automação de atendimento',
      'Base futura para ecossistema jurídico-condominial conectado',
    ],
  },
  {
    icon: 'shield',
    title: 'Logs e Auditoria',
    bullets: [
      'Registro de ações',
      'Segurança e rastreabilidade',
      'Controle administrativo',
      'Transparência operacional',
    ],
  },
  {
    icon: 'settings',
    title: 'Configurações e Branding',
    bullets: [
      'Personalização visual com logo e favicon',
      'Identidade do escritório ou empresa',
      'Ajustes administrativos',
      'Base para permissões futuras',
    ],
  },
];

export const ancoraDifferentials = [
  'Modular',
  'Escalável',
  'Focado no mercado jurídico-condominial',
  'Preparado para automações',
  'Baseado em problemas reais',
  'Integração com WhatsApp, n8n e APIs',
  'Portal do cliente',
  'Visão de produto SaaS',
  'Uso interno hoje com potencial de licenciamento futuro',
];

export const ancoraJourney = [
  'Cliente entra',
  'Proposta',
  'Contrato',
  'Cadastro',
  'Cobrança / Processo',
  'Portal do Cliente',
  'Relatórios',
  'Automação',
];

export const ancoraRoadmap = [
  'App Android',
  'Portal do cliente completo',
  'Consulta automática de processos',
  'IA para pareceres simples',
  'API pública',
  'Módulo de tarefas',
  'Integração com WhatsApp',
  'Assinatura digital',
  'Relatórios avançados',
  'Multiempresa / multitenant',
  'Módulo de documentos inteligentes',
];

export const appScreens = [
  {
    title: 'Dashboard do síndico',
    accent: 'Chamados pendentes',
    items: ['Visão geral', 'Alertas prioritários', 'Comunicados recentes', 'Atalhos para documentos'],
  },
  {
    title: 'Chamados abertos',
    accent: 'Status em tempo real',
    items: ['Aberto', 'Em análise', 'Em execução', 'Concluído'],
  },
  {
    title: 'Documentos do condomínio',
    accent: 'Tudo organizado',
    items: ['Convenção', 'Regimento', 'Atas', 'Contratos'],
  },
  {
    title: 'Notificações e agenda',
    accent: 'Rotina na palma da mão',
    items: ['Assembleias', 'Manutenções', 'Vistorias', 'Avisos push'],
  },
];

export const appFeatures = [
  {
    icon: 'chart',
    title: 'Dashboard do condomínio',
    text: 'Visão geral, chamados pendentes, comunicados recentes, documentos importantes e alertas da operação.',
  },
  {
    icon: 'support',
    title: 'Chamados com acompanhamento',
    text: 'Fluxo de abertura, anexos, comentários, fotos e status claros do atendimento à conclusão.',
  },
  {
    icon: 'notify',
    title: 'Comunicados e push',
    text: 'Avisos importantes, histórico e confirmação de leitura para melhorar comunicação com os moradores.',
  },
  {
    icon: 'document',
    title: 'Documentos do condomínio',
    text: 'Convenção, regimento, atas, contratos, laudos, manuais e prestação de contas disponíveis no app.',
  },
  {
    icon: 'building',
    title: 'Ocorrências',
    text: 'Registro com classificação, fotos, histórico e relatórios rápidos para acompanhamento mais organizado.',
  },
  {
    icon: 'calendar',
    title: 'Agenda da operação',
    text: 'Assembleias, manutenções, vistorias, reuniões e reservas futuras reunidas em uma experiência clara.',
  },
  {
    icon: 'spark',
    title: 'IA condominial futura',
    text: 'Assistente para consultar regras, responder dúvidas frequentes e apoiar o síndico com base nos documentos.',
  },
  {
    icon: 'message',
    title: 'Integração com WhatsApp',
    text: 'Avisos, lembretes, status de chamados e mensagens automáticas conectando gestão e comunicação.',
  },
  {
    icon: 'anchor',
    title: 'Integração com o Âncora',
    text: 'Dados, documentos, demandas, atendimento e solicitações jurídicas ou administrativas conectados ao hub.',
  },
];

export const contactInterests = [
  'Infraestrutura em TI',
  'Consultoria',
  'Sistemas',
  'Âncora',
  'App do Síndico',
  'Automação',
  'Suporte',
  'Outro',
];

export const contactChannels = [
  {
    icon: 'phone',
    title: 'WhatsApp consultivo',
    value: 'Canal para novos projetos e solicitações comerciais',
    description: 'Use o WhatsApp para acelerar o primeiro contato e alinhar diagnóstico, escopo e próximos passos.',
    href: whatsappUrl,
  },
  {
    icon: 'mail',
    title: 'E-mail',
    value: contactEmail,
    description: 'Ideal para demandas institucionais, propostas, documentação e alinhamentos comerciais.',
    href: `mailto:${contactEmail}`,
  },
  {
    icon: 'pin',
    title: 'Localização / atendimento',
    value: 'Atuação com suporte remoto e agenda presencial',
    description: 'Projetos atendidos com formato flexível para empresas, escritórios, condomínios e síndicos.',
    href: '/contato#diagnostico',
  },
  {
    icon: 'clock',
    title: 'Horário de atendimento',
    value: 'Segunda a sexta, das 8h às 18h',
    description: 'Operação consultiva com respostas organizadas e visão de continuidade para cada cliente.',
    href: '/portal-cliente',
  },
];

export const portalCategories = [
  'Suporte em TI',
  'Infraestrutura',
  'Sistema Âncora',
  'App Síndico',
  'Consultoria',
  'Automação',
  'Outro',
];

export const portalPriorities = ['Baixa', 'Normal', 'Alta', 'Crítica'];
