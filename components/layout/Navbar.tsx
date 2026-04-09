"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Artigos", href: "#artigos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-neutral-950/75 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold uppercase tracking-[0.24em] text-white">
          Serratech
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-white/75 transition hover:text-white">
              {item.label}
            </a>
          ))}

          <a
            href={process.env.NEXT_PUBLIC_HOTSITE_URL || "https://solucao.serratech.tec.br"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-300/50 hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            Ecossistema Âncora
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 md:hidden"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
