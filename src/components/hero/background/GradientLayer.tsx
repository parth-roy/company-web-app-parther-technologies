export default function GradientLayer({ className = "", opacity = 10 }: { className?: string, opacity?: number }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none bg-gradient-to-br from-white to-transparent ${className}`} 
      style={{ opacity: opacity / 100 }} 
    />
  );
}
