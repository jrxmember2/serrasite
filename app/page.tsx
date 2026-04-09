import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroParallax from "@/components/sections/HeroParallax";
import AboutPreview from "@/components/sections/AboutPreview";
import EcosystemPreview from "@/components/sections/EcosystemPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import ContactPreview from "@/components/sections/ContactPreview";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-neutral-950 text-white">
      <Navbar />
      <HeroParallax />
      <AboutPreview />
      <EcosystemPreview />
      <ServicesPreview />
      <BlogPreview />
      <ContactPreview />
      <Footer />
    </main>
  );
}
