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

// A home fica fora do menu: a marca no header já cumpre esse papel.
// A rota /app-sindico é mantida — está indexada — mas o rótulo acompanha o
// nome real do produto em produção, SindÂncora.
export const navigation = [
  { label: 'Sobre', to: '/sobre' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Fábrica de Software', to: '/fabrica-de-software' },
  { label: 'Âncora', to: '/ancora' },
  { label: 'SindÂncora', to: '/app-sindico' },
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

// Ficha técnica: cada valor é verificável — no próprio site, no repositório dos
// produtos ou na loja de aplicativos. Nada aqui é número de efeito.
export const homeMetrics = [
  { value: '20+', label: 'anos de experiência em TI aplicada a operações que não podem parar' },
  {
    value: '2',
    label:
      'plataformas SaaS multitenant próprias em produção: o Âncora, para escritórios de advocacia, e o SindÂncora, para gestão condominial',
  },
  {
    value: '1',
    label: 'aplicativo do síndico publicado na Google Play, com API própria por trás',
  },
  {
    value: '8',
    label: 'frentes técnicas que operam de forma integrada, da infraestrutura à automação',
  },
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
    text: 'SaaS jurídico multitenant para escritórios de advocacia: processos, publicações, honorários, financeiro, agenda e automações com isolamento de dados por escritório.',
    to: '/ancora',
  },
  {
    icon: 'building',
    title: 'SindÂncora',
    text: 'Plataforma de gestão condominial com atendimento por WhatsApp, obras, assembleias, portaria, cobrança e a LemeIA respondendo com base nos documentos do condomínio.',
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

/* =========================================================================
   Fábrica de software
   ========================================================================= */

export const factoryPitch =
  'A Serratech opera como fábrica de software: um time e um processo definidos para construir, entregar e sustentar o sistema que a sua operação precisa — do primeiro diagnóstico ao deploy em produção.';

// O que a fábrica entrega. Cada linha é um tipo de projeto, não uma promessa vaga.
export const factoryCapabilities = [
  {
    title: 'Sistemas web sob medida',
    text: 'Plataformas de gestão, módulos administrativos e ferramentas internas construídas em torno do fluxo real da operação, não de um template genérico.',
  },
  {
    title: 'Portais e áreas logadas',
    text: 'Ambientes para clientes, fornecedores ou moradores acompanharem chamados, documentos, contratos e solicitações com histórico e responsável.',
  },
  {
    title: 'Dashboards e indicadores',
    text: 'Painéis que consolidam dados dispersos em sistemas e planilhas para que a gestão decida com número, não com percepção.',
  },
  {
    title: 'Aplicativos móveis',
    text: 'Apps e PWAs para equipes de campo, síndicos e operações que precisam registrar, consultar e aprovar fora do escritório.',
  },
  {
    title: 'Integrações e APIs',
    text: 'Conexão entre sistemas que hoje não conversam: ERPs, CRMs, sistemas jurídicos, planilhas, WhatsApp e serviços externos.',
  },
  {
    title: 'Automação de processos',
    text: 'Fluxos com n8n, webhooks e inteligência artificial para eliminar tarefas repetitivas e acelerar respostas ao cliente.',
  },
  {
    title: 'Modernização de legado',
    text: 'Migração e reconstrução de sistemas antigos que travam a operação, com transição planejada e sem parar o negócio.',
  },
];

// Sequência real de trabalho — por isso é numerada.
export const factoryProcess = [
  {
    title: 'Discovery',
    text: 'Entendimento da operação, mapeamento de fluxos, gargalos e regras de negócio. Sai daqui o que o sistema precisa resolver.',
  },
  {
    title: 'Escopo e arquitetura',
    text: 'Definição técnica, modelo de dados, integrações necessárias e prioridades. Escopo, prazo e custo ficam claros antes de escrever código.',
  },
  {
    title: 'Protótipo navegável',
    text: 'Interface desenhada e clicável para validar com quem vai usar, antes que mudanças custem caro.',
  },
  {
    title: 'Desenvolvimento em ciclos',
    text: 'Entregas curtas e frequentes, com ambiente de homologação disponível para acompanhamento contínuo.',
  },
  {
    title: 'Homologação',
    text: 'Testes com usuários reais e dados reais, ajustes finais e treinamento da equipe que vai operar.',
  },
  {
    title: 'Deploy e operação',
    text: 'Publicação em infraestrutura preparada, com backup, monitoramento e controle de acesso desde o primeiro dia.',
  },
  {
    title: 'Evolução contínua',
    text: 'Roadmap, suporte e novas entregas. O sistema acompanha a operação em vez de envelhecer parado.',
  },
];

export const factoryModels = [
  {
    title: 'Projeto fechado',
    text: 'Escopo, prazo e valor definidos após o discovery. Indicado para sistemas com objetivo delimitado.',
    detail: 'Escopo definido',
  },
  {
    title: 'Squad dedicado',
    text: 'Time alocado por período para evoluir um produto de forma contínua, com prioridades revisadas a cada ciclo.',
    detail: 'Time alocado',
  },
  {
    title: 'Sustentação e evolução',
    text: 'Manutenção, correções e novas funcionalidades sobre um sistema já em produção — nosso ou de terceiros.',
    detail: 'Contrato contínuo',
  },
];

// O argumento de venda que a Serratech pode provar.
export const factoryDifferentials = [
  {
    title: 'Software que nasce operável',
    text: 'Quem constrói o sistema também domina a infraestrutura que o sustenta. Backup, acesso, monitoramento e continuidade entram no projeto, não depois dele.',
  },
  {
    title: 'Produtos próprios em produção',
    text: 'O Âncora e o SindÂncora não são portfólio de terceiros: foram desenhados, construídos e são operados pela Serratech — servidor, backup e monitoramento inclusos.',
  },
  {
    title: 'Domínio do negócio do cliente',
    text: 'Mais de 20 anos dentro de operações corporativas e condominiais. A conversa começa no problema, não no framework.',
  },
];

export const factoryStack = [
  { term: 'Aplicação', detail: 'React, TypeScript e interfaces responsivas' },
  { term: 'Serviços', detail: 'Node.js, APIs REST e bancos relacionais' },
  { term: 'Infraestrutura', detail: 'Linux, Docker, Nginx, backup e monitoramento' },
  { term: 'Automação', detail: 'n8n, webhooks, WhatsApp e integrações com IA' },
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

/* =========================================================================
   Âncora — SaaS jurídico multitenant
   Conteúdo conferido contra o repositório do produto (README, docs/roadmap.md
   e as páginas em apps/web/src/pages). O que está aqui existe em código; o que
   ainda não existe vive em `ancoraRoadmap`, separado de propósito.
   ========================================================================= */

export const ancoraPitch =
  'O Âncora é um SaaS jurídico multitenant para escritórios de advocacia: processos, prazos, publicações, documentos, honorários e financeiro em uma base só, com os dados de cada escritório isolados no próprio banco.';

export const ancoraAudience = [
  'Escritórios de advocacia de qualquer área',
  'Bancas com vários advogados e correspondentes',
  'Escritórios de Direito Condominial',
  'Departamentos jurídicos internos',
  'Operações que precisam separar dados por cliente e por responsável',
  'Times que hoje dividem processo, prazo e honorário entre planilhas',
];

export const ancoraModules = [
  {
    icon: 'chart',
    title: 'Área de trabalho',
    bullets: [
      'Visão consolidada da operação do escritório',
      'Central de alertas com sino, lidos e não lidos',
      'Deep-link do alerta direto para o registro',
      'Cronômetro de timesheet no próprio cabeçalho',
    ],
  },
  {
    icon: 'clients',
    title: 'Pessoas',
    bullets: [
      'Cadastro de pessoa física e jurídica',
      'Papéis por pessoa: cliente, parte contrária, terceiro',
      'Validação de CPF e CNPJ na entrada',
      'Vínculo direto com processos e atendimentos',
    ],
  },
  {
    icon: 'contract',
    title: 'Processos',
    bullets: [
      'Partes, andamentos e histórico por processo',
      'Documentos e financeiro amarrados ao caso',
      'Agenda e prazos vinculados',
      'Consulta ao DataJUD em fila diária',
    ],
  },
  {
    icon: 'calendar',
    title: 'Agenda e prazos',
    bullets: [
      'Calculadora de prazos com motor CPC e CLT',
      'Audiências, compromissos e tarefas em uma agenda',
      'Lembretes automáticos por e-mail e WhatsApp',
      'Rotina diária de disparo às 07h',
    ],
  },
  {
    icon: 'notify',
    title: 'Publicações e monitoramento',
    bullets: [
      'Captura de publicações e andamentos',
      'Deduplicação antes de chegar ao escritório',
      'Alerta no sino quando algo novo entra',
      'Ingestão por API assinada, sem tocar o banco do tenant',
    ],
  },
  {
    icon: 'workflow',
    title: 'Kanban',
    bullets: [
      'Board de casos e tarefas',
      'Colunas configuráveis por escritório',
      'Arrastar e soltar sem dependência externa',
      'Cartão ligado ao processo de origem',
    ],
  },
  {
    icon: 'support',
    title: 'Atendimentos',
    bullets: [
      'Registro de atendimento ligado a pessoa ou processo',
      'Timeline de interações',
      'Filtros e drawer de detalhe',
      'Alerta ao atribuir responsável',
    ],
  },
  {
    icon: 'document',
    title: 'Documentos e modelos',
    bullets: [
      'GED com Google Drive por escritório',
      'Templates com merge de variáveis',
      'Geração a partir dos dados do processo',
      'Histórico de versões dos documentos',
    ],
  },
  {
    icon: 'cash',
    title: 'Financeiro',
    bullets: [
      'Faturas: a faturar, emitidas, pagas e canceladas',
      'Fluxo de caixa com realizado contra previsto',
      'Categorias, centros de custo e contas bancárias',
      'Exportação em CSV',
    ],
  },
  {
    icon: 'clock',
    title: 'Honorários e timesheet',
    bullets: [
      'Contratos de honorários por cliente',
      'Apontamento de horas por processo',
      'Cronômetro que registra ao parar',
      'Horas viram recebível no financeiro',
    ],
  },
  {
    icon: 'chart',
    title: 'Indicadores',
    bullets: [
      'Receita contra despesa realizada',
      'Processos por status e por área',
      'Ranking de clientes',
      'Gráficos legíveis para daltonismo',
    ],
  },
  {
    icon: 'message',
    title: 'Automações e canais',
    bullets: [
      'WhatsApp via Evolution API',
      'E-mail com SMTP e IMAP',
      'Lembretes e disparos agendados',
      'Cobrança recorrente integrada ao Asaas',
    ],
  },
  {
    icon: 'settings',
    title: 'Super administração',
    bullets: [
      'Gestão de escritórios, planos e assinaturas',
      'Configuração global da plataforma',
      'Faturamento do próprio SaaS',
      'Contratos customizados por cliente',
    ],
  },
];

// A fundação técnica é o argumento comercial mais forte do Âncora — e é
// verificável no repositório, não uma promessa de marketing.
export const ancoraFoundation = [
  {
    term: 'Isolamento',
    detail:
      'Row Level Security do PostgreSQL como camada obrigatória: um escritório não alcança a linha do outro nem por erro de aplicação',
  },
  {
    term: 'Auditoria',
    detail: 'Registro das ações sensíveis desde a fundação do produto, não como módulo adicionado depois',
  },
  {
    term: 'Permissões',
    detail: 'Perfis e permissões granulares controlando rota, módulo e dado visível',
  },
  {
    term: 'Operação',
    detail: 'Deploy em container com Postgres dedicado, proxy reverso e TLS',
  },
];

export const ancoraDifferentials = [
  {
    title: 'Segurança na fundação, não na borda',
    text: 'O isolamento entre escritórios é feito pelo banco, com Row Level Security. Mesmo uma falha na aplicação não vaza dado de um cliente para outro — a regra está abaixo do código.',
  },
  {
    title: 'Prazo calculado, não digitado',
    text: 'O motor de prazos entende CPC e CLT. O sistema calcula a data a partir do ato, em vez de depender de alguém contar dias no calendário e acertar sempre.',
  },
  {
    title: 'Construído por quem também opera',
    text: 'Quem escreve o Âncora sustenta o servidor, o backup e o monitoramento em que ele roda. Continuidade não vira problema de outra empresa.',
  },
];

export const ancoraJourney = [
  'Pessoa cadastrada',
  'Processo aberto',
  'Prazo calculado',
  'Publicação capturada',
  'Tarefa no kanban',
  'Horas apontadas',
  'Fatura emitida',
  'Indicador atualizado',
];

// Roadmap: o que ainda não está pronto. Fica separado dos módulos de propósito.
export const ancoraRoadmap = [
  'Motor de monitoramento próprio com a API Comunica/DJEN do PJe',
  'Detecção automática de ato que abre prazo',
  'Painel "meu dia" com prazos, tarefas e audiências',
  'Conciliação bancária',
  'Exportação em XLSX nas demais telas',
  'Filtros salvos e colunas configuráveis nos indicadores',
];

/* =========================================================================
   SindÂncora — gestão condominial
   Conferido contra `docs/produto/10-resumo-executivo-sistema-e-app-sindico.md`
   e as rotas em `routes/web.php` do produto.
   ========================================================================= */

export const sindancoraPitch =
  'O SindÂncora é a plataforma de gestão condominial da Serratech: atendimento, obras, comunicação, cobrança e decisões de assembleia em um só lugar — com a LemeIA respondendo a partir dos documentos do próprio condomínio.';

export const sindancoraAudience = [
  'Administradoras com carteira de condomínios',
  'Síndicos profissionais',
  'Síndicos moradores',
  'Conselhos e subsíndicos',
  'Equipes de portaria e zeladoria',
  'Moradores, pelo portal e pelo app',
];

// Cada tela citada existe como rota no produto.
export const appScreens = [
  {
    title: 'Carteira de condomínios',
    accent: 'Visão consolidada',
    items: ['Todos os condomínios geridos', 'Seletor de contexto', 'Dashboard modular', 'Cronograma consolidado'],
  },
  {
    title: 'Atendimento por WhatsApp',
    accent: 'Inbox em tempo real',
    items: ['Conversas centralizadas', 'Setores e respostas rápidas', 'Chatbot de triagem', 'Campanhas e disparos'],
  },
  {
    title: 'LemeIA',
    accent: 'Assistente do síndico',
    items: ['Responde pelos documentos do condomínio', 'Cita a fonte da resposta', 'Busca híbrida com pgvector', 'Apoio a inadimplência e comunicados'],
  },
  {
    title: 'Portaria digital',
    accent: 'Entrada controlada',
    items: ['Visitantes e autorizações', 'QR code e token', 'Check-in e check-out', 'Encomendas com rastro de retirada'],
  },
];

export const appFeatures = [
  {
    icon: 'spark',
    title: 'LemeIA, o assistente do síndico',
    text: 'Responde perguntas sobre convenção, regimento e atas usando os documentos indexados do próprio condomínio, com busca híbrida e citação da fonte — não é um chat genérico.',
  },
  {
    icon: 'message',
    title: 'Atendimento por WhatsApp',
    text: 'Conexão por condomínio, setores, chatbot de triagem, inbox em tempo real, mídia e campanhas. A conversa com o morador para de viver no celular pessoal do síndico.',
  },
  {
    icon: 'support',
    title: 'Ocorrências com SLA',
    text: 'Abertura com anexos, responsável, status, comentários e timeline. Cada ocorrência tem prazo, dono e histórico auditável.',
  },
  {
    icon: 'notify',
    title: 'Comunicados multicanal',
    text: 'Editor rico, anexos, agendamento e disparo por mais de um canal, com histórico do que foi enviado e para quem.',
  },
  {
    icon: 'building',
    title: 'Obras, orçamentos e manutenção',
    text: 'Manutenção preventiva, obras e reformas com orçamento, cronograma e andamento — a reforma deixa de ser controlada por grupo de mensagem.',
  },
  {
    icon: 'users',
    title: 'Assembleias digitais',
    text: 'Pauta, votação, registro de presença, geração de ata em PDF e apoio da IA na redação. Enquetes com voto por unidade e link público.',
  },
  {
    icon: 'cash',
    title: 'Cobrança e financeiro',
    text: 'Cobranças, despesas, inadimplência e relatórios, com PIX e boleto pelo Asaas e conciliação por webhook.',
  },
  {
    icon: 'document',
    title: 'Documentos e portaria',
    text: 'Documentos com visibilidade controlada, download assinado e lixeira. Portaria com visitantes, autorizações, QR e encomendas.',
  },
  {
    icon: 'portal',
    title: 'Portal e app do morador',
    text: 'O morador acompanha comunicados, ocorrências, reservas, documentos, cobranças, encomendas, visitantes e enquetes sem passar pelo síndico.',
  },
];

// Confiabilidade: o que sustenta o produto quando ninguém está olhando.
export const sindancoraOps = [
  { term: 'Backup', detail: 'Diário e criptografado, enviado para armazenamento externo' },
  { term: 'Saúde', detail: 'Health check profundo de banco e cache em /api/health' },
  { term: 'Erros', detail: 'Monitoramento com contexto por tenant e sem dado pessoal' },
  { term: 'Isolamento', detail: 'Multitenant com permissões, planos, limites e escopo por condomínio' },
];

export const sindancoraDifferentials = [
  'Multitenant por administradora',
  'Escopo por condomínio',
  'Perfis do super admin ao morador',
  'IA ancorada nos documentos do condomínio',
  'WhatsApp nativo, não plugin',
  'Portaria e encomendas',
  'Assembleia com voto e ata',
  'API pública com escopos e webhooks',
  'LGPD com exportação e exclusão de conta',
];

export const contactInterests = [
  'Infraestrutura em TI',
  'Consultoria',
  'Sistemas',
  'Âncora',
  'SindÂncora',
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
  'SindÂncora',
  'Consultoria',
  'Automação',
  'Outro',
];

export const portalPriorities = ['Baixa', 'Normal', 'Alta', 'Crítica'];
