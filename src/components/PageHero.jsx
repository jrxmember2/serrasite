import { Link } from 'react-router-dom';
import Icon from './Icon';

function ActionButton({ action, secondary = false }) {
  if (!action) {
    return null;
  }

  const className = `btn ${secondary ? 'btn-secondary' : ''}`;

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
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow" data-anim="rise">
          {eyebrow}
        </span>
        <h1 data-anim="rise">{title}</h1>
        <p className="lead" data-anim="rise">
          {description}
        </p>

        <div className="button-row" data-anim="rise">
          <ActionButton action={primaryAction} />
          <ActionButton action={secondaryAction} secondary />
        </div>

        {highlights.length ? (
          <ul className="hero-tags" data-anim="rise">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}

        {children}
      </div>
    </section>
  );
}
