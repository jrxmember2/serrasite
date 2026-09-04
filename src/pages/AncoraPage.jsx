import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PhotoBand from '../components/PhotoBand';
import ProductShot from '../components/ProductShot';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import {
  ancoraAudience,
  ancoraDifferentials,
  ancoraFoundation,
  ancoraJourney,
  ancoraModules,
  ancoraPitch,
  ancoraRoadmap,
} from '../data/siteContent';

export default function AncoraPage() {
  return (
    <>
      <Seo path="/ancora" />

      <PageHero
        eyebrow="Âncora · ERP jurídico"
        title="O escritório inteiro em um ambiente isolado por tenant."
        description={ancoraPitch}
        primaryAction={{ label: 'Solicitar apresentação', to: '/contato' }}
        secondaryAction={{ label: 'Ver os módulos', to: '/ancora#modulos' }}
        highlights={[
          'Multitenant com RLS',
          'Cálculo de prazos CPC e CLT',
          'Honorários e timesheet',
          'Auditoria desde a fundação',
        ]}
      />

      {/* A fundação técnica vem antes da lista de módulos: é ela que sustenta
          a promessa comercial, e é o que diferencia o Âncora de uma planilha. */}
      <section className="band">
        <div className="container">
          <div className="showcase">
            <div className="showcase-aside">
              <span className="eyebrow" data-anim="rise">
                Fundação
              </span>
              <h2 data-anim="lines">Segurança que está abaixo do código, não ao lado dele.</h2>
              <p data-anim="rise">
                Em um sistema que guarda processo, prazo e honorário de vários escritórios ao mesmo
                tempo, o vazamento entre clientes não pode depender de o programador ter lembrado do
                filtro. No Âncora, o isolamento é responsabilidade do banco de dados.
              </p>

              <dl className="hero-spec" data-stagger>
                {ancoraFoundation.map((row) => (
                  <div className="hero-spec-row" key={row.term} data-stagger-item>
                    <dt>{row.term}</dt>
                    <dd>{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="showcase-stack">
              <ProductShot
                src="/media/ancora-login.jpg"
                url="Âncora — ERP jurídico"
                alt="Tela de acesso do Âncora, com o texto ambiente seguro por escritório e entrada por e-mail ou código"
                caption="Âncora — acesso do escritório"
                meta="Entrada por senha ou código"
              />
            </div>
          </div>
        </div>
      </section>

      <PhotoBand
        src="/media/foto/escritorio-advocacia.jpg"
        alt="Advogado sentado à mesa do escritório, com balança da justiça, certificado emoldurado e processos ao lado do notebook"
        eyebrow="A rotina que o Âncora organiza"
        title="O prazo não perdoa quem estava confiando na memória."
        text="Audiência marcada, publicação que saiu ontem, honorário que ninguém apontou, contrato numa pasta que só o sócio acha. O Âncora existe para que nada disso dependa de alguém lembrar."
        credit="Foto: Pexels"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Para quem é
              </span>
              <h2 data-anim="lines">Escritórios que pararam de caber na planilha.</h2>
            </div>
            <p className="lead" data-anim="rise">
              O Âncora nasceu dentro de operações reais que precisavam parar de administrar
              processo, prazo, documento e honorário em arquivos separados.
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
                Módulos
              </span>
              <h2 data-anim="lines">Do primeiro cadastro ao indicador do mês.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Treze módulos que funcionam juntos. Cada um resolve uma etapa que hoje costuma viver em
              uma ferramenta diferente — ou em nenhuma.
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
              <h2 data-anim="lines">Do cadastro à fatura, sem trocar de ferramenta.</h2>
            </div>
            <p className="lead" data-anim="rise">
              A sequência que o sistema acompanha de ponta a ponta. Cada etapa alimenta a seguinte —
              a hora apontada vira recebível, o recebível vira fatura, a fatura vira indicador.
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
              <h2 data-anim="lines">Três coisas que a maioria não entrega junto.</h2>
            </div>
          </div>

          <div className="ledger" data-stagger>
            {ancoraDifferentials.map((item, index) => (
              <article className="ledger-row" key={item.title} data-stagger-item>
                <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="ledger-title">
                  <h3>{item.title}</h3>
                </div>
                <p className="ledger-text">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="section-head roadmap-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Roadmap
              </span>
              <h2 data-anim="lines">O que ainda não está pronto.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Esta lista fica separada dos módulos de propósito: o que está acima já roda; o que está
              aqui está em construção. Sem os dois no mesmo balde.
            </p>
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
            <h2 data-anim="lines">Quer ver o Âncora aplicado ao seu escritório?</h2>
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
