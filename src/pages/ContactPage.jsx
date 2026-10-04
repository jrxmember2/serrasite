import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { contactInterests, siteConfig } from '../data/siteContent';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const requestedInterest = searchParams.get('interesse');
  const initialInterest =
    requestedInterest === 'parceria'
      ? 'Parceria com administradora'
      : requestedInterest;
  const [interest, setInterest] = useState('');
  const [prepared, setPrepared] = useState(null);
  const mailRef = useRef(null);
  useEffect(() => {
    setInterest(
      contactInterests.includes(initialInterest) ? initialInterest : '',
    );
    setPrepared(null);
  }, [initialInterest]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = 'Contato Serratech · ' + data.get('interest');
    const body = [
      'Olá, equipe Serratech!',
      '',
      'Nome: ' + data.get('name'),
      'Empresa / escritório / condomínio: ' + data.get('company'),
      'E-mail: ' + data.get('email'),
      'Telefone: ' + (data.get('phone') || 'Não informado'),
      'Interesse: ' + data.get('interest'),
      '',
      String(data.get('message')),
    ].join('\n');
    setPrepared({
      href:
        'mailto:' +
        siteConfig.contactEmail +
        '?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(body),
    });
    requestAnimationFrame(() => mailRef.current?.focus());
  };
  const hasWhatsApp =
    /^https:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//.test(
      siteConfig.whatsappUrl,
    );
  return (
    <>
      <Seo path="/contato" />
      <PageHero
        eyebrow="Vamos conversar"
        title="O próximo passo começa com o seu desafio."
        description="Conte o que está tomando tempo da sua equipe. Vamos conversar sobre software, ÂncoraHUB, automação ou uma parceria para fazer o seu negócio avançar."
        highlights={[
          'Fábrica de software',
          'ÂncoraHUB',
          'Administradoras parceiras',
        ]}
      />
      <section className="section" id="diagnostico">
        <div className="container contact-layout">
          <aside className="contact-aside" id="canais">
            <span className="eyebrow">Conversa com quem constrói</span>
            <h2 data-anim="lines">
              De pessoa
              <br />
              para pessoa.
            </h2>
            <p>
              Você traz o contexto. Nós ajudamos a desenhar o caminho. O
              primeiro passo é entender a sua operação e o que pode melhorar.
            </p>
            <a href={'mailto:' + siteConfig.contactEmail}>
              {siteConfig.contactEmail}
            </a>
            {hasWhatsApp && (
              <div>
                <a className="text-link" href={siteConfig.whatsappUrl}>
                  Converse pelo WhatsApp <Icon name="arrow" />
                </a>
              </div>
            )}
            <span className="micro-label">Atendimento</span>
            <p className="contact-hours">
              {siteConfig.serviceHours}
              <br />
              {siteConfig.serviceRegion}
            </p>
          </aside>
          <form
            className="form-block"
            onSubmit={handleSubmit}
            onChange={() => setPrepared(null)}
          >
            <div className="form-grid">
              <label>
                <span>Seu nome</span>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Como podemos chamar você?"
                  maxLength="100"
                  required
                />
              </label>
              <label>
                <span>Empresa, escritório ou condomínio</span>
                <input
                  name="company"
                  autoComplete="organization"
                  placeholder="Onde você atua?"
                  maxLength="150"
                  required
                />
              </label>
              <label>
                <span>E-mail</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com.br"
                  maxLength="150"
                  required
                />
              </label>
              <label>
                <span>Telefone / WhatsApp (opcional)</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(11) 99999-9999"
                  maxLength="30"
                />
              </label>
              <label className="full-width">
                <span>Sobre o que vamos conversar?</span>
                <select
                  name="interest"
                  value={interest}
                  onChange={(event) => setInterest(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Selecione o seu interesse
                  </option>
                  {contactInterests.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="full-width">
                <span>Conte o seu desafio</span>
                <textarea
                  name="message"
                  rows="5"
                  maxLength="1500"
                  placeholder="Como é o seu fluxo hoje? O que você gostaria de simplificar?"
                  required
                />
              </label>
            </div>
            <button className="btn" type="submit">
              <span>Preparar mensagem</span>
              <Icon name="arrow" />
            </button>
            <p className="form-note">
              Você poderá revisar e enviar pelo seu aplicativo de e-mail. Seus
              dados serão usados para responder ao contato, conforme a nossa{' '}
              <Link to="/legal/politica-de-privacidade">
                política de privacidade
              </Link>
              .
            </p>
            {prepared && (
              <div className="message-ready" role="status">
                <p>
                  Sua mensagem está pronta. Abra o e-mail para revisar e enviar
                  à Serratech.
                </p>
                <a ref={mailRef} href={prepared.href} className="btn">
                  <span>Abrir no meu e-mail</span>
                  <Icon name="mail" />
                </a>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
