import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import ProjectCTA from '../components/ProjectCTA';
import { playStoreUrl } from '../data/siteContent';

const screens = [
  {
    id: 'painel',
    label: 'Visão geral',
    src: '/media/products/panel-dashboard.webp',
    title: 'A rotina inteira, com contexto.',
    text: 'Condomínios, ocorrências, documentos e próximas manutenções em uma visão organizada. Veja o que merece atenção e siga para a ação.',
    alt: 'Painel real do SindÂncora com visão do condomínio, ações rápidas e indicadores',
  },
  {
    id: 'manutencoes',
    label: 'Manutenções',
    src: '/media/products/panel-maintenance-index.webp',
    title: 'Antecipe o que precisa de cuidado.',
    text: 'Organize as manutenções do condomínio e acompanhe prazos, responsáveis e registros. Mais clareza para planejar a rotina.',
    alt: 'Tela real de manutenções do SindÂncora com planejamento e acompanhamento',
  },
  {
    id: 'atendimento',
    label: 'Atendimento',
    src: '/media/products/panel-inbox-index.webp',
    title: 'Conversas viram acompanhamento.',
    text: 'Reúna o atendimento em um ambiente de trabalho. Sua equipe encontra o histórico e acompanha cada demanda com mais organização.',
    alt: 'Caixa de atendimento real do SindÂncora com conversas e setores',
  },
  {
    id: 'lemeia',
    label: 'LemeIA',
    src: '/media/products/panel-assistant-conversation.webp',
    title: 'Informação à mão. Decisão com contexto.',
    text: 'A assistente ajuda a consultar informações do condomínio e a dar fluidez ao trabalho. Uma aliada para tirar dúvidas e preparar comunicações.',
    alt: 'Tela real de conversa com a LemeIA, assistente do SindÂncora',
  },
  {
    id: 'morador',
    label: 'Portal do morador',
    src: '/media/products/portal-portal-dashboard.webp',
    title: 'O morador também ganha tempo.',
    text: 'Um canal para consultar informações, acompanhar comunicados e acessar os serviços do condomínio. Sua equipe recebe demandas com mais contexto.',
    alt: 'Tela real do portal do morador no SindÂncora',
  },
];
const benefits = [
  {
    icon: 'clock',
    title: 'Tempo para novas oportunidades',
    text: 'Concentre os fluxos de trabalho e reduza a busca por informações espalhadas. O tempo volta para o relacionamento e a expansão da sua atuação.',
  },
  {
    icon: 'support',
    title: 'Atendimento com histórico',
    text: 'Organize conversas e demandas para que o acompanhamento continue entre pessoas e equipes, com informações no lugar certo.',
  },
  {
    icon: 'building',
    title: 'Manutenção e operação',
    text: 'Acompanhe as rotinas do condomínio, organize os registros e tenha uma base mais clara para planejar o próximo passo.',
  },
  {
    icon: 'document',
    title: 'Documentos acessíveis',
    text: 'Convenções, atas e documentos reunidos para consulta, com controle de acesso e organização para quem precisa trabalhar com eles.',
  },
  {
    icon: 'spark',
    title: 'LemeIA na sua rotina',
    text: 'Uma assistente para apoiar consultas e comunicações, usando o contexto do condomínio para ajudar o síndico no trabalho diário.',
  },
  {
    icon: 'shield',
    title: 'Estrutura Serratech',
    text: 'O produto carrega nosso compromisso com qualidade, segurança, backup e infraestrutura distribuída entre regiões.',
  },
];

export default function AppSindicoPage() {
  const [selected, setSelected] = useState(0);
  const dialogRef = useRef(null);
  const tabsRef = useRef(null);
  const screen = screens[selected];
  const handleTabKey = (event, index) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % screens.length;
    if (event.key === 'ArrowLeft')
      next = (index + screens.length - 1) % screens.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = screens.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setSelected(next);
    tabsRef.current.querySelectorAll('[role="tab"]')[next].focus();
  };
  return (
    <>
      <Seo path="/app-sindico" />
      <PageHero
        eyebrow="ÂncoraHUB · SindÂncora · Disponível"
        title="Sua gestão flui. Seu tempo volta."
        description="Atendimento, manutenção, comunicação e documentos conectados para síndicos profissionais e moradores. Um software desenvolvido pela Serratech para organizar o trabalho, proteger as informações e abrir espaço para novos negócios."
        primaryAction={{
          label: 'Solicitar uma apresentação',
          to: '/contato?interesse=Sind%C3%82ncora#diagnostico',
        }}
        secondaryAction={{ label: 'Baixar o app Android', href: playStoreUrl }}
        highlights={[
          'Sistema web e aplicativo',
          'Administradoras parceiras',
          'Desenvolvido pela Serratech',
        ]}
      />
      <section className="product-gallery" id="telas">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Por dentro do SindÂncora
              </span>
              <h2 data-anim="lines">
                Software real.
                <br />
                Na sua rotina real.
              </h2>
            </div>
            <p className="lead" data-anim="rise">
              Explore as telas do sistema. Selecione uma área para conhecer o
              fluxo e amplie a imagem para ver os detalhes.
            </p>
          </div>
          <div
            className="gallery-tabs"
            role="tablist"
            aria-label="Telas do SindÂncora"
            ref={tabsRef}
          >
            {screens.map((item, index) => (
              <button
                type="button"
                role="tab"
                id={'tab-' + item.id}
                aria-controls={'screen-' + item.id}
                aria-selected={selected === index}
                tabIndex={selected === index ? 0 : -1}
                key={item.id}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => handleTabKey(event, index)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div
            className="gallery-panel"
            role="tabpanel"
            id={'screen-' + screen.id}
            aria-labelledby={'tab-' + screen.id}
            tabIndex="0"
          >
            <div className="gallery-screen">
              <div className="preview-bar">
                <span className="preview-dots" aria-hidden="true">
                  ● ● ●
                </span>
                <span>SindÂncora / {screen.label}</span>
                <Icon name="shield" />
              </div>
              <button
                className="gallery-image"
                type="button"
                onClick={() => dialogRef.current.showModal()}
                aria-label={'Ampliar tela: ' + screen.label}
              >
                <img
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  loading="lazy"
                />
                <span>Ampliar tela ↗</span>
              </button>
            </div>
            <div className="gallery-description">
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
              <span className="micro-label">Uma criação Serratech</span>
            </div>
          </div>
          <div className="gallery-foot">
            <span>Capturas reais do sistema em ambiente de demonstração.</span>
            <Link to="/contato?interesse=Sind%C3%82ncora#diagnostico">
              Vamos apresentar para você ↗
            </Link>
          </div>
        </div>
      </section>
      <dialog
        className="image-dialog"
        ref={dialogRef}
        aria-labelledby="dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current.close();
        }}
      >
        <div className="dialog-top">
          <span id="dialog-title">SindÂncora / {screen.label}</span>
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current.close()}
            aria-label="Fechar tela ampliada"
          >
            ×
          </button>
        </div>
        <img src={screen.src} alt={screen.alt} loading="lazy" />
      </dialog>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Mais fluidez, do começo ao fim
              </span>
              <h2 data-anim="lines">
                O sistema organiza.
                <br />
                Você faz acontecer.
              </h2>
            </div>
            <p className="lead" data-anim="rise">
              Tecnologia a favor de quem cuida da operação. Cada área foi
              pensada para melhorar o fluxo e dar mais clareza ao trabalho.
            </p>
          </div>
          <div className="product-benefits" data-stagger>
            {benefits.map((item) => (
              <article key={item.title} data-stagger-item>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="partnership-section">
        <div className="container partnership-copy">
          <div>
            <span className="eyebrow" data-anim="rise">
              Administradoras parceiras
            </span>
            <h2 data-anim="lines">
              Mais colaboração.
              <br />
              Mais valor para todos.
            </h2>
          </div>
          <div data-anim="rise">
            <p>
              O SindÂncora fortalece a relação entre síndico, administradora e
              condomínio. A administradora é nossa parceira: sua experiência e
              seus serviços se somam a uma operação digital mais organizada.
            </p>
            <p>
              Vamos conversar sobre como conectar os fluxos, melhorar a troca de
              informações e criar mais tempo para atender clientes e desenvolver
              novos negócios juntos.
            </p>
            <Link className="btn" to="/contato?interesse=parceria#diagnostico">
              <span>Quero ser parceiro</span>
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <ProjectCTA
        title={'Veja o SindÂncora\nna sua operação.'}
        text="Conte como é a sua rotina. Vamos apresentar o sistema e conversar sobre o que faz sentido para o seu trabalho."
        label="Agendar uma apresentação"
        to="/contato?interesse=Sind%C3%82ncora#diagnostico"
      />
    </>
  );
}
