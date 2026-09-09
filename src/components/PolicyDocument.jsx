import { Link } from 'react-router-dom';
import Icon from './Icon';
import { siteConfig } from '../data/siteContent';

// Documento jurídico: sem faixa fotográfica, sem animação de título, sem CTA de
// venda. Quem chega aqui veio ler, e na maioria das vezes veio de fora do site
// — da ficha de um app na Google Play ou de um contrato.
//
// A casca é a mesma para todas as políticas; o que muda é o objeto que entra
// por `policy`. Cada produto tem o seu, e nenhum fala pelo outro.

function Block({ block }) {
  if (block.type === 'p') {
    return <p>{block.text}</p>;
  }

  if (block.type === 'list') {
    return (
      <ul className="legal-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'defs') {
    return (
      <dl className="legal-defs">
        {block.items.map((item) => (
          <div className="legal-def" key={item.term}>
            <dt>{item.term}</dt>
            <dd>{item.detail}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if (block.type === 'contact') {
    return (
      <dl className="legal-defs legal-contact">
        <div className="legal-def">
          <dt>E-mail</dt>
          <dd>
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </dd>
        </div>
        <div className="legal-def">
          <dt>Atendimento</dt>
          <dd>{siteConfig.serviceHours}</dd>
        </div>
        <div className="legal-def">
          <dt>Prazo de resposta</dt>
          <dd>Até 15 dias, contados do recebimento do pedido</dd>
        </div>
      </dl>
    );
  }

  return null;
}

export default function PolicyDocument({ policy }) {
  const {
    eyebrow = 'Documento legal',
    title = 'Política de Privacidade',
    controllerLabel = siteConfig.fullName,
    controllerRole = 'Controladora',
    updatedAt,
    version,
    summary,
    scopeNote,
    highlights,
    sections,
  } = policy;

  return (
    <section className="section legal-page">
      <div className="container">
        <header className="legal-head">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{summary}</p>

          {/* O escopo vem antes de tudo: cada produto tem a sua política, e quem
              chega pela loja precisa saber na primeira tela se caiu no documento
              certo. */}
          {scopeNote ? <p className="legal-scope">{scopeNote}</p> : null}

          <dl className="legal-meta">
            <div>
              <dt>Última atualização</dt>
              <dd>{updatedAt}</dd>
            </div>
            <div>
              <dt>Versão</dt>
              <dd>{version}</dd>
            </div>
            <div>
              <dt>{controllerRole}</dt>
              <dd>{controllerLabel}</dd>
            </div>
          </dl>
        </header>

        <div className="legal-highlights">
          {highlights.map((item) => (
            <div className="legal-highlight" key={item.term}>
              <h2>{item.term}</h2>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="legal-body">
          {/* O índice é lateral no desktop e vira uma lista no topo do texto no
              mobile — a política é longa demais para se rolar às cegas. */}
          <nav className="legal-index" aria-label="Índice da política">
            <span className="label">Índice</span>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal-text">
            {sections.map((section, index) => (
              <section className="legal-section" id={section.id} key={section.id}>
                <h2>
                  <span className="legal-section-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h2>
                {section.blocks.map((block, blockIndex) => (
                  <Block block={block} key={`${section.id}-${blockIndex}`} />
                ))}
              </section>
            ))}

            <div className="legal-foot">
              <p>
                Dúvidas sobre esta política ou sobre um pedido já enviado?{' '}
                <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
              </p>
              <Link className="btn btn-secondary" to="/">
                <span>Voltar para a home</span>
                <Icon name="arrow" className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
