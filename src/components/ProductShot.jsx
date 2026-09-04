import { useEffect, useRef } from 'react';
import { prefersReducedMotion, withGsap } from '../lib/motion';

// Uma captura real do produto, apresentada como equipamento: moldura com
// cantos de mira, barra de endereço e uma varredura que passa uma única vez
// quando a imagem entra em cena. A legenda fica fora da moldura porque é
// comentário do site, não parte da tela do sistema.
export default function ProductShot({ url, src, alt, caption, meta, priority = false }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    return withGsap(({ gsap }) => {
      const shot = rootRef.current.querySelector('.frame-shot');
      const scan = rootRef.current.querySelector('.frame-scan');

      gsap
        .timeline({ scrollTrigger: { trigger: rootRef.current, start: 'top 80%' } })
        .fromTo(
          shot,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power3.inOut' },
        )
        .fromTo(
          scan,
          { opacity: 0.9, yPercent: -100 },
          { yPercent: 700, opacity: 0, duration: 1.3, ease: 'power2.inOut' },
          '-=0.95',
        );
    }, rootRef);
  }, []);

  return (
    <figure className="shot" ref={rootRef}>
      <div className="frame">
        <div className="frame-bar">
          <span className="frame-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="frame-url">{url}</span>
        </div>
        <div className="frame-viewport">
          <img
            className="frame-shot"
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
          <span className="frame-scan" aria-hidden="true" />
        </div>
      </div>

      {caption ? (
        <figcaption className="frame-caption">
          <span>{caption}</span>
          {meta ? <span>{meta}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
