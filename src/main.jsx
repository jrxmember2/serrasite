import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const container = document.getElementById('root');

const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Em produção o HTML já vem pré-renderizado (scripts/prerender.mjs), então hidratamos.
// No dev server o container está vazio e a montagem é normal.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
