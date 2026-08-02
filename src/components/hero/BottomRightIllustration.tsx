export default function BottomRightIllustration() {
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
        </defs>

        {/* Master Group with shared ambient occlusion */}
        <g filter="url(#diagram-shadow)">
          
          {/* Isometric Servers / Backend Stack */}
          <g transform="translate(40, 70)">
            {/* Server 1 (Bottom) */}
            <path d="M 0 40 L 70 10 L 140 40 L 70 70 Z" fill="#ffffff" fillOpacity="0.9" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 0 40 L 0 60 L 70 90 L 140 60 L 140 40 L 70 70 Z" fill="#fcfcfc" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
            
            {/* Server 2 (Middle) */}
            <path d="M 0 15 L 70 -15 L 140 15 L 70 45 Z" fill="#ffffff" fillOpacity="0.9" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 0 15 L 0 35 L 70 65 L 140 35 L 140 15 L 70 45 Z" fill="#fcfcfc" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
            
            {/* Server 3 (Top - Mint Accent) */}
            <path d="M 0 -10 L 70 -40 L 140 -10 L 70 20 Z" fill="#f4fbf7" fillOpacity="0.8" stroke="#c3ebd4" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 0 -10 L 0 10 L 70 40 L 140 10 L 140 -10 L 70 20 Z" fill="#ffffff" fillOpacity="0.95" stroke="#c3ebd4" strokeWidth="2" strokeLinejoin="round" />
            
            {/* Server Activity Nodes */}
            <circle cx="20" cy="5" r="2.5" fill="#ffffff" stroke="#a7dcb9" strokeWidth="1" />
            <circle cx="32" cy="10" r="2.5" fill="#f0f0ec" />
            <circle cx="44" cy="15" r="2.5" fill="#ffffff" stroke="#a7dcb9" strokeWidth="1" />
          </g>
          
          {/* DevOps Circular Arrows (Automation Schematic) */}
          <g transform="translate(180, 50)">
            <path d="M -15 0 A 15 15 0 0 1 10 -11" stroke="#e5e5e0" strokeWidth="2" strokeLinecap="round" />
            <path d="M 15 0 A 15 15 0 0 1 -10 11" stroke="#a7dcb9" strokeWidth="2" strokeLinecap="round" />
            {/* Arrow heads */}
            <path d="M 6 -13 L 11 -11 L 8 -6" stroke="#e5e5e0" strokeWidth="2" fill="none" strokeLinejoin="round" />
            <path d="M -6 13 L -11 11 L -8 6" stroke="#a7dcb9" strokeWidth="2" fill="none" strokeLinejoin="round" />
          </g>

          {/* Data flow lines to server */}
          <path d="M 180 65 L 180 100 L 110 130" stroke="#c3ebd4" strokeWidth="2" strokeDasharray="4 4" strokeLinejoin="round" />
          
          {/* Code brackets float */}
          <rect x="155" y="98" width="40" height="24" rx="4" fill="#ffffff" stroke="#e5e5e0" strokeWidth="1" />
          <text x="175" y="114" fill="#a7dcb9" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{"</>"}</text>
        </g>
      </svg>
    </div>
  );
}
