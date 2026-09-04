import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PhotoBand from '../components/PhotoBand';
import ProductShot from '../components/ProductShot';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import {
  appFeatures,
  appScreens,
  sindancoraAudience,
  sindancoraDifferentials,
  sindancoraOps,
  sindancoraPitch,
} from '../data/siteContent';

const playStoreUrl =
  'https://play.google.com/store/apps/details?id=br.com.sindancora.app&hl=pt_BR';

export default function AppSindicoPage() {
  return (
    <>
      <Seo path="/app-sindico" />

      <PageHero
        eyebrow="SindÂncora · Gestão condominial"
        title="Comande a gestão dos seus condomínios."
        description={sindancoraPitch}
        primaryAction={{ label: 'Solicitar apresentação', to: '/contato' }}
        secondaryAction={{ label: 'Baixar o app do síndico', href: playStoreUrl }}
        highlights={['LemeIA', 'Atendimento por WhatsApp', 'Obras e reformas', 'Portaria digital']}
      />

      <PhotoBand
        src="/media/foto/condominio-fachada.jpg"
        alt="Fachada de prédio residencial com varandas em contraluz, vista de baixo contra o céu"
        eyebrow="O prédio não avisa quando dá problema"
        title="Cada varanda dessas é uma unidade que precisa de resposta."
        text="Vazamento no terceiro, encomenda que sumiu na portaria, obra que atrasou, assembleia que precisa de quórum. O síndico responde por tudo — e, na maioria dos condomínios, responde pelo WhatsApp pessoal."
        credit="Foto: Pexels"
      />

      <section className="band">
        <div className="container">
          <div className="showcase">
            <div className="showcase-aside">
              <span className="eyebrow" data-anim="rise">
                O produto rodando
              </span>
              <h2 data-anim="lines">Uma administradora inteira em uma tela só.</h2>
              <p data-anim="rise">
                O SindÂncora é multitenant por administradora e tem escopo por condomínio: o síndico
                profissional com nove prédios na carteira alterna o contexto sem trocar de sistema, e
                cada perfil — do super admin ao morador — só enxerga o que lhe cabe.
              </p>

              <ul className="spec-notes" data-stagger>
                <li data-stagger-item>Perfis do super admin ao morador, com permissão granular</li>
                <li data-stagger-item>Planos, módulos e limites de uso por administradora</li>
                <li data-stagger-item>Identidade visual própria: nome, logo e cores por cliente</li>
                <li data-stagger-item>App do síndico publicado na Google Play</li>
              </ul>

              <div className="button-row" data-anim="rise">
                <a className="btn" href={playStoreUrl}>
                  <span>Ver na Google Play</span>
                  <Icon name="arrow" className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="showcase-stack">
              <ProductShot
                src="/media/sindancora-dashboard.jpg"
                url="sindancora.ancorahub.com.br/dashboard"
                alt="Painel do SindÂncora com carteira de nove condomínios, unidades, moradores e ações rápidas"
                caption="Painel da administradora"
                meta="Widgets configuráveis"
              />
              <ProductShot
                src="/media/sindancora-condominios.jpg"
                url="sindancora.ancorahub.com.br/condominios"
                alt="Lista de condomínios do SindÂncora, cada um com cidade, blocos e número de unidades"
                caption="Condomínios da carteira"
                meta="Blocos, unidades e links públicos"
              />
              <ProductShot
                src="/media/sindancora-login.jpg"
                url="sindancora.ancorahub.com.br/login"
                alt="Tela de entrada do SindÂncora destacando LemeIA, atendimento, obras e carteira de condomínios"
                caption="Entrada do síndico"
                meta="Acesso também por código no WhatsApp"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Para quem é
              </span>
              <h2 data-anim="lines">Da administradora ao morador, no mesmo sistema.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Cada perfil entra pela porta certa e enxerga o que lhe cabe — sem planilha paralela nem
              grupo de mensagem fazendo o papel de sistema.
            </p>
          </div>

          <ul className="chip-list chip-list-wide" data-anim="rise">
            {sindancoraAudience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Telas do produto
              </span>
              <h2 data-anim="lines">Desenhado para resolver entre uma reunião e outra.</h2>
            </div>
            <p className="lead" data-anim="rise">
              O síndico raramente está sentado. A informação precisa aparecer em poucos toques, com o
              contexto do condomínio certo já selecionado.
            </p>
          </div>

          <div className="screens" data-stagger>
            {appScreens.map((screen, index) => (
              <article className="screen" key={screen.title} data-stagger-item>
                <div className="screen-head">
                  <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="label">{screen.accent}</span>
                </div>
                <h3>{screen.title}</h3>
                <ul className="feature-list">
                  {screen.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" className="feature-list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Funcionalidades
              </span>
              <h2 data-anim="lines">Nove frentes que cobrem a rotina inteira.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Do chamado aberto no portão à ata assinada depois da assembleia — com histórico,
              responsável e prazo em cada etapa.
            </p>
          </div>

          <div className="ledger" data-stagger>
            {appFeatures.map((item, index) => (
              <article className="ledger-row" key={item.title} data-stagger-item>
                <span className="ledger-index">
                  {String(index + 1).padStart(2, '0')} / {appFeatures.length}
                </span>
                <div className="ledger-title">
                  <h3>{item.title}</h3>
                </div>
                <p className="ledger-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Confiabilidade é argumento de venda para quem já se queimou com sistema
          condominial que sumiu com os documentos. Por isso ganha faixa própria. */}
      <section className="band">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Quando ninguém está olhando
              </span>
              <h2 data-anim="lines">O que roda sozinho para o sistema não te deixar na mão.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Convenção, ata e prestação de contas não podem depender da sorte. A operação por trás
              do SindÂncora é a mesma que a Serratech entrega aos clientes de infraestrutura.
            </p>
          </div>

          <dl className="hero-spec" data-stagger>
            {sindancoraOps.map((row) => (
              <div className="hero-spec-row" key={row.term} data-stagger-item>
                <dt>{row.term}</dt>
                <dd>{row.detail}</dd>
              </div>
            ))}
          </dl>

          <ul className="chip-list chip-list-wide" data-anim="rise">
            {sindancoraDifferentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow" data-anim="rise">
              Apresentação
            </span>
            <h2 data-anim="lines">Quer o SindÂncora rodando no seu condomínio?</h2>
          </div>

          <div className="cta-aside">
            <p data-anim="rise">
              Mostramos o sistema com dados de demonstração, discutimos os módulos que fazem sentido
              para a sua carteira e falamos de migração dos documentos que já existem.
            </p>
            <div className="button-row" data-anim="rise">
              <Link className="btn" to="/contato">
                <span>Solicitar apresentação</span>
                <Icon name="arrow" className="btn-icon" />
              </Link>
              <Link className="btn btn-secondary" to="/ancora">
                <span>Conhecer o Âncora</span>
                <Icon name="anchor" className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
