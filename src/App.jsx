import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import SoftwareFactoryPage from './pages/SoftwareFactoryPage';
import AncoraPage from './pages/AncoraPage';
import AppSindicoPage from './pages/AppSindicoPage';
import ContactPage from './pages/ContactPage';
import ClientPortalPage from './pages/ClientPortalPage';
import NotFoundPage from './pages/NotFoundPage';
import { loadGsap, prefersReducedMotion, revealAll, startMotionWatchdog } from './lib/motion';

export function Layout() {
  const location = useLocation();

  useEffect(() => startMotionWatchdog(), []);

  // Revelações por scroll. Recriadas a cada rota porque os alvos mudam.
  useEffect(() => {
    if (prefersReducedMotion()) {
      revealAll();
      return undefined;
    }

    let ctx;
    let cancelled = false;

    loadGsap().then((lib) => {
      if (cancelled || !lib) return;
      const { gsap, ScrollTrigger } = lib;

      ctx = gsap.context(() => {
        gsap.utils.toArray('[data-anim="rise"]').forEach((node) => {
          gsap.to(node, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: node, start: 'top 88%' },
          });
        });

        gsap.utils.toArray('[data-anim="line"]').forEach((node) => {
          gsap.to(node, {
            scaleX: 1,
            duration: 1.1,
            ease: 'power3.inOut',
            scrollTrigger: { trigger: node, start: 'top 92%' },
          });
        });

        gsap.utils.toArray('[data-stagger]').forEach((group) => {
          const items = group.querySelectorAll('[data-stagger-item]');
          if (!items.length) return;

          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.07,
            scrollTrigger: { trigger: group, start: 'top 82%' },
          });
        });
      });

      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, [location.pathname]);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo(0, 0);
    });

    return () => window.cancelAnimationFrame(raf);
  }, [location.pathname, location.hash]);

  return (
    <div className="site-shell">
      <div className="blueprint-grid" aria-hidden="true" />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/solucoes" element={<SolutionsPage />} />
          <Route path="/fabrica-de-software" element={<SoftwareFactoryPage />} />
          <Route path="/ancora" element={<AncoraPage />} />
          <Route path="/app-sindico" element={<AppSindicoPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/portal-cliente" element={<ClientPortalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
