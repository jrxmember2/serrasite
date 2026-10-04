import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import ExpertiseSection from '../components/ExpertiseSection';
import ProjectCTA from '../components/ProjectCTA';

export default function AboutPage() {
  return (
    <>
      <Seo path="/sobre" />
      <PageHero
        eyebrow="Somos Serratech"
        title="Carreira em tecnologia. Cuidado em cada escolha."
        description="Somos uma fábrica de software e a desenvolvedora do ÂncoraHUB. Reunimos experiência em data centers, operações críticas, desenvolvimento em multinacionais e validação externa de cibersegurança para construir soluções que merecem a sua confiança."
        primaryAction={{
          label: 'Vamos construir juntos',
          to: '/contato#diagnostico',
        }}
        secondaryAction={{ label: 'Conheça nossos produtos', to: '/ancora' }}
        highlights={[
          'Engenharia de software',
          'Experiência em operações críticas',
          'Infraestrutura distribuída',
        ]}
      />
      <section className="section">
        <div className="container about-manifesto">
          <div>
            <span className="eyebrow" data-anim="rise">
              O que nos move
            </span>
            <h2 data-anim="lines">
              Tempo é espaço
              <br />
              para crescer.
            </h2>
          </div>
          <div data-anim="rise">
            <p>
              Quando o fluxo de trabalho melhora, a equipe pode fazer mais do
              que responder às demandas do dia. Pode cuidar dos clientes,
              encontrar oportunidades e construir o próximo passo do negócio.
            </p>
            <p>
              É para isso que desenvolvemos. Transformamos a experiência de quem
              já operou em ambientes exigentes em software, automação e
              infraestrutura com propósito.
            </p>
            <p>
              <strong>Administradoras são nossas parceiras.</strong> No mercado
              condominial, nossa tecnologia fortalece o trabalho de síndicos e
              administradoras e facilita a colaboração entre eles.
            </p>
          </div>
        </div>
      </section>
      <ExpertiseSection full />
      <section className="quality-statement">
        <div className="container">
          <span className="eyebrow" data-anim="rise">
            Qualidade que acompanha o produto
          </span>
          <h2 data-anim="lines">
            Construir. Validar.
            <br />
            Proteger. Evoluir.
          </h2>
          <div className="quality-bottom">
            <span />
            <p data-anim="rise">
              Da definição do fluxo às atualizações, cuidamos da qualidade do
              software e da infraestrutura que o sustenta. A validação por
              especialistas externos em cibersegurança complementa esse trabalho
              com um olhar independente sobre o sistema, de ponta a ponta.
            </p>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
