import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MotorcyclesHero from "@/components/MotorcyclesHero";
import MotorcyclesServices from "@/components/MotorcyclesServices";
import MotorcyclesGallery from "@/components/MotorcyclesGallery";
import MotorcyclesImpact from "@/components/MotorcyclesImpact";
import MixedGallery from "@/components/MixedGallery";
// import Gallery from "@/components/Gallery"; // Galería solo imágenes
import Footer from "@/components/Footer";
import LoadingIntro from "@/components/LoadingIntro";
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full py-20 px-4 bg-gradient-to-b from-black via-[#0d0d0d] to-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-800 rounded-lg w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-800 rounded-lg w-96 mx-auto mb-12"></div>
          <div className="w-full max-w-5xl mx-auto h-[500px] bg-gray-900 rounded-2xl"></div>
        </div>
      </div>
    </div>
  ),
});

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
