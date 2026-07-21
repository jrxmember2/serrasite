import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
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
      <Seo path="/ancora" />

      <PageHero
        eyebrow="Sistema Âncora"
        title="O hub que centraliza sua operação, seus clientes e seus processos."
        description="Uma plataforma criada para organizar rotinas jurídicas, condominiais e administrativas, conectando clientes, contratos, cobranças, documentos, propostas, financeiro, atendimento e automações em um só lugar."
        primaryAction={{ label: 'Solicitar apresentação', to: '/contato' }}
        secondaryAction={{ label: 'Ver os módulos', to: '/ancora#modulos' }}
        highlights={['Hub modular', 'Foco jurídico-condominial', 'Portal do cliente', 'Preparado para automações']}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Para quem é
              </span>
              <h2 data-anim="rise">Operações que precisam de controle sem perder agilidade.</h2>
            </div>
            <p className="lead" data-anim="rise">
              O Âncora nasceu dentro de operações reais que precisavam parar de administrar clientes,
              contratos e cobranças em planilhas separadas.
            </p>
          </div>

          <ul className="chip-list chip-list-wide" data-anim="rise">
            {ancoraAudience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint" id="modulos">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Principais módulos
              </span>
              <h2 data-anim="rise">Do comercial à operação, em um ecossistema só.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Treze módulos que funcionam juntos. Cada um resolve uma etapa que hoje costuma viver em
              uma ferramenta diferente.
            </p>
          </div>

          <div className="catalog">
            {ancoraModules.map((module, index) => (
              <article className="catalog-item" key={module.title} data-anim="rise">
                <div className="catalog-head">
                  <span className="ledger-index">
                    {String(index + 1).padStart(2, '0')} / {ancoraModules.length}
                  </span>
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Jornada
              </span>
              <h2 data-anim="rise">Do primeiro contato ao cliente atendido.</h2>
            </div>
            <p className="lead" data-anim="rise">
              A sequência que o sistema acompanha de ponta a ponta, sem troca de ferramenta no meio
              do caminho.
            </p>
          </div>

          <ol className="flow" data-stagger>
            {ancoraJourney.map((step, index) => (
              <li className="flow-step" key={step} data-stagger-item>
                <span className="flow-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="flow-label">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Diferenciais
              </span>
              <h2 data-anim="rise">Visão de produto, nascida da necessidade prática.</h2>
            </div>
          </div>

          <ul className="chip-list chip-list-wide" data-anim="rise">
            {ancoraDifferentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="section-head roadmap-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Roadmap
              </span>
              <h2 data-anim="rise">Próximas camadas de valor.</h2>
            </div>
          </div>

          <ul className="hero-tags" data-anim="rise">
            {ancoraRoadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow" data-anim="rise">
              Apresentação
            </span>
            <h2 data-anim="rise">Quer ver o Âncora aplicado à sua operação?</h2>
          </div>

          <div className="cta-aside">
            <p data-anim="rise">
              Mostramos os módulos rodando e discutimos o que faz sentido para o seu contexto — e o
              que a fábrica de software precisaria construir sob medida.
            </p>
            <div className="button-row" data-anim="rise">
              <Link className="btn" to="/contato">
                <span>Solicitar apresentação</span>
                <Icon name="arrow" className="btn-icon" />
              </Link>
              <Link className="btn btn-secondary" to="/fabrica-de-software">
                <span>Ver a fábrica de software</span>
                <Icon name="app" className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
