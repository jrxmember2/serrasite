import { Link } from 'react-router-dom';
import { featuredProducts, navigation, siteConfig } from '../data/siteContent';
import Icon from './Icon';

export default function Footer() {
  const socials = [
    { url: siteConfig.linkedinUrl, label: 'LinkedIn', icon: 'clients' },
    { url: siteConfig.instagramUrl, label: 'Instagram', icon: 'spark' },
    { url: siteConfig.whatsappUrl, label: 'WhatsApp', icon: 'phone' },
  ].filter((item) => /^https?:\/\//.test(item.url));
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand" data-anim="rise">
            <Link
              className="brand"
              to="/"
              aria-label="Serratech, página inicial"
            >
              <img src="/favicon.svg" alt="" width="38" height="38" />
              <span className="brand-text">
                <span className="brand-name">Serratech</span>
                <span className="brand-tag">Fábrica de software</span>
              </span>
            </Link>
            <p>
              Software que simplifica o trabalho, protege informações e devolve
              tempo para novos negócios.
            </p>
            {socials.length > 0 && (
              <div className="footer-socials">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    aria-label={item.label + ' da Serratech'}
                  >
                    <Icon name={item.icon} className="social-icon" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="footer-col" data-anim="rise">
            <h3>Explore</h3>
            <ul className="footer-list">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/solucoes">Todas as soluções</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col" data-anim="rise">
            <h3>Nossos produtos</h3>
            <ul className="footer-list">
              {featuredProducts.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/portal-cliente">Acesse seu produto</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col" data-anim="rise">
            <h3>Vamos conversar</h3>
            <ul className="footer-list">
              <li>
                <a href={'mailto:' + siteConfig.contactEmail}>
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <span>{siteConfig.serviceHours}</span>
              </li>
              <li>
                <Link to="/contato?interesse=parceria#diagnostico">
                  Administradoras parceiras
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          <span>Serratech</span>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}
          </p>
          <Link to="/legal/politica-de-privacidade">
            Política de privacidade
          </Link>
          <p>Desenvolvido pela Serratech.</p>
        </div>
      </div>
    </footer>
  );
}
