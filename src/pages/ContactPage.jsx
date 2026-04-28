import { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
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
      <Seo
        title="Contato"
        description="Entre em contato com a Serratech para falar sobre infraestrutura em TI, consultoria, sistemas, automação, Âncora, App do Síndico e suporte técnico corporativo."
        keywords="contato Serratech, consultoria em TI, suporte técnico corporativo, automação empresarial, app para síndico, Âncora sistema"
        path="/contato"
      />

      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre como a tecnologia pode organizar sua operação?"
        description="Fale com a Serratech para avaliar infraestrutura, processos, automações e oportunidades de evolução digital para empresas, escritórios, condomínios e síndicos."
        primaryAction={{ label: 'Abrir portal do cliente', to: '/portal-cliente' }}
        secondaryAction={{ label: 'Conhecer o Âncora', to: '/ancora' }}
        highlights={['Diagnóstico tecnológico', 'Projetos consultivos', 'Atendimento corporativo', 'Foco condominial']}
      />

      <section className="section" id="canais">
        <div className="container contact-layout">
          <div className="contact-form-card" data-reveal>
            <SectionHeading
              eyebrow="Formulário de contato"
              title="Conte um pouco sobre a sua necessidade."
              description="Vamos entender o cenário atual e indicar a melhor frente de atuação para a Serratech apoiar sua operação."
            />
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  <span>Nome</span>
                  <input name="name" type="text" placeholder="Seu nome" required />
                </label>
                <label>
                  <span>Empresa / Condomínio</span>
                  <input name="company" type="text" placeholder="Nome da empresa ou condomínio" required />
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
              <button className="btn btn-primary" type="submit">
                <span>Enviar mensagem</span>
                <Icon name="arrow" className="btn-icon" />
              </button>
              {submitted ? (
                <p className="form-feedback">
                  Mensagem registrada com sucesso nesta interface demonstrativa. O próximo passo é
                  integrar este formulário ao canal comercial da Serratech.
                </p>
              ) : null}
            </form>
          </div>

          <div className="contact-aside">
            {contactChannels.map((channel) => (
              <a key={channel.title} className="contact-channel" href={channel.href} data-reveal>
                <div className="icon-badge is-solid">
                  <Icon name={channel.icon} className="icon-badge-svg" />
                </div>
                <div>
                  <h3>{channel.title}</h3>
                  <strong>{channel.value}</strong>
                  <p>{channel.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section" id="diagnostico">
        <div className="container">
          <div className="diagnostic-banner" data-reveal>
            <div>
              <span className="eyebrow">Solicite um diagnóstico tecnológico</span>
              <h2>Mapeie infraestrutura, processos e oportunidades de automação com visão consultiva.</h2>
              <p>
                A Serratech pode avaliar sua estrutura tecnológica, identificar riscos, apontar
                gargalos e sugerir prioridades para modernizar a operação com segurança.
              </p>
            </div>
            <ul className="feature-list compact">
              <li>
                <Icon name="check" className="feature-list-icon" />
                <span>Análise do cenário atual</span>
              </li>
              <li>
                <Icon name="check" className="feature-list-icon" />
                <span>Levantamento de riscos e retrabalhos</span>
              </li>
              <li>
                <Icon name="check" className="feature-list-icon" />
                <span>Recomendações de infraestrutura, sistemas e automação</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
