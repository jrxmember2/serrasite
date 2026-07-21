import { useEffect, useRef } from 'react';
import { loadGsap, prefersReducedMotion } from '../lib/motion';

const inputs = [
  { x: 10, label: 'Infraestrutura' },
  { x: 166, label: 'Sistemas' },
  { x: 322, label: 'Segurança' },
];

const outputs = [
  { x: 30, label: 'Empresas' },
  { x: 260, label: 'Condomínios' },
];

// Trajetos das três entradas até o hub e do hub até os dois destinos.
const paths = [
  'M74 66 V118 H230 V168',
  'M230 66 V168',
  'M386 66 V118 H230 V168',
  'M230 216 V272 H115 V318',
  'M230 216 V272 H345 V318',
];

export default function OperationDiagram() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let ctx;
    let cancelled = false;

    loadGsap().then((lib) => {
      if (cancelled || !lib || !rootRef.current) return;
      const { gsap } = lib;

      ctx = gsap.context(() => {
        const lines = gsap.utils.toArray('.diagram-line');
        const nodes = gsap.utils.toArray('.diagram-node');
        const ticks = gsap.utils.toArray('.diagram-tick');

        lines.forEach((line) => {
          const length = line.getTotalLength();
          gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        });

        gsap.set(nodes, { opacity: 0, y: 12 });
        gsap.set(ticks, { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: rootRef.current, start: 'top 84%' },
        });

        tl.to(nodes, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' })
          .to(lines, { strokeDashoffset: 0, duration: 1.1, stagger: 0.1, ease: 'power2.inOut' }, '-=0.4')
          .to(ticks, { opacity: 1, duration: 0.5, stagger: 0.06 }, '-=0.7');

        // Fluxo contínuo percorrendo o eixo central: a operação em movimento.
        gsap.fromTo(
          '.diagram-flow',
          { strokeDashoffset: 120 },
          {
            strokeDashoffset: -120,
            duration: 2.4,
            ease: 'none',
            repeat: -1,
            delay: 1.4,
          },
        );
      }, rootRef);
    });

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className="hero-diagram" ref={rootRef}>
      <svg viewBox="0 0 460 400" role="img" aria-label="Diagrama da operação Serratech: infraestrutura, sistemas e segurança convergem para o hub e atendem empresas e condomínios">
        <text className="diagram-tick" x="0" y="18">
          Entrada
        </text>
        <text className="diagram-tick" x="0" y="160">
          Hub
        </text>
        <text className="diagram-tick" x="0" y="308">
          Operação
        </text>

        {paths.map((d) => (
          <path key={d} className="diagram-line" d={d} />
        ))}

        {/* pulso que corre pelo eixo central */}
        <path
          className="diagram-line is-live diagram-flow"
          d="M230 66 V168"
          strokeDasharray="18 240"
        />

        {inputs.map((node) => (
          <g className="diagram-node" key={node.label}>
            <rect x={node.x} y="32" width="128" height="34" />
            <text x={node.x + 64} y="53" textAnchor="middle">
              {node.label}
            </text>
          </g>
        ))}

        <g className="diagram-node is-key">
          <rect x="155" y="168" width="150" height="48" />
          <text x="230" y="197" textAnchor="middle">
            Serratech
          </text>
        </g>

        {outputs.map((node) => (
          <g className="diagram-node" key={node.label}>
            <rect x={node.x} y="318" width="170" height="34" />
            <text x={node.x + 85} y="339" textAnchor="middle">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
