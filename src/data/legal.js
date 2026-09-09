import { siteConfig } from './siteContent';

/* =========================================================================
   Política de Privacidade — Serratech e Âncora
   Texto único, versionado junto com o site. Fica em arquivo de dados porque a
   página é só a casca: quem revisa o texto jurídico mexe aqui, não no JSX.

   ESCOPO: cada produto tem a sua própria política. Esta cobre o site, o Portal
   do Cliente e o Âncora (incluindo os aplicativos Android de cada escritório).
   O SindÂncora tem documento próprio, mantido fora deste repositório — nada
   aqui fala por ele, e nada aqui deve ser copiado para lá sem revisão.
   ========================================================================= */

export const privacyPolicy = {
  updatedAt: '9 de setembro de 2026',
  version: '1.1',
  scopeNote:
    'O SindÂncora tem política de privacidade própria, informada na ficha do aplicativo na Google Play. Este documento não se aplica a ele.',
  summary:
    'Esta política explica quais dados a Serratech trata, por que trata, com quem compartilha e como você pede acesso, correção ou exclusão. Vale para este site, para o Portal do Cliente e para o Âncora, incluindo os aplicativos Android publicados para cada escritório.',

  // O resumo em três linhas existe porque quase ninguém lê política inteira.
  // O texto completo abaixo é o que vale juridicamente.
  highlights: [
    {
      term: 'Não vendemos dados',
      detail:
        'Nenhum dado pessoal tratado pela Serratech é vendido, alugado ou cedido para publicidade de terceiros.',
    },
    {
      term: 'Cada escritório na sua caixa',
      detail:
        'Cada escritório enxerga apenas os próprios dados. O isolamento é aplicado pelo sistema, não pela boa vontade de quem opera.',
    },
    {
      term: 'Você pode pedir exclusão',
      detail:
        'A qualquer momento, ao escritório responsável ou diretamente a nós, com prazo de resposta de 15 dias.',
    },
  ],

  sections: [
    {
      id: 'quem-somos',
      title: 'Quem trata os seus dados',
      blocks: [
        {
          type: 'p',
          text: `${siteConfig.fullName} ("Serratech", "nós") é a empresa responsável por este site, pelo Portal do Cliente e pela plataforma Âncora. Esta política segue a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, "LGPD").`,
        },
        {
          type: 'p',
          text: 'Cada produto da Serratech tem a sua própria política. Esta cobre o site institucional, o Portal do Cliente e o Âncora — o sistema de gestão para escritórios de advocacia e os aplicativos Android publicados para cada escritório. O SindÂncora, voltado a condomínios, tem documento próprio, informado na ficha do aplicativo na Google Play.',
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
                'Quando você navega neste site, preenche um formulário de contato ou abre um chamado como nosso cliente. Aqui somos nós que decidimos a finalidade do tratamento.',
            },
            {
              term: 'Operadora',
              detail:
                'Quando tratamos dados dentro do Âncora. Nesse caso, o controlador é o escritório de advocacia que contratou o sistema; a Serratech trata os dados seguindo as instruções desse escritório e o contrato firmado com ele.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Essa distinção importa na prática. Se você é cliente de um escritório, parte em um processo ou terceiro cujos dados estão dentro do Âncora, quem decide sobre esses dados é o escritório, não a Serratech. O pedido pode ser feito diretamente a ele ou a nós — nesse caso, encaminhamos e apoiamos o escritório na resposta, mas não alteramos nem eliminamos dados por conta própria.',
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
                'Dados que você digita nos formulários (nome, e-mail, telefone, empresa, assunto e mensagem) e dados técnicos de acesso gerados automaticamente pelo servidor, como endereço IP, data e hora do acesso, página visitada, navegador e sistema operacional.',
            },
            {
              term: 'Portal do Cliente',
              detail:
                'Dados de cadastro e credenciais de acesso, chamados abertos, mensagens trocadas, anexos enviados, documentos contratuais e registros de atendimento.',
            },
            {
              term: 'Âncora',
              detail:
                'Dados cadastrais de clientes, partes e terceiros (incluindo CPF e CNPJ), dados de processos, prazos, publicações, documentos, atendimentos, demandas, honorários, cobranças e lançamentos financeiros do escritório. Parte desse conteúdo pode conter dados sensíveis, na medida em que o próprio processo judicial os contenha.',
            },
            {
              term: 'Aplicativo Android do escritório',
              detail:
                'O aplicativo acessa a mesma base do escritório, e não coleta nada além do que o sistema já trata. Somam-se a isso o identificador do dispositivo, usado para entregar notificações, a versão do app e registros de erro.',
            },
            {
              term: 'Biometria do aparelho',
              detail:
                'O desbloqueio por digital ou rosto é resolvido pelo próprio Android, no aparelho. A Serratech recebe apenas a confirmação de que a checagem passou: nenhum dado biométrico é enviado, transmitido ou armazenado por nós.',
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
                'Retornar mensagens de formulário e de e-mail e preparar propostas. Base legal: procedimentos preliminares de contrato (art. 7º, V).',
            },
            {
              term: 'Exercício regular de direitos em processo',
              detail:
                'Os dados que o escritório registra no Âncora existem para o acompanhamento de processos judiciais e administrativos. Base legal: exercício regular de direitos em processo (art. 7º, VI, e art. 11, II, "d", quanto a dados sensíveis).',
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
      title: 'Inteligência artificial (Leme)',
      blocks: [
        {
          type: 'p',
          text: 'A Leme é a assistente do Âncora: responde perguntas em conversa, a partir do acervo do próprio escritório. Para isso, a pergunta e o trecho pertinente a ela são enviados a um provedor de modelo de linguagem contratado pela Serratech, em modalidade corporativa, na qual o conteúdo enviado não é usado para treinar modelos do provedor.',
        },
        {
          type: 'list',
          items: [
            'A consulta é limitada ao acervo do escritório a que o usuário tem acesso, e respeita as permissões que ele já tem no sistema.',
            'A Leme pode ser liberada por usuário: quem não tem acesso liberado não a utiliza.',
            'Nenhuma decisão com efeito jurídico sobre o titular é tomada exclusivamente por processamento automatizado.',
            'O histórico de conversas fica registrado no sistema e pode ser excluído a pedido do escritório.',
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
                'Serviços de envio de e-mail e de notificação push, para entregar as comunicações que você pediu. Os links de contato do aplicativo apenas abrem o WhatsApp ou o discador do próprio aparelho: essa conversa acontece fora dos nossos sistemas.',
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
            'Isolamento lógico por escritório: cada instância acessa apenas os próprios dados.',
            'Controle de acesso por perfil, com privilégio mínimo para a equipe interna.',
            'Bloqueio do aplicativo por biometria ou senha do aparelho, quando o usuário ativa.',
            'Cópia de segurança diária, guardada em ambiente separado do sistema em produção.',
            'Registros de auditoria das operações relevantes.',
            'Monitoramento de disponibilidade e de tentativas de acesso indevido.',
          ],
        },
        {
          type: 'p',
          text: 'Nenhum sistema é imune a incidentes. Se ocorrer incidente de segurança com risco relevante aos titulares, comunicamos o escritório controlador, os titulares afetados e a Autoridade Nacional de Proteção de Dados, nos prazos e na forma da LGPD.',
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
              term: 'Dados dentro do Âncora',
              detail:
                'Durante toda a vigência do contrato com o escritório. O prazo de guarda de cada processo é definido pelo escritório, que responde pelos prazos legais e profissionais aplicáveis à advocacia.',
            },
            {
              term: 'Após o fim do contrato',
              detail:
                'Até 90 dias para extração e devolução dos dados pelo escritório. Passado esse prazo, os dados são eliminados ou anonimizados.',
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
          text: 'As contas de acesso ao Âncora não são criadas pelo próprio usuário: quem cadastra, libera e remove o acesso da equipe é o escritório contratante. Por isso, o pedido de exclusão segue dois caminhos:',
        },
        {
          type: 'defs',
          items: [
            {
              term: 'Se você é da equipe do escritório',
              detail:
                'Peça ao responsável pelo sistema no seu escritório. O acesso é revogado por ele, na hora, sem depender de nós.',
            },
            {
              term: 'Se os seus dados estão em um processo ou cadastro',
              detail:
                'O controlador é o escritório, e é a ele que o pedido deve ser dirigido. Se preferir, escreva para nós: encaminhamos ao escritório em até 5 dias e apoiamos a resposta.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Quando a exclusão é determinada pelo escritório controlador, os dados pessoais são eliminados dos sistemas em até 30 dias. Permanecem guardados apenas os registros que a lei obriga a manter — como registros de acesso e documentos fiscais — e aqueles necessários ao exercício regular de direitos em processo, hipótese em que a guarda é do escritório e segue os prazos da advocacia.',
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
          text: 'O Âncora é feito para uso profissional e não se destina a menores de 18 anos. Dados de menores só aparecem quando o escritório os registra no contexto de um caso — por exemplo, uma parte em processo de família — e são tratados no melhor interesse do menor, nos termos do art. 14 da LGPD, sob responsabilidade do escritório controlador.',
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
