import { Link } from 'react-router-dom';
import { featuredProducts, navigation, siteConfig } from '../data/siteContent';
import Icon from './Icon';

const quickLinks = navigation.filter((item) => item.to !== '/');

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand" data-reveal>
          <Link className="brandmark is-footer" to="/">
            <span className="brandmark-glow" />
            <span className="brandmark-text">
              <strong>Serratech</strong>
              <small>Soluções Digitais</small>
            </span>
          </Link>
          <p>
            Serratech Soluções Digitais Corporativas e Condominiais — tecnologia, segurança e
            inovação para empresas e condomínios.
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

        <div data-reveal>
          <h3>Links rápidos</h3>
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

        <div data-reveal>
          <h3>Soluções</h3>
          <ul className="footer-list">
            {featuredProducts.map((item) => (
              <li key={item.title}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h3>Contato</h3>
          <ul className="footer-list footer-contact-list">
            <li>
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </li>
            <li>
              <a href={siteConfig.whatsappUrl}>{siteConfig.phoneLabel}</a>
            </li>
            <li>{siteConfig.serviceRegion}</li>
            <li>{siteConfig.serviceHours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.fullName}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
