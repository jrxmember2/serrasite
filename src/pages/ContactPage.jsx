import { useState } from 'react';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { contactChannels, contactInterests } from '../data/siteContent';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo path="/contato" />

      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre como organizar sua operação?"
        description="Fale com a Serratech para avaliar infraestrutura, processos, automações, desenvolvimento sob medida e oportunidades de evolução digital."
        primaryAction={{ label: 'Abrir portal do cliente', to: '/portal-cliente' }}
        secondaryAction={{ label: 'Ver a fábrica de software', to: '/fabrica-de-software' }}
        highlights={['Diagnóstico tecnológico', 'Projetos sob medida', 'Atendimento corporativo', 'Foco condominial']}
      />

      <section className="section" id="canais">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Canais
              </span>
              <h2 data-anim="lines">Escolha por onde prefere começar.</h2>
            </div>
          </div>

          <div className="ledger" data-stagger>
            {contactChannels.map((channel, index) => (
              <a
                className="ledger-row is-link"
                href={channel.href}
                key={channel.title}
                data-stagger-item
              >
                <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="ledger-title">
                  <h3>{channel.title}</h3>
                </div>
                <div>
                  <strong className="channel-value">{channel.value}</strong>
                  <p className="ledger-text">{channel.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="diagnostico">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Formulário
              </span>
              <h2 data-anim="lines">Conte um pouco sobre a sua necessidade.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Quanto mais contexto sobre o cenário atual, mais precisa fica a primeira resposta.
            </p>
          </div>

          <form className="form-block" onSubmit={handleSubmit} data-anim="rise">
            <div className="form-grid">
              <label>
                <span>Nome</span>
                <input name="name" type="text" placeholder="Seu nome" required />
              </label>
              <label>
                <span>Empresa / Condomínio</span>
                <input
                  name="company"
                  type="text"
                  placeholder="Nome da empresa ou condomínio"
                  required
                />
              </label>
              <label>
                <span>E-mail</span>
                <input name="email" type="email" placeholder="voce@empresa.com.br" required />
              </label>
              <label>
                <span>Telefone / WhatsApp</span>
                <input name="phone" type="tel" placeholder="(00) 00000-0000" required />
              </label>
              <label className="full-width">
                <span>Tipo de interesse</span>
                <select name="interest" defaultValue="" required>
                  <option value="" disabled>
                    Selecione
                  </option>
                  {contactInterests.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="full-width">
                <span>Mensagem</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Descreva a necessidade, dores da operação ou objetivo do projeto."
                  required
                />
              </label>
            </div>

            <button className="btn" type="submit">
              <span>Enviar mensagem</span>
              <Icon name="arrow" className="btn-icon" />
            </button>

            {submitted ? (
              <p className="form-feedback">
                Mensagem registrada nesta interface demonstrativa. O próximo passo é integrar o
                formulário ao canal comercial da Serratech.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  );
}
