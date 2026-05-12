import { Link } from 'react-router-dom';

export default function Brandmark({ variant = 'header' }) {
  if (variant === 'footer') {
    return (
      <Link className="brandmark brandmark-footer" to="/" aria-label="Serratech - Página inicial">
        <img className="brandmark-icon" src="/favicon.svg" alt="Serratech" />
        <span className="brandmark-text">
          <strong>Serratech</strong>
          <small>Soluções Digitais</small>
        </span>
      </Link>
    );
  }

  return (
    <Link className="brandmark brandmark-header" to="/" aria-label="Serratech - Página inicial">
      <img className="brandmark-full" src="/logo-serratech.svg" alt="Serratech" />
    </Link>
  );
}
