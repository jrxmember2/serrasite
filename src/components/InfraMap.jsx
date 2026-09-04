import { useEffect, useRef } from 'react';
import { drawPath, prefersReducedMotion, withGsap } from '../lib/motion';

// As quatro camadas de proteção, de fora para dentro. A ordem no eixo Y é a
// ordem real em que um acesso atravessa o sistema.
const layers = [
  { y: 40, label: 'Entrada', detail: 'quem pode entrar · conexão protegida' },
  { y: 128, label: 'Sistema', detail: 'atualização segura · volta atrás' },
  { y: 216, label: 'Dados', detail: 'separados por cliente · tudo registrado' },
  { y: 304, label: 'Cópia', detail: 'diária · protegida · guardada longe' },
];

// Trajetos verticais entre as camadas, desenhados na ordem em que aparecem.
const links = ['M60 70 V128', 'M60 158 V216', 'M60 246 V304'];

export default function InfraMap() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    return withGsap(({ gsap }) => {
      const boxes = gsap.utils.toArray('.infra-box');
      const paths = gsap.utils.toArray('.infra-link');
      const labels = gsap.utils.toArray('.infra-text');

      gsap.set(boxes, { opacity: 0, x: -18 });
      gsap.set(labels, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: rootRef.current, start: 'top 78%' },
      });

      tl.to(boxes, { opacity: 1, x: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' })
        .to(labels, { opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.55');

      paths.forEach((path, index) => {
        tl.add(drawPath(gsap, path, { duration: 0.5 }), 0.35 + index * 0.12);
      });

      // Pulso que desce pelo eixo: o pedido atravessando as camadas.
      gsap.fromTo(
        '.infra-pulse',
        { attr: { cy: 55 } },
        {
          attr: { cy: 319 },
          duration: 2.8,
          ease: 'power1.inOut',
          repeat: -1,
          repeatDelay: 0.6,
          delay: 1.6,
        },
      );
    }, rootRef);
  }, []);

  return (
    <div className="infra-map" ref={rootRef}>
      <svg
        viewBox="0 0 560 360"
        role="img"
        aria-label="As quatro camadas de proteção da Serratech: controle de quem entra, atualização do sistema que pode voltar atrás, dados separados por cliente com registro de cada ação e cópia de segurança diária guardada fora do sistema"
      >
        {links.map((d) => (
          <path key={d} className="infra-link" d={d} />
        ))}

        <circle className="infra-pulse" cx="60" cy="55" r="3.5" />

        {layers.map((layer, index) => (
          <g key={layer.label}>
            <rect className="infra-box" x="30" y={layer.y} width="60" height="30" />
            <text className="infra-text is-index" x="60" y={layer.y + 20} textAnchor="middle">
              {String(index + 1).padStart(2, '0')}
            </text>
            <text className="infra-text is-label" x="118" y={layer.y + 13}>
              {layer.label}
            </text>
            <text className="infra-text is-detail" x="118" y={layer.y + 28}>
              {layer.detail}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
