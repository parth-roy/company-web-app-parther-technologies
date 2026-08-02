export default function RibbonLayer({ className = "", opacity = 100 }: { className?: string, opacity?: number }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`} 
      style={{ 
        opacity: opacity / 100,
        transform: 'translateZ(0)'
      }}
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-ribbon-x-1 { animation: drift-x 43s ease-in-out infinite alternate; will-change: transform; }
          .animate-ribbon-y-1 { animation: drift-y 59s ease-in-out infinite alternate; will-change: transform; }
          .animate-ribbon-x-2 { animation: drift-x-rev 53s ease-in-out infinite alternate; will-change: transform; }
          .animate-ribbon-y-2 { animation: drift-y-rev 47s ease-in-out infinite alternate; will-change: transform; }
          .animate-ribbon-x-3 { animation: drift-x 61s ease-in-out infinite alternate; will-change: transform; }
          .animate-ribbon-y-3 { animation: drift-y 71s ease-in-out infinite alternate; will-change: transform; }
        }
        @keyframes drift-x {
          0% { transform: translate3d(-25px, 0, 0); }
          100% { transform: translate3d(25px, 0, 0); }
        }
        @keyframes drift-y {
          0% { transform: translate3d(0, -18px, 0); }
          100% { transform: translate3d(0, 18px, 0); }
        }
        @keyframes drift-x-rev {
          0% { transform: translate3d(20px, 0, 0); }
          100% { transform: translate3d(-20px, 0, 0); }
        }
        @keyframes drift-y-rev {
          0% { transform: translate3d(0, 22px, 0); }
          100% { transform: translate3d(0, -22px, 0); }
        }
      `}</style>
      
      <svg 
        viewBox="0 0 1440 1000" 
        preserveAspectRatio="xMidYMid slice" 
        className="w-full h-full"
        shapeRendering="geometricPrecision"
      >
        <defs>
          {/* 
            MATERIAL PASS 1: CORE VOLUME (SHADOWS & BASE HUE) 
            All three ribbons must share the EXACT same material properties.
            They are primarily pure white / frosted mint, with deep emerald only in the occluded valleys.
          */}
          <linearGradient id="core-volume-1" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#082112" />     {/* Deepest Occlusion */}
            <stop offset="15%" stopColor="#2e7e4e" />    {/* Saturated Shadow */}
            <stop offset="35%" stopColor="#bce6cd" />    {/* Midtone */}
            <stop offset="50%" stopColor="#ffffff" />    {/* Light Bleed */}
            <stop offset="100%" stopColor="#f4fbf7" />   {/* Frosted Body */}
          </linearGradient>

          <linearGradient id="core-volume-2" x1="0%" y1="10%" x2="100%" y2="90%">
            <stop offset="0%" stopColor="#0a2816" />     {/* Deepest Occlusion */}
            <stop offset="20%" stopColor="#378c52" />    {/* Saturated Shadow */}
            <stop offset="45%" stopColor="#c5ebd4" />    {/* Midtone */}
            <stop offset="60%" stopColor="#ffffff" />    {/* Light Bleed */}
            <stop offset="100%" stopColor="#ffffff" />   {/* Frosted Body */}
          </linearGradient>

          <linearGradient id="core-volume-3" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#082112" />     {/* Deepest Occlusion */}
            <stop offset="25%" stopColor="#5cb880" />    {/* Saturated Shadow */}
            <stop offset="50%" stopColor="#d4f0df" />    {/* Midtone */}
            <stop offset="70%" stopColor="#ffffff" />    {/* Light Bleed */}
            <stop offset="100%" stopColor="#ffffff" />   {/* Frosted Body */}
          </linearGradient>

          {/* 
            MATERIAL PASS 2: SPECULAR SHEEN (FROSTED ACRYLIC / SILK)
            Overlaid using mix-blend-mode: overlay. Creates razor-sharp light glints.
          */}
          <linearGradient id="sheen-glint-1" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="39%" stopColor="#ffffff" stopOpacity="1" />     {/* Razor Specular */}
            <stop offset="40%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="42%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="sheen-glint-2" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="44%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="46%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* 
            MATERIAL PASS 3: RIM LIGHTING
            Pure white edge strokes for physical separation and optical perfection.
          */}
          <linearGradient id="rim-light-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          
          <linearGradient id="rim-light-2" x1="0%" y1="10%" x2="100%" y2="90%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Ambient Occlusion (Shadows cast by folds) */}
          <filter id="ambient-occlusion" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="16" stdDeviation="24" floodOpacity="0.15" floodColor="#041209" />
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.10" floodColor="#082112" />
          </filter>

          <radialGradient id="fade-mask" cx="50%" cy="50%" r="65%">
            <stop offset="30%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <mask id="global-mask">
            <rect width="1440" height="1000" fill="url(#fade-mask)" />
          </mask>

          <path id="ribbon-geometry-1" d="M -200,800 C 400,1000 1000,200 1600,0 L 1600,400 C 1000,600 400,1400 -200,1200 Z" />
          <path id="ribbon-geometry-2" d="M -200,400 C 600,-200 1000,1200 1600,800 L 1600,1200 C 1000,1600 600,200 -200,800 Z" />
          <path id="ribbon-geometry-3" d="M -200,600 C 500,700 900,300 1600,400 L 1600,700 C 900,600 500,1000 -200,900 Z" />
        </defs>

        <g mask="url(#global-mask)">
          
          {/* Layer 1: Back Ribbon */}
          <g className="animate-ribbon-x-1">
            <g className="animate-ribbon-y-1" filter="url(#ambient-occlusion)">
              {/* Core Volume */}
              <use href="#ribbon-geometry-1" fill="url(#core-volume-1)" />
              {/* Translucent Sheen (Overlay Blend) */}
              <use href="#ribbon-geometry-1" fill="url(#sheen-glint-1)" style={{ mixBlendMode: 'overlay' }} />
              {/* Sharp Specular Rim Light */}
              <use href="#ribbon-geometry-1" fill="none" stroke="url(#rim-light-1)" strokeWidth="1.5" strokeLinejoin="round" />
            </g>
          </g>

          {/* Layer 2: Middle Ribbon */}
          <g className="animate-ribbon-x-2">
            <g className="animate-ribbon-y-2" filter="url(#ambient-occlusion)">
              {/* Core Volume */}
              <use href="#ribbon-geometry-2" fill="url(#core-volume-2)" />
              {/* Translucent Sheen (Overlay Blend) */}
              <use href="#ribbon-geometry-2" fill="url(#sheen-glint-2)" style={{ mixBlendMode: 'overlay' }} />
              {/* Sharp Specular Rim Light */}
              <use href="#ribbon-geometry-2" fill="none" stroke="url(#rim-light-2)" strokeWidth="1.5" strokeLinejoin="round" />
            </g>
          </g>

          {/* Layer 3: Front Ribbon */}
          <g className="animate-ribbon-x-3">
            <g className="animate-ribbon-y-3" filter="url(#ambient-occlusion)">
              {/* Core Volume */}
              <use href="#ribbon-geometry-3" fill="url(#core-volume-3)" />
              {/* Translucent Sheen (Overlay Blend) */}
              <use href="#ribbon-geometry-3" fill="url(#sheen-glint-1)" style={{ mixBlendMode: 'overlay' }} />
              {/* Sharp Specular Rim Light */}
              <use href="#ribbon-geometry-3" fill="none" stroke="url(#rim-light-1)" strokeWidth="1.5" strokeLinejoin="round" />
            </g>
          </g>
          
        </g>
      </svg>
    </div>
  );
}
