import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Página não encontrada"
        description="A página solicitada não foi encontrada. Volte para o site da Serratech e continue sua navegação."
        keywords="Serratech"
        path="/404"
      />
      <section className="section not-found">
        <div className="container">
          <div className="statement-banner" data-reveal>
            <p>Esta página não foi encontrada. Vamos te levar de volta para a rota certa.</p>
            <Link className="btn btn-primary" to="/">
              <span>Voltar para a Home</span>
              <Icon name="arrow" className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
