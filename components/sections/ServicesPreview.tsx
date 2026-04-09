const services = [
  {
    title: "Desenvolvimento Web",
    description: "Sites institucionais, hotsites, sistemas e plataformas sob medida.",
  },
  {
    title: "Automação de Processos",
    description: "Integrações inteligentes para reduzir trabalho manual e aumentar eficiência.",
  },
  {
    title: "Soluções SaaS",
    description: "Arquitetura moderna para produtos digitais escaláveis e comerciais.",
  },
  {
    title: "UX e Posicionamento Digital",
    description: "Interfaces elegantes, objetivas e alinhadas à percepção premium da marca.",
  },
];

export default function ServicesPreview() {
  return (
    <section id="servicos" className="border-t border-white/10">
      <div className="container-site py-24">
        <p className="section-label">Serviços</p>

        <div className="mb-12 flex max-w-3xl flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Soluções desenhadas para performance, estética e crescimento.
          </h2>
          <p className="text-lg leading-8 text-white/70">
            Cada projeto nasce com foco em resultado, escalabilidade e experiência de alto nível.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/20 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-medium text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
