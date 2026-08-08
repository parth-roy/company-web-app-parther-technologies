import MultiStepForm from "@/components/MultiStepForm";

export default function HeroIllustration() {
  return (
    <div className="z-10 relative hero-stagger animate-float-slow" style={{ "--stagger": 2 } as React.CSSProperties}>
      <MultiStepForm sourcePage="Homepage" sourceIdentifier="Hero Form" />
    </div>
  );
}
