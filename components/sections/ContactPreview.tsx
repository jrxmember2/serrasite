export default function ContactPreview() {
  return (
    <section id="contato" className="border-t border-white/10">
      <div className="container-site py-24">
        <div className="section-card p-8 md:p-12">
          <p className="section-label">Contato</p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Vamos construir algo sofisticado, funcional e comercialmente forte.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Se você quer um projeto premium, escalável e com identidade visual marcante, a Serratech pode ajudar.
          </p>

          <div className="mt-8">
            <a href="/contato" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
