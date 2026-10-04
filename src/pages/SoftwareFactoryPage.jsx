import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ProjectCTA from '../components/ProjectCTA';
import {
  factoryCapabilities,
  factoryDifferentials,
  factoryModels,
  factoryPitch,
  factoryProcess,
} from '../data/siteContent';

export default function SoftwareFactoryPage() {
  return (
    <>
      <Seo path="/fabrica-de-software" />

      <PageHero
        eyebrow="Fábrica de software"
        title="Seu sistema, construído por quem também sustenta a operação."
        description={factoryPitch}
        primaryAction={{
          label: 'Solicitar orçamento',
          to: '/contato#diagnostico',
        }}
        secondaryAction={{ label: 'Conhecer o ÂncoraHUB', to: '/ancora' }}
        highlights={[
          'Experiência em operações críticas',
          'Qualidade em cada entrega',
          'Segurança e continuidade',
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                O que construímos
              </span>
              <h2 data-anim="lines">Sete tipos de projeto que entregamos.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Se a sua operação depende de planilha compartilhada, retrabalho
              manual ou de um sistema que ninguém mais mantém, algum destes
              resolve.
            </p>
          </div>

          <div className="ledger" data-stagger>
            {factoryCapabilities.map((item, index) => (
              <article
                className="ledger-row"
                key={item.title}
                data-stagger-item
              >
                <span className="ledger-index">
                  {String(index + 1).padStart(2, '0')} /{' '}
                  {factoryCapabilities.length}
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

      {/* A esteira de entrega é a parte mais "sistema" desta página; ganha a
          superfície escura para separá-la do texto comercial em volta. */}
      <section className="band">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Como trabalhamos
              </span>
              <h2 data-anim="lines">Do problema ao sistema no ar.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Sete etapas na ordem em que acontecem. Você sabe onde o projeto
              está em qualquer momento — e o que vem a seguir.
            </p>
          </div>

          <ol className="phases" data-stagger>
            {factoryProcess.map((step, index) => (
              <li className="phase" key={step.title} data-stagger-item>
                <span className="phase-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="phase-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Modelos de contratação
              </span>
              <h2 data-anim="lines">Três formas de nos contratar.</h2>
            </div>
            <p className="lead" data-anim="rise">
              O diagnóstico define o formato de trabalho: um projeto com
              objetivo claro, uma equipe dedicada à evolução ou cuidado contínuo
              com o sistema existente.
            </p>
          </div>

          <div className="duo duo-three" data-stagger>
            {factoryModels.map((model) => (
              <div className="duo-col" key={model.title} data-stagger-item>
                <span className="label">{model.detail}</span>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Por que a Serratech
              </span>
              <h2 data-anim="lines">Experiência que protege cada decisão.</h2>
            </div>
          </div>

          <div className="ledger" data-stagger>
            {factoryDifferentials.map((item, index) => (
              <article
                className="ledger-row"
                key={item.title}
                data-stagger-item
              >
                <span className="ledger-index">
                  {String(index + 1).padStart(2, '0')}
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

      <ProjectCTA
        title={'Traga o desafio.\nVamos construir.'}
        text="Começamos pela sua operação. Depois, desenhamos o escopo, as prioridades e o caminho para entregar software com qualidade e continuidade."
        label="Converse sobre o seu projeto"
      />
    </>
  );
}
