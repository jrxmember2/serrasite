import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serratech",
  description: "Tecnologia, estratégia e soluções digitais com elegância e performance.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className="bg-neutral-950 text-white antialiased">{children}</body>
    </html>
  );
}
