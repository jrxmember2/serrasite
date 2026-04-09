export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="container-site py-8 text-sm text-white/50">
        © {new Date().getFullYear()} Serratech Soluções em TI. Todos os direitos reservados.
      </div>
    </footer>
  );
}
