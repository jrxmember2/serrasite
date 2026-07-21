import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import { portalCategories, portalPriorities } from '../data/siteContent';

const dashboardCards = [
  { title: 'Meus chamados', value: '12' },
  { title: 'Em andamento', value: '04' },
  { title: 'Documentos', value: '38' },
  { title: 'Solicitações', value: '07' },
  { title: 'Faturas e contratos', value: '09' },
  { title: 'Suporte', value: 'On' },
];

const tabs = [
  { id: 'login', label: 'Login' },
  { id: 'ticket', label: 'Abrir chamado' },
  { id: 'dashboard', label: 'Painel' },
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
    setFeedback('Login demonstrativo realizado. Esta área está pronta para integração com backend.');
  };

  const handleTicket = (event) => {
    event.preventDefault();
    setView('ticket');
    setFeedback(
      'Chamado demonstrativo enviado. O próximo passo é conectar ao fluxo real de atendimento.',
    );
  };

  return (
    <>
      <Seo path="/portal-cliente" />

      <PageHero
        eyebrow="Portal do Cliente"
        title="Chamados, documentos e solicitações em um só lugar."
        description="Acompanhe atendimentos, contratos e documentos em uma interface pensada para integrar com o ecossistema Serratech."
        primaryAction={{ label: 'Abrir chamado', to: '/portal-cliente#abrir-chamado' }}
        secondaryAction={{ label: 'Falar com a Serratech', to: '/contato' }}
        highlights={['Acompanhamento de chamados', 'Documentos', 'Faturas e contratos', 'Base para integração']}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Ambiente demonstrativo
              </span>
              <h2 data-anim="rise">Veja como funciona.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Esta é a interface do portal. Os dados são de demonstração — a estrutura já está pronta
              para autenticação e API reais.
            </p>
          </div>

          <div className="portal" data-anim="rise">
            <div className="portal-tabs" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={view === tab.id}
                  className={`portal-tab ${view === tab.id ? 'is-active' : ''}`}
                  onClick={() => setView(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="portal-body">
              {view === 'login' ? (
                <form className="form-block" onSubmit={handleLogin}>
                  <div className="form-grid">
                    <label className="full-width">
                      <span>Código do cliente ou e-mail</span>
                      <input type="text" placeholder="cliente@empresa.com.br" required />
                    </label>
                    <label className="full-width">
                      <span>Senha</span>
                      <input type="password" placeholder="••••••••" required />
                    </label>
                  </div>
                  <button className="btn" type="submit">
                    <span>Entrar</span>
                    <Icon name="arrow" className="btn-icon" />
                  </button>
                </form>
              ) : null}

              {view === 'ticket' ? (
                <form className="form-block" id="abrir-chamado" onSubmit={handleTicket}>
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
                      <span>Categoria</span>
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
                      <textarea
                        rows="5"
                        placeholder="Descreva o chamado com o máximo de contexto possível."
                        required
                      />
                    </label>
                    <label className="full-width">
                      <span>Anexo</span>
                      <input type="file" />
                    </label>
                  </div>
                  <button className="btn" type="submit">
                    <span>Enviar chamado</span>
                    <Icon name="support" className="btn-icon" />
                  </button>
                </form>
              ) : null}

              {view === 'dashboard' ? (
                <div className="portal-stats">
                  {dashboardCards.map((card) => (
                    <div className="portal-stat" key={card.title}>
                      <strong>{card.value}</strong>
                      <span>{card.title}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              {feedback ? <p className="form-feedback">{feedback}</p> : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
