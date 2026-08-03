"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  // Delay the appearance of the WhatsApp button so it's non-intrusive on immediate load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/919331488999?text=Hi%20Parther%20Technologies,%20I'd%20like%20to%20request%20a%20Technical%20Audit."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-16 px-3 py-2 bg-cf-card text-cf-text text-sm font-medium border border-cf-border shadow-md rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with an Engineer
      </span>
      
      {/* Notification dot */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </a>
  );
}
