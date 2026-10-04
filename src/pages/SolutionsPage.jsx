import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import InfrastructureSection from '../components/InfrastructureSection';
import ProjectCTA from '../components/ProjectCTA';

const solutions = [
  {
    id: 'software',
    title: 'Fábrica de software',
    description:
      'Sistemas web, aplicativos e portais construídos em torno do seu fluxo de trabalho. Do diagnóstico à evolução contínua.',
    items: [
      'Software sob medida',
      'Aplicativos',
      'Portais',
      'Modernização de sistemas',
    ],
    to: '/fabrica-de-software',
    label: 'Conheça a fábrica',
  },
  {
    id: 'ancorahub',
    title: 'Ecossistema ÂncoraHUB',
    description:
      'Software próprio, desenvolvido pela Serratech: SindÂncora para a rotina de síndicos e ÂncorADV para advogados, em breve.',
    items: [
      'SindÂncora disponível',
      'ÂncorADV em breve',
      'Tecnologia Serratech',
    ],
    to: '/ancora',
    label: 'Explore o ÂncoraHUB',
  },
  {
    id: 'automacoes',
    title: 'Integração e automação',
    description:
      'Conecte informações entre sistemas e reduza tarefas repetitivas. Mais tempo para a equipe e mais clareza para decidir.',
    items: [
      'Integração de sistemas',
      'Fluxos automatizados',
      'Informações centralizadas',
    ],
    to: '/contato?interesse=Integra%C3%A7%C3%A3o%20e%20automa%C3%A7%C3%A3o#diagnostico',
    label: 'Fale sobre a sua rotina',
  },
];
export default function SolutionsPage() {
  return (
    <>
      <Seo path="/solucoes" />
      <PageHero
        eyebrow="O que construímos"
        title="Software que faz a operação avançar."
        description="Sistemas próprios, desenvolvimento sob medida e integração de processos. A Serratech reúne a tecnologia e a experiência que devolvem tempo para você cuidar do seu negócio."
        primaryAction={{
          label: 'Converse sobre o seu projeto',
          to: '/contato#diagnostico',
        }}
        secondaryAction={{ label: 'Conheça o ÂncoraHUB', to: '/ancora' }}
        highlights={[
          'Fluxos mais simples',
          'Informações protegidas',
          'Tempo para novos negócios',
        ]}
      />
      <section className="section">
        <div className="container catalog">
          {solutions.map((item) => (
            <article
              className="catalog-item"
              id={item.id}
              key={item.id}
              data-anim="rise"
            >
              <div className="catalog-head">
                <span className="eyebrow">Soluções Serratech</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Link className="text-link" to={item.to}>
                  {item.label}
                  <Icon name="arrow" />
                </Link>
              </div>
              <ul className="chip-list">
                {item.items.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <InfrastructureSection />
      <ProjectCTA />
    </>
  );
}
