'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GOLDEN_CITIES } from '@/lib/cities';
import { SERVICES } from '@/lib/services';

export default function CitySelectorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Group cities by country
  const groupedCities = GOLDEN_CITIES.reduce((acc, city) => {
    if (!acc[city.countryName]) acc[city.countryName] = [];
    acc[city.countryName].push(city);
    return acc;
  }, {} as Record<string, typeof GOLDEN_CITIES>);

  // Close modal on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const filteredGroups = Object.entries(groupedCities).map(([country, cities]) => {
    const matchedCities = cities.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || country.toLowerCase().includes(search.toLowerCase()));
    return { country, cities: matchedCities };
  }).filter(g => g.cities.length > 0);

  const defaultService = SERVICES[0].id;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span className="hidden sm:inline">Select Location</span>
        <span className="sm:hidden">Location</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="font-syncopate font-bold text-xl">Select Your Region</h3>
                <p className="text-sm text-gray-500 mt-1">Choose a local hub to view specialized engineering capabilities.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Search */}
            <div className="p-6 border-b border-gray-100 bg-gray-50">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                  type="text" 
                  placeholder="Search for a city or country..." 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
              </div>
            </div>

            {/* City Grid */}
            <div className="p-6 overflow-y-auto bg-white flex-1">
              {filteredGroups.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No locations found matching "{search}".
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredGroups.map((group) => (
                    <div key={group.country}>
                      <h4 className="text-sm font-mono-caps font-semibold text-gray-400 tracking-widest mb-4 uppercase">{group.country}</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {group.cities.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/locations/${city.country}/${city.slug}/${defaultService}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center px-4 py-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm transition-all group"
                          >
                            <span className="text-sm font-semibold text-cf-text group-hover:text-blue-700 transition-colors">{city.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
              <Link href="/locations" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                View all 50 global engineering hubs &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
