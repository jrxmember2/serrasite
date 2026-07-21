// GSAP é carregado sob demanda no cliente: o bundle SSR do pré-renderizador
// nunca toca em window, e o HTML estático continua legível sem JS.
let cache;

// Os estados iniciais de animação escondem o conteúdo. Se o GSAP não chegar,
// nada o revelaria — então derrubamos a classe e tudo volta a aparecer.
export function revealAll() {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('js-motion');
  }
}

export async function loadGsap() {
  if (cache) return cache;

  try {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]);

    gsap.registerPlugin(ScrollTrigger);
    cache = { gsap, ScrollTrigger };

    return cache;
  } catch (error) {
    revealAll();
    return null;
  }
}

// Rede lenta ou chunk que nunca resolve: passado o prazo, o conteúdo aparece.
export function startMotionWatchdog(timeout = 4000) {
  const timer = setTimeout(() => {
    if (!cache) revealAll();
  }, timeout);

  return () => clearTimeout(timer);
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}
