import { useEffect, useRef } from 'react';
import { prefersReducedMotion, withGsap } from '../lib/motion';

// Faixa contínua de termos técnicos. A lista é duplicada para que o laço não
// tenha emenda visível; a cópia fica escondida da leitura assistiva.
export default function Ticker({ items, speed = 26 }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    return withGsap(({ gsap }) => {
      const track = rootRef.current.querySelector('.ticker-track');

      // Metade da largura é exatamente uma volta da lista original.
      const distance = track.scrollWidth / 2;

      gsap.to(track, {
        x: -distance,
        duration: distance / speed,
        ease: 'none',
        repeat: -1,
      });
    }, rootRef);
  }, [items, speed]);

  return (
    <div className="ticker" ref={rootRef}>
      <div className="ticker-track">
        {items.map((item) => (
          <span className="ticker-item" key={item}>
            {item}
          </span>
        ))}
        {items.map((item) => (
          <span className="ticker-item" key={`echo-${item}`} aria-hidden="true">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
