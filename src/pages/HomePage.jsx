import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import HubGlyph from '../components/HubGlyph';
import InfrastructureSection from '../components/InfrastructureSection';
import ExpertiseSection from '../components/ExpertiseSection';
import ProjectCTA from '../components/ProjectCTA';
import { prefersReducedMotion, withGsap } from '../lib/motion';

const services = [
  {
    icon: 'app',
    title: 'Software sob medida',
    text: 'O seu processo é o ponto de partida. Criamos sistemas e aplicativos que conectam a operação e simplificam o trabalho.',
    to: '/fabrica-de-software',
  },
  {
    icon: 'anchor',
    title: 'Ecossistema ÂncoraHUB',
    text: 'Tecnologia própria, desenvolvida pela Serratech. SindÂncora para síndicos e, em breve, ÂncorADV para advogados.',
    to: '/ancora',
  },
  {
    icon: 'workflow',
    title: 'Integração e automação',
    text: 'Menos tarefas repetidas. Mais informação fluindo entre pessoas e sistemas, com contexto e rastreabilidade.',
    to: '/solucoes#automacoes',
  },
];

export default function HomePage() {
  const heroRef = useRef(null);
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    return withGsap(({ gsap }) => {
      gsap
        .timeline({ defaults: { ease: 'power4.out' } })
        .to('[data-hero-meta]', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
        })
        .to(
          '.hero-line > span',
          { y: '0%', duration: 1.15, stagger: 0.13 },
          '-=0.35',
        )
        .from(
          '.hero-symbol',
          { scale: 0.5, rotation: -75, opacity: 0, duration: 1 },
          '-=0.95',
        )
        .to(
          '[data-hero-body]',
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          '-=0.65',
        );
      gsap.to('.hero-orbit', {
        rotation: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);
  }, []);
  return (
    <>
      <Seo path="/" />
      <section className="studio-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-kicker" data-hero-meta>
            <span className="eyebrow">
              Fábrica de software · Criadora do ÂncoraHUB
            </span>
            <span className="hero-origin">
              Feito no Brasil. Preparado para ir além.
            </span>
          </div>
          <h1
            className="studio-title"
            aria-label="Menos tarefas. Mais negócios."
          >
            <span className="studio-title-row" aria-hidden="true">
              <span className="hero-line">
                <span>MENOS</span>
              </span>
              <span className="hero-symbol hero-orbit">
                <HubGlyph variant="arrow" />
              </span>
              <span className="hero-line">
                <span>TAREFAS.</span>
              </span>
            </span>
            <span className="studio-title-row second" aria-hidden="true">
              <span className="hero-line">
                <span>MAIS</span>
              </span>
              <span className="hero-symbol hero-flower">
                <HubGlyph />
              </span>
              <span className="hero-line accent">
                <span>NEGÓCIOS.</span>
              </span>
            </span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-intro" data-hero-body>
              <span className="micro-label">
                Tecnologia que devolve o seu tempo
              </span>
              <p>
                Transformamos fluxos de trabalho em software inteligente. Sua
                equipe ganha tempo. Suas informações ganham proteção. Seu
                negócio ganha espaço para crescer.
              </p>
            </div>
            <div className="hero-actions" data-hero-body>
              <Link className="btn btn-lime" to="/contato#diagnostico">
                <span>Vamos construir juntos</span>
                <Icon name="arrow" />
              </Link>
              <Link className="text-link" to="/ancora">
                Conheça o ÂncoraHUB <Icon name="arrow" />
              </Link>
            </div>
          </div>
          <div className="hero-baseline" data-hero-body>
            <span>Engenharia. Experiência. Confiança.</span>
            <a href="#o-que-fazemos">
              Explore a Serratech <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>
      <div className="promise-strip" aria-label="Nossos compromissos">
        <div className="container">
          <span>Seu fluxo, mais simples.</span>
          <HubGlyph />
          <span>Seus dados, protegidos.</span>
          <HubGlyph />
          <span>Seu tempo, de volta.</span>
        </div>
      </div>
      <section className="section services-section" id="o-que-fazemos">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                O que fazemos
              </span>
              <h2 data-anim="lines">
                Problemas reais.
                <br />
                Software à altura.
              </h2>
            </div>
            <p className="lead" data-anim="rise">
              Somos uma fábrica de software com visão de operação. Do primeiro
              desenho à infraestrutura que sustenta tudo, construímos com
              qualidade, segurança e continuidade.
            </p>
          </div>
          <div className="service-grid" data-stagger>
            {services.map((service) => (
              <Link
                className="service-card"
                to={service.to}
                key={service.title}
                data-stagger-item
              >
                <Icon name={service.icon} className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-link">
                  Explore a solução <Icon name="arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="hub-showcase" id="ancorahub">
        <div className="container">
          <div className="hub-heading">
            <div>
              <span className="eyebrow" data-anim="rise">
                Criado, desenvolvido e mantido pela Serratech
              </span>
              <h2 className="hub-wordmark" data-anim="rise">
                Âncora<span>HUB</span>
                <HubGlyph />
              </h2>
            </div>
            <p data-anim="rise">
              Um ecossistema. Diferentes rotinas.
              <br />O mesmo compromisso com o seu tempo.
            </p>
          </div>
          <div className="product-feature">
            <div className="product-feature-copy" data-anim="rise">
              <span className="status-tag">
                <span /> Disponível
              </span>
              <h3>SindÂncora</h3>
              <p className="product-lede">
                A gestão flui.
                <br />
                Você segue em frente.
              </p>
              <p>
                Atendimento, manutenções, documentos e comunicação em um só
                lugar. Para síndicos que querem uma rotina organizada e tempo
                para novas oportunidades.
              </p>
              <div className="product-tags">
                <span>Gestão condominial</span>
                <span>WhatsApp</span>
                <span>LemeIA</span>
              </div>
              <Link className="btn btn-lime" to="/app-sindico">
                <span>Conheça o SindÂncora</span>
                <Icon name="arrow" />
              </Link>
            </div>
            <Link
              className="product-feature-visual"
              to="/app-sindico"
              aria-label="Ver as telas e funcionalidades do SindÂncora"
            >
              <div className="product-preview" data-anim="rise">
                <div className="preview-bar">
                  <span className="preview-dots" aria-hidden="true">
                    ● ● ●
                  </span>
                  <span>SindÂncora / Sua operação conectada</span>
                  <Icon name="shield" />
                </div>
                <div className="preview-crop">
                  <img
                    src="/media/products/panel-dashboard.webp"
                    alt="Tela real do SindÂncora com ações rápidas, condomínios, ocorrências e manutenção"
                    width="1440"
                    height="2296"
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="preview-caption">
                Interface real do sistema <span>Explorar o produto ↗</span>
              </span>
            </Link>
          </div>
          <div className="upcoming-product" data-anim="rise">
            <div className="upcoming-title">
              <Icon name="anchor" />
              <h3>ÂncorADV</h3>
              <span className="status-tag upcoming">Em breve</span>
            </div>
            <p>
              Mais organização para a rotina jurídica. Mais tempo para o
              relacionamento com seus clientes.
            </p>
            <Link className="text-link" to="/ancoradv">
              Conheça o que vem aí <Icon name="arrow" />
            </Link>
          </div>
          <div className="partner-note" data-anim="rise">
            <Icon name="users" />
            <p>
              <strong>Administradoras, vamos crescer juntos.</strong> O
              SindÂncora conecta síndicos e administradoras parceiras, fortalece
              a colaboração e valoriza o trabalho de cada equipe.
            </p>
            <Link
              to="/contato?interesse=parceria#diagnostico"
              className="text-link"
            >
              Seja parceiro <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <InfrastructureSection />
      <ExpertiseSection />
      <section className="quality-statement">
        <div className="container">
          <span className="eyebrow" data-anim="rise">
            O valor está no que sustenta o seu negócio
          </span>
          <h2 data-anim="lines">
            O melhor investimento é<br />
            poder seguir em frente.
          </h2>
          <div className="quality-bottom">
            <HubGlyph variant="arrow" />
            <p data-anim="rise">
              Escolher software é escolher quem cuida da sua operação. Avalie a
              experiência de quem desenvolve, a qualidade das entregas e a
              estrutura que protege seus dados. É isso que permanece depois da
              contratação.
            </p>
            <Link
              className="text-link"
              to="/fabrica-de-software"
              data-anim="rise"
            >
              Entenda como construímos <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
