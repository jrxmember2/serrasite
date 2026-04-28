export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'is-centered' : ''}`} data-reveal>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
