import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import OperationDiagram from '../components/OperationDiagram';
import PhotoBand from '../components/PhotoBand';
import ProductShot from '../components/ProductShot';
import Ticker from '../components/Ticker';
import { prefersReducedMotion, withGsap } from '../lib/motion';
import {
  factoryCapabilities,
  factoryPitch,
  featuredProducts,
  homeMetrics,
  homePainPoints,
  homeSolutions,
} from '../data/siteContent';

// Cada linha é mascarada individualmente no reveal, então precisa caber em uma
// linha visual — quebras internas cortariam o texto pela metade.
const heroLines = ['Tecnologia que', 'sustenta a', 'operação inteira.'];

const heroSpec = [
  { term: 'Atuação', detail: 'Infraestrutura, sistemas próprios, automação e segurança digital' },
  { term: 'Clientes', detail: 'Empresas, escritórios, administradoras, síndicos e condomínios' },
  { term: 'Base', detail: 'Mais de 20 anos em TI aplicada a operações que não podem parar' },
];

const tickerItems = [
  'Infraestrutura',
  'Segurança digital',
  'Sistemas sob medida',
  'Automação',
  'Multitenant',
  'Backup',
  'Integrações',
  'Suporte consultivo',
];

// As capturas são telas reais dos produtos da Serratech, não maquete.
const shots = [
  {
    src: '/media/sindancora-dashboard.jpg',
    url: 'sindancora.ancorahub.com.br/dashboard',
    alt: 'Painel do SindÂncora mostrando carteira de condomínios, unidades, moradores e ações rápidas',
    caption: 'SindÂncora — painel da administradora',
    meta: 'Carteira consolidada',
  },
  {
    src: '/media/sindancora-condominios.jpg',
    url: 'sindancora.ancorahub.com.br/condominios',
    alt: 'Lista de condomínios cadastrados no SindÂncora com blocos e unidades por condomínio',
    caption: 'SindÂncora — condomínios da carteira',
    meta: 'Blocos e unidades',
  },
  {
    src: '/media/ancora-login.jpg',
    url: 'ancora — erp jurídico',
    alt: 'Tela de acesso do Âncora, ERP jurídico multitenant, com ambiente isolado por escritório',
    caption: 'Âncora — ERP jurídico multitenant',
    meta: 'Ambiente isolado por escritório',
  },
];

export default function HomePage() {
  const heroRef = useRef(null);

  // Sequência de abertura: o hero se monta uma vez, no carregamento.
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    return withGsap(({ gsap }) => {
      gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .to('[data-hero-meta]', { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 })
        .to('.hero-line > span', { y: '0%', duration: 1.05, stagger: 0.09 }, '-=0.45')
        .to('[data-hero-body]', { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 }, '-=0.6');
    }, heroRef);
  }, []);

  return (
    <>
      <Seo path="/" />

      <section className="hero" ref={heroRef}>
        <div className="container">
          <div className="hero-top">
            <span className="hero-coord" data-hero-meta>
              Serratech — Soluções digitais corporativas e condominiais
            </span>
            <span className="hero-coord" data-hero-meta>
              Atendimento remoto e presencial
            </span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow" data-hero-meta>
                Infraestrutura · Sistemas · Automação
              </span>

              <h1>
                {heroLines.map((line) => (
                  <span className="hero-line" key={line}>
                    <span>{line}</span>
                  </span>
                ))}
              </h1>

              <p className="lead" data-hero-body>
                A Serratech conecta infraestrutura de TI, sistemas próprios, automação e segurança
                digital para que empresas, escritórios, síndicos e condomínios operem com controle e
                previsibilidade.
              </p>

              <div className="button-row" data-hero-body>
                <Link className="btn" to="/solucoes">
                  <span>Ver soluções</span>
                  <Icon name="arrow" className="btn-icon" />
                </Link>
                <Link className="btn btn-secondary" to="/contato#diagnostico">
                  <span>Solicitar diagnóstico</span>
                  <Icon name="chart" className="btn-icon" />
                </Link>
              </div>

              <dl className="hero-spec" data-hero-body>
                {heroSpec.map((row) => (
                  <div className="hero-spec-row" key={row.term}>
                    <dt>{row.term}</dt>
                    <dd>{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div data-hero-body>
              <div className="hero-stage">
                <div className="stage-head">
                  <span>Mapa da operação</span>
                  <span className="stage-live">Em operação</span>
                </div>

                <OperationDiagram />

                <div className="stage-foot">
                  <span>Entrada → Hub → Operação</span>
                  <span>Serratech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Ticker items={tickerItems} />
      </div>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" data-anim="rise">
              Dois mercados, uma base técnica
            </span>
            <h2 data-anim="lines">
              A mesma disciplina de engenharia, aplicada a operações muito diferentes.
            </h2>
          </div>

          <div className="duo">
            <div className="duo-col" data-anim="rise">
              <span className="label">Empresas e escritórios</span>
              <h3>Ambientes que precisam responder rápido e com confiança.</h3>
              <p>
                Estruturamos a base de TI, padronizamos processos e criamos visibilidade para que a
                operação pare de correr atrás do problema e passe a antecipá-lo.
              </p>
            </div>
            <div className="duo-col" data-anim="rise">
              <span className="label">Condomínios e síndicos</span>
              <h3>Gestão condominial com organização digital de verdade.</h3>
              <p>
                Documentos, chamados, comunicados e demandas deixam de estar espalhados entre grupos
                de mensagem e passam a ter fluxo, histórico e responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PhotoBand
        src="/media/foto/gestao-sobrecarregada.jpg"
        alt="Gestor com as mãos no rosto diante do notebook, cercado de papéis e relatórios impressos"
        eyebrow="O ponto de virada"
        title="Toda operação tem o dia em que a tecnologia vira o problema."
        text="Costuma começar pequeno: uma planilha que só uma pessoa entende, um backup que ninguém confere, um chamado que se perde no grupo de mensagem. Quando a Serratech é chamada, normalmente já virou rotina."
        credit="Foto: Pexels"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Diagnóstico
              </span>
              <h2 data-anim="lines">O que costuma estar quebrado quando nos chamam.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Estes são os pontos onde a operação perde tempo, controle e segurança. Cada um deles
              tem uma resposta técnica direta.
            </p>
          </div>

          <div className="ledger-split" data-stagger>
            {homePainPoints.map((item, index) => (
              <article className="ledger-row" key={item.title} data-stagger-item>
                <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="ledger-title">
                  <h3>{item.title}</h3>
                </div>
                <p className="ledger-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Frentes de trabalho
              </span>
              <h2 data-anim="lines">Como a Serratech resolve.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Oito frentes que operam juntas. Raramente um problema real se resolve dentro de uma só.
            </p>
          </div>

          <div className="ledger" data-stagger>
            {homeSolutions.map((item, index) => (
              <article className="ledger-row" key={item.title} data-stagger-item>
                <span className="ledger-index">
                  {String(index + 1).padStart(2, '0')} / {homeSolutions.length}
                </span>
                <div className="ledger-title">
                  <h3>{item.title}</h3>
                </div>
                <p className="ledger-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O ponto alto do scroll: o site para de descrever e mostra o produto. */}
      <section className="band">
        <div className="container">
          <div className="showcase">
            <div className="showcase-aside">
              <span className="eyebrow" data-anim="rise">
                Produtos em produção
              </span>
              <h2 data-anim="lines">Isto não é portfólio de terceiro. É o que a gente opera.</h2>
              <p data-anim="rise">
                O Âncora e o SindÂncora foram desenhados, construídos e são sustentados pela
                Serratech — servidor, backup, monitoramento e roadmap inclusos. As telas abaixo são
                dos sistemas rodando, não maquete de apresentação.
              </p>

              <ul className="spec-notes" data-stagger>
                <li data-stagger-item>Multitenant com isolamento de dados por cliente</li>
                <li data-stagger-item>Auditoria e permissões desde a fundação</li>
                <li data-stagger-item>Backup diário criptografado fora do servidor</li>
                <li data-stagger-item>App do síndico publicado na Google Play</li>
              </ul>

              <div className="button-row" data-anim="rise">
                <Link className="btn" to="/ancora">
                  <span>Conhecer o Âncora</span>
                  <Icon name="arrow" className="btn-icon" />
                </Link>
                <Link className="btn btn-secondary" to="/app-sindico">
                  <span>Ver o SindÂncora</span>
                  <Icon name="building" className="btn-icon" />
                </Link>
              </div>
            </div>

            <div className="showcase-stack">
              {shots.map((shot) => (
                <ProductShot key={shot.src} {...shot} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Fábrica de software
              </span>
              <h2 data-anim="lines">Quando não existe sistema pronto que sirva, a gente constrói.</h2>
            </div>
            <p className="lead" data-anim="rise">
              {factoryPitch}
            </p>
          </div>

          <div className="ledger" data-stagger>
            {factoryCapabilities.slice(0, 4).map((item, index) => (
              <article className="ledger-row" key={item.title} data-stagger-item>
                <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="ledger-title">
                  <h3>{item.title}</h3>
                </div>
                <p className="ledger-text">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="button-row section-actions" data-anim="rise">
            <Link className="btn" to="/fabrica-de-software">
              <span>Conhecer a fábrica de software</span>
              <Icon name="arrow" className="btn-icon" />
            </Link>
            <Link className="btn btn-ghost" to="/contato#diagnostico">
              <span>Solicitar orçamento</span>
              <Icon name="chart" className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Ficha técnica
              </span>
              <h2 data-anim="lines">Experiência prática, não teoria de slide.</h2>
            </div>
          </div>

          <div className="spec-sheet" data-stagger>
            {homeMetrics.map((item) => (
              <div className="spec-row" key={item.value} data-stagger-item>
                <span className="spec-value" data-counter={item.value}>
                  {item.value}
                </span>
                <span className="spec-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Produtos próprios
              </span>
              <h2 data-anim="lines">Não paramos no suporte técnico.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Plataformas construídas a partir de problemas que encontramos em campo — e que hoje
              sustentam operações reais.
            </p>
          </div>

          <div className="index-list" data-stagger>
            {featuredProducts.map((item, index) => (
              <Link className="index-item" to={item.to} key={item.title} data-stagger-item>
                <div className="index-item-inner">
                  <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <span className="index-arrow">
                    <Icon name="arrow" />
                  </span>
                </div>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow" data-anim="rise">
              Próximo passo
            </span>
            <h2 data-anim="lines">Comece por um diagnóstico da sua operação.</h2>
          </div>

          <div className="cta-aside">
            <p data-anim="rise">
              Uma conversa técnica para mapear o que está frágil, o que dá para automatizar e o que
              precisa ser reconstruído. Sem compromisso comercial.
            </p>
            <div className="button-row" data-anim="rise">
              <Link className="btn" to="/contato#diagnostico">
                <span>Solicitar diagnóstico</span>
                <Icon name="arrow" className="btn-icon" />
              </Link>
              <Link className="btn btn-secondary" to="/contato#canais">
                <span>Falar pelo WhatsApp</span>
                <Icon name="phone" className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
