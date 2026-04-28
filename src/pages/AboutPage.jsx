import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { aboutReasons, values } from '../data/siteContent';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Sobre a Serratech"
        description="Conheça a Serratech: tecnologia com visão prática, estratégica e humana para empresas, escritórios, síndicos e condomínios."
        keywords="Serratech, consultoria em TI, tecnologia para empresas, tecnologia condominial, suporte técnico corporativo"
        path="/sobre"
      />

      <PageHero
        eyebrow="Sobre a Serratech"
        title="Serratech: tecnologia com visão prática, estratégica e humana."
        description="A Serratech nasceu da experiência prática em tecnologia corporativa, infraestrutura, sistemas e atendimento a operações reais. Simplificamos processos, melhoramos segurança, reduzimos retrabalho e criamos soluções digitais que realmente funcionam."
        primaryAction={{ label: 'Falar com a Serratech', to: '/contato' }}
        secondaryAction={{ label: 'Conhecer soluções', to: '/solucoes' }}
        highlights={['Experiência prática', 'Atendimento próximo', 'Visão consultiva', 'Mercado corporativo e condominial']}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Nossa história"
            title="Tecnologia precisa resolver, proteger e organizar."
            description="A Serratech entende que tecnologia não deve ser complicada. Ela precisa resolver problemas, proteger informações, organizar rotinas e gerar produtividade com clareza."
          />
          <div className="story-grid">
            <article className="story-card" data-reveal>
              <h3>Origem</h3>
              <p>
                A empresa surge de uma trajetória de mais de 20 anos em TI aplicada ao mundo real:
                suporte, infraestrutura, sistemas, atendimento e operações que exigem continuidade.
              </p>
            </article>
            <article className="story-card" data-reveal>
              <h3>Leitura prática</h3>
              <p>
                Essa vivência trouxe um olhar muito claro: não basta manter a tecnologia funcionando.
                É preciso fazer com que ela ajude a gestão a enxergar melhor, responder melhor e
                crescer com menos atrito.
              </p>
            </article>
            <article className="story-card" data-reveal>
              <h3>Mercados atendidos</h3>
              <p>
                Empresas, escritórios, operações condominiais e síndicos encontram na Serratech uma
                parceira capaz de unir organização, segurança, automação e visão de futuro.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="mvv-grid">
            <article className="mvv-card glass-card" data-reveal>
              <span className="eyebrow">Nossa missão</span>
              <h3>Transformar a tecnologia em estrutura real para a operação.</h3>
              <p>
                Entregar soluções que organizam processos, protegem informações e geram
                produtividade de forma prática e sustentável.
              </p>
            </article>
            <article className="mvv-card glass-card" data-reveal>
              <span className="eyebrow">Nossa visão</span>
              <h3>Ser referência em evolução digital para o mercado corporativo e condominial.</h3>
              <p>
                Construir um ecossistema de produtos, serviços e automações capaz de apoiar decisões,
                atendimento e gestão com alto valor percebido.
              </p>
            </article>
            <article className="mvv-card glass-card" data-reveal>
              <span className="eyebrow">Nossos valores</span>
              <div className="pill-collection">
                {values.map((value) => (
                  <span key={value} className="keyword-pill">
                    {value}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Por que escolhem a Serratech"
            title="Estrutura, estratégia e evolução digital entregues com proximidade."
            description="Empresas e condomínios escolhem a Serratech porque precisam de uma parceira que entenda operação, não apenas tecnologia."
          />
          <div className="card-grid card-grid-three">
            {aboutReasons.map((item) => (
              <article key={item.title} className="info-card solid-card" data-reveal>
                <div className="icon-badge is-solid">
                  <Icon name={item.icon} className="icon-badge-svg" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="statement-banner" data-reveal>
            <p>“Não entregamos apenas suporte técnico. Entregamos estrutura, estratégia e evolução digital.”</p>
            <Link className="btn btn-primary" to="/contato">
              <span>Solicitar uma conversa</span>
              <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
