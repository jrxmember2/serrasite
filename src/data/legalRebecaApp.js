import { siteConfig } from './siteContent';

/* =========================================================================
   Política de Privacidade — aplicativo Rebeca Medina Advocacia (Android)
   Documento próprio do app, para constar na ficha da Google Play.

   ESCOPO: só este aplicativo. O que vale para o site da Serratech e para o
   Âncora como sistema está em [/legal/politica-de-privacidade]; o SindÂncora
   tem o seu, mantido fora deste repositório.

   Os fatos técnicos abaixo foram lidos do projeto do app e precisam ser
   revistos junto com ele: permissões declaradas no AndroidManifest, ausência
   de analytics e de relatório de falhas, instância fixa e biometria local.
   ========================================================================= */

// Contato do escritorio, que e o controlador dos dados. O canal da Serratech
// continua valendo como operadora, mas o pedido do titular vai primeiro a quem
// decide sobre o dado.
const escritorioEmail = 'contato@rebecamedina.com.br';

export const rebecaAppPolicy = {
  eyebrow: 'Aplicativo Android',
  footContactEmail: escritorioEmail,
  title: 'Política de Privacidade do aplicativo',
  controllerLabel: 'Escritório Rebeca Medina Advocacia',
  updatedAt: '9 de setembro de 2026',
  version: '1.0',
  scopeNote:
    'Este documento vale apenas para o aplicativo Android "Rebeca Medina Advocacia" (br.com.rebecamedina.advocacia), publicado na Google Play. O site da Serratech e o sistema Âncora têm política própria, e o SindÂncora também.',
  summary:
    'O aplicativo dá à equipe do escritório Rebeca Medina Advocacia acesso móvel ao sistema do próprio escritório. Esta política explica quais dados ele trata, quais permissões pede, o que não coleta e como pedir acesso, correção ou exclusão.',

  highlights: [
    {
      term: 'Uso interno do escritório',
      detail:
        'Não há cadastro aberto ao público. O acesso é concedido pelo escritório à sua própria equipe, e o app não serve a quem está fora dela.',
    },
    {
      term: 'Sua digital não sai do aparelho',
      detail:
        'O desbloqueio por biometria é resolvido pelo próprio Android. Nenhum dado biométrico é transmitido ou armazenado por nós.',
    },
    {
      term: 'Sem anúncios e sem rastreamento',
      detail:
        'O aplicativo não exibe publicidade, não tem SDK de anúncios, não usa ferramenta de análise de uso e não rastreia você entre aplicativos.',
    },
  ],

  sections: [
    {
      id: 'o-app',
      title: 'O que é este aplicativo',
      blocks: [
        {
          type: 'p',
          text: 'O aplicativo "Rebeca Medina Advocacia" é a versão móvel do sistema de gestão do escritório de advocacia Rebeca Medina. Ele abre já conectado à instância do escritório e mostra, na tela do celular, os processos, prazos, clientes, atendimentos, demandas e o financeiro que a equipe já acompanha no sistema.',
        },
        {
          type: 'p',
          text: 'É um aplicativo corporativo. Não existe cadastro aberto: quem cria, libera e remove acesso é o próprio escritório. Se você não faz parte da equipe, o aplicativo não terá utilidade — e não haverá dado seu nele por tê-lo instalado.',
        },
      ],
    },

    {
      id: 'quem-responde',
      title: 'Quem responde pelos seus dados',
      blocks: [
        {
          type: 'p',
          text: 'A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) separa quem decide o que fazer com o dado (controlador) de quem o trata por conta de outra pessoa (operador). Neste aplicativo os papéis são:',
        },
        {
          type: 'defs',
          items: [
            {
              term: 'Controlador',
              detail:
                `O escritório Rebeca Medina Advocacia, no e-mail ${escritorioEmail}. É ele quem decide quais dados entram no sistema, quem tem acesso a eles e por quanto tempo ficam guardados. Os dados de clientes, partes e processos são do escritório.`,
            },
            {
              term: 'Operadora',
              detail:
                `${siteConfig.fullName}, que desenvolve o aplicativo, mantém o sistema e publica o app na Google Play. A Serratech trata os dados seguindo as instruções do escritório e o contrato firmado com ele, e não os utiliza para finalidade própria.`,
            },
          ],
        },
        {
          type: 'p',
          text: 'Na prática: se você é cliente do escritório, parte em um processo ou terceiro cujos dados estão no sistema, quem decide sobre eles é o escritório. O pedido pode ser dirigido a ele ou a nós — neste caso, encaminhamos e apoiamos a resposta, sem alterar ou eliminar dados por conta própria.',
        },
      ],
    },

    {
      id: 'dados',
      title: 'Quais dados o aplicativo trata',
      blocks: [
        {
          type: 'p',
          text: 'O aplicativo não tem base própria: ele mostra e alimenta a mesma base do escritório que já existe no sistema. Os tipos de dado que trafegam por ele são:',
        },
        {
          type: 'defs',
          items: [
            {
              term: 'Sua conta de acesso',
              detail:
                'E-mail e senha do usuário liberado pelo escritório, e a sessão que mantém você conectado no aparelho.',
            },
            {
              term: 'Dados de clientes, partes e terceiros',
              detail:
                'Nome, CPF ou CNPJ, contato e demais dados cadastrais registrados pelo escritório.',
            },
            {
              term: 'Dados de processos',
              detail:
                'Números, prazos, publicações, andamentos, documentos, demandas e atendimentos. Esse conteúdo pode conter dados sensíveis, na medida em que o próprio processo judicial os contenha.',
            },
            {
              term: 'Dados financeiros do escritório',
              detail: 'Honorários, cobranças e lançamentos, quando o seu acesso os alcança.',
            },
            {
              term: 'Conversas com a Leme',
              detail:
                'As perguntas que você faz à assistente e as respostas que ela devolve ficam registradas no sistema.',
            },
            {
              term: 'Identificador para notificação',
              detail:
                'Um identificador que o Firebase Cloud Messaging atribui à instalação, usado exclusivamente para entregar notificações ao seu aparelho. Ele não identifica você por nome e é descartado quando o app é desinstalado.',
            },
          ],
        },
      ],
    },

    {
      id: 'permissoes',
      title: 'Permissões que o aplicativo pede',
      blocks: [
        {
          type: 'p',
          text: 'São quatro, e cada uma existe por um motivo verificável no aplicativo:',
        },
        {
          type: 'defs',
          items: [
            {
              term: 'Internet e estado da rede',
              detail:
                'Para conversar com o sistema do escritório e para avisar você quando está sem conexão, em vez de falhar em silêncio.',
            },
            {
              term: 'Notificações',
              detail:
                'Para avisar sobre prazo, publicação e o que precisa da sua atenção. O Android pede a sua autorização; recusar não impede o uso do aplicativo.',
            },
            {
              term: 'Biometria',
              detail:
                'Para bloquear o aplicativo com a digital ou o rosto já cadastrados no aparelho. É opcional, e há sempre a alternativa de entrar com e-mail e senha.',
            },
          ],
        },
        {
          type: 'p',
          text: 'O aplicativo não pede acesso a câmera, microfone, localização, contatos, agenda, fotos, SMS nem chamadas.',
        },
      ],
    },

    {
      id: 'biometria',
      title: 'Sobre a biometria',
      blocks: [
        {
          type: 'p',
          text: 'Quando você ativa o desbloqueio por digital ou rosto, quem confere é o próprio Android, dentro do aparelho, usando a biometria que você já havia cadastrado no sistema operacional. O aplicativo recebe apenas a confirmação de que a checagem passou.',
        },
        {
          type: 'list',
          items: [
            'Nenhuma imagem, molde ou medida biométrica é lida pelo aplicativo.',
            'Nada disso é transmitido pela rede, nem chega aos servidores da Serratech ou do escritório.',
            'Nada disso é armazenado por nós, em nenhum lugar.',
            'A biometria só funciona depois do primeiro login com e-mail e senha naquele aparelho.',
          ],
        },
      ],
    },

    {
      id: 'nao-coletamos',
      title: 'O que o aplicativo não faz',
      blocks: [
        {
          type: 'p',
          text: 'Vale dizer explicitamente, porque em aplicativo é comum o contrário:',
        },
        {
          type: 'list',
          items: [
            'Não exibe anúncios e não contém nenhuma biblioteca de publicidade.',
            'Não usa ferramenta de análise de uso: não há Google Analytics, Firebase Analytics nem equivalente.',
            'Não envia relatórios de falha: não há Crashlytics nem serviço semelhante instalado.',
            'Não coleta sua localização.',
            'Não lê sua agenda, seus contatos, suas fotos, suas mensagens ou suas chamadas.',
            'Não rastreia você entre aplicativos e não monta perfil publicitário.',
            'Não vende, aluga nem cede dados pessoais a ninguém.',
          ],
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
              term: 'Dar acesso móvel ao sistema',
              detail:
                'Autenticar você, mostrar o que o seu perfil alcança e registrar o que você lança. Base legal: execução de contrato entre o escritório e a Serratech (art. 7º, V).',
            },
            {
              term: 'Acompanhar processos',
              detail:
                'Os dados de clientes, partes e processos existem para o acompanhamento de causas judiciais e administrativas. Base legal: exercício regular de direitos em processo (art. 7º, VI, e art. 11, II, "d", quanto a dados sensíveis).',
            },
            {
              term: 'Avisar sobre prazos',
              detail:
                'Enviar notificação quando algo vence ou muda. Base legal: execução de contrato (art. 7º, V).',
            },
            {
              term: 'Segurança do acesso',
              detail:
                'Registrar entradas e manter trilha de auditoria das operações. Base legal: obrigação legal (art. 7º, II) e legítimo interesse (art. 7º, IX).',
            },
          ],
        },
      ],
    },

    {
      id: 'leme',
      title: 'A Leme, assistente do aplicativo',
      blocks: [
        {
          type: 'p',
          text: 'A Leme responde perguntas em conversa, a partir do acervo do próprio escritório. Para montar a resposta, a sua pergunta e o trecho pertinente a ela são enviados a um provedor de modelo de linguagem contratado pela Serratech, em modalidade corporativa, na qual o conteúdo enviado não é usado para treinar modelos do provedor.',
        },
        {
          type: 'list',
          items: [
            'A consulta respeita as permissões que você já tem: a Leme não alcança o que o seu acesso não alcança.',
            'A assistente pode ser liberada por usuário; quem não tem liberação não a utiliza.',
            'Nenhuma decisão com efeito jurídico é tomada exclusivamente por processamento automatizado.',
            'O histórico de conversas fica no sistema e pode ser excluído a pedido do escritório.',
          ],
        },
      ],
    },

    {
      id: 'compartilhamento',
      title: 'Com quem os dados são compartilhados',
      blocks: [
        {
          type: 'defs',
          items: [
            {
              term: 'Provedores de infraestrutura',
              detail:
                'Hospedagem, banco de dados, armazenamento de arquivos e cópias de segurança, contratados sob acordo de tratamento de dados.',
            },
            {
              term: 'Google (Firebase Cloud Messaging)',
              detail:
                'Recebe o identificador da instalação e o conteúdo da notificação, para entregá-la ao aparelho. É o serviço padrão de notificação do Android.',
            },
            {
              term: 'Provedor de modelo de linguagem',
              detail: 'Exclusivamente para as funções da Leme, descritas acima.',
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
        {
          type: 'p',
          text: 'Os links de contato dentro do aplicativo apenas abrem o WhatsApp ou o discador do próprio aparelho. Essa conversa acontece fora do aplicativo e fora dos nossos sistemas.',
        },
      ],
    },

    {
      id: 'seguranca',
      title: 'Como os dados são protegidos',
      blocks: [
        {
          type: 'list',
          items: [
            'Todo o tráfego entre o aplicativo e o servidor é cifrado (HTTPS/TLS).',
            'O aplicativo abre travado na instância do escritório e não aceita ser apontado para outro servidor.',
            'O acesso é por perfil: cada pessoa enxerga apenas o que o escritório liberou para ela.',
            'Bloqueio opcional do aplicativo por biometria ou senha do aparelho.',
            'Cópia de segurança diária, guardada em ambiente separado do sistema em produção.',
            'Registros de auditoria das operações relevantes.',
          ],
        },
        {
          type: 'p',
          text: 'Nenhum sistema é imune a incidentes. Havendo incidente de segurança com risco relevante aos titulares, comunicamos o escritório, os titulares afetados e a Autoridade Nacional de Proteção de Dados, nos prazos e na forma da LGPD.',
        },
      ],
    },

    {
      id: 'retencao',
      title: 'Por quanto tempo os dados ficam guardados',
      blocks: [
        {
          type: 'defs',
          items: [
            {
              term: 'Dados do escritório',
              detail:
                'Enquanto durar o contrato entre o escritório e a Serratech. O prazo de guarda de cada processo é definido pelo escritório, que responde pelos prazos legais e profissionais da advocacia.',
            },
            {
              term: 'Identificador de notificação',
              detail:
                'Enquanto o aplicativo estiver instalado. Desinstalar o app invalida o identificador.',
            },
            {
              term: 'Registros de acesso',
              detail:
                'Pelo prazo mínimo de 6 meses exigido pelo Marco Civil da Internet (Lei nº 12.965/2014).',
            },
            {
              term: 'Depois do fim do contrato',
              detail:
                'Até 90 dias para o escritório extrair e receber os dados. Passado esse prazo, são eliminados ou anonimizados.',
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
          text: 'O art. 18 da LGPD garante a você, a qualquer momento e sem custo: confirmar se há tratamento e acessar os dados; corrigir dados incompletos, inexatos ou desatualizados; pedir anonimização, bloqueio ou eliminação de dados desnecessários ou tratados fora da lei; pedir portabilidade; saber com quem os dados são compartilhados; revogar consentimento, quando for essa a base; opor-se a tratamento fundado em legítimo interesse; e peticionar perante a Autoridade Nacional de Proteção de Dados.',
        },
        {
          type: 'p',
          text: `Como o controlador é o escritório, o caminho mais curto é escrever para ${escritorioEmail}. Se preferir, procure a Serratech em ${siteConfig.contactEmail}: encaminhamos ao escritório e apoiamos a resposta. Podemos pedir informações que confirmem a sua identidade, como proteção contra pedidos feitos por terceiros. O prazo de resposta é de 15 dias.`,
        },
      ],
    },

    {
      id: 'exclusao',
      title: 'Exclusão de conta e de dados',
      blocks: [
        {
          type: 'p',
          text: 'As contas deste aplicativo não são criadas pelo usuário: quem cadastra, libera e remove acesso é o escritório. Por isso o pedido segue dois caminhos:',
        },
        {
          type: 'defs',
          items: [
            {
              term: 'Você é da equipe do escritório',
              detail:
                'Peça ao responsável pelo sistema no escritório. Ele revoga o seu acesso na hora, sem depender de nós. Desinstalar o aplicativo encerra as notificações, mas não apaga o seu usuário.',
            },
            {
              term: 'Seus dados estão em um cadastro ou processo',
              detail:
                `O controlador é o escritório: escreva para ${escritorioEmail}. Se preferir, escreva para ${siteConfig.contactEmail} e a Serratech encaminha em até 5 dias, apoiando a resposta.`,
            },
          ],
        },
        {
          type: 'p',
          text: 'Determinada a exclusão pelo escritório, os dados pessoais são eliminados dos sistemas em até 30 dias. Permanecem apenas os registros que a lei obriga a manter — como registros de acesso e documentos fiscais — e os necessários ao exercício regular de direitos em processo, cuja guarda é do escritório e segue os prazos da advocacia.',
        },
      ],
    },

    {
      id: 'menores',
      title: 'Crianças e adolescentes',
      blocks: [
        {
          type: 'p',
          text: 'O aplicativo é de uso profissional e destina-se a maiores de 18 anos. Dados de menores só aparecem quando o escritório os registra no contexto de um caso — por exemplo, uma parte em processo de família — e são tratados no melhor interesse do menor, nos termos do art. 14 da LGPD, sob responsabilidade do escritório.',
        },
      ],
    },

    {
      id: 'alteracoes',
      title: 'Mudanças nesta política',
      blocks: [
        {
          type: 'p',
          text: 'Esta política pode ser atualizada quando o aplicativo mudar, quando mudar a legislação ou quando mudarem os fornecedores envolvidos. A data da última atualização fica no topo desta página, e alterações relevantes são comunicadas dentro do próprio aplicativo antes de entrarem em vigor.',
        },
      ],
    },

    {
      id: 'contato',
      title: 'Contato',
      blocks: [
        {
          type: 'p',
          text: 'Para dúvidas, pedidos e reclamações sobre dados pessoais tratados por este aplicativo, procure o escritório, que é o controlador. A Serratech, como operadora, também recebe pedidos e os encaminha:',
        },
        {
          type: 'contact',
          items: [
            { term: 'Escritório (controlador)', email: escritorioEmail },
            { term: 'Serratech (operadora)', email: siteConfig.contactEmail },
            { term: 'Atendimento', detail: siteConfig.serviceHours },
            {
              term: 'Prazo de resposta',
              detail: 'Até 15 dias, contados do recebimento do pedido',
            },
          ],
        },
      ],
    },
  ],
};
