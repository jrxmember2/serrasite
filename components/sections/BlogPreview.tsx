import { featuredPosts } from "@/lib/posts";

export default function BlogPreview() {
  return (
    <section id="artigos" className="border-t border-white/10 bg-white/[0.02]">
      <div className="container-site py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Artigos</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Conteúdo para educar, posicionar e gerar autoridade.
            </h2>
          </div>

          <a href="/artigos" className="text-sm text-cyan-300 transition hover:text-cyan-200">
            Ver todos os artigos →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article key={post.title} className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
              <div className="mb-4 h-44 rounded-2xl bg-white/5" />
              <p className="text-sm text-white/45">{post.category}</p>
              <h3 className="mt-3 text-xl font-medium">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
