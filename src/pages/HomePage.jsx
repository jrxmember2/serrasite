import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import {
  featuredProducts,
  heroKeywords,
  homeMetrics,
  homePainPoints,
  homeSolutions,
  pillars,
} from '../data/siteContent';

export default function HomePage() {
  return (
    <>
      <Seo
        title="TI para empresas, condomínios e escritórios"
        description="Infraestrutura em TI, consultoria, automação, segurança digital, sistemas próprios e tecnologia condominial para operações que não podem parar."
        keywords="TI para empresas, TI para condomínios, consultoria em TI, infraestrutura de TI, automação empresarial, segurança digital, portal do cliente, Serratech"
        path="/"
      />

      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">Tecnologia que organiza, protege e impulsiona</span>
            <h1>
              Tecnologia, gestão e inovação para empresas e condomínios que querem crescer com
              segurança.
            </h1>
            <p>
              A Serratech une infraestrutura de TI, consultoria, automação e sistemas próprios para
              transformar a rotina de empresas, escritórios, síndicos e condomínios.
            </p>
            <div className="button-row">
              <Link className="btn btn-primary" to="/solucoes">
                <span>Conheça nossas soluções</span>
                <Icon name="arrow" className="btn-icon" />
              </Link>
              <Link className="btn btn-secondary" to="/contato">
                <span>Fale com um especialista</span>
                <Icon name="support" className="btn-icon" />
              </Link>
              <Link className="btn btn-ghost" to="/portal-cliente">
                <span>Acesse o portal do cliente</span>
                <Icon name="portal" className="btn-icon" />
              </Link>
            </div>
            <div className="hero-keyword-row">
              {heroKeywords.map((item) => (
                <span key={item} className="keyword-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="tech-halo parallax-layer" aria-hidden="true" />
            <div className="glass-panel hero-dashboard">
              <div className="dashboard-topbar">
                <div className="dashboard-topbar-group">
                  <span className="dot dot-cyan" />
                  <span className="dot dot-blue" />
                  <span className="dot dot-teal" />
                </div>
                <span className="status-chip">Operação centralizada</span>
              </div>

              <div className="dashboard-body">
                <div className="dashboard-primary-card">
                  <span className="metric-tag">Serratech Control Center</span>
                  <h2>Da infraestrutura ao sistema, a Serratech conecta tudo.</h2>
                  <div className="dashboard-graph">
                    <span className="graph-bar bar-one" />
                    <span className="graph-bar bar-two" />
                    <span className="graph-bar bar-three" />
                    <span className="graph-bar bar-four" />
                  </div>
                </div>

                <div className="dashboard-side-stack">
                  <article className="floating-card glass-panel card-float-one">
                    <div className="icon-badge">
                      <Icon name="shield" className="icon-badge-svg" />
                    </div>
                    <strong>Segurança digital</strong>
                    <p>Mais controle, backup e rastreabilidade.</p>
                  </article>
                  <article className="floating-card glass-panel card-float-two">
                    <div className="icon-badge">
                      <Icon name="workflow" className="icon-badge-svg" />
                    </div>
                    <strong>Fluxos inteligentes</strong>
                    <p>Automação e integração para reduzir atrito.</p>
                  </article>
                </div>
              </div>
            </div>

            <div className="hero-floating-tags">
              {heroKeywords.map((item, index) => (
                <span key={item} className={`floating-tag tag-${index + 1}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-split">
          <div data-reveal>
            <SectionHeading
              eyebrow="A tecnologia certa muda a operação inteira"
              title="Mais do que suporte: estratégia, segurança e evolução digital."
              description="A Serratech atua conectando infraestrutura, sistemas, automação e gestão para criar operações mais organizadas, seguras e produtivas."
            />
          </div>
          <div className="glass-panel content-panel" data-reveal>
            <div className="content-panel-grid">
              <article>
                <span className="content-panel-label">Empresas e escritórios</span>
                <p>
                  Estruturamos ambientes de TI, racionalizamos processos e criamos visibilidade para
                  operações que precisam responder com velocidade e confiança.
                </p>
              </article>
              <article>
                <span className="content-panel-label">Condomínios e síndicos</span>
                <p>
                  Levamos organização digital, comunicação clara, gestão documental e novas
                  experiências para o mercado condominial.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Dores do mercado"
            title="Problemas reais exigem uma base tecnológica mais inteligente."
            description="A Serratech foi desenhada para atuar exatamente nos pontos onde a operação perde tempo, controle e segurança."
            centered
          />
          <div className="card-grid card-grid-four">
            {homePainPoints.map((item) => (
              <article key={item.title} className="info-card glass-card" data-reveal>
                <div className="icon-badge">
                  <Icon name={item.icon} className="icon-badge-svg" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Como a Serratech resolve"
            title="Soluções digitais para operações que não podem parar."
            description="Infraestrutura, consultoria, automação e produtos próprios conectados para simplificar decisões e destravar crescimento."
          />
          <div className="card-grid card-grid-four">
            {homeSolutions.map((item) => (
              <article key={item.title} className="info-card solid-card" data-reveal>
                <div className="icon-badge is-solid">
                  <Icon name={item.icon} className="icon-badge-svg" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Destaques numéricos"
            title="Experiência prática e visão de longo prazo."
            description="Cada projeto nasce com base real de mercado, olhar consultivo e mentalidade de melhoria contínua."
          />
          <div className="metrics-grid">
            {homeMetrics.map((item) => (
              <article key={item.value} className="metric-card" data-reveal>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Nossos pilares"
            title="Tudo o que entregamos precisa sustentar a operação com clareza."
            description="Segurança, performance, automação, gestão, atendimento e inovação são os eixos que orientam a atuação da Serratech."
            centered
          />
          <div className="card-grid card-grid-three">
            {pillars.map((item) => (
              <article key={item.title} className="pillar-card glass-card" data-reveal>
                <div className="icon-badge">
                  <Icon name={item.icon} className="icon-badge-svg" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Produtos em destaque"
            title="Produtos que fortalecem atendimento, gestão e escalabilidade."
            description="A Serratech não se limita ao suporte técnico: desenvolve plataformas, portais e automações com visão de produto."
          />
          <div className="card-grid card-grid-two">
            {featuredProducts.map((item) => (
              <article key={item.title} className="product-card" data-reveal>
                <div className="product-card-header">
                  <div className="icon-badge is-solid">
                    <Icon name={item.icon} className="icon-badge-svg" />
                  </div>
                  <span className="status-chip">Produto estratégico</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link className="text-link" to={item.to}>
                  Saiba mais
                  <Icon name="arrow" className="text-link-icon" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner" data-reveal>
            <div>
              <span className="eyebrow">Diagnóstico estratégico</span>
              <h2>Pronto para transformar sua operação com tecnologia de verdade?</h2>
              <p>
                Seu condomínio mais organizado. Sua empresa mais produtiva. Sua operação mais
                inteligente.
              </p>
            </div>
            <div className="button-row">
              <Link className="btn btn-primary" to="/contato#diagnostico">
                <span>Solicitar diagnóstico</span>
                <Icon name="chart" className="btn-icon" />
              </Link>
              <Link className="btn btn-secondary" to="/contato#canais">
                <span>Falar pelo WhatsApp</span>
                <Icon name="phone" className="btn-icon" />
              </Link>
              <Link className="btn btn-ghost" to="/ancora">
                <span>Conhecer o Âncora</span>
                <Icon name="anchor" className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
