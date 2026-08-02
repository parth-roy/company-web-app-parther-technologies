export default function TopRightIllustration() {
  return (
    <div className="w-full h-full relative flex items-center justify-end pr-4 md:pr-12 opacity-80 hover:opacity-100 transition-opacity duration-700">
      <svg 
        viewBox="0 0 240 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full max-w-[240px]"
        shapeRendering="geometricPrecision"
      >
        <defs>
          <filter id="diagram-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodOpacity="0.05" floodColor="#001a0c" />
          </filter>
          <pattern id="micro-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#000000" strokeOpacity="0.03" strokeWidth="1" />
          </pattern>
        </defs>

        <g filter="url(#diagram-shadow)">
          {/* Card 1 - Back (Data Grid) */}
          <rect x="40" y="30" width="120" height="80" rx="8" fill="#ffffff" fillOpacity="0.9" stroke="#ffffff" strokeWidth="2" />
          <rect x="40" y="30" width="120" height="80" rx="8" fill="url(#micro-grid)" />
          <line x1="55" y1="50" x2="110" y2="50" stroke="#f0f0ec" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="65" x2="130" y2="65" stroke="#f0f0ec" strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="80" x2="90" y2="80" stroke="#f0f0ec" strokeWidth="3" strokeLinecap="round" />

          {/* Cloud Connection Lines (Technical Blueprint Style) */}
          <path d="M 120 70 C 180 70, 180 130, 210 130" stroke="#c3ebd4" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="210" cy="130" r="4" fill="#ffffff" stroke="#c3ebd4" strokeWidth="1.5" />

          {/* Card 2 - Front (AI/Analytics) */}
          <rect x="90" y="80" width="130" height="90" rx="8" fill="#ffffff" fillOpacity="0.95" stroke="#ffffff" strokeWidth="2" />
          
          {/* Mint Brand Accent Gradient */}
          <rect x="90" y="80" width="130" height="90" rx="8" fill="#f4fbf7" opacity="0.6" /> 
          
          {/* AI Sparkle */}
          <path d="M 115 95 Q 115 105 105 105 Q 115 105 115 115 Q 115 105 125 105 Q 115 105 115 95" fill="#a7dcb9" />
          
          {/* Automation Lines */}
          <path d="M 105 145 C 120 145, 130 120, 150 120 C 170 120, 180 135, 200 135" stroke="#c3ebd4" strokeWidth="2" strokeLinecap="round" />
          
          {/* High Contrast Nodes */}
          <circle cx="150" cy="120" r="3" fill="white" stroke="#a7dcb9" strokeWidth="2" />
          <circle cx="200" cy="135" r="3" fill="white" stroke="#a7dcb9" strokeWidth="2" />
          
          {/* API Badge */}
          <rect x="170" y="90" width="36" height="18" rx="4" fill="white" stroke="#e5e5e0" strokeWidth="1" />
          <text x="188" y="103" fill="#666666" fontSize="8" fontFamily="monospace" fontWeight="600" textAnchor="middle" letterSpacing="1">API</text>
        </g>
      </svg>
    </div>
  );
}
