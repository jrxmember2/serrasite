import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation, siteConfig } from '../data/siteContent';
import Icon from './Icon';
import { loadGsap, prefersReducedMotion } from '../lib/motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const progressRef = useRef(null);
  const mobileRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Barra de progresso de leitura presa ao scroll da página.
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let ctx;
    let cancelled = false;

    loadGsap().then((lib) => {
      if (cancelled || !lib || !progressRef.current) return;
      const { gsap } = lib;

      ctx = gsap.context(() => {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
        });
      });
    });

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, []);

  // Abertura do menu mobile: cortina + entrada escalonada dos itens.
  useEffect(() => {
    const panel = mobileRef.current;
    if (!panel) return undefined;

    if (prefersReducedMotion()) {
      panel.style.clipPath = mobileOpen
        ? 'inset(0 0 0% 0)'
        : 'inset(0 0 100% 0)';
      return undefined;
    }

    let ctx;
    let cancelled = false;

    loadGsap().then((lib) => {
      if (cancelled || !lib) return;
      const { gsap } = lib;

      const items = panel.querySelectorAll('[data-mobile-item]');

      ctx = gsap.context(() => {
        if (mobileOpen) {
          gsap
            .timeline()
            .to(panel, {
              clipPath: 'inset(0 0 0% 0)',
              duration: 0.7,
              ease: 'power4.inOut',
            })
            .fromTo(
              items,
              { y: 32, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.055,
                ease: 'power3.out',
              },
              '-=0.34',
            );
        } else {
          gsap.to(panel, {
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.55,
            ease: 'power4.inOut',
          });
        }
      }, panel);
    });

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (!mobileOpen) return undefined;
    document.body.style.overflow = 'hidden';
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (main) main.inert = true;
    if (footer) footer.inert = true;
    const frame = requestAnimationFrame(() =>
      mobileRef.current?.querySelector('a')?.focus(),
    );
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const links = Array.from(mobileRef.current.querySelectorAll('a[href]'));
      const first = toggleRef.current;
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = false;
      if (footer) footer.inert = false;
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      toggleRef.current?.focus({ preventScroll: true });
    };
  }, [mobileOpen]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Serratech, ir para a home">
          <img src="/favicon.svg" alt="" width="34" height="34" />
          <span className="brand-text">
            <span className="brand-name">Serratech</span>
            <span className="brand-tag">Fábrica de software</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Menu principal">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav-link ${(item.to.includes('#') ? location.hash === '#infraestrutura' && location.pathname === '/' : isActive) ? 'is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="btn header-cta" to="/portal-cliente">
            <span>Acesse seu produto</span>
            <Icon name="portal" className="btn-icon" />
          </Link>
          <button
            className={`menu-toggle ${mobileOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            ref={toggleRef}
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <span className="scroll-progress" ref={progressRef} aria-hidden="true" />

      <div
        id="menu-mobile"
        className={`mobile-nav ${mobileOpen ? 'is-open' : ''}`}
        ref={mobileRef}
        aria-hidden={!mobileOpen}
        inert={mobileOpen ? undefined : ''}
      >
        <nav className="mobile-nav-list" aria-label="Menu mobile">
          {navigation.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              data-mobile-item
              className={({ isActive }) =>
                `mobile-link ${(item.to.includes('#') ? location.hash === '#infraestrutura' && location.pathname === '/' : isActive) ? 'is-active' : ''}`
              }
            >
              <span className="idx">{String(index + 1).padStart(2, '0')}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mobile-foot" data-mobile-item>
          <Link className="mobile-portal" to="/portal-cliente">
            Acesse seu produto <Icon name="arrow" />
          </Link>
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          <span>{siteConfig.serviceHours}</span>
        </div>
      </div>
    </header>
  );
}
