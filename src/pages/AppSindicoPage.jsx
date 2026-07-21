import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { appFeatures, appScreens } from '../data/siteContent';

export default function AppSindicoPage() {
  return (
    <>
      <Seo path="/app-sindico" />

      <PageHero
        eyebrow="App Âncora Síndico"
        title="A gestão condominial na palma da mão do síndico."
        description="Organize chamados, documentos, comunicados, solicitações e informações importantes do condomínio em uma experiência simples, moderna e segura."
        primaryAction={{ label: 'Entrar na lista de interesse', to: '/contato' }}
        secondaryAction={{ label: 'Soluções para condomínios', to: '/solucoes#condominios' }}
        highlights={['Chamados', 'Documentos', 'Comunicados', 'Integração com WhatsApp']}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Telas do produto
              </span>
              <h2 data-anim="rise">Desenhado para fluidez, clareza e ação rápida.</h2>
            </div>
            <p className="lead" data-anim="rise">
              O síndico resolve entre uma reunião e outra. A interface precisa entregar a informação
              em poucos toques.
            </p>
          </div>

          <div className="screens" data-stagger>
            {appScreens.map((screen, index) => (
              <article className="screen" key={screen.title} data-stagger-item>
                <div className="screen-head">
                  <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="label">{screen.accent}</span>
                </div>
                <h3>{screen.title}</h3>
                <ul className="feature-list">
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

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Funcionalidades
              </span>
              <h2 data-anim="rise">Gestão condominial mais simples e segura.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Nove frentes que cobrem a rotina do síndico, do chamado aberto no portão à prestação de
              contas da assembleia.
            </p>
          </div>

          <div className="ledger" data-stagger>
            {appFeatures.map((item, index) => (
              <article className="ledger-row" key={item.title} data-stagger-item>
                <span className="ledger-index">
                  {String(index + 1).padStart(2, '0')} / {appFeatures.length}
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

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow" data-anim="rise">
              Lista de interesse
            </span>
            <h2 data-anim="rise">Quer testar o app no seu condomínio?</h2>
          </div>

          <div className="cta-aside">
            <p data-anim="rise">
              Entre na lista de interesse para acompanhar as próximas versões e participar dos testes
              com condomínios reais.
            </p>
            <div className="button-row" data-anim="rise">
              <Link className="btn" to="/contato">
                <span>Entrar na lista</span>
                <Icon name="arrow" className="btn-icon" />
              </Link>
              <Link className="btn btn-secondary" to="/ancora">
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
