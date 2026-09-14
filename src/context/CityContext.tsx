'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { GOLDEN_CITIES, GlobalCity } from '@/lib/cities';

interface CityContextType {
  currentCity: GlobalCity | null;
  setCity: (city: GlobalCity) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [currentCity, setCurrentCity] = useState<GlobalCity | null>(null);

  // Load initial city from localStorage if it exists
  useEffect(() => {
    try {
      const saved = localStorage.getItem('parther_session_city');
      if (saved) {
        const parsed = JSON.parse(saved);
        const matched = GOLDEN_CITIES.find(c => c.slug === parsed.slug);
        if (matched) {
          setCurrentCity(matched);
        }
      }
    } catch (e) {}
  }, []);

  const setCity = (city: GlobalCity) => {
    setCurrentCity(city);
    try {
      localStorage.setItem('parther_session_city', JSON.stringify({ slug: city.slug, name: city.name }));
    } catch (e) {}
  };

  return (
    <CityContext.Provider value={{ currentCity, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
}
