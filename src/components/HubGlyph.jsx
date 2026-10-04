export default function HubGlyph({ variant = 'hub', className = '' }) {
  return variant === 'arrow' ? (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <path d="M35 4h50l31 31v50l-31 31H35L4 85V35Z" fill="currentColor" />
      <path
        d="M34 86 83 37M35 37h48v48"
        stroke="var(--glyph-arrow, #e8ece9)"
        strokeWidth="10"
      />
    </svg>
  ) : (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 8 }, (_, i) => (
        <path
          key={i}
          d="M51 3h18l-3 38H54Z"
          fill="currentColor"
          transform={`rotate(${i * 45} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="13" fill="currentColor" />
    </svg>
  );
}
