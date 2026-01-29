import { HeroSection } from "./components/ui/HeroSection";
import { FeaturesSection } from "./components/ui/FeaturesSection";
import { DigitalMile } from "./components/ui/DigitalMile";
import { ProductShowcase } from "./components/ui/ProductShowcase";

export default function Home() {
  return (
    <main className="bg-gunmetal min-h-screen relative flex flex-col items-center overflow-hidden">
      {/* The Digital Mile (Background Layer) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DigitalMile />
      </div>

      {/* The Content (Foreground Layer) */}
      <div className="relative z-10 w-full">
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
      </div>
    </main>
  );
}
