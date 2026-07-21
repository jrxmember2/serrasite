import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { navigation } from '../data/siteContent';

export default function NotFoundPage() {
  return (
    <>
      <Seo path="/404" />

      <section className="section not-found">
        <div className="container">
          <span className="eyebrow">Erro 404</span>
          <h1>Esta página não existe.</h1>
          <p className="lead">
            O endereço pode ter mudado ou o link estar incorreto. Abaixo estão as seções do site.
          </p>

          <div className="button-row">
            <Link className="btn" to="/">
              <span>Voltar para a home</span>
              <Icon name="arrow" className="btn-icon" />
            </Link>
            <Link className="btn btn-secondary" to="/contato">
              <span>Falar com a Serratech</span>
              <Icon name="support" className="btn-icon" />
            </Link>
          </div>

          <ul className="hero-tags">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
