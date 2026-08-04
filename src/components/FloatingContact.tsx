"use client";

import Image from "next/image";

export function FloatingContact() {
  const whatsappMessage = "Hello Parther Technologies team. I'm reaching out to discuss a potential project and would like to schedule a technical consultation. Looking forward to connecting!";
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-6">
      {/* Call Button */}
      <a
        href="tel:9331488999"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300 group hover:drop-shadow-xl"
        aria-label="Call Us"
      >
        {/* Spreading Circular Light Effect (Ripple) */}
        <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" style={{ animationDuration: '3s' }}></span>
        <span className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></span>
        
        <Image 
          src="/call.png" 
          alt="Call" 
          fill
          className="object-contain drop-shadow-md z-10" 
        />
        
        {/* Tooltip */}
        <span className="absolute right-[110%] px-3 py-2 bg-cf-card text-cf-text text-sm font-medium border border-cf-border shadow-md rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
          Call an Engineer
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/919331488999?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300 group hover:drop-shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        {/* Spreading Circular Light Effect (Ripple) */}
        <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping" style={{ animationDuration: '3s' }}></span>
        <span className="absolute inset-0 rounded-full bg-green-400/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></span>

        <Image 
          src="/whatsapp.png" 
          alt="WhatsApp" 
          fill
          className="object-contain drop-shadow-md z-10" 
        />
        
        {/* Tooltip */}
        <span className="absolute right-[110%] px-3 py-2 bg-cf-card text-cf-text text-sm font-medium border border-cf-border shadow-md rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
          Chat with an Engineer
        </span>
      </a>
    </div>
  );
}
