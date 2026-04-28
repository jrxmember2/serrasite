import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import {
  ancoraAudience,
  ancoraDifferentials,
  ancoraJourney,
  ancoraModules,
  ancoraRoadmap,
} from '../data/siteContent';

export default function AncoraPage() {
  return (
    <>
      <Seo
        title="Âncora sistema"
        description="Âncora: hub inteligente para centralizar clientes, contratos, cobranças, documentos, atendimento e automações em operações jurídicas, condominiais e administrativas."
        keywords="Âncora sistema, sistema para escritórios, sistema para condomínios, portal do cliente, automação empresarial, gestão condominial digital"
        path="/ancora"
      />

      <PageHero
        eyebrow="Sistema Âncora"
        title="Âncora: o hub inteligente para centralizar sua operação, seus clientes e seus processos."
        description="Uma plataforma criada para organizar rotinas jurídicas, condominiais e administrativas, conectando clientes, contratos, cobranças, documentos, propostas, financeiro, atendimento e automações em um só lugar."
        primaryAction={{ label: 'Solicitar apresentação', to: '/contato' }}
        secondaryAction={{ label: 'Ver módulos do sistema', to: '/ancora#modulos' }}
        highlights={['Hub modular', 'Foco jurídico-condominial', 'Portal do cliente', 'Preparado para automações']}
      >
        <div className="glass-panel product-visual">
          <div className="visual-header">
            <span className="status-chip">Hub modular em evolução</span>
            <strong>Âncora Platform</strong>
          </div>
          <div className="visual-columns">
            <div className="visual-column">
              <div className="visual-stat">
                <span>Clientes</span>
                <strong>360º</strong>
              </div>
              <div className="visual-stat">
                <span>Financeiro</span>
                <strong>Integrado</strong>
              </div>
            </div>
            <div className="visual-flow-list">
              <span>Propostas</span>
              <span>Contratos</span>
              <span>Cobranças</span>
              <span>Portal</span>
              <span>Automação</span>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="section">
        <div className="container content-split">
          <div data-reveal>
            <SectionHeading
              eyebrow="O que é o Âncora"
              title="Uma plataforma modular criada para profissionalizar a gestão."
              description="O Âncora é um hub pensado para centralizar a operação do escritório ou empresa, com foco especial no segmento jurídico-condominial e em fluxos que dependem de organização, histórico e automação."
            />
          </div>
          <div className="glass-panel content-panel" data-reveal>
            <p>
              Ele nasce de problemas reais: atendimento fragmentado, contratos descentralizados,
              dificuldade para cobrar, ausência de visão gerencial e excesso de tarefas repetitivas.
              A proposta é transformar esse cenário em uma operação mais previsível, rastreável e
              escalável.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Para quem é"
            title="Desenhado para operações que precisam de controle sem perder agilidade."
            description="O Âncora serve estruturas que dependem de atendimento organizado, documentação forte e relacionamento contínuo com clientes."
            centered
          />
          <div className="card-grid card-grid-four">
            {ancoraAudience.map((item) => (
              <article key={item} className="audience-card glass-card" data-reveal>
                <Icon name="check" className="feature-list-icon" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="modulos">
        <div className="container">
          <SectionHeading
            eyebrow="Principais módulos"
            title="Um ecossistema que organiza desde o comercial até a operação."
            description="Cada módulo foi pensado para criar continuidade de dados, histórico útil e mais inteligência para a tomada de decisão."
          />
          <div className="module-grid">
            {ancoraModules.map((module) => (
              <article key={module.title} className="module-card" data-reveal>
                <div className="module-card-header">
                  <div className="icon-badge is-solid">
                    <Icon name={module.icon} className="icon-badge-svg" />
                  </div>
                  <h3>{module.title}</h3>
                </div>
                <ul className="feature-list">
                  {module.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Icon name="check" className="feature-list-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Diferenciais do Âncora"
            title="Um produto com visão SaaS, mas nascido da necessidade prática."
            description="O Âncora foi desenhado para crescer em módulos, integrações e inteligência, sem perder foco na operação real."
            centered
          />
          <div className="pill-collection large" data-reveal>
            {ancoraDifferentials.map((item) => (
              <span key={item} className="keyword-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Jornada visual"
            title="Uma linha de fluxo clara para comercial, operação e relacionamento."
            description="Do primeiro contato ao pós-atendimento, o Âncora organiza cada etapa para que a operação trabalhe com menos ruído e mais contexto."
          />
          <div className="journey-flow" data-reveal>
            {ancoraJourney.map((step, index) => (
              <div key={step} className="journey-step">
                <span>{step}</span>
                {index < ancoraJourney.length - 1 ? <i className="journey-arrow" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Roadmap em evolução"
            title="Próximas camadas de valor do Âncora."
            description="A visão do produto inclui novas interfaces, integrações, inteligência e expansão funcional para fortalecer ainda mais o ecossistema."
          />
          <div className="card-grid card-grid-four">
            {ancoraRoadmap.map((item) => (
              <article key={item} className="roadmap-card" data-reveal>
                <span className="roadmap-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner" data-reveal>
            <div>
              <span className="eyebrow">Próximo passo</span>
              <h2>Leve sua operação para um novo nível de organização, automação e controle.</h2>
              <p>
                O Âncora foi pensado para empresas e escritórios que querem sair do improviso e
                operar com estrutura de verdade.
              </p>
            </div>
            <div className="button-row">
              <Link className="btn btn-primary" to="/contato">
                <span>Solicitar apresentação</span>
                <Icon name="arrow" className="btn-icon" />
              </Link>
              <Link className="btn btn-secondary" to="/contato#canais">
                <span>Falar com a Serratech</span>
                <Icon name="phone" className="btn-icon" />
              </Link>
              <Link className="btn btn-ghost" to="/ancora#modulos">
                <span>Ver módulos do sistema</span>
                <Icon name="layers" className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
