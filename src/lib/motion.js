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
    const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/SplitText'),
    ]);

    gsap.registerPlugin(ScrollTrigger, SplitText);
    cache = { gsap, ScrollTrigger, SplitText };

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

// Executa `setup(lib)` assim que o GSAP chegar, dentro de um gsap.context para
// que todo o efeito seja revertido de uma vez. Devolve o cleanup do useEffect.
// Centraliza o par cancelled/ctx que antes se repetia em cada componente.
export function withGsap(setup, scope) {
  let ctx;
  let cancelled = false;

  loadGsap().then((lib) => {
    if (cancelled || !lib) return;
    ctx = lib.gsap.context(() => setup(lib), scope);
  });

  return () => {
    cancelled = true;
    if (ctx) ctx.revert();
  };
}

/* -------------------------------------------------------------------------
   Primitivas de scroll reutilizadas pelas páginas
   ------------------------------------------------------------------------- */

// Sobe o elemento à medida que entra na viewport.
export function riseIn(gsap, targets, options = {}) {
  return gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out',
    ...options,
  });
}

// Deslocamento contínuo preso ao scroll. `depth` positivo sobe, negativo desce.
export function parallax(gsap, node, depth) {
  return gsap.fromTo(
    node,
    { yPercent: depth * -1 },
    {
      yPercent: depth,
      ease: 'none',
      scrollTrigger: { trigger: node, start: 'top bottom', end: 'bottom top', scrub: true },
    },
  );
}

// Conta de 0 até o número embutido no texto, preservando prefixo e sufixo
// ("20+", "R$ 1,2M"). Só o primeiro grupo numérico é animado.
export function countUp(gsap, node) {
  const raw = node.dataset.counter || node.textContent;
  const match = raw.match(/^(\D*)([\d.,]+)(.*)$/s);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  const decimals = (digits.split(',')[1] || '').length;
  const target = Number(digits.replace(/\./g, '').replace(',', '.'));
  if (!Number.isFinite(target)) return null;

  const state = { value: 0 };

  return gsap.to(state, {
    value: target,
    duration: 1.6,
    ease: 'power2.out',
    scrollTrigger: { trigger: node, start: 'top 88%' },
    onUpdate: () => {
      const shown = state.value.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      node.textContent = `${prefix}${shown}${suffix}`;
    },
  });
}

// Desenha um traçado SVG conforme ele entra na tela.
export function drawPath(gsap, path, options = {}) {
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

  return gsap.to(path, {
    strokeDashoffset: 0,
    duration: 1.2,
    ease: 'power2.inOut',
    ...options,
  });
}
