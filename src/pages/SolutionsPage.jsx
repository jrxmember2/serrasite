import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PhotoBand from '../components/PhotoBand';
import InfraMap from '../components/InfraMap';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { factoryPitch, featuredProducts, solutionsCategories } from '../data/siteContent';

export default function SolutionsPage() {
  return (
    <>
      <Seo path="/solucoes" />

      <PageHero
        eyebrow="Produtos e soluções"
        title="Soluções completas para empresas, escritórios, condomínios e síndicos."
        description="Da tomada na parede ao relatório da diretoria. Seis frentes que resolvem o que trava a sua operação hoje — e evitam o problema que apareceria no ano que vem."
        primaryAction={{ label: 'Solicitar diagnóstico', to: '/contato#diagnostico' }}
        secondaryAction={{ label: 'Ver a fábrica de software', to: '/fabrica-de-software' }}
        highlights={['Infraestrutura', 'Consultoria', 'Sistemas', 'Automação', 'Condomínios', 'Segurança']}
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Amplitude de atuação
              </span>
              <h2 data-anim="lines">Se depende de tecnologia para funcionar, está aqui.</h2>
            </div>
            <p className="lead" data-anim="rise">
              São seis frentes, e elas raramente aparecem sozinhas: o problema que você notou
              costuma ter a raiz em outra. Por isso trabalhamos as seis juntas.
            </p>
          </div>

          <div className="catalog">
            {solutionsCategories.map((category, index) => (
              <article className="catalog-item" id={category.id} key={category.id} data-anim="rise">
                <div className="catalog-head">
                  <span className="ledger-index">
                    {String(index + 1).padStart(2, '0')} / {solutionsCategories.length}
                  </span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <ul className="chip-list">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PhotoBand
        src="/media/foto/infraestrutura-servidores.jpg"
        alt="Fileira de racks de servidores em corredor de datacenter, com cabeamento de rede e luzes de status"
        eyebrow="Onde a operação realmente mora"
        title="Bonito é o sistema. Quem sustenta é a camada de baixo."
        text="Servidor, rede, backup, acesso e monitoramento não aparecem na apresentação comercial — e são exatamente o que decide se a operação continua de pé na segunda-feira."
        credit="Foto: Pexels"
      />

      {/* Segurança é o assunto mais difícil de mostrar em texto corrido: o mapa
          de camadas resolve em uma imagem o que levaria três parágrafos. */}
      <section className="band" id="seguranca-camadas">
        <div className="container">
          <div className="showcase">
            <div className="showcase-aside">
              <span className="eyebrow" data-anim="rise">
                Como a segurança é montada
              </span>
              <h2 data-anim="lines">Quatro portas entre o mundo lá fora e o seu dado.</h2>
              <p data-anim="rise">
                Segurança não é uma caixa que se compra no fim do projeto: é a ordem em que as
                coisas foram montadas. Cada camada tem uma função, e a de baixo existe exatamente
                para o dia em que a de cima falhar. Porque um dia ela falha.
              </p>

              <ul className="spec-notes" data-stagger>
                <li data-stagger-item>Só entra quem tem permissão, e a conversa vai protegida</li>
                <li data-stagger-item>Atualização que pode voltar atrás se der errado</li>
                <li data-stagger-item>Cada cliente com os dados separados e cada ação registrada</li>
                <li data-stagger-item>Cópia guardada longe do sistema que ela protege</li>
              </ul>
            </div>

            <div className="showcase-stack" data-parallax="4">
              <InfraMap />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Fábrica de software
              </span>
              <h2 data-anim="lines">Precisa de um sistema que não existe pronto?</h2>
            </div>
            <p className="lead" data-anim="rise">
              {factoryPitch}
            </p>
          </div>

          <div className="button-row" data-anim="rise">
            <Link className="btn" to="/fabrica-de-software">
              <span>Conhecer a fábrica de software</span>
              <Icon name="arrow" className="btn-icon" />
            </Link>
            <Link className="btn btn-ghost" to="/contato#diagnostico">
              <span>Solicitar orçamento</span>
              <Icon name="chart" className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" data-anim="rise">
                Produtos próprios
              </span>
              <h2 data-anim="lines">A gente não só instala software. A gente faz.</h2>
            </div>
            <p className="lead" data-anim="rise">
              Estes produtos nasceram de problemas que encontramos em campo e hoje atendem cliente
              de verdade, todo dia. É o mesmo cuidado que entra no seu projeto.
            </p>
          </div>

          <div className="index-list" data-stagger>
            {featuredProducts.map((product, index) => (
              <Link className="index-item" to={product.to} key={product.title} data-stagger-item>
                <div className="index-item-inner">
                  <span className="ledger-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{product.title}</h3>
                  <span className="index-arrow">
                    <Icon name="arrow" />
                  </span>
                </div>
                <p>{product.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
