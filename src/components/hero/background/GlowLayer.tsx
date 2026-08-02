export default function GlowLayer({ className = "", opacity = 10 }: { className?: string, opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity: opacity / 100 }}>
      <style>{`
        @keyframes ambient-glow-1 {
          0%, 100% { transform: translate3d(-50%, -50%, 0) scale(1); }
          50% { transform: translate3d(-48%, -52%, 0) scale(1.05); }
        }
        @keyframes ambient-glow-2 {
          0%, 100% { transform: translate3d(-50%, -50%, 0) scale(1); }
          50% { transform: translate3d(-52%, -48%, 0) scale(1.03); }
        }
        .animate-glow-1 { animation: ambient-glow-1 14s ease-in-out infinite; will-change: transform; }
        .animate-glow-2 { animation: ambient-glow-2 19s ease-in-out infinite; will-change: transform; }
      `}</style>
      <div className="absolute top-1/2 left-[40%] w-[600px] h-[600px] animate-glow-1 mix-blend-multiply opacity-80" style={{ background: 'radial-gradient(circle, rgba(238,247,242,1) 0%, rgba(238,247,242,0) 70%)' }}></div>
      <div className="absolute top-[40%] left-[60%] w-[700px] h-[700px] animate-glow-2 opacity-60" style={{ background: 'radial-gradient(circle, rgba(244,251,247,1) 0%, rgba(244,251,247,0) 70%)' }}></div>
    </div>
  );
}
