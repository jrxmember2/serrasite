import { Link } from 'react-router-dom';
import Icon from './Icon';
import HubGlyph from './HubGlyph';

export default function ProjectCTA({
  title = 'Seu próximo salto\ncomeça aqui.',
  text = 'Conte o que está tomando o tempo da sua equipe. Vamos desenhar uma solução para o seu negócio ir além.',
  label = 'Converse com a Serratech',
  to = '/contato#diagnostico',
}) {
  return (
    <section className="project-cta">
      <div className="container">
        <div className="project-cta-top">
          <span className="eyebrow" data-anim="rise">
            Vamos construir juntos
          </span>
          <HubGlyph />
        </div>
        <div className="project-cta-body">
          <h2 data-anim="lines">
            {title.split('\n').map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h2>
          <div data-anim="rise">
            <p>{text}</p>
            <Link to={to} className="btn btn-dark">
              <span>{label}</span>
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
