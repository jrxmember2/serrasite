import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../data/siteContent';
import Icon from './Icon';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link className="brandmark" to="/" aria-label="Serratech - Página inicial">
          <span className="brandmark-glow" />
          <span className="brandmark-text">
            <strong>Serratech</strong>
            <small>Soluções Digitais</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Menu principal">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="btn btn-primary header-cta" to="/portal-cliente">
            <span>Acesso do Cliente</span>
            <Icon name="portal" className="btn-icon" />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="menu-toggle-icon" />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${mobileOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav-panel" aria-label="Menu mobile">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="btn btn-primary mobile-portal-btn" to="/portal-cliente">
            <span>Acesso do Cliente</span>
            <Icon name="portal" className="btn-icon" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
