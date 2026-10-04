import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './fonts.css';
import './styles.css';
import './studio.css';

const container = document.getElementById('root');

const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Em produção o HTML já vem pré-renderizado (scripts/prerender.mjs), então hidratamos.
// No dev o root só contém o comentário marcador, por isso testamos por elemento
// e não por nó — um comentário também conta como filho.
if (
  container.firstElementChild &&
  container.dataset.prerenderPath === window.location.pathname
) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
