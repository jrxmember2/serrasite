import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { appFeatures, appScreens } from '../data/siteContent';

export default function AppSindicoPage() {
  return (
    <>
      <Seo
        title="App para síndico"
        description="Âncora Síndico: app moderno para organizar chamados, documentos, comunicados, solicitações e rotinas condominiais com integração ao ecossistema Serratech."
        keywords="app para síndico, gestão condominial digital, tecnologia condominial, sistema para condomínios, app de condomínio, Serratech"
        path="/app-sindico"
      />

      <PageHero
        eyebrow="App Âncora Síndico"
        title="O app que coloca a gestão condominial na palma da mão do síndico."
        description="Organize chamados, documentos, comunicados, solicitações e informações importantes do condomínio em uma experiência simples, moderna e segura."
        primaryAction={{ label: 'Entrar na lista de interesse', to: '/contato' }}
        secondaryAction={{ label: 'Conhecer soluções para condomínios', to: '/solucoes#condominios' }}
        highlights={['Dashboard do condomínio', 'Chamados', 'Documentos', 'Comunicados', 'Integração com WhatsApp', 'Integração com Âncora']}
      >
        <div className="app-showcase">
          {appScreens.slice(0, 2).map((screen) => (
            <article key={screen.title} className="phone-mockup">
              <div className="phone-notch" />
              <div className="phone-screen">
                <span className="status-chip">{screen.accent}</span>
                <h3>{screen.title}</h3>
                <ul className="phone-list">
                  {screen.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </PageHero>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Mockups do produto"
            title="Uma experiência desenhada para fluidez, clareza e ação rápida."
            description="O app foi concebido para facilitar a rotina de síndicos, com telas objetivas, acessos rápidos e foco em gestão do dia a dia."
            centered
          />
          <div className="card-grid card-grid-four">
            {appScreens.map((screen) => (
              <article key={screen.title} className="app-screen-card glass-card" data-reveal>
                <span className="status-chip">{screen.accent}</span>
                <h3>{screen.title}</h3>
                <ul className="feature-list compact">
                  {screen.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" className="feature-list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Funcionalidades do app"
            title="Gestão condominial mais simples, moderna e segura."
            description="O Âncora Síndico foi pensado para concentrar rotinas críticas do condomínio em uma experiência prática e escalável."
          />
          <div className="card-grid card-grid-three">
            {appFeatures.map((feature) => (
              <article key={feature.title} className="info-card solid-card" data-reveal>
                <div className="icon-badge is-solid">
                  <Icon name={feature.icon} className="icon-badge-svg" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="integration-panel" data-reveal>
            <div>
              <span className="eyebrow">Integração estratégica</span>
              <h2>Conectado ao Âncora para transformar informação em continuidade operacional.</h2>
            </div>
            <div className="pill-collection">
              <span className="keyword-pill">Dados do condomínio</span>
              <span className="keyword-pill">Documentos</span>
              <span className="keyword-pill">Demandas</span>
              <span className="keyword-pill">Atendimento</span>
              <span className="keyword-pill">Portal do cliente</span>
              <span className="keyword-pill">Solicitações jurídicas e administrativas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner" data-reveal>
            <div>
              <span className="eyebrow">Produto em evolução</span>
              <h2>Quer preparar seu condomínio para uma gestão mais moderna?</h2>
              <p>
                O próximo passo é aproximar síndico, moradores, documentos e atendimento em uma só
                experiência.
              </p>
            </div>
            <div className="button-row">
              <Link className="btn btn-primary" to="/contato">
                <span>Entrar na lista de interesse</span>
                <Icon name="arrow" className="btn-icon" />
              </Link>
              <Link className="btn btn-secondary" to="/contato#canais">
                <span>Falar com a Serratech</span>
                <Icon name="phone" className="btn-icon" />
              </Link>
              <Link className="btn btn-ghost" to="/solucoes#condominios">
                <span>Conhecer soluções para condomínios</span>
                <Icon name="building" className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
