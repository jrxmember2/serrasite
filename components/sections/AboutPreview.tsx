export default function AboutPreview() {
  return (
    <section id="sobre" className="border-t border-white/10">
      <div className="container-site grid gap-10 py-24 lg:grid-cols-2">
        <div>
          <p className="section-label">Sobre</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Tecnologia aplicada com visão de negócio.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-white/70">
            A Serratech une desenvolvimento, design, automação e estratégia para criar soluções sólidas,
            elegantes e realmente úteis. Nosso foco é transformar complexidade em sistemas claros,
            escaláveis e prontos para crescer.
          </p>
        </div>
      </div>
    </section>
  );
}
