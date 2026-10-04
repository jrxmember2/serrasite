import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';

export default function ClientPortalPage() {
  return (
    <>
      <Seo path="/portal-cliente" />
      <PageHero
        eyebrow="Acesse o seu produto"
        title="Seu trabalho, no lugar certo."
        description="Entre no SindÂncora pelo ambiente oficial do produto. Para suporte, fale com a Serratech e conte o contexto da sua solicitação."
        primaryAction={{
          label: 'Acessar o SindÂncora',
          href: 'https://sindancora.ancorahub.com.br/login',
        }}
        secondaryAction={{
          label: 'Falar com o suporte',
          to: '/contato?interesse=Suporte#diagnostico',
        }}
      />
      <section className="section">
        <div className="container access-grid">
          <article className="access-card" data-anim="rise">
            <span className="status-tag">
              <span /> Disponível
            </span>
            <h2>SindÂncora</h2>
            <p>
              Seu ambiente de gestão condominial, com os acessos e informações
              da sua operação.
            </p>
            <a className="btn" href="https://sindancora.ancorahub.com.br/login">
              <span>Entrar no SindÂncora</span>
              <Icon name="arrow" />
            </a>
          </article>
          <article className="access-card" data-anim="rise">
            <span className="status-tag upcoming">Em breve</span>
            <h2>ÂncorADV</h2>
            <p>
              A solução para advogados está em desenvolvimento. Acompanhe as
              novidades com a Serratech.
            </p>
            <Link className="text-link" to="/ancoradv">
              Conheça o próximo produto <Icon name="arrow" />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
