import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import ProductMockups from '../components/ProductMockups';
import ProjectCTA from '../components/ProjectCTA';
import Icon from '../components/Icon';
import { siteConfig } from '../data/siteContent';

const benefits = [
  {
    icon: 'document',
    title: 'Envie sem perder o fio',
    text: 'Crie documentos, convide signatários e acompanhe cada etapa em uma visão que deixa o próximo passo claro.',
  },
  {
    icon: 'shield',
    title: 'Evidência em cada página',
    text: 'Auditoria, certificado, hash SHA-256, QR Code e link público formam uma trilha que continua depois da assinatura.',
  },
  {
    icon: 'phone',
    title: 'A assinatura vai até a pessoa',
    text: 'Convites, códigos de confirmação e vias assinadas chegam pelo WhatsApp do ecossistema ÂncoraHUB quando esse canal está habilitado.',
  },
  {
    icon: 'layers',
    title: 'Pronto para a operação',
    text: 'Modelos, equipes, permissões, API e integrações crescem junto com a forma como sua empresa trabalha.',
  },
];

export default function AncoraSignPage() {
  return (
    <>
      <Seo path="/ancorasign" />
      <PageHero
        eyebrow="ÂncoraHUB · ÂncoraSign · Pronto"
        title="Assinatura que conclui o trabalho."
        description="Envie, assine e acompanhe documentos com uma experiência clara para quem prepara, assina e precisa provar o que aconteceu. ÂncoraSign é o produto de assinatura eletrônica da Serratech, conectado ao ecossistema ÂncoraHUB."
        primaryAction={{
          label: 'Conhecer planos e começar',
          href: siteConfig.ancoraSignUrl + '/planos',
        }}
        secondaryAction={{
          label: 'Falar com a Serratech',
          to: '/contato?interesse=ÂncoraSign#diagnostico',
        }}
        highlights={[
          'Assinatura eletrônica',
          'Auditoria e certificado',
          'WhatsApp integrado',
          'Desenvolvido pela Serratech',
        ]}
      />
      <ProductMockups only="ancorasign" />
      <section className="ancorasign-proof-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">Mais do que uma assinatura</span>
              <h2 data-anim="lines">O documento<br />continua falando.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Uma assinatura boa não termina no clique. Ela deixa clareza para
              a equipe, confiança para o cliente e evidências para o futuro.
            </p>
          </div>
          <div className="ancorasign-benefit-grid" data-stagger>
            {benefits.map((item) => (
              <article key={item.title} data-stagger-item>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="ancorasign-note" data-anim="rise">
            <span className="ancorasign-note-mark">Â</span>
            <p>
              <strong>Uma marca do ecossistema ÂncoraHUB.</strong> O ÂncoraSign
              pode operar sozinho, mas fica ainda mais forte quando conversa
              com o SindÂncora e com os fluxos que sua empresa já domina.
            </p>
            <Link className="text-link" to="/ancora">
              Ver o ecossistema <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <ProjectCTA
        title={'Seu próximo documento\npode terminar hoje.'}
        text="Conheça a experiência do ÂncoraSign, escolha o caminho que faz sentido para sua operação e comece com a segurança da Serratech."
        label="Começar no ÂncoraSign"
        to="/contato?interesse=ÂncoraSign#diagnostico"
      />
    </>
  );
}
