import HeroBackground from "./HeroBackground";
import HeroEffects from "./HeroEffects";
import HeroOverlay from "./HeroOverlay";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <div className="relative lg:sticky lg:top-0 min-h-0 lg:h-screen w-full z-0 flex flex-col justify-center">
      <section className="relative pt-12 pb-16 lg:py-0 w-full min-h-0 lg:min-h-0 flex flex-col justify-start lg:justify-center overflow-x-hidden">
        <HeroBackground />
        <HeroEffects />
        <HeroOverlay />
        <HeroContent />
      </section>
    </div>
  );
}
