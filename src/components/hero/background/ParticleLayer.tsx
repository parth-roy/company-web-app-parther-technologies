export default function ParticleLayer({ className = "", opacity = 100 }: { className?: string, opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity: opacity / 100 }}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes float-dust-1 {
            0% { transform: translate3d(0, 100vh, 0); opacity: 0; }
            15% { opacity: 0.15; }
            85% { opacity: 0.15; }
            100% { transform: translate3d(30vw, -30vh, 0); opacity: 0; }
          }
          @keyframes float-dust-2 {
            0% { transform: translate3d(0, 100vh, 0); opacity: 0; }
            20% { opacity: 0.1; }
            80% { opacity: 0.1; }
            100% { transform: translate3d(-20vw, -20vh, 0); opacity: 0; }
          }
          .animate-dust-1 { animation: float-dust-1 26s linear infinite; will-change: transform, opacity; }
          .animate-dust-2 { animation: float-dust-2 33s linear infinite; will-change: transform, opacity; }
          .animate-dust-3 { animation: float-dust-1 29s linear infinite; will-change: transform, opacity; }
        }
      `}</style>
      
      {/* 
        High-Performance Dust Particles.
        Uses pure CSS radial-gradients instead of heavy blur() filters.
      */}
      <div className="absolute left-[10%] w-[120px] h-[120px] animate-dust-1 mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)', animationDelay: '0s' }}></div>
      <div className="absolute left-[45%] w-[200px] h-[200px] animate-dust-2 mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(238,247,242,1) 0%, rgba(238,247,242,0) 70%)', animationDelay: '-12s' }}></div>
      <div className="absolute left-[75%] w-[90px] h-[90px] animate-dust-3 mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)', animationDelay: '-7s' }}></div>
      <div className="absolute left-[30%] w-[150px] h-[150px] animate-dust-2 mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(249,249,247,1) 0%, rgba(249,249,247,0) 70%)', animationDelay: '-22s' }}></div>
    </div>
  );
}
