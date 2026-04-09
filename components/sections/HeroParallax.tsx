"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroParallax() {
  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 600], [0, 180]);
  const yContent = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.35]);
  const scaleGlow = useTransform(scrollY, [0, 500], [1, 1.25]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_25%),linear-gradient(to_bottom,rgba(10,10,10,0.5),rgba(10,10,10,0.95))]" />

        <motion.div
          style={{ scale: scaleGlow }}
          className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="absolute inset-0 bg-hero-grid bg-[size:64px_64px] opacity-20" />
      </motion.div>

      <motion.div style={{ y: yContent, opacity }} className="relative z-10 container-site pt-28">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60 backdrop-blur-md"
          >
            Tecnologia • Estratégia • Performance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Soluções digitais com
            <span className="block text-cyan-300">sofisticação, clareza e resultado.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
          >
            A Serratech desenvolve experiências digitais, sistemas e estratégias para empresas que buscam
            posicionamento premium, eficiência operacional e crescimento sustentável.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#servicos" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
              Conheça nossos serviços
            </a>

            <a
              href={process.env.NEXT_PUBLIC_HOTSITE_URL || "https://solucao.serratech.tec.br"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-300 transition hover:scale-[1.02] hover:bg-cyan-400/20"
            >
              Conheça o Ecossistema Âncora
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
