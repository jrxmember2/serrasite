import { useEffect, useRef } from 'react';
import { prefersReducedMotion, withGsap } from '../lib/motion';

// Faixa de sangria total com foto tratada em duotone e texto por cima.
// A foto nunca aparece crua: o duotone é o que impede que uma imagem de banco
// pareça uma imagem de banco, e é o que costura a foto ao resto do site.
export default function PhotoBand({
  src,
  alt,
  eyebrow,
  title,
  text,
  credit,
  align = 'end',
  children,
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    return withGsap(({ gsap }) => {
      // A mídia é maior que a faixa (inset negativo), então há folga para
      // deslocar sem descobrir a borda.
      gsap.fromTo(
        rootRef.current.querySelector('.photo-media'),
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }, rootRef);
  }, []);

  return (
    <section className={`photo-band is-${align}`} ref={rootRef}>
      <div className="photo-media">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
        <span className="photo-tint" aria-hidden="true" />
      </div>
      <span className="photo-scrim" aria-hidden="true" />

      <div className="container photo-content">
        {eyebrow ? (
          <span className="eyebrow" data-anim="rise">
            {eyebrow}
          </span>
        ) : null}
        <h2 data-anim="lines">{title}</h2>
        {text ? (
          <p className="lead" data-anim="rise">
            {text}
          </p>
        ) : null}
        {children}
      </div>

      {credit ? <span className="photo-credit">{credit}</span> : null}
    </section>
  );
}
