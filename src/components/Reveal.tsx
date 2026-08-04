'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  width?: 'fit-content' | '100%';
  duration?: '500' | '700' | '1000';
}

export const Reveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  width = 'fit-content',
  duration = '700'
}: RevealProps) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const getDirectionClasses = () => {
    switch (direction) {
      case 'up': return 'translate-y-8';
      case 'down': return '-translate-y-8';
      case 'left': return '-translate-x-8';
      case 'right': return 'translate-x-8';
      case 'none': return '';
      default: return 'translate-y-8';
    }
  };

  const getDelayClass = () => {
    if (delay === 0) return 'delay-0';
    if (delay === 100) return 'delay-100';
    if (delay === 200) return 'delay-200';
    if (delay === 300) return 'delay-300';
    if (delay === 500) return 'delay-500';
    if (delay === 700) return 'delay-[700ms]';
    return 'delay-0';
  };

  const baseClasses = `transition-all duration-${duration} ease-out ${getDelayClass()}`;
  const hiddenClasses = `opacity-0 ${getDirectionClasses()}`;
  const visibleClasses = `opacity-100 translate-y-0 translate-x-0`;

  return (
    <div ref={ref as any} style={{ width }} className={`${baseClasses} ${isVisible ? visibleClasses : hiddenClasses} ${className}`}>
      {children}
    </div>
  );
};
