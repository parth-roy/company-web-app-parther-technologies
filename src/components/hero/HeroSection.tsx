import HeroBackground from "./HeroBackground";
import HeroEffects from "./HeroEffects";
import HeroOverlay from "./HeroOverlay";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative pt-12 pb-16 lg:pt-8 lg:pb-16 w-full flex flex-col overflow-hidden">
        <HeroBackground />
        <HeroEffects />
        <HeroOverlay />
        <HeroContent />
      </section>
    </div>
  );
}
