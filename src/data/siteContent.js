const siteUrl = import.meta.env.VITE_SITE_URL || 'https://serratech.tec.br';
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'contato@serratech.tec.br';
const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL || '/contato#canais';
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || '#';
const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || '#';

// Link público do app do síndico. Fica aqui porque aparece em mais de uma página.
export const playStoreUrl =
  'https://play.google.com/store/apps/details?id=br.com.sindancora.app&hl=pt_BR';

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

// O diagnóstico é a parte mais comercial do site: o cliente precisa se
// reconhecer na descrição antes de acreditar na solução.
export const homePainPoints = [
  {
    icon: 'server',
    title: 'A TI só aparece quando quebra',
    text: 'Ninguém sabe o que está instalado, onde, nem desde quando. Toda semana some uma tarde apagando incêndio que poderia ter sido evitado.',
  },
  {
    icon: 'building',
    title: 'O condomínio roda no grupo de mensagem',
    text: 'Documento importante, reclamação de morador e decisão de assembleia se perdem no meio de bom dia e figurinha. Depois ninguém acha nada.',
  },
  {
    icon: 'users',
    title: 'O síndico virou o gargalo',
    text: 'Tudo passa por uma pessoa: cobrança, obra, reclamação, ata. Quando ela tira férias, a gestão do prédio para junto.',
  },
  {
    icon: 'shield',
    title: 'O backup existe até o dia em que precisa',
    text: 'Quase toda empresa acha que tem backup. Poucas já testaram restaurar. A diferença entre as duas coisas custa caro uma vez só.',
  },
  {
    icon: 'workflow',
    title: 'Gente boa fazendo trabalho de robô',
    text: 'Copiar dado de um lugar para outro, reenviar o mesmo aviso, conferir planilha na mão. Horas de time qualificado indo embora todo mês.',
  },
  {
    icon: 'layers',
    title: 'Cada setor tem a sua própria verdade',
    text: 'Os sistemas não conversam, então cada área tem um número diferente para a mesma pergunta. A reunião vira discussão sobre qual planilha está certa.',
  },
  {
    icon: 'portal',
    title: 'O cliente não sabe onde o pedido dele está',
    text: 'Sem um canal organizado, ele cobra por telefone, e-mail e mensagem ao mesmo tempo. Sua equipe responde três vezes a mesma coisa.',
  },
  {
    icon: 'chart',
    title: 'A decisão é tomada no escuro',
    text: 'Sem número confiável na mão, a gestão decide por percepção e descobre o problema no fechamento do mês, quando já não dá para corrigir.',
  },
];

export const homeSolutions = [
  {
    icon: 'server',
    title: 'Infraestrutura que não te dá susto',
    text: 'Rede, servidores e estações organizados, documentados e monitorados. A base para de ser motivo de preocupação e volta a ser só base.',
  },
  {
    icon: 'spark',
    title: 'Consultoria que evita o gasto errado',
    text: 'Antes de comprar ferramenta ou trocar sistema, uma leitura honesta do que a sua operação realmente precisa — e do que é dinheiro jogado fora.',
  },
  {
    icon: 'app',
    title: 'Sistemas feitos para o seu jeito de trabalhar',
    text: 'Quando nenhum software de prateleira serve, construímos o que falta em volta do processo que você já tem. Sem adaptar a empresa ao sistema.',
  },
  {
    icon: 'workflow',
    title: 'Automação que devolve horas ao time',
    text: 'Tarefas repetitivas passam a acontecer sozinhas, com registro do que foi feito. Sua equipe volta a cuidar do que exige gente.',
  },
  {
    icon: 'building',
    title: 'Tecnologia para quem administra condomínio',
    text: 'Ferramentas pensadas para a rotina real de síndicos e administradoras, feitas por quem conhece o dia a dia do prédio.',
  },
  {
    icon: 'support',
    title: 'Suporte que resolve a causa',
    text: 'Atendimento que não se contenta em fazer o problema sumir hoje. A pergunta é sempre por que ele apareceu — e como não voltar.',
  },
  {
    icon: 'shield',
    title: 'Segurança testada, não prometida',
    text: 'Controle de acesso, cópia dos dados fora da empresa e boas práticas que já foram postas à prova antes de você precisar delas.',
  },
  {
    icon: 'portal',
    title: 'Um canal só para o seu cliente',
    text: 'Ele abre o pedido, acompanha o andamento e acha o documento sozinho. Sua equipe para de trabalhar como central de recados.',
  },
];

// Ficha técnica: cada valor é verificável — no próprio site ou na loja de
// aplicativos. Nada aqui é número de efeito.
export const homeMetrics = [
  { value: '20+', label: 'anos resolvendo problema de tecnologia em operação que não pode parar' },
  {
    value: '2',
    label:
      'plataformas próprias no ar todo dia: o Âncora, para escritórios de advocacia, e o SindÂncora, para gestão de condomínios',
  },
  {
    value: '1',
    label: 'aplicativo do síndico disponível na Google Play, pronto para instalar no Android',
  },
  {
    value: '8',
    label: 'frentes de trabalho que funcionam juntas, da tomada na parede ao relatório da diretoria',
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
    text: 'O escritório de advocacia inteiro em um lugar só: processos, prazos, documentos, honorários e financeiro, com cada cliente na sua própria caixa-forte.',
    to: '/ancora',
  },
  {
    icon: 'building',
    title: 'SindÂncora',
    text: 'Gestão de condomínio com atendimento pelo WhatsApp, obras, assembleias, portaria e cobrança — e app para Android, disponível na Google Play.',
    to: '/app-sindico',
  },
  {
    icon: 'portal',
    title: 'Portal do Cliente',
    text: 'Uma área só sua para abrir chamado, acompanhar o andamento e achar contrato e documento sem precisar pedir para ninguém.',
    to: '/portal-cliente',
  },
  {
    icon: 'workflow',
    title: 'Automações Inteligentes',
    text: 'Avisos, cobranças e respostas que acontecem sozinhas, na hora certa, sem alguém precisar lembrar de apertar o botão.',
    to: '/solucoes#automacoes',
  },
];

/* =========================================================================
   Fábrica de software
   ========================================================================= */

export const factoryPitch =
  'Quando nenhum sistema de prateleira resolve, a Serratech constrói o seu: um time e um processo definidos para tirar a ideia do papel, colocar no ar e continuar cuidando dela depois — do primeiro diagnóstico ao dia a dia com o sistema rodando.';

// O que a fábrica entrega. Cada linha é um tipo de projeto, não uma promessa vaga.
export const factoryCapabilities = [
  {
    title: 'O sistema que a sua operação pediu',
    text: 'Construído em volta do jeito como você já trabalha, e não o contrário. Nada de pagar por cem funções para usar sete.',
  },
  {
    title: 'Área exclusiva para cliente e fornecedor',
    text: 'Cada um entra, vê o que é dele e acompanha o andamento sozinho — com histórico e um responsável em cada etapa.',
  },
  {
    title: 'Painéis que respondem antes da pergunta',
    text: 'O número que hoje leva meio dia para levantar passa a estar na tela quando a reunião começa.',
  },
  {
    title: 'Aplicativo para quem trabalha fora do escritório',
    text: 'Equipe de campo, síndico e time externo registrando, consultando e aprovando de onde estiverem, pelo celular.',
  },
  {
    title: 'Sistemas que finalmente conversam',
    text: 'O que hoje é copiado na mão de um lugar para outro passa a andar sozinho, sem retrabalho e sem erro de digitação.',
  },
  {
    title: 'Rotinas que acontecem sem você lembrar',
    text: 'Cobrança, aviso, relatório e follow-up disparam na hora certa, todo dia, inclusive quando o time está fora.',
  },
  {
    title: 'Resgate de sistema antigo',
    text: 'Aquele programa que ninguém mais mantém e que todo mundo tem medo de mexer. Trocamos com plano, sem parar a operação.',
  },
];

// Sequência real de trabalho — por isso é numerada.
export const factoryProcess = [
  {
    title: 'Entender o problema',
    text: 'Sentamos com quem opera para mapear o caminho que o trabalho faz hoje e onde ele trava. Aqui sai o que o sistema precisa resolver.',
  },
  {
    title: 'Fechar escopo e preço',
    text: 'O que entra, o que fica para depois, quanto custa e quanto tempo leva. Tudo definido antes de escrever a primeira linha.',
  },
  {
    title: 'Ver antes de existir',
    text: 'Você navega pelas telas e aprova o desenho antes da construção. É muito mais barato mudar de ideia nesta etapa.',
  },
  {
    title: 'Entregas de pouco em pouco',
    text: 'Nada de sumir por seis meses e voltar com uma surpresa. Você acompanha o sistema crescendo e opina no caminho.',
  },
  {
    title: 'Testar com quem vai usar',
    text: 'Seu time usa o sistema com dados reais, aponta o que incomoda e é treinado antes de a chave virar.',
  },
  {
    title: 'Colocar no ar com rede de proteção',
    text: 'Entrada em operação com cópia dos dados, controle de acesso e acompanhamento desde o primeiro dia.',
  },
  {
    title: 'Continuar evoluindo',
    text: 'Sistema bom não fica pronto: acompanha o negócio. Você segue com suporte e com espaço no calendário para o que vier.',
  },
];

export const factoryModels = [
  {
    title: 'Projeto fechado',
    text: 'Escopo, prazo e valor definidos depois do diagnóstico. Indicado para quem já sabe onde quer chegar.',
    detail: 'Preço fechado',
  },
  {
    title: 'Time dedicado',
    text: 'Uma equipe reservada para o seu produto, com prioridades revistas a cada ciclo. Para quem vai evoluir sempre.',
    detail: 'Equipe reservada',
  },
  {
    title: 'Cuidar do que já existe',
    text: 'Manutenção, correção e melhorias sobre um sistema que já está no ar — nosso ou de outra empresa.',
    detail: 'Contrato contínuo',
  },
];

// O argumento de venda que a Serratech pode provar.
export const factoryDifferentials = [
  {
    title: 'Um telefone só quando der problema',
    text: 'Quem constrói o sistema é quem cuida do ambiente onde ele roda. Você não vai ficar no meio de uma empresa culpando a outra.',
  },
  {
    title: 'A gente usa o que vende',
    text: 'Âncora e SindÂncora não são portfólio de terceiro: nasceram aqui, são mantidos aqui e atendem cliente de verdade todo dia.',
  },
  {
    title: 'A conversa começa no seu problema',
    text: 'Mais de 20 anos dentro de empresas e condomínios. Você não vai precisar traduzir a sua operação para a gente entender.',
  },
];

export const aboutReasons = [
  {
    icon: 'spark',
    title: 'Sabemos como é na prática',
    text: 'A Serratech nasceu no campo, não na sala de reunião. Conhecemos o que trava a operação porque já destravamos muitas vezes.',
  },
  {
    icon: 'shield',
    title: 'Decisão técnica é decisão de risco',
    text: 'Cada escolha que fazemos precisa proteger a sua informação e sustentar o crescimento. O barato de hoje costuma cobrar caro depois.',
  },
  {
    icon: 'workflow',
    title: 'Simplificar, não complicar',
    text: 'Tecnologia boa some do caminho. Se a sua equipe precisa de manual para usar, alguma coisa foi mal resolvida.',
  },
  {
    icon: 'building',
    title: 'Especialistas em condomínio',
    text: 'Entendemos a rotina de síndicos, administradoras e escritórios que atendem prédios — inclusive a parte que ninguém conta.',
  },
  {
    icon: 'support',
    title: 'Você fala com gente, não com protocolo',
    text: 'Relacionamento próximo e continuado. Quem atende sabe o nome da sua empresa e o histórico do que já foi feito.',
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
      'A base que sustenta tudo: planejada, instalada, organizada e mantida para a sua operação não depender de sorte.',
    items: [
      'Rede cabeada e Wi-Fi',
      'Servidores',
      'Computadores e estações',
      'Cópia de segurança',
      'Controle de acesso',
      'Organização do ambiente',
      'Diagnóstico técnico',
      'Documentação de tudo',
    ],
  },
  {
    id: 'consultoria',
    icon: 'spark',
    title: 'Consultoria em TI',
    description:
      'Uma opinião técnica independente antes de você assinar contrato, trocar sistema ou investir em ferramenta nova.',
    items: [
      'Planejamento de tecnologia',
      'Análise dos sistemas atuais',
      'Redução de riscos',
      'Melhoria de processos',
      'Escolha de ferramentas',
      'Relatórios e diagnósticos',
    ],
  },
  {
    id: 'sistemas',
    icon: 'app',
    title: 'Sistemas e Desenvolvimento',
    description:
      'O software que a sua empresa precisa e que não existe pronto — feito sob medida e mantido depois de entregue.',
    items: [
      'Sistemas de gestão',
      'Portal do cliente',
      'Painéis de indicadores',
      'Módulos administrativos',
      'Ferramentas internas',
      'Ligação entre sistemas',
      'Relatórios e automações',
    ],
  },
  {
    id: 'automacoes',
    icon: 'workflow',
    title: 'Automação e Integrações',
    description:
      'Tudo que hoje é feito na mão, toda semana, do mesmo jeito, passa a acontecer sozinho e com registro.',
    items: [
      'Avisos por WhatsApp',
      'Disparo de e-mail',
      'Cobrança automática',
      'Ligação com o sistema que você já usa',
      'Planilhas alimentadas sozinhas',
      'Atendimento com inteligência artificial',
    ],
  },
  {
    id: 'condominios',
    icon: 'building',
    title: 'Tecnologia para Condomínios',
    description:
      'Para síndicos, administradoras, escritórios que atendem condomínio e prestadores que vivem essa rotina.',
    items: [
      'Cadastro de moradores e unidades',
      'Comunicação com o prédio',
      'Chamados e ocorrências',
      'Documentos do condomínio',
      'Controle de demandas',
      'Relatórios para prestação de contas',
      'Atendimento pelo WhatsApp',
      'Portal do síndico',
      'App do síndico para Android',
    ],
  },
  {
    id: 'seguranca',
    icon: 'shield',
    title: 'Segurança Digital',
    description:
      'Proteger a informação antes do susto: quem acessa o quê, o que acontece se o pior acontecer e como voltar rápido.',
    items: [
      'Cópia de segurança testada',
      'Controle de usuários',
      'Gestão de senhas',
      'Proteção contra perda de dados',
      'Organização de permissões',
      'Registro de quem fez o quê',
      'Plano de recuperação',
    ],
  },
];

/* =========================================================================
   Âncora — para escritórios de advocacia
   ========================================================================= */

export const ancoraPitch =
  'Processos, prazos, documentos, honorários e financeiro deixam de estar espalhados: o Âncora junta tudo, calcula o prazo por você e guarda cada cliente na sua própria caixa-forte.';

export const ancoraAudience = [
  'Escritórios de advocacia de qualquer área',
  'Bancas com vários advogados e correspondentes',
  'Escritórios especializados em Direito Condominial',
  'Departamentos jurídicos dentro da empresa',
  'Quem precisa separar o que cada advogado enxerga',
  'Quem hoje divide processo, prazo e honorário entre planilhas',
];

export const ancoraModules = [
  {
    icon: 'chart',
    title: 'Sua mesa de trabalho',
    bullets: [
      'O escritório inteiro em uma tela ao abrir o dia',
      'Aviso na hora em que algo precisa da sua atenção',
      'Um clique do aviso até o processo',
      'Cronômetro de horas sempre à mão',
    ],
  },
  {
    icon: 'clients',
    title: 'Clientes e partes',
    bullets: [
      'Pessoas e empresas em um cadastro só',
      'Quem é cliente, quem é parte contrária, quem é terceiro',
      'CPF e CNPJ conferidos na hora de digitar',
      'Tudo ligado aos processos e atendimentos',
    ],
  },
  {
    icon: 'contract',
    title: 'Processos',
    bullets: [
      'Partes, andamentos e histórico completo',
      'Documentos e valores presos ao caso certo',
      'Agenda e prazos do processo no mesmo lugar',
      'Consulta automática ao andamento oficial',
    ],
  },
  {
    icon: 'calendar',
    title: 'Prazos e agenda',
    bullets: [
      'O sistema calcula o prazo, você não conta dia no papel',
      'Audiências, compromissos e tarefas juntos',
      'Lembrete automático por e-mail e WhatsApp',
      'Aviso todo dia de manhã, antes de virar problema',
    ],
  },
  {
    icon: 'notify',
    title: 'Publicações',
    bullets: [
      'O que saiu sobre os seus processos chega até você',
      'Sem publicação repetida enchendo a caixa',
      'Aviso imediato quando algo novo entra',
      'Nada mais depende de alguém abrir o diário',
    ],
  },
  {
    icon: 'workflow',
    title: 'Quadro de tarefas',
    bullets: [
      'Todo o trabalho do escritório em um quadro visual',
      'Colunas do jeito que o seu time trabalha',
      'Arrastar a tarefa para mudar de etapa',
      'Cada cartão ligado ao processo de origem',
    ],
  },
  {
    icon: 'support',
    title: 'Atendimentos',
    bullets: [
      'Registro de cada contato com o cliente',
      'Histórico completo da conversa',
      'Busca rápida por cliente ou processo',
      'Aviso automático para quem ficou responsável',
    ],
  },
  {
    icon: 'document',
    title: 'Documentos e modelos',
    bullets: [
      'Todos os arquivos do escritório organizados',
      'Modelos que se preenchem sozinhos',
      'Petição gerada a partir dos dados do processo',
      'Histórico das versões de cada documento',
    ],
  },
  {
    icon: 'cash',
    title: 'Financeiro',
    bullets: [
      'O que falta faturar, o que foi emitido, o que já entrou',
      'Quanto você vai receber nos próximos meses',
      'Receita e despesa separadas por categoria',
      'Exportação para planilha quando precisar',
    ],
  },
  {
    icon: 'clock',
    title: 'Honorários e horas',
    bullets: [
      'Contrato de honorários por cliente',
      'Apontamento de horas por processo',
      'Cronômetro que registra sozinho ao parar',
      'A hora trabalhada vira dinheiro a receber',
    ],
  },
  {
    icon: 'chart',
    title: 'Indicadores',
    bullets: [
      'Quanto entrou e quanto saiu, mês a mês',
      'Processos por situação e por área',
      'Quais clientes realmente sustentam o escritório',
      'Gráficos legíveis, inclusive para quem não enxerga cores',
    ],
  },
  {
    icon: 'message',
    title: 'Comunicação e cobrança',
    bullets: [
      'Mensagens pelo WhatsApp direto do sistema',
      'E-mail enviado e recebido sem sair da tela',
      'Lembretes que disparam na hora certa',
      'Cobrança recorrente que roda sozinha',
    ],
  },
  {
    icon: 'settings',
    title: 'Administração',
    bullets: [
      'Quem entra, o que vê e o que pode alterar',
      'Registro de todas as ações importantes',
      'Configuração da identidade do escritório',
      'Planos e contratos sob controle',
    ],
  },
];

// As garantias do produto, ditas como o cliente pensa nelas — não como o
// time técnico as chamaria.
export const ancoraFoundation = [
  {
    term: 'Sigilo',
    detail:
      'Os dados de cada escritório ficam separados no nível mais profundo do sistema: um cliente não alcança a informação do outro nem por engano',
  },
  {
    term: 'Rastreabilidade',
    detail: 'Toda ação importante fica registrada, com autor e data, desde o primeiro dia de uso',
  },
  {
    term: 'Controle',
    detail: 'Cada pessoa enxerga só o que o cargo dela permite, definido por você',
  },
  {
    term: 'Continuidade',
    detail: 'Ambiente próprio, cópia de segurança e acompanhamento contínuo por conta da Serratech',
  },
];

export const ancoraDifferentials = [
  {
    title: 'Sigilo que não depende de boa vontade',
    text: 'A separação entre escritórios é feita no fundo do sistema, não por uma regrinha de tela. Mesmo uma falha em outro ponto não abre a porta do seu cliente para ninguém.',
  },
  {
    title: 'Prazo calculado, não contado no dedo',
    text: 'O Âncora sabe as regras de contagem e devolve a data certa a partir do ato. Você para de depender de alguém acertar a conta todas as vezes.',
  },
  {
    title: 'Feito por quem também cuida do ambiente',
    text: 'Quem escreve o sistema é quem mantém o servidor, a cópia de segurança e o acompanhamento. Continuidade não vira problema de outra empresa.',
  },
];

export const ancoraJourney = [
  'Cliente cadastrado',
  'Processo aberto',
  'Prazo calculado',
  'Publicação capturada',
  'Tarefa no quadro',
  'Horas apontadas',
  'Fatura emitida',
  'Resultado à vista',
];

// Roadmap: o que ainda não está pronto. Fica separado dos módulos de propósito.
export const ancoraRoadmap = [
  'Acompanhamento automático de todos os tribunais',
  'Prazo sugerido sozinho quando o ato aparece',
  'Painel do dia com prazos, tarefas e audiências',
  'Conciliação com o extrato do banco',
  'Exportação em planilha em todas as telas',
  'Filtros salvos nos indicadores',
];

/* =========================================================================
   SindÂncora — gestão de condomínios
   ========================================================================= */

export const sindancoraPitch =
  'Atendimento, obras, comunicação, cobrança e decisões de assembleia em um lugar só — com aplicativo para Android na Google Play e a LemeIA respondendo dúvidas a partir dos documentos do próprio condomínio.';

export const sindancoraAudience = [
  'Administradoras com vários condomínios',
  'Síndicos profissionais',
  'Síndicos moradores',
  'Conselhos e subsíndicos',
  'Equipes de portaria e zeladoria',
  'Moradores, pelo portal e pelo aplicativo',
];

// Cada tela citada existe no produto.
export const appScreens = [
  {
    title: 'Todos os seus prédios em uma tela',
    accent: 'Visão do dia',
    items: [
      'Cada condomínio da sua carteira',
      'Troca de prédio em um clique',
      'Painel montado do seu jeito',
      'O que vence esta semana',
    ],
  },
  {
    title: 'Atendimento pelo WhatsApp',
    accent: 'Conversa organizada',
    items: [
      'Todas as conversas em um lugar',
      'Setores e respostas prontas',
      'Atendimento automático nas dúvidas simples',
      'Aviso para o prédio inteiro de uma vez',
    ],
  },
  {
    title: 'LemeIA, a assistente do síndico',
    accent: 'Resposta em segundos',
    items: [
      'Pergunta sobre convenção e regimento',
      'Resposta com a fonte no documento',
      'Consulta sobre finanças e ocorrências',
      'Apoio para escrever comunicado',
    ],
  },
  {
    title: 'Portaria digital',
    accent: 'Quem entra e o que chega',
    items: [
      'Visitantes e autorizações',
      'Liberação por QR Code',
      'Registro de entrada e saída',
      'Encomenda com comprovante de retirada',
    ],
  },
];

export const appFeatures = [
  {
    icon: 'spark',
    title: 'A LemeIA responde o que o morador pergunta',
    text: 'Pode fazer churrasco no salão? Qual o horário de obra? A LemeIA lê a convenção, o regimento e as atas do seu condomínio e responde na hora, dizendo em qual documento está escrito.',
  },
  {
    icon: 'app',
    title: 'Aplicativo para Android na Google Play',
    text: 'O síndico instala no próprio celular e resolve de onde estiver: chamado, comunicado, documento e aprovação na palma da mão, sem depender de estar no computador.',
  },
  {
    icon: 'message',
    title: 'Seu WhatsApp pessoal volta a ser seu',
    text: 'As conversas com moradores saem do seu número e passam para um canal do condomínio, com setores, respostas prontas e atendimento automático nas perguntas de sempre.',
  },
  {
    icon: 'support',
    title: 'Chamado com dono e prazo',
    text: 'Cada ocorrência tem responsável, prazo e histórico com fotos e comentários. Ninguém mais pergunta em que pé ficou aquele vazamento do terceiro andar.',
  },
  {
    icon: 'notify',
    title: 'Comunicado que chega mesmo',
    text: 'Aviso enviado por mais de um canal, com data marcada e registro de quem recebeu. Acabou o morador dizendo que nunca ficou sabendo.',
  },
  {
    icon: 'building',
    title: 'Obra que não vira surpresa',
    text: 'Orçamento, cronograma e andamento acompanhados de perto, junto com a manutenção preventiva. A reforma sai do grupo de mensagem e entra no controle.',
  },
  {
    icon: 'users',
    title: 'Assembleia com voto e ata prontas',
    text: 'Pauta, votação, registro de presença e ata em PDF ao final, com apoio da inteligência artificial na redação. Enquete com voto por unidade quando a decisão é menor.',
  },
  {
    icon: 'cash',
    title: 'Cobrança que roda sozinha',
    text: 'Boleto e PIX emitidos, baixa automática quando o morador paga e a inadimplência sempre atualizada, sem ninguém conferir extrato na mão.',
  },
  {
    icon: 'portal',
    title: 'O morador se resolve sozinho',
    text: 'Ele consulta comunicado, abre chamado, reserva o salão, baixa documento, vê a cobrança e confere a encomenda sem precisar te procurar.',
  },
];

// Confiabilidade: o que sustenta o produto quando ninguém está olhando.
export const sindancoraOps = [
  { term: 'Seus dados', detail: 'Cópia de segurança diária, protegida e guardada fora do prédio digital do sistema' },
  { term: 'Disponibilidade', detail: 'Sistema acompanhado de perto para o problema ser visto antes de você sentir' },
  { term: 'Privacidade', detail: 'Cada administradora e cada condomínio enxergam apenas o que lhes pertence' },
  { term: 'Sua marca', detail: 'Nome, logotipo e cores da administradora no sistema que o morador acessa' },
];

export const sindancoraDifferentials = [
  'App para Android na Google Play',
  'Inteligência artificial que lê o seu condomínio',
  'WhatsApp de verdade, não recado por e-mail',
  'Portaria e encomendas sob controle',
  'Assembleia com voto e ata',
  'Cobrança com boleto e PIX',
  'Do síndico ao morador, cada um no seu lugar',
  'Vários condomínios na mesma conta',
  'Privacidade e exclusão de dados garantidas',
];

/* =========================================================================
   Contato e portal
   ========================================================================= */

export const contactInterests = [
  'Infraestrutura em TI',
  'Consultoria',
  'Sistemas sob medida',
  'Âncora',
  'SindÂncora',
  'Automação',
  'Suporte',
  'Outro',
];

export const contactChannels = [
  {
    icon: 'phone',
    title: 'WhatsApp',
    value: 'O caminho mais rápido para começar',
    description:
      'Manda uma mensagem contando o que está travando. A gente responde com as próximas perguntas certas, não com um catálogo.',
    href: whatsappUrl,
  },
  {
    icon: 'mail',
    title: 'E-mail',
    value: contactEmail,
    description:
      'Melhor para proposta, documentação e assunto que precisa ficar registrado com calma.',
    href: `mailto:${contactEmail}`,
  },
  {
    icon: 'pin',
    title: 'Onde atendemos',
    value: 'Remoto sempre, presencial quando faz diferença',
    description:
      'Atendemos empresas, escritórios, condomínios e síndicos com o formato que o projeto pedir.',
    href: '/contato#diagnostico',
  },
  {
    icon: 'clock',
    title: 'Horário',
    value: 'Segunda a sexta, das 8h às 18h',
    description:
      'Fora disso, deixe a mensagem: ela entra na fila do próximo dia útil com o histórico junto.',
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
