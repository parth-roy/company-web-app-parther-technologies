'use client';

import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Search, X, LocateFixed, Building2, Sparkles, Check } from 'lucide-react';
import { ALL_CITIES, TOP_METROS, GlobalCity } from '@/lib/cities';
import { SERVICES } from '@/lib/services';
import { useCity } from '@/context/CityContext';

export default function CitySelectorModal({ variant = 'navbar' }: { variant?: 'navbar' | 'hero' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'india' | 'global'>('all');
  const [isDetecting, setIsDetecting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { currentCity, setCity } = useCity();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSearchQuery('');
      setActiveTab('all');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const defaultService = SERVICES[0].id;

  const handleAutoDetectClick = async () => {
    setIsDetecting(true);
    setTimeout(() => {
      setIsDetecting(false);
      const matched = ALL_CITIES.find(c => c.slug === 'kolkata') || ALL_CITIES[0];
      if (matched) {
        setCity(matched);
        setIsOpen(false);
      }
    }, 1200);
  };

  const handleCitySelect = (city: GlobalCity) => {
    setCity(city);
    setIsOpen(false);
  };

  const filteredLocations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    
    return ALL_CITIES.filter((item) => {
      // Tab filter
      if (activeTab === 'india' && item.country !== 'india') return false;
      if (activeTab === 'global' && item.country === 'india') return false;

      // Search filter
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.countryName.toLowerCase().includes(q) ||
        (item.state && item.state.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, activeTab]);

  if (!mounted) return null;

  const modalContent = isOpen ? (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 font-sans text-left">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/65 backdrop-blur-xs transition-opacity animate-in fade-in duration-200 cursor-pointer" 
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] animate-in fade-in zoom-in-95 duration-200 z-10 border border-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center p-1.5 shrink-0">
              <img src="/google-maps-icon.webp" alt="Location" width={22} height={22} className="w-5 h-5 object-contain" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight tracking-tight">Choose your city or location</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Covering <strong className="text-slate-800 font-bold">{ALL_CITIES.length}+</strong> cities across India &amp; global tech hubs
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 custom-scrollbar flex-1">
          
          {/* Auto-detect & Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
              <input
                type="text"
                placeholder="Search by city, state, or country (e.g. Mumbai, Barrackpore, Raleigh, Dubai)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white transition-all text-slate-800 text-sm placeholder:text-slate-400 font-medium shadow-2xs"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
                >
                  <X size={15} />
                </button>
              )}
            </div>
            <button
              onClick={handleAutoDetectClick}
              disabled={isDetecting}
              className="flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-50 border border-blue-200/90 text-blue-700 hover:bg-blue-100/80 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-2xs shrink-0 cursor-pointer"
            >
              <LocateFixed size={16} className={isDetecting ? "animate-spin text-blue-600" : "text-blue-600"} />
              <span>{isDetecting ? "Detecting..." : "Auto Detect City"}</span>
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              All Locations ({ALL_CITIES.length})
            </button>
            <button
              onClick={() => setActiveTab('india')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'india'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              🇮🇳 India (800+ Cities)
            </button>
            <button
              onClick={() => setActiveTab('global')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'global'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              🌍 Global Tech Hubs (50)
            </button>
          </div>

          {/* Top Metros Circular Icons (Exactly like MetroMitra!) */}
          {!searchQuery && (activeTab === 'all' || activeTab === 'india') && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={13} className="text-amber-500" /> Top Metros &amp; Tech Hubs
                </h3>
                <span className="text-xs font-semibold text-blue-600">800+ Cities in India</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                {TOP_METROS.map((city) => {
                  const isSelected = currentCity?.slug === city.slug;
                  return (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.country}/${city.slug}/${defaultService}`}
                      onClick={() => handleCitySelect(city as unknown as GlobalCity)}
                      className={`group flex flex-col items-center justify-center gap-2 p-3 rounded-2xl transition-all border ${
                        isSelected 
                          ? "bg-blue-50/80 border-blue-400 shadow-sm" 
                          : "bg-white border-slate-100 hover:border-blue-200 hover:bg-slate-50/80 hover:shadow-xs"
                      }`}
                    >
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-xs border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={city.image} 
                          alt={city.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-blue-600/30 flex items-center justify-center">
                            <Check size={18} className="text-white drop-shadow-sm font-bold" />
                          </div>
                        )}
                      </div>
                      <span className={`text-xs font-bold truncate max-w-full ${
                        isSelected ? "text-blue-700 font-extrabold" : "text-slate-700 group-hover:text-blue-700"
                      }`}>
                        {city.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Cities List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {searchQuery ? `Matching Cities (${filteredLocations.length})` : "All Operational Locations"}
              </h3>
              <span className="text-xs font-medium text-slate-400">
                {filteredLocations.length} locations available
              </span>
            </div>
            
            {filteredLocations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {filteredLocations.map((city, idx) => {
                  const isCurrent = currentCity?.slug === city.slug && currentCity?.country === city.country;
                  return (
                    <Link
                      key={`${city.country}-${city.state || ''}-${city.slug}-${idx}`}
                      href={`/locations/${city.country}/${city.slug}/${defaultService}`}
                      onClick={() => handleCitySelect(city)}
                      className={`flex items-center gap-3 w-full text-left p-2.5 rounded-xl transition-all cursor-pointer group border ${
                        isCurrent
                          ? "bg-blue-50/80 border-blue-300 ring-1 ring-blue-400/40"
                          : "bg-white hover:bg-slate-50 border-slate-100 hover:border-blue-200"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isCurrent
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }`}>
                        <img src="/google-maps-icon.webp" alt="City" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className={`text-xs sm:text-sm font-bold truncate ${
                            isCurrent ? "text-blue-800" : "text-slate-800 group-hover:text-blue-600"
                          }`}>
                            {city.name}
                          </span>
                          {isCurrent && (
                            <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-800 shrink-0">
                              Active
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-400 group-hover:text-slate-500 truncate">
                          {city.state ? `${city.state} · ` : ''}{city.countryName}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <Building2 className="w-8 h-8 text-slate-300 mx-auto mb-2 opacity-50" />
                <p className="text-slate-600 font-semibold text-sm">No locations found matching "{searchQuery}"</p>
                <p className="text-slate-400 text-xs mt-1">Try searching for another city, state, or country.</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {variant === 'hero' ? (
        <button 
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-emerald-200/90 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-emerald-50 hover:border-emerald-300 transition-all shadow-xs group cursor-pointer"
        >
          <img src="/google-maps-icon.webp" alt="City" width={16} height={16} className="w-4 h-4 object-contain group-hover:scale-110 transition-transform shrink-0" />
          <span>City: <strong className="text-emerald-700 font-bold">{currentCity ? currentCity.name : 'Barrackpore'}</strong></span>
          <span className="text-emerald-600 underline font-semibold text-xs ml-0.5 group-hover:text-emerald-700">Change</span>
        </button>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <img src="/google-maps-icon.webp" alt="Location" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
          <span className="hidden sm:inline">{currentCity ? currentCity.name : 'Select Location'}</span>
          <span className="sm:hidden">{currentCity ? currentCity.name : 'Location'}</span>
        </button>
      )}

      {typeof document !== 'undefined' && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}
