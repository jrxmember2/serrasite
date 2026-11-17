import { Link } from 'react-router-dom';
import Icon from './Icon';
import HubGlyph from './HubGlyph';

function WindowChrome({ brand, tone = 'sindancora' }) {
  return (
    <div className={`mockup-window-bar ${tone}`}>
      <span className="mockup-window-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{brand}</span>
      <span className="mockup-window-lock">● seguro</span>
    </div>
  );
}

function SindAncoraDesktop() {
  return (
    <div className="mockup-desktop-screen sindancora-screen">
      <WindowChrome brand="SindÂncora / Visão geral" />
      <div className="mockup-app-shell">
        <aside className="mockup-sidebar">
          <div className="mockup-sidebar-brand">
            <HubGlyph />
            <strong>SindÂncora</strong>
          </div>
          <span className="mockup-nav-active">Visão geral</span>
          <span>Atendimento</span>
          <span>Manutenções</span>
          <span>Condomínios</span>
          <span>Documentos</span>
          <span>Financeiro</span>
          <div className="mockup-sidebar-foot">Serratech · online</div>
        </aside>
        <div className="mockup-app-main">
          <div className="mockup-app-header">
            <div>
              <small>SEGUNDA, 17 NOV 2026</small>
              <h4>Bom dia, Junior.</h4>
            </div>
            <span className="mockup-avatar">JC</span>
          </div>
          <div className="mockup-stat-grid">
            <div>
              <small>Condomínios</small>
              <strong>12</strong>
              <span className="mockup-positive">+2 este mês</span>
            </div>
            <div>
              <small>Atendimentos abertos</small>
              <strong>28</strong>
              <span>6 aguardando retorno</span>
            </div>
            <div>
              <small>Manutenções</small>
              <strong>09</strong>
              <span className="mockup-warning">3 vencem hoje</span>
            </div>
          </div>
          <div className="mockup-panel-grid">
            <div className="mockup-panel">
              <div className="mockup-panel-heading">
                <strong>Próximas manutenções</strong>
                <span>Ver agenda ↗</span>
              </div>
              <div className="mockup-task-row">
                <span className="mockup-task-dot warning" />
                <div>
                  <strong>Elevador social</strong>
                  <small>Ed. Mirante · hoje</small>
                </div>
                <span>09:30</span>
              </div>
              <div className="mockup-task-row">
                <span className="mockup-task-dot" />
                <div>
                  <strong>Bombas da piscina</strong>
                  <small>Jardins do Sol · amanhã</small>
                </div>
                <span>14:00</span>
              </div>
              <div className="mockup-task-row">
                <span className="mockup-task-dot" />
                <div>
                  <strong>Portão de acesso</strong>
                  <small>Vila Nova · 19 nov</small>
                </div>
                <span>08:00</span>
              </div>
            </div>
            <div className="mockup-panel mockup-activity-panel">
              <div className="mockup-panel-heading">
                <strong>Operação da semana</strong>
                <span>Atualizado agora</span>
              </div>
              <div className="mockup-bars" aria-hidden="true">
                <i style={{ height: '48%' }} />
                <i style={{ height: '72%' }} />
                <i style={{ height: '58%' }} />
                <i style={{ height: '88%' }} />
                <i style={{ height: '65%' }} />
                <i style={{ height: '96%' }} />
                <i style={{ height: '78%' }} />
              </div>
              <div className="mockup-chart-labels">
                <span>seg</span>
                <span>ter</span>
                <span>qua</span>
                <span>qui</span>
                <span>sex</span>
                <span>sáb</span>
                <span>dom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SindAncoraPhone() {
  return (
    <div className="mockup-phone-frame sindancora-phone">
      <div className="mockup-phone-notch" />
      <div className="mockup-phone-screen">
        <div className="mockup-phone-topline">
          <span>9:41</span>
          <span>● ● ●</span>
        </div>
        <div className="mockup-mobile-brand">
          <HubGlyph />
          <strong>SindÂncora</strong>
          <span>☰</span>
        </div>
        <div className="mockup-mobile-greeting">
          <small>SEU CONDOMÍNIO</small>
          <strong>Ed. Mirante</strong>
          <span>⌄</span>
        </div>
        <div className="mockup-mobile-card mockup-mobile-highlight">
          <small>Próxima manutenção</small>
          <strong>Elevador social</strong>
          <span>Hoje · 09:30 · Em acompanhamento</span>
        </div>
        <div className="mockup-mobile-section-heading">
          <strong>Acesso rápido</strong>
          <span>Ver todos</span>
        </div>
        <div className="mockup-mobile-actions">
          <span><b>+</b> Solicitar</span>
          <span><b>▣</b> Documentos</span>
          <span><b>◌</b> Avisos</span>
        </div>
        <div className="mockup-mobile-card mockup-mobile-message">
          <span className="mockup-mini-avatar">A</span>
          <div>
            <strong>Administradora respondeu</strong>
            <small>Seu chamado foi atualizado há 8 min</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function AncoraSignDesktop() {
  return (
    <div className="mockup-desktop-screen ancorasign-screen">
      <WindowChrome brand="ÂncoraSign / Documentos" tone="ancorasign" />
      <div className="mockup-app-shell">
        <aside className="mockup-sidebar ancorasign-sidebar">
          <div className="mockup-sidebar-brand">
            <img src="/media/ancorasign-mark.svg" alt="" />
            <strong>ÂncoraSign</strong>
          </div>
          <span className="mockup-nav-active">Documentos</span>
          <span>Modelos</span>
          <span>Contatos</span>
          <span>Auditoria</span>
          <div className="mockup-sidebar-foot">ÂncoraHUB · Serratech</div>
        </aside>
        <div className="mockup-app-main">
          <div className="mockup-app-header ancorasign-header">
            <div>
              <small>ESPAÇO SERRATECH</small>
              <h4>Documentos</h4>
            </div>
            <span className="mockup-action-button">+ Novo documento</span>
          </div>
          <div className="mockup-sign-summary">
            <div><small>Em andamento</small><strong>08</strong><span>documentos</span></div>
            <div><small>Concluídos</small><strong>24</strong><span>este mês</span></div>
            <div><small>Franquia mensal</small><strong>12/20</strong><span>documentos usados</span></div>
          </div>
          <div className="mockup-panel mockup-document-panel">
            <div className="mockup-panel-heading">
              <strong>Atividade recente</strong>
              <span>Filtrar documentos</span>
            </div>
            <div className="mockup-document-row">
              <span className="mockup-document-icon">▤</span>
              <div><strong>Contrato de prestação de serviços</strong><small>2 signatários · atualizado há 4 min</small></div>
              <span className="mockup-document-status signed">Concluído</span>
            </div>
            <div className="mockup-document-row">
              <span className="mockup-document-icon">▤</span>
              <div><strong>Termo de parceria ÂncoraHUB</strong><small>1 de 3 assinaturas · aguardando</small></div>
              <span className="mockup-document-status waiting">Aguardando</span>
            </div>
            <div className="mockup-document-row">
              <span className="mockup-document-icon">▤</span>
              <div><strong>Ata de reunião comercial</strong><small>Rascunho · criado ontem</small></div>
              <span className="mockup-document-status draft">Rascunho</span>
            </div>
          </div>
          <div className="mockup-sign-footer"><span>✓ Auditoria ativa em todos os documentos</span><span>Último backup · agora</span></div>
        </div>
      </div>
    </div>
  );
}

function AncoraSignPhone() {
  return (
    <div className="mockup-phone-frame ancorasign-phone">
      <div className="mockup-phone-notch" />
      <div className="mockup-phone-screen">
        <div className="mockup-phone-topline">
          <span>9:41</span>
          <span>● ● ●</span>
        </div>
        <div className="mockup-sign-mobile-brand">
          <img src="/media/ancorasign-mark.svg" alt="" />
          <strong>ÂncoraSign</strong>
          <span>⋯</span>
        </div>
        <div className="mockup-sign-mobile-kicker">ASSINATURA SOLICITADA</div>
        <div className="mockup-sign-document">
          <div className="mockup-sign-paper-mark">Â</div>
          <small>DOCUMENTO DIGITAL</small>
          <strong>Contrato de prestação de serviços</strong>
          <span>Enviado por Serratech · 17 nov 2026</span>
        </div>
        <div className="mockup-sign-progress"><span /><span /><span /></div>
        <div className="mockup-sign-step"><b>1</b><div><strong>Revise o documento</strong><small>Você está nesta etapa</small></div><span>✓</span></div>
        <div className="mockup-sign-step muted"><b>2</b><div><strong>Confirme sua assinatura</strong><small>Rápida e segura</small></div></div>
        <button type="button" className="mockup-sign-button">Abrir documento <Icon name="arrow" /></button>
        <small className="mockup-sign-trust">✓ Trilha de auditoria protegida</small>
      </div>
    </div>
  );
}

function ProductCard({ type }) {
  const isSign = type === 'ancorasign';
  return (
    <article className={`mockup-product-card ${isSign ? 'is-ancorasign' : 'is-sindancora'}`} data-anim="rise">
      <div className="mockup-product-heading">
        <div className="mockup-brand-lockup">
          {isSign ? (
            <img src="/media/ancorasign-mark.svg" alt="" />
          ) : (
            <HubGlyph />
          )}
          <div>
            <strong>{isSign ? 'ÂncoraSign' : 'SindÂncora'}</strong>
            <span>{isSign ? 'Assinatura eletrônica' : 'Gestão condominial'}</span>
          </div>
        </div>
        <span className="mockup-product-status"><i /> {isSign ? 'Pronto' : 'Disponível'}</span>
      </div>
      <div className="mockup-device-stage">
        <div className="mockup-desktop-device">
          {isSign ? <AncoraSignDesktop /> : <SindAncoraDesktop />}
        </div>
        <div className="mockup-phone-device">
          {isSign ? <AncoraSignPhone /> : <SindAncoraPhone />}
        </div>
      </div>
      <div className="mockup-product-foot">
        <div>
          <h3>{isSign ? 'Documentos que chegam ao fim.' : 'A operação inteira em movimento.'}</h3>
          <p>
            {isSign
              ? 'Envie, acompanhe e conclua assinaturas com auditoria, WhatsApp e a segurança do ecossistema ÂncoraHUB.'
              : 'Atendimento, manutenção, documentos, financeiro e comunicação conectados para síndicos e administradoras.'}
          </p>
        </div>
        <Link className="text-link" to={isSign ? '/ancorasign' : '/app-sindico'}>
          {isSign ? 'Conheça o ÂncoraSign' : 'Conheça o SindÂncora'} <Icon name="arrow" />
        </Link>
      </div>
    </article>
  );
}

export default function ProductMockups({ only = 'all' }) {
  const products = only === 'ancorasign' ? ['ancorasign'] : ['sindancora', 'ancorasign'];
  return (
    <section className={`product-mockups ${only === 'ancorasign' ? 'product-mockups-single' : ''}`} id={only === 'all' ? 'produtos' : undefined}>
      <div className="container">
        <div className="product-mockups-heading">
          <div>
            <span className="eyebrow" data-anim="rise">ÂncoraHUB em produção</span>
            <h2 data-anim="lines">Marcas fortes.<br />Produto de verdade.</h2>
          </div>
          <p data-anim="rise">
            O SindÂncora ganhou profundidade. O ÂncoraSign está pronto para
            transformar documentos em decisões concluídas. Dois produtos, a
            mesma engenharia Serratech.
          </p>
        </div>
        <div className={`mockup-product-grid count-${products.length}`}>
          {products.map((product) => <ProductCard key={product} type={product} />)}
        </div>
      </div>
    </section>
  );
}
