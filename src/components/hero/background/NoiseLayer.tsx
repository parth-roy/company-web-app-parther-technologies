export default function NoiseLayer({ className = "", opacity = 5 }: { className?: string, opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none mix-blend-overlay ${className}`} style={{ opacity: opacity / 100 }}>
      {/* 
        Performance Optimization: 
        Animated SVG noise is extremely expensive for the GPU and drains battery. 
        We lock it statically and restrict it strictly to viewport bounds.
      */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <svg className="w-full h-full">
          <filter id="noiseFilter" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>
    </div>
  );
}
