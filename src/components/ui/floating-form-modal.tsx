'use client';

import { useState } from 'react';
import MultiStepForm from '@/components/MultiStepForm';
import { X } from 'lucide-react';

export function FloatingFormModal({ 
  className = "absolute bottom-12 md:bottom-24 left-8 md:left-16 z-[100] isolate" 
}: { 
  className?: string 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={className}>
        <button 
          onClick={() => setIsOpen(true)}
          className="relative flex h-14 md:h-16 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 px-8 text-white shadow-2xl transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full bg-blue-600 opacity-60 animate-ping" style={{ animationDuration: '2s' }}></span>
          <span className="relative z-10 font-mono-caps font-bold tracking-widest text-sm md:text-base">Start Project</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-cf-bg/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative z-10 w-full max-w-lg bg-cf-card p-6 md:p-8 rounded-2xl border border-cf-border shadow-float animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-cf-text-secondary hover:bg-cf-border transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-serif-display text-h3 mb-2 text-cf-text">Request Technical Scoping</h3>
            <p className="text-sm text-cf-text-secondary mb-6">Receive your preliminary architectural assessment for this service within 15 minutes.</p>
            <MultiStepForm />
          </div>
        </div>
      )}
    </>
  );
}
