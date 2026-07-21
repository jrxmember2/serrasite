import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { factoryPitch, featuredProducts, solutionsCategories } from '../data/siteContent';

export default function SolutionsPage() {
  return (
    <>
      <Seo path="/solucoes" />

      <PageHero
        eyebrow="Produtos e soluções"
        title="Soluções completas para empresas, escritórios, condomínios e síndicos."
        description="Planejamento, infraestrutura, consultoria, desenvolvimento, automação e tecnologia condominial em uma abordagem integrada, comercial e orientada a resultado."
        primaryAction={{ label: 'Solicitar diagnóstico', to: '/contato#diagnostico' }}
        secondaryAction={{ label: 'Ver a fábrica de software', to: '/fabrica-de-software' }}
        highlights={['Infraestrutura', 'Consultoria', 'Sistemas', 'Automação', 'Condomínios', 'Segurança']}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Amplitude de atuação
              </span>
              <h2 data-anim="rise">Da base tecnológica ao produto digital.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Seis frentes pensadas para sustentar empresas e condomínios com mais controle,
              produtividade e maturidade digital.
            </p>
          </div>

          <div className="catalog">
            {solutionsCategories.map((category, index) => (
              <article className="catalog-item" id={category.id} key={category.id} data-anim="rise">
                <div className="catalog-head">
                  <span className="ledger-index">
                    {String(index + 1).padStart(2, '0')} / {solutionsCategories.length}
                  </span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <ul className="chip-list">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
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
                Fábrica de software
              </span>
              <h2 data-anim="rise">Precisa de um sistema que não existe pronto?</h2>
            </div>
            <p className="lead" data-anim="rise">
              {factoryPitch}
            </p>
          </div>

          <div className="button-row" data-anim="rise">
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Produtos próprios
              </span>
              <h2 data-anim="rise">Soluções com identidade Serratech.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Plataformas em evolução para fortalecer atendimento, gestão condominial, automação e
              relacionamento com clientes.
            </p>
          </div>

          <div className="index-list" data-stagger>
            {featuredProducts.map((product, index) => (
              <Link className="index-item" to={product.to} key={product.title} data-stagger-item>
                <div className="index-item-inner">
                  <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{product.title}</h3>
                  <span className="index-arrow">
                    <Icon name="arrow" />
                  </span>
                </div>
                <p>{product.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
