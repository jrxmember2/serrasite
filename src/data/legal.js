import { siteConfig } from './siteContent';

/* =========================================================================
   Política de Privacidade
   Texto único, versionado junto com o site. Fica em arquivo de dados porque a
   página é só a casca: quem revisa o texto jurídico mexe aqui, não no JSX.
   ========================================================================= */

export const privacyPolicy = {
  updatedAt: '9 de setembro de 2026',
  version: '1.0',
  summary:
    'Esta política explica quais dados a Serratech trata, por que trata, com quem compartilha e como você pede acesso, correção ou exclusão. Vale para este site, para o Portal do Cliente, para o sistema Âncora e para o SindÂncora, incluindo o aplicativo Android publicado na Google Play.',

  // O resumo em três linhas existe porque quase ninguém lê política inteira.
  // O texto completo abaixo é o que vale juridicamente.
  highlights: [
    {
      term: 'Não vendemos dados',
      detail:
        'Nenhum dado pessoal tratado pela Serratech é vendido, alugado ou cedido para publicidade de terceiros.',
    },
    {
      term: 'Cada cliente na sua caixa',
      detail:
        'Escritório, administradora e condomínio enxergam apenas os próprios dados. O isolamento é aplicado pelo sistema, não pela boa vontade de quem opera.',
    },
    {
      term: 'Você pode pedir exclusão',
      detail:
        'A qualquer momento, por e-mail ou pelo próprio aplicativo, com prazo de resposta de 15 dias.',
    },
  ],

  sections: [
    {
      id: 'quem-somos',
      title: 'Quem trata os seus dados',
      blocks: [
        {
          type: 'p',
          text: `${siteConfig.fullName} ("Serratech", "nós") é a empresa responsável por este site e pelas plataformas Âncora, SindÂncora e Portal do Cliente. Esta política segue a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, "LGPD").`,
        },
        {
          type: 'p',
          text: 'Para dúvidas, pedidos e reclamações sobre dados pessoais, fale com o nosso encarregado pelo tratamento de dados pessoais:',
        },
        { type: 'contact' },
      ],
    },

    {
      id: 'papeis',
      title: 'Em que papel atuamos',
      blocks: [
        {
          type: 'p',
          text: 'A LGPD separa quem decide o que fazer com o dado (controlador) de quem trata o dado por conta de outra pessoa (operador). A Serratech ocupa os dois papéis, dependendo do contexto:',
        },
        {
          type: 'defs',
          items: [
            {
              term: 'Controladora',
              detail:
                'Quando você navega neste site, preenche um formulário de contato, fala com a gente pelo WhatsApp ou abre um chamado como nosso cliente. Aqui somos nós que decidimos a finalidade do tratamento.',
            },
            {
              term: 'Operadora',
              detail:
                'Quando tratamos dados dentro do Âncora e do SindÂncora. Nesses casos, o controlador é o escritório de advocacia, a administradora ou o condomínio que contratou o sistema; a Serratech trata os dados seguindo as instruções desse cliente e o contrato firmado com ele.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Se você é morador, cliente do escritório ou parte de um processo e quer exercer direitos sobre dados que estão dentro de um desses sistemas, o pedido pode ser feito diretamente ao controlador ou a nós — nesse caso, encaminhamos e apoiamos o controlador na resposta.',
        },
      ],
    },

    {
      id: 'dados-coletados',
      title: 'Quais dados tratamos',
      blocks: [
        {
          type: 'p',
          text: 'Coletamos apenas o necessário para cada finalidade. O conjunto muda conforme o ponto de contato:',
        },
        {
          type: 'defs',
          items: [
            {
              term: 'Site institucional',
              detail:
                'Dados que você digita nos formulários (nome, e-mail, telefone, empresa ou condomínio, assunto e mensagem) e dados técnicos de acesso gerados automaticamente pelo servidor, como endereço IP, data e hora do acesso, página visitada, navegador e sistema operacional.',
            },
            {
              term: 'Portal do Cliente',
              detail:
                'Dados de cadastro e credenciais de acesso, chamados abertos, mensagens trocadas, anexos enviados, documentos contratuais e registros de atendimento.',
            },
            {
              term: 'Âncora',
              detail:
                'Dados cadastrais de clientes, partes e terceiros (incluindo CPF e CNPJ), dados de processos, prazos, publicações, documentos, atendimentos, honorários e lançamentos financeiros do escritório. Parte desse conteúdo pode conter dados sensíveis, na medida em que o próprio processo judicial os contenha.',
            },
            {
              term: 'SindÂncora e aplicativo Android',
              detail:
                'Dados cadastrais de síndicos, conselheiros, funcionários e moradores (nome, unidade, e-mail, telefone), conversas de atendimento, ocorrências, reservas, registros de portaria e encomendas, votos e atas de assembleia, documentos do condomínio, cobranças e comprovantes de pagamento.',
            },
            {
              term: 'Dados técnicos do aplicativo',
              detail:
                'Identificador do dispositivo para envio de notificações, versão do app e registros de erro. O aplicativo pede permissões do sistema — como câmera, notificações e acesso a arquivos — apenas quando você aciona a função correspondente, e usa cada permissão somente para essa função.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Não fazemos rastreamento publicitário, não montamos perfil comportamental para venda e não usamos cookies de terceiros para anúncios.',
        },
      ],
    },

    {
      id: 'finalidades',
      title: 'Por que tratamos e com qual base legal',
      blocks: [
        {
          type: 'defs',
          items: [
            {
              term: 'Prestar o serviço contratado',
              detail:
                'Operar o sistema, dar suporte, executar o contrato e faturar. Base legal: execução de contrato (art. 7º, V) e, quando o titular não é a parte contratante, legítimo interesse do controlador (art. 7º, IX).',
            },
            {
              term: 'Responder ao seu contato',
              detail:
                'Retornar mensagens de formulário, WhatsApp e e-mail e preparar propostas. Base legal: procedimentos preliminares de contrato (art. 7º, V).',
            },
            {
              term: 'Segurança e prevenção a fraude',
              detail:
                'Guardar registros de acesso, monitorar tentativas de invasão e manter trilhas de auditoria. Base legal: cumprimento de obrigação legal (art. 7º, II, combinado com o Marco Civil da Internet) e legítimo interesse (art. 7º, IX).',
            },
            {
              term: 'Obrigações legais e fiscais',
              detail:
                'Emissão de documentos fiscais e guarda de registros contábeis. Base legal: cumprimento de obrigação legal (art. 7º, II).',
            },
            {
              term: 'Melhorar os produtos',
              detail:
                'Analisar erros e uso agregado das telas para corrigir defeitos e priorizar melhorias. Base legal: legítimo interesse (art. 7º, IX), sempre com dados agregados ou minimizados.',
            },
          ],
        },
      ],
    },

    {
      id: 'inteligencia-artificial',
      title: 'Inteligência artificial (LemeIA)',
      blocks: [
        {
          type: 'p',
          text: 'A LemeIA responde perguntas do síndico a partir dos documentos do próprio condomínio. Para isso, a pergunta e o trecho de documento pertinente a ela são enviados a um provedor de modelo de linguagem contratado pela Serratech, em modalidade corporativa, na qual o conteúdo enviado não é usado para treinar modelos do provedor.',
        },
        {
          type: 'list',
          items: [
            'A consulta é limitada ao acervo do condomínio a que o usuário tem acesso.',
            'A resposta indica o documento de origem, para que possa ser conferida.',
            'Nenhuma decisão com efeito jurídico sobre o titular é tomada exclusivamente por processamento automatizado.',
            'O histórico de perguntas fica registrado para auditoria e pode ser excluído a pedido do controlador.',
          ],
        },
      ],
    },

    {
      id: 'compartilhamento',
      title: 'Com quem compartilhamos',
      blocks: [
        {
          type: 'p',
          text: 'Não vendemos, alugamos nem cedemos dados pessoais. Compartilhamos apenas o necessário, com quem precisa para o serviço funcionar:',
        },
        {
          type: 'defs',
          items: [
            {
              term: 'Provedores de infraestrutura',
              detail:
                'Hospedagem, banco de dados, armazenamento de arquivos e cópias de segurança, contratados sob acordo de tratamento de dados.',
            },
            {
              term: 'Serviços de mensagem',
              detail:
                'Plataforma oficial do WhatsApp e serviços de envio de e-mail e de notificação push, para entregar as comunicações que você pediu.',
            },
            {
              term: 'Meios de pagamento',
              detail:
                'Instituições financeiras e provedores de boleto e PIX, quando há cobrança. A Serratech não armazena dados completos de cartão.',
            },
            {
              term: 'Provedor de modelo de linguagem',
              detail: 'Exclusivamente para as funções de inteligência artificial descritas acima.',
            },
            {
              term: 'Autoridades',
              detail:
                'Quando houver ordem judicial, requisição de autoridade competente ou obrigação legal, nos limites do pedido.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Parte desses provedores mantém servidores fora do Brasil. Nesses casos, a transferência internacional ocorre com base nas hipóteses do art. 33 da LGPD e em cláusulas contratuais que exigem nível de proteção compatível com a lei brasileira.',
        },
      ],
    },

    {
      id: 'seguranca',
      title: 'Como protegemos',
      blocks: [
        {
          type: 'list',
          items: [
            'Tráfego cifrado em trânsito (HTTPS/TLS) em todos os sistemas.',
            'Isolamento lógico por cliente: cada escritório, administradora e condomínio acessa apenas os próprios dados.',
            'Controle de acesso por perfil, com privilégio mínimo para a equipe interna.',
            'Cópia de segurança diária, guardada em ambiente separado do sistema em produção.',
            'Registros de auditoria das operações relevantes.',
            'Monitoramento de disponibilidade e de tentativas de acesso indevido.',
          ],
        },
        {
          type: 'p',
          text: 'Nenhum sistema é imune a incidentes. Se ocorrer incidente de segurança com risco relevante aos titulares, comunicamos o controlador, os titulares afetados e a Autoridade Nacional de Proteção de Dados, nos prazos e na forma da LGPD.',
        },
      ],
    },

    {
      id: 'retencao',
      title: 'Por quanto tempo guardamos',
      blocks: [
        {
          type: 'defs',
          items: [
            {
              term: 'Contatos comerciais',
              detail: 'Até 2 anos após o último contato, salvo se você pedir exclusão antes.',
            },
            {
              term: 'Dados de sistemas em contrato',
              detail: 'Durante toda a vigência do contrato com o cliente controlador.',
            },
            {
              term: 'Após o fim do contrato',
              detail:
                'Até 90 dias para extração e devolução dos dados pelo cliente. Passado esse prazo, os dados são eliminados ou anonimizados.',
            },
            {
              term: 'Registros de acesso',
              detail:
                'Pelo prazo mínimo de 6 meses exigido pelo Marco Civil da Internet (Lei nº 12.965/2014).',
            },
            {
              term: 'Documentos fiscais e contábeis',
              detail: 'Pelo prazo legal de guarda aplicável a cada documento.',
            },
          ],
        },
      ],
    },

    {
      id: 'direitos',
      title: 'Seus direitos',
      blocks: [
        {
          type: 'p',
          text: 'O art. 18 da LGPD garante a você, a qualquer momento e sem custo:',
        },
        {
          type: 'list',
          items: [
            'Confirmar se tratamos dados seus e acessar esses dados.',
            'Corrigir dados incompletos, inexatos ou desatualizados.',
            'Pedir anonimização, bloqueio ou eliminação de dados desnecessários ou tratados fora da lei.',
            'Pedir a portabilidade dos dados a outro fornecedor.',
            'Saber com quem compartilhamos seus dados.',
            'Revogar o consentimento, quando o tratamento se basear nele.',
            'Opor-se a tratamento fundado em legítimo interesse.',
            'Peticionar perante a Autoridade Nacional de Proteção de Dados.',
          ],
        },
        {
          type: 'p',
          text: 'Para exercer qualquer um deles, escreva para o endereço de contato desta política. Podemos pedir informações que confirmem a sua identidade — é uma proteção contra pedidos feitos por terceiros. Respondemos em até 15 dias.',
        },
      ],
    },

    {
      id: 'exclusao',
      title: 'Exclusão de conta e de dados',
      blocks: [
        {
          type: 'p',
          text: 'Usuários do aplicativo SindÂncora podem solicitar a exclusão da conta e dos dados associados de duas formas:',
        },
        {
          type: 'list',
          items: [
            'Pelo próprio aplicativo, na tela de perfil, opção de exclusão de conta.',
            `Por e-mail para ${siteConfig.contactEmail}, com o assunto "Exclusão de conta", informando o nome, o e-mail ou telefone cadastrado e o condomínio.`,
          ],
        },
        {
          type: 'p',
          text: 'A conta é desativada em até 7 dias e os dados pessoais associados são eliminados em até 30 dias. Permanecem guardados apenas os registros que a lei obriga a manter — como registros de acesso e documentos fiscais — e os dados cujo controlador é o condomínio ou a administradora e que precisam ser preservados para a gestão condominial, como atas de assembleia e registros de cobrança. Nesses casos, o pedido é encaminhado ao controlador.',
        },
      ],
    },

    {
      id: 'cookies',
      title: 'Cookies e armazenamento local',
      blocks: [
        {
          type: 'p',
          text: 'Este site institucional não usa cookies de publicidade nem de rastreamento entre sites. Nos sistemas com login, usamos armazenamento local e cookies estritamente necessários para manter você autenticado e lembrar preferências de interface. Bloqueá-los no navegador impede o login de funcionar.',
        },
      ],
    },

    {
      id: 'menores',
      title: 'Crianças e adolescentes',
      blocks: [
        {
          type: 'p',
          text: 'Nossos produtos são feitos para uso profissional e não se destinam a menores de 18 anos. Dados de menores só aparecem quando inseridos pelo controlador no contexto do serviço — por exemplo, um dependente cadastrado em uma unidade do condomínio ou uma parte em processo judicial — e são tratados no melhor interesse do menor, nos termos do art. 14 da LGPD.',
        },
      ],
    },

    {
      id: 'alteracoes',
      title: 'Mudanças nesta política',
      blocks: [
        {
          type: 'p',
          text: 'Podemos atualizar esta política quando mudarem os serviços, a legislação ou os fornecedores envolvidos. A data da última atualização fica sempre no topo desta página. Alterações relevantes são comunicadas por e-mail ou dentro dos próprios sistemas antes de entrarem em vigor.',
        },
      ],
    },
  ],
};
