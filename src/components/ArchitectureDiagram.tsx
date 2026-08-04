'use client';

import { Reveal } from '@/components/Reveal';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function ArchitectureDiagram() {
  const { ref: lineRef1, isVisible: isLine1Visible } = useIntersectionObserver({ threshold: 0.5, triggerOnce: true });
  const { ref: lineRef2, isVisible: isLine2Visible } = useIntersectionObserver({ threshold: 0.5, triggerOnce: true });

  return (
    <div className="my-12 p-8 bg-gray-50 border border-gray-100 rounded-3xl relative overflow-hidden flex flex-col items-center">
      <div className="text-center mb-8">
        <h3 className="font-syncopate font-bold text-gray-900">Modern Architecture Topology</h3>
        <p className="text-sm text-gray-500">How we deploy zero-trust cloud pipelines.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between max-w-2xl">
        {/* Frontend Node */}
        <Reveal direction="left" duration="500">
          <div className="flex flex-col items-center p-4 bg-white border border-gray-200 shadow-sm rounded-xl w-32">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <span className="text-xs font-bold text-gray-800 text-center">Next.js Edge</span>
          </div>
        </Reveal>

        {/* Connection Line */}
        <div ref={lineRef1 as any} className="hidden md:flex flex-1 h-px bg-gray-300 relative">
          <div 
            className={`absolute top-0 left-0 h-full bg-blue-500 transition-all duration-700 ease-out delay-200 ${isLine1Visible ? 'w-full' : 'w-0'}`}
          />
        </div>

        {/* API Gateway */}
        <Reveal direction="up" delay={300} duration="500">
          <div className="flex flex-col items-center p-4 bg-white border border-gray-200 shadow-sm rounded-xl w-32">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <span className="text-xs font-bold text-gray-800 text-center">API Gateway</span>
          </div>
        </Reveal>

        {/* Connection Line */}
        <div ref={lineRef2 as any} className="hidden md:flex flex-1 h-px bg-gray-300 relative">
          <div 
            className={`absolute top-0 left-0 h-full bg-violet-500 transition-all duration-700 ease-out delay-500 ${isLine2Visible ? 'w-full' : 'w-0'}`}
          />
        </div>

        {/* Database Node */}
        <Reveal direction="right" delay={700} duration="500">
          <div className="flex flex-col items-center p-4 bg-white border border-gray-200 shadow-sm rounded-xl w-32">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            </div>
            <span className="text-xs font-bold text-gray-800 text-center">Cloud DB</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
