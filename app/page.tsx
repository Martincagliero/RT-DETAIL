import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MotorcyclesHero from "@/components/MotorcyclesHero";
import MotorcyclesServices from "@/components/MotorcyclesServices";
import MotorcyclesGallery from "@/components/MotorcyclesGallery";
import MotorcyclesImpact from "@/components/MotorcyclesImpact";
import MotorcyclesTransition from "@/components/MotorcyclesTransition";
import MixedGallery from "@/components/MixedGallery";
// import Gallery from "@/components/Gallery"; // Galería solo imágenes
import Footer from "@/components/Footer";
import LoadingIntro from "@/components/LoadingIntro";

export default function Home() {
  return (
    <main className="relative">
      <LoadingIntro />
      <Hero />
      <Services />
      <MotorcyclesHero />
      <MotorcyclesServices />
      <MotorcyclesGallery />
      <MotorcyclesImpact />
      <MotorcyclesTransition />
      <MixedGallery />
      {/* Usa Gallery si prefieres solo imágenes */}
      <Footer />
    </main>
  );
}
