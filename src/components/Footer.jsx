import { Link } from 'react-router-dom';
import { featuredProducts, navigation, siteConfig } from '../data/siteContent';
import Icon from './Icon';

const quickLinks = navigation.filter((item) => item.to !== '/');

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand" data-anim="rise">
            <Link className="brand" to="/" aria-label="Serratech, ir para a home">
              <img src="/favicon.svg" alt="" width="42" height="42" />
              <span className="brand-text">
                <span className="brand-name">Serratech</span>
                <span className="brand-tag">Soluções digitais corporativas e condominiais</span>
              </span>
            </Link>
            <p>
              Infraestrutura, sistemas próprios, automação e segurança digital para empresas,
              escritórios, síndicos e condomínios.
            </p>
            <div className="footer-socials">
              <a href={siteConfig.linkedinUrl} aria-label="LinkedIn da Serratech">
                <Icon name="clients" className="social-icon" />
              </a>
              <a href={siteConfig.instagramUrl} aria-label="Instagram da Serratech">
                <Icon name="spark" className="social-icon" />
              </a>
              <a href={siteConfig.whatsappUrl} aria-label="WhatsApp da Serratech">
                <Icon name="phone" className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-col" data-anim="rise">
            <h3>Navegação</h3>
            <ul className="footer-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col" data-anim="rise">
            <h3>Produtos</h3>
            <ul className="footer-list">
              {featuredProducts.map((item) => (
                <li key={item.title}>
                  <Link to={item.to}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col" data-anim="rise">
            <h3>Contato</h3>
            <ul className="footer-list">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
              </li>
              <li>
                <a href={siteConfig.whatsappUrl}>WhatsApp consultivo</a>
              </li>
              <li>
                <span>{siteConfig.serviceRegion}</span>
              </li>
              <li>
                <span>{siteConfig.serviceHours}</span>
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
          <p>Todos os direitos reservados</p>
          {/* Único ponto de entrada para os documentos legais. Fora do menu de
              propósito: é referência, não navegação. */}
          <Link className="footer-legal-link" to="/legal/politica-de-privacidade">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
