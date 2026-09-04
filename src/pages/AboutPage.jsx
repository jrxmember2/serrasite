import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PhotoBand from '../components/PhotoBand';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { aboutReasons, values } from '../data/siteContent';

const story = [
  {
    title: 'Origem',
    text: 'A empresa surge de uma trajetória de mais de 20 anos em TI aplicada ao mundo real: suporte, infraestrutura, sistemas, atendimento e operações que exigem continuidade.',
  },
  {
    title: 'Leitura prática',
    text: 'Essa vivência trouxe um olhar muito claro: não basta manter a tecnologia funcionando. É preciso fazer com que ela ajude a gestão a enxergar melhor, responder melhor e crescer com menos atrito.',
  },
  {
    title: 'Mercados atendidos',
    text: 'Empresas, escritórios, operações condominiais e síndicos encontram na Serratech uma parceira capaz de unir organização, segurança, automação e visão de futuro.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Seo path="/sobre" />

      <PageHero
        eyebrow="Sobre a Serratech"
        title="Tecnologia com visão prática, estratégica e humana."
        description="A Serratech nasceu da experiência prática em tecnologia corporativa, infraestrutura, sistemas e atendimento a operações reais. Simplificamos processos, melhoramos segurança, reduzimos retrabalho e criamos soluções digitais que realmente funcionam."
        primaryAction={{ label: 'Falar com a Serratech', to: '/contato' }}
        secondaryAction={{ label: 'Conhecer soluções', to: '/solucoes' }}
        highlights={['Experiência prática', 'Atendimento próximo', 'Visão consultiva', 'Corporativo e condominial']}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Nossa história
              </span>
              <h2 data-anim="lines">Tecnologia precisa resolver, proteger e organizar.</h2>
            </div>
            <p className="lead" data-anim="rise">
              A Serratech entende que tecnologia não deve ser complicada. Ela precisa resolver
              problemas, proteger informações, organizar rotinas e gerar produtividade com clareza.
            </p>
          </div>

          <div className="duo duo-three" data-stagger>
            {story.map((item) => (
              <div className="duo-col" key={item.title} data-stagger-item>
                <span className="label">{item.title}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Missão, visão e valores
              </span>
              <h2 data-anim="lines">O que orienta cada decisão técnica.</h2>
            </div>
          </div>

          <div className="duo" data-stagger>
            <div className="duo-col" data-stagger-item>
              <span className="label">Missão</span>
              <h3>Transformar a tecnologia em estrutura real para a operação.</h3>
              <p>
                Entregar soluções que organizam processos, protegem informações e geram
                produtividade de forma prática e sustentável.
              </p>
            </div>
            <div className="duo-col" data-stagger-item>
              <span className="label">Visão</span>
              <h3>Ser referência em evolução digital para o mercado corporativo e condominial.</h3>
              <p>
                Construir um ecossistema de produtos, serviços e automações capaz de apoiar decisões,
                atendimento e gestão com alto valor percebido.
              </p>
            </div>
          </div>

          <ul className="hero-tags" data-anim="rise">
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </section>

      <PhotoBand
        src="/media/foto/equipe-reuniao.jpg"
        alt="Equipe reunida em volta de uma mesa de madeira, com notebooks, relatórios impressos e discussão em andamento"
        eyebrow="Como o trabalho começa"
        title="A conversa começa no problema, não no framework."
        text="Antes de falar em sistema, backup ou automação, a Serratech senta com quem opera para entender onde o processo trava. Diagnóstico primeiro; proposta depois."
        credit="Foto: Pexels"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Por que escolhem a Serratech
              </span>
              <h2 data-anim="lines">Estrutura, estratégia e proximidade.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Empresas e condomínios escolhem a Serratech porque precisam de uma parceira que entenda
              operação, não apenas tecnologia.
            </p>
          </div>

          <div className="ledger" data-stagger>
            {aboutReasons.map((item, index) => (
              <article className="ledger-row" key={item.title} data-stagger-item>
                <span className="ledger-index">
                  {String(index + 1).padStart(2, '0')} / {aboutReasons.length}
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
              Em uma frase
            </span>
            <h2 data-anim="lines">
              Não entregamos apenas suporte técnico. Entregamos estrutura, estratégia e evolução
              digital.
            </h2>
          </div>

          <div className="cta-aside">
            <p data-anim="rise">
              Se a sua operação depende de tecnologia para funcionar todo dia, vale uma conversa
              sobre onde ela está frágil.
            </p>
            <div className="button-row" data-anim="rise">
              <Link className="btn" to="/contato">
                <span>Solicitar uma conversa</span>
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
