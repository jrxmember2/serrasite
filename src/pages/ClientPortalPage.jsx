import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import { portalCategories, portalPriorities } from '../data/siteContent';

const dashboardCards = [
  { title: 'Meus chamados', value: '12', icon: 'support' },
  { title: 'Chamados em andamento', value: '04', icon: 'workflow' },
  { title: 'Documentos', value: '38', icon: 'document' },
  { title: 'Solicitações', value: '07', icon: 'portal' },
  { title: 'Faturas / contratos', value: '09', icon: 'cash' },
  { title: 'Suporte', value: 'Disponível', icon: 'phone' },
];

export default function ClientPortalPage() {
  const [view, setView] = useState('login');
  const [feedback, setFeedback] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#abrir-chamado') {
      setView('ticket');
    }
  }, [location.hash]);

  const handleLogin = (event) => {
    event.preventDefault();
    setView('dashboard');
    setFeedback('Login demonstrativo realizado. Esta área está pronta para futura integração com backend.');
  };

  const handleTicket = (event) => {
    event.preventDefault();
    setView('ticket');
    setFeedback('Chamado demonstrativo enviado. O próximo passo é conectar esta interface ao fluxo real de atendimento.');
  };

  return (
    <>
      <Seo
        title="Portal do cliente"
        description="Portal do Cliente Serratech: acompanhe chamados, solicitações, documentos e atendimentos em um só lugar."
        keywords="portal do cliente, chamados de TI, suporte técnico corporativo, portal Serratech, app para síndico"
        path="/portal-cliente"
      />

      <PageHero
        eyebrow="Portal do Cliente"
        title="Portal do Cliente Serratech"
        description="Acompanhe chamados, solicitações, documentos e atendimentos em um só lugar. Uma interface pensada para futura integração com o ecossistema Serratech."
        primaryAction={{ label: 'Abrir chamado', to: '/portal-cliente#abrir-chamado' }}
        secondaryAction={{ label: 'Falar com a Serratech', to: '/contato' }}
        highlights={['Login visual', 'Acompanhamento de chamados', 'Solicitações', 'Documentos', 'Faturas e contratos', 'Base para integração futura']}
      />

      <section className="section">
        <div className="container portal-layout">
          <div className="portal-card" data-reveal>
            <div className="portal-card-header">
              <span className="eyebrow">Ambiente demonstrativo</span>
              <div className="portal-switches">
                <button
                  type="button"
                  className={`portal-tab ${view === 'login' ? 'is-active' : ''}`}
                  onClick={() => setView('login')}
                >
                  Login
                </button>
                <button
                  type="button"
                  className={`portal-tab ${view === 'ticket' ? 'is-active' : ''}`}
                  onClick={() => setView('ticket')}
                >
                  Abrir chamado
                </button>
                <button
                  type="button"
                  className={`portal-tab ${view === 'dashboard' ? 'is-active' : ''}`}
                  onClick={() => setView('dashboard')}
                >
                  Painel
                </button>
              </div>
            </div>

            {view === 'login' ? (
              <form className="portal-form" onSubmit={handleLogin}>
                <label>
                  <span>Código do cliente ou e-mail</span>
                  <input type="text" placeholder="cliente@empresa.com.br" required />
                </label>
                <label>
                  <span>Senha</span>
                  <input type="password" placeholder="••••••••" required />
                </label>
                <button className="btn btn-primary" type="submit">
                  <span>Entrar</span>
                  <Icon name="arrow" className="btn-icon" />
                </button>
                <div className="portal-links">
                  <button type="button" onClick={() => setView('ticket')}>
                    Abrir chamado
                  </button>
                  <button type="button" onClick={() => setFeedback('Fluxo de recuperação pronto para futura integração.')}>
                    Esqueci minha senha
                  </button>
                </div>
              </form>
            ) : null}

            {view === 'ticket' ? (
              <form className="portal-form" id="abrir-chamado" onSubmit={handleTicket}>
                <div className="form-grid">
                  <label>
                    <span>Nome</span>
                    <input type="text" placeholder="Seu nome" required />
                  </label>
                  <label>
                    <span>Empresa / Condomínio</span>
                    <input type="text" placeholder="Razão social ou condomínio" required />
                  </label>
                  <label>
                    <span>E-mail</span>
                    <input type="email" placeholder="voce@empresa.com.br" required />
                  </label>
                  <label>
                    <span>Telefone</span>
                    <input type="tel" placeholder="(00) 00000-0000" required />
                  </label>
                  <label>
                    <span>Categoria do chamado</span>
                    <select defaultValue="" required>
                      <option value="" disabled>
                        Selecione
                      </option>
                      {portalCategories.map((category) => (
                        <option key={category}>{category}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>Prioridade</span>
                    <select defaultValue="" required>
                      <option value="" disabled>
                        Selecione
                      </option>
                      {portalPriorities.map((priority) => (
                        <option key={priority}>{priority}</option>
                      ))}
                    </select>
                  </label>
                  <label className="full-width">
                    <span>Descrição</span>
                    <textarea rows="5" placeholder="Descreva o chamado com o máximo de contexto possível." required />
                  </label>
                  <label className="full-width">
                    <span>Anexo</span>
                    <input type="file" />
                  </label>
                </div>
                <button className="btn btn-primary" type="submit">
                  <span>Enviar chamado</span>
                  <Icon name="support" className="btn-icon" />
                </button>
              </form>
            ) : null}

            {view === 'dashboard' ? (
              <div className="dashboard-preview">
                <div className="dashboard-preview-grid">
                  {dashboardCards.map((card) => (
                    <article key={card.title} className="dashboard-preview-card">
                      <div className="icon-badge is-solid">
                        <Icon name={card.icon} className="icon-badge-svg" />
                      </div>
                      <strong>{card.value}</strong>
                      <span>{card.title}</span>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {feedback ? <p className="form-feedback">{feedback}</p> : null}
          </div>

          <aside className="portal-aside" data-reveal>
            <div className="glass-panel">
              <span className="eyebrow">Visão pós-login</span>
              <h3>Pronto para virar sistema real</h3>
              <p>
                A estrutura visual já contempla autenticação, abertura de chamado, cards operacionais
                e uma área futura para integrações com contratos, documentos e atendimentos.
              </p>
              <ul className="feature-list compact">
                <li>
                  <Icon name="check" className="feature-list-icon" />
                  <span>Interface pronta para API e autenticação</span>
                </li>
                <li>
                  <Icon name="check" className="feature-list-icon" />
                  <span>Fluxo visual para tickets e solicitações</span>
                </li>
                <li>
                  <Icon name="check" className="feature-list-icon" />
                  <span>Base para documentos, contratos e faturas</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
