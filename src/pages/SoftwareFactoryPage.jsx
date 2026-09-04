import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
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
        primaryAction={{ label: 'Solicitar orçamento', to: '/contato#diagnostico' }}
        secondaryAction={{ label: 'Ver o Âncora funcionando', to: '/ancora' }}
        highlights={['Do problema ao sistema no ar', 'Entregas de pouco em pouco', 'Preço fechado antes de começar']}
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
              Se a sua operação depende de planilha compartilhada, retrabalho manual ou de um sistema
              que ninguém mais mantém, algum destes resolve.
            </p>
          </div>

          <div className="ledger" data-stagger>
            {factoryCapabilities.map((item, index) => (
              <article className="ledger-row" key={item.title} data-stagger-item>
                <span className="ledger-index">
                  {String(index + 1).padStart(2, '0')} / {factoryCapabilities.length}
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
              Sete etapas na ordem em que acontecem. Você sabe onde o projeto está em qualquer
              momento — e o que vem a seguir.
            </p>
          </div>

          <ol className="phases" data-stagger>
            {factoryProcess.map((step, index) => (
              <li className="phase" key={step.title} data-stagger-item>
                <span className="phase-index">{String(index + 1).padStart(2, '0')}</span>
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
              A escolha sai do diagnóstico: preço fechado quando o objetivo já está claro, time
              reservado quando o produto vai crescer sem data para parar.
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
              <h2 data-anim="lines">A diferença de contratar quem opera, não só quem programa.</h2>
            </div>
          </div>

          <div className="ledger" data-stagger>
            {factoryDifferentials.map((item, index) => (
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

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow" data-anim="rise">
              Orçamento
            </span>
            <h2 data-anim="lines">Traga o problema. Devolvemos escopo, prazo e custo.</h2>
          </div>

          <div className="cta-aside">
            <p data-anim="rise">
              O primeiro passo é entender a sua operação. Só depois disso falamos em número —
              orçamento antes de entender o problema é chute, e chute sai caro para os dois lados.
            </p>
            <div className="button-row" data-anim="rise">
              <Link className="btn" to="/contato#diagnostico">
                <span>Solicitar orçamento</span>
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
