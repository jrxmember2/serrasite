import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import HubGlyph from '../components/HubGlyph';
import InfrastructureSection from '../components/InfrastructureSection';
import ProjectCTA from '../components/ProjectCTA';
import ProductMockups from '../components/ProductMockups';

export default function AncoraPage() {
  return (
    <>
      <Seo path="/ancora" />
      <section className="hub-showcase hub-route">
        <div className="container">
          <span className="eyebrow" data-anim="rise">
            O ecossistema de software da Serratech
          </span>
          <h1 className="hub-wordmark" data-anim="rise">
            Âncora<span>HUB</span>
            <HubGlyph />
          </h1>
          <p className="hub-route-intro" data-anim="rise">
            Desenvolvemos tecnologia para quem precisa de uma rotina mais
            organizada e tempo para crescer. Produtos próprios, com a
            experiência, o cuidado e a infraestrutura da Serratech em cada
            entrega.
          </p>
          <div className="product-feature">
            <div className="product-feature-copy" data-anim="rise">
              <span className="status-tag">
                <span /> Disponível
              </span>
              <h2>SindÂncora</h2>
              <p className="product-lede">
                Mais controle da rotina.
                <br />
                Mais espaço para crescer.
              </p>
              <p>
                Para síndicos profissionais e moradores, com administradoras
                como parceiras. Atendimento, manutenção, documentos e
                comunicação conectados em um só ambiente.
              </p>
              <div className="product-tags">
                <span>Sistema web</span>
                <span>App Android</span>
                <span>LemeIA</span>
                <span>WhatsApp</span>
              </div>
              <Link className="btn btn-lime" to="/app-sindico">
                <span>Conheça o SindÂncora</span>
                <Icon name="arrow" />
              </Link>
            </div>
            <Link className="product-feature-visual" to="/app-sindico">
              <div className="product-preview">
                <div className="preview-bar">
                  <span className="preview-dots" aria-hidden="true">
                    ● ● ●
                  </span>
                  <span>SindÂncora / Operação condominial</span>
                  <Icon name="shield" />
                </div>
                <div className="preview-crop">
                  <img
                    src="/media/products/panel-maintenance-index.webp"
                    alt="Tela real do SindÂncora para organização e acompanhamento das manutenções"
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="preview-caption">
                Produto desenvolvido pela Serratech <span>Ver o sistema ↗</span>
              </span>
            </Link>
          </div>
          <div className="upcoming-product" data-anim="rise">
            <div className="upcoming-title">
              <Icon name="document" />
              <h2>ÂncoraSign</h2>
              <span className="status-tag">Pronto</span>
            </div>
            <p>
              Assinatura eletrônica com auditoria, trilha de evidências e
              distribuição por WhatsApp. O próximo passo do documento acontece
              no mesmo ecossistema.
            </p>
            <Link className="text-link" to="/ancorasign">
              Conheça o ÂncoraSign <Icon name="arrow" />
            </Link>
          </div>
          <div className="partner-note" data-anim="rise">
            <Icon name="users" />
            <p>
              <strong>Administradoras são nossas parceiras.</strong> Construímos
              ferramentas para fortalecer a colaboração com síndicos e dar mais
              eficiência à operação condominial.
            </p>
            <Link
              className="text-link"
              to="/contato?interesse=parceria#diagnostico"
            >
              Vamos conversar <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <ProductMockups only="ancorasign" />
      <InfrastructureSection />
      <ProjectCTA
        title={'Sua rotina pode\nrender muito mais.'}
        label="Solicitar uma apresentação"
        to="/contato?interesse=Sind%C3%82ncora#diagnostico"
      />
    </>
  );
}
