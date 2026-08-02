import RibbonLayer from "./background/RibbonLayer";
import GlowLayer from "./background/GlowLayer";
import NoiseLayer from "./background/NoiseLayer";
import GradientLayer from "./background/GradientLayer";
import FadeLayer from "./background/FadeLayer";
import ParticleLayer from "./background/ParticleLayer";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-20 w-full h-full pixel-bg-hero overflow-hidden">
      {/* 
        Background Rendering Engine 
        Configurable grayscale placeholders.
      */}
      <GradientLayer opacity={70} />
      <ParticleLayer opacity={40} />
      <RibbonLayer opacity={90} />
      <GlowLayer opacity={60} />
      <NoiseLayer opacity={15} />
      <FadeLayer opacity={100} />
    </div>
  );
}
