import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { featuredProducts, solutionsCategories } from '../data/siteContent';

export default function SolutionsPage() {
  return (
    <>
      <Seo
        title="Produtos e soluções"
        description="Soluções completas para empresas, escritórios, condomínios e síndicos: infraestrutura em TI, consultoria, sistemas, automação, segurança digital e produtos próprios."
        keywords="infraestrutura de TI, consultoria em TI, sistema para escritórios, sistema para condomínios, automação empresarial, segurança digital, portal do cliente"
        path="/solucoes"
      />

      <PageHero
        eyebrow="Produtos e soluções"
        title="Soluções completas para empresas, escritórios, condomínios e síndicos."
        description="Planejamento, infraestrutura, consultoria, desenvolvimento, automação e tecnologia condominial em uma abordagem integrada, comercial e orientada a resultado."
        primaryAction={{ label: 'Solicitar diagnóstico', to: '/contato#diagnostico' }}
        secondaryAction={{ label: 'Ver o portal do cliente', to: '/portal-cliente' }}
        highlights={['Infraestrutura em TI', 'Consultoria', 'Sistemas', 'Automação', 'Condomínios', 'Segurança digital']}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Amplitude de atuação"
            title="Da base tecnológica ao produto digital."
            description="Cada frente foi pensada para sustentar empresas e condomínios com mais controle, produtividade e maturidade digital."
          />
          <div className="solution-grid">
            {solutionsCategories.map((category) => (
              <article key={category.id} className="solution-card" id={category.id} data-reveal>
                <div className="solution-card-header">
                  <div className="icon-badge is-solid">
                    <Icon name={category.icon} className="icon-badge-svg" />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <p>{category.description}</p>
                <ul className="feature-list">
                  {category.items.map((item) => (
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

      <section className="section dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Produtos próprios"
            title="Soluções com identidade Serratech."
            description="Plataformas em evolução para fortalecer atendimento, gestão condominial, automação e relacionamento com clientes."
            centered
          />
          <div className="card-grid card-grid-two">
            {featuredProducts.map((product) => (
              <article key={product.title} className="product-card glass-card" data-reveal>
                <div className="product-card-header">
                  <div className="icon-badge">
                    <Icon name={product.icon} className="icon-badge-svg" />
                  </div>
                  <span className="status-chip">Saiba mais</span>
                </div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <Link className="btn btn-secondary" to={product.to}>
                  <span>Saiba mais</span>
                  <Icon name="arrow" className="btn-icon" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
