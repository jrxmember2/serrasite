import { Link } from 'react-router-dom';
import Icon from './Icon';

function ActionButton({ action, secondary = false }) {
  const className = `btn ${secondary ? 'btn-secondary' : 'btn-primary'}`;

  if (!action) {
    return null;
  }

  if (action.href) {
    return (
      <a className={className} href={action.href}>
        <span>{action.label}</span>
        <Icon name="arrow" className="btn-icon" />
      </a>
    );
  }

  return (
    <Link className={className} to={action.to}>
      <span>{action.label}</span>
      <Icon name="arrow" className="btn-icon" />
    </Link>
  );
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  highlights = [],
  children,
}) {
  return (
    <section className="page-hero section">
      <div className="container page-hero-grid">
        <div className="page-hero-copy" data-reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="button-row">
            <ActionButton action={primaryAction} />
            <ActionButton action={secondaryAction} secondary />
          </div>
          {highlights.length ? (
            <div className="hero-mini-grid">
              {highlights.map((highlight) => (
                <div key={highlight} className="mini-panel">
                  <Icon name="check" className="mini-panel-icon" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="page-hero-visual" data-reveal>
          {children || (
            <div className="glass-panel visual-matrix">
              <div className="visual-matrix-header">
                <span className="dot dot-cyan" />
                <span className="dot dot-blue" />
                <span className="dot dot-teal" />
              </div>
              <div className="visual-matrix-grid">
                {highlights.map((item) => (
                  <article key={item} className="matrix-card">
                    <span className="matrix-badge">Serratech</span>
                    <strong>{item}</strong>
                    <p>Tecnologia aplicada com estrutura, clareza e evolução contínua.</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
