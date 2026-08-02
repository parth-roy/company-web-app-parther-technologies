import HeroBackground from "./HeroBackground";
import HeroEffects from "./HeroEffects";
import HeroOverlay from "./HeroOverlay";
import HeroIllustrationZones from "./HeroIllustrationZones";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <div className="relative lg:sticky lg:top-0 min-h-[100svh] lg:h-screen w-full z-0 flex flex-col justify-center">
      <section className="relative py-24 lg:py-0 w-full min-h-[100svh] lg:min-h-0 flex flex-col justify-center overflow-x-hidden">
        <HeroBackground />
        <HeroEffects />
        <HeroIllustrationZones />
        <HeroOverlay />
        <HeroContent />
      </section>
    </div>
  );
}
