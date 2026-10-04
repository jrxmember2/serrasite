import { useState } from 'react';
import Icon from './Icon';

// Coordinates use the same equirectangular projection as the Natural Earth map.
const regions = [
  {
    id: 'helsinki',
    city: 'Helsinki',
    country: 'Finlândia',
    lon: 24.94,
    lat: 60.17,
    nearest: 'nuremberg',
    labelX: 610,
    labelY: 64,
  },
  {
    id: 'nuremberg',
    city: 'Nuremberg',
    country: 'Alemanha',
    lon: 11.08,
    lat: 49.45,
    nearest: 'helsinki',
    labelX: 530,
    labelY: 184,
  },
  {
    id: 'ohio',
    city: 'Ohio',
    country: 'Estados Unidos',
    lon: -82.9,
    lat: 40.4,
    nearest: 'nuremberg',
    labelX: 239,
    labelY: 159,
  },
  {
    id: 'sao-paulo',
    city: 'São Paulo',
    country: 'Brasil',
    lon: -46.63,
    lat: -23.55,
    nearest: 'ohio',
    labelX: 387,
    labelY: 348,
  },
].map((region) => ({
  ...region,
  x: ((region.lon + 180) / 360) * 1000,
  y: ((90 - region.lat) / 180) * 500,
}));
const connections = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 3],
];
const protections = [
  {
    icon: 'server',
    title: 'Redundância entre regiões',
    text: 'Servidores conectados e espelhados. Se uma região sofre um incidente, o tráfego pode ser redirecionado para outra região disponível próxima.',
  },
  {
    icon: 'layers',
    title: 'Backup levado a sério',
    text: 'Uma política rigorosa de cópias de segurança, junto ao espelhamento dos dados, preserva as informações e sustenta a recuperação.',
  },
  {
    icon: 'shield',
    title: 'Proteção de ponta a ponta',
    text: 'Controle de acesso, cuidado com as informações e validação externa de cibersegurança fazem parte do compromisso com seus dados.',
  },
];

export default function InfrastructureSection({ standalone = false }) {
  const [incident, setIncident] = useState(null);
  const affected = regions.find((region) => region.id === incident);
  const destination =
    affected && regions.find((region) => region.id === affected.nearest);
  return (
    <section
      className={`infrastructure-section ${standalone ? 'standalone' : ''}`}
      id="infraestrutura"
    >
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" data-anim="rise">
              Infraestrutura distribuída · Proteção por projeto
            </span>
            <h2 data-anim="lines">
              Seu negócio segue.
              <br />
              Mesmo quando o mundo para.
            </h2>
          </div>
          <p className="lead" data-anim="rise">
            Por trás de uma rotina simples, existe uma estrutura preparada para
            imprevistos. Operamos com servidores em quatro regiões e três
            provedores: Hetzner, AWS e Oracle.
          </p>
        </div>
        <div className="network-board" data-anim="rise">
          <div className="network-board-head">
            <span>
              <span className="network-dot" /> Arquitetura global Serratech
            </span>
            <span>4 regiões interconectadas</span>
          </div>
          <svg
            className="network-map"
            viewBox="0 0 1000 440"
            role="img"
            aria-label={`Infraestrutura conectada em Helsinki, Nuremberg, Ohio e São Paulo.${affected ? ` Simulação: incidente em ${affected.city}, redirecionamento para ${destination.city}.` : ''}`}
          >
            <defs>
              <pattern
                id="map-dots"
                x="0"
                y="0"
                width="5"
                height="5"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="#4b6370" />
              </pattern>
              <mask id="land-mask">
                <image
                  href="/media/world-land.svg"
                  x="0"
                  y="0"
                  width="1000"
                  height="500"
                />
              </mask>
            </defs>
            <g className="map-grid" aria-hidden="true">
              {[90, 180, 270, 360].map((y) => (
                <path key={y} d={`M30 ${y}H970`} />
              ))}
              {[125, 375, 625, 875].map((x) => (
                <path key={x} d={`M${x} 30V410`} />
              ))}
            </g>
            <rect
              width="1000"
              height="440"
              fill="url(#map-dots)"
              mask="url(#land-mask)"
            />
            <g className="map-routes">
              {connections.map(([a, b]) => {
                const start = regions[a];
                const end = regions[b];
                return (
                  <path
                    key={`${a}-${b}`}
                    className={
                      incident && (start.id === incident || end.id === incident)
                        ? 'route-muted'
                        : ''
                    }
                    d={`M${start.x} ${start.y}Q${(start.x + end.x) / 2} ${Math.min(start.y, end.y) - Math.abs(start.x - end.x) * 0.3 - 20} ${end.x} ${end.y}`}
                  />
                );
              })}
            </g>
            {affected && (
              <path
                className="map-reroute"
                d={`M${affected.x} ${affected.y}Q${(affected.x + destination.x) / 2 + 20} ${Math.min(affected.y, destination.y) - 45} ${destination.x} ${destination.y}`}
              />
            )}
            {regions.map((region) => (
              <g
                key={region.id}
                className={`map-region ${region.id === incident ? 'is-affected' : ''} ${destination?.id === region.id ? 'is-destination' : ''}`}
              >
                <circle
                  className="region-halo"
                  cx={region.x}
                  cy={region.y}
                  r="13"
                />
                <circle
                  className="region-core"
                  cx={region.x}
                  cy={region.y}
                  r="4"
                />
                <text
                  className="region-name"
                  x={region.labelX}
                  y={region.labelY}
                >
                  {region.city}
                </text>
                <text
                  className="region-country"
                  x={region.labelX}
                  y={region.labelY + 18}
                >
                  {region.country}
                </text>
              </g>
            ))}
          </svg>
          <div className="network-board-foot">
            <span>Provedores da nossa infraestrutura</span>
            <div className="provider-names">
              <strong>HETZNER</strong>
              <strong>
                aws<span>⌣</span>
              </strong>
              <strong>ORACLE</strong>
            </div>
          </div>
        </div>
        <div className="network-simulation">
          <div>
            <span className="micro-label">Explore a arquitetura</span>
            <p>
              Simule um incidente regional para visualizar o redirecionamento.
            </p>
          </div>
          <div
            className="region-controls"
            aria-label="Simulação de incidente por região"
          >
            {regions.map((region) => (
              <button
                type="button"
                key={region.id}
                aria-pressed={incident === region.id}
                onClick={() =>
                  setIncident((current) =>
                    current === region.id ? null : region.id,
                  )
                }
              >
                {region.city}
                <span aria-hidden="true">
                  {incident === region.id ? '↻' : '↗'}
                </span>
              </button>
            ))}
          </div>
        </div>
        <p className="simulation-result" aria-live="polite" aria-atomic="true">
          {affected ? (
            <>
              Simulação: incidente em <strong>{affected.city}</strong>. O fluxo
              passa a seguir para <strong>{destination.city}</strong>, uma
              região alternativa próxima.{' '}
              <button type="button" onClick={() => setIncident(null)}>
                Restaurar visualização
              </button>
            </>
          ) : (
            'Visualização ilustrativa da arquitetura. A simulação não representa o status dos servidores nem um prazo de recuperação.'
          )}
        </p>
        <div className="protection-grid" data-stagger>
          {protections.map((item) => (
            <article key={item.title} data-stagger-item>
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
