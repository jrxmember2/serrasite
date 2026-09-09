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
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RebecaAppPrivacyPage from './pages/RebecaAppPrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import {
  countUp,
  loadGsap,
  prefersReducedMotion,
  revealAll,
  startMotionWatchdog,
} from './lib/motion';

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
      const { gsap, ScrollTrigger, SplitText } = lib;
      const splits = [];

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

        // Títulos que sobem linha a linha por trás de uma máscara. O SplitText
        // recorta no cliente, então o HTML pré-renderizado segue sendo um h2
        // inteiro para o buscador.
        gsap.utils.toArray('[data-anim="lines"]').forEach((node) => {
          // `mask: 'lines'` embrulha cada linha em um recorte próprio — é o que
          // faz o texto surgir por trás da linha anterior em vez de deslizar solto.
          const split = new SplitText(node, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'split-line',
          });
          splits.push(split);

          gsap.from(split.lines, {
            yPercent: 118,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.08,
            scrollTrigger: { trigger: node, start: 'top 86%' },
          });
        });

        // Deslocamento preso ao scroll: dá profundidade sem tirar nada do lugar.
        gsap.utils.toArray('[data-parallax]').forEach((node) => {
          const depth = Number(node.dataset.parallax) || 6;

          gsap.fromTo(
            node,
            { yPercent: depth * -1 },
            {
              yPercent: depth,
              ease: 'none',
              scrollTrigger: {
                trigger: node,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        });

        gsap.utils.toArray('[data-counter]').forEach((node) => countUp(gsap, node));

        // O SplitText reescreve o DOM do título; desfazê-lo no revert devolve o
        // texto original antes que o React remonte a rota seguinte.
        return () => splits.forEach((split) => split.revert());
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
          <Route path="/legal/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route
            path="/legal/rebeca-medina-advocacia/politica-de-privacidade"
            element={<RebecaAppPrivacyPage />}
          />
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
