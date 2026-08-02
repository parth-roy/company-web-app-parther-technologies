export default function FadeLayer({ className = "", opacity = 10 }: { className?: string, opacity?: number }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#f4f4f0] ${className}`} 
      style={{ opacity: opacity / 100 }} 
    />
  );
}
