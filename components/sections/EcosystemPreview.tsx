export default function EcosystemPreview() {
  return (
    <section className="border-t border-white/10 bg-white/[0.02]">
      <div className="container-site py-24">
        <div className="section-card p-8 md:p-12">
          <p className="section-label">Ecossistema Âncora</p>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Uma plataforma pensada para operação, gestão e escala.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                O Ecossistema Âncora é a solução da Serratech para organizações que precisam de mais
                controle, integração e inteligência em seus processos.
              </p>
            </div>

            <div className="flex items-end justify-start lg:justify-end">
              <a
                href={process.env.NEXT_PUBLIC_HOTSITE_URL || "https://solucao.serratech.tec.br"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
              >
                Acessar hotsite
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
