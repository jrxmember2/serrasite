import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import HubGlyph from '../components/HubGlyph';
import Icon from '../components/Icon';
import ProjectCTA from '../components/ProjectCTA';

export default function AncorAdvPage() {
  return (
    <>
      <Seo path="/ancoradv" />
      <PageHero
        eyebrow="ÂncoraHUB · Em breve"
        title="ÂncorADV. Tempo para o que move a sua advocacia."
        description="A próxima solução do ecossistema ÂncoraHUB está em desenvolvimento. Criada pela Serratech para ajudar advogados a organizar o fluxo de trabalho, cuidar das informações e ganhar tempo para seus clientes e novos negócios."
        primaryAction={{
          label: 'Tenho interesse no lançamento',
          to: '/contato?interesse=%C3%82ncorADV#diagnostico',
        }}
        secondaryAction={{ label: 'Conhecer o ÂncoraHUB', to: '/ancora' }}
        highlights={[
          'Em desenvolvimento',
          'Para advogados',
          'Desenvolvido pela Serratech',
        ]}
      />
      <div className="container">
        <section className="future-product">
          <div className="future-copy" data-anim="rise">
            <span className="eyebrow">O próximo capítulo</span>
            <h2>
              O mesmo cuidado.
              <br />
              Uma nova rotina.
            </h2>
            <p>
              O ÂncorADV nasce com o compromisso que orienta os nossos produtos:
              fluxos mais claros, informações protegidas e tecnologia que
              trabalha a favor de quem a usa.
            </p>
            <p>
              As funcionalidades e a data de disponibilidade serão apresentadas
              no lançamento. Conte o que mais consome o tempo do seu escritório
              para conversar com a Serratech sobre essa próxima etapa.
            </p>
            <Link
              className="text-link"
              to="/contato?interesse=%C3%82ncorADV#diagnostico"
            >
              Quero acompanhar <Icon name="arrow" />
            </Link>
          </div>
          <div className="future-product-visual" data-anim="rise">
            <HubGlyph />
            <p>
              ÂncorADV
              <br />
              Seu tempo merece
              <br />
              uma nova direção.
            </p>
            <span>ÂncoraHUB / Uma criação Serratech / Em breve</span>
          </div>
        </section>
      </div>
      <ProjectCTA
        title={'Vamos falar sobre\na sua rotina jurídica.'}
        label="Falar sobre o ÂncorADV"
        to="/contato?interesse=%C3%82ncorADV#diagnostico"
      />
    </>
  );
}
