import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MotorcyclesHero from "@/components/MotorcyclesHero";
import MotorcyclesServices from "@/components/MotorcyclesServices";
import MotorcyclesGallery from "@/components/MotorcyclesGallery";
import MotorcyclesImpact from "@/components/MotorcyclesImpact";
import MixedGallery from "@/components/MixedGallery";
// import Gallery from "@/components/Gallery"; // Galería solo imágenes
import LocationMap from "@/components/LocationMap";
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
      <MixedGallery />
      {/* Usa Gallery si prefieres solo imágenes */}
      <LocationMap />
      <Footer />
    </main>
  );
}
