import { Link } from 'react-router-dom';
import Icon from './Icon';

const expertise = [
  {
    icon: 'server',
    title: 'Data centers e infraestrutura',
    text: 'Experiência em ambientes que exigem disponibilidade, proteção de dados e resposta a incidentes.',
  },
  {
    icon: 'chart',
    title: 'Operações de alta demanda',
    text: 'Vivência no varejo de grande escala, com picos de acesso e transações em campanhas como a Black Friday.',
  },
  {
    icon: 'app',
    title: 'Desenvolvimento em multinacionais',
    text: 'Profissionais que trazem a disciplina de engenharia e a experiência de projetos em organizações globais.',
  },
  {
    icon: 'shield',
    title: 'Cibersegurança independente',
    text: 'Especialistas externos validam o sistema de ponta a ponta, ampliando o olhar sobre a proteção da sua operação.',
  },
];

export default function ExpertiseSection({ full = false }) {
  return (
    <section className="section expertise-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" data-anim="rise">
              Experiência que vira engenharia
            </span>
            <h2 data-anim="lines">
              Quem já viveu o desafio
              <br />
              constrói diferente.
            </h2>
          </div>
          <div data-anim="rise">
            <p className="lead">
              As nossas escolhas técnicas vêm de uma carreira em tecnologia e de
              experiência em ambientes críticos. Cada projeto carrega esse
              repertório.
            </p>
            {!full && (
              <Link className="text-link" to="/sobre">
                Conheça a Serratech <Icon name="arrow" />
              </Link>
            )}
          </div>
        </div>
        <div className="expertise-grid" data-stagger>
          {expertise.map((item) => (
            <article key={item.title} data-stagger-item>
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
