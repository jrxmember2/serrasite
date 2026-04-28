import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import AncoraPage from './pages/AncoraPage';
import AppSindicoPage from './pages/AppSindicoPage';
import ContactPage from './pages/ContactPage';
import ClientPortalPage from './pages/ClientPortalPage';
import NotFoundPage from './pages/NotFoundPage';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    const updateScrollVar = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };

    updateScrollVar();
    window.addEventListener('scroll', updateScrollVar, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollVar);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'));

    if (prefersReducedMotion) {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    revealNodes.forEach((node) => node.classList.remove('is-visible'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
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
      <div className="global-backdrop" aria-hidden="true">
        <span className="backdrop-orb orb-one parallax-layer" />
        <span className="backdrop-orb orb-two parallax-layer" />
        <span className="backdrop-grid" />
      </div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/solucoes" element={<SolutionsPage />} />
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
