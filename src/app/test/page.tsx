'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function TestPage() {
  const [currentView, setCurrentView] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (viewId: string) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syncopate:wght@400;700&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        .font-syncopate {
            font-family: 'Syncopate', sans-serif;
        }

        .hero-bg {
            background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
        }

        .hero-overlay {
            background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%);
        }
        
        @media (max-width: 768px) {
            .hero-overlay {
                background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 100%);
            }
        }

        .clip-corner {
            clip-path: polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%);
        }
        
        @media (min-width: 768px) {
            .clip-corner {
                clip-path: polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px);
            }
        }

        .view-section {
            display: none;
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
        }

        .view-section.active {
            display: block;
            opacity: 1;
            animation: fadeIn 0.4s ease-in-out forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .globe-spin {
            animation: spin 20s linear infinite;
        }
        @keyframes spin {
            100% { transform: rotate(360deg); }
        }
      `}} />

      <div className="bg-black text-white min-h-screen font-[Inter] -mt-20">
        {/* Fixed Header */}
        <header 
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-gray-800' : 'bg-transparent py-6'
          }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                
                {/* Logo Section */}
                <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => navigate('home')}>
                    <svg className="w-10 h-10 globe-spin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 4"/>
                        <ellipse cx="50" cy="50" rx="15" ry="45" stroke="#06B6D4" strokeWidth="2"/>
                        <ellipse cx="50" cy="50" rx="30" ry="45" stroke="#8B5CF6" strokeWidth="2"/>
                        <ellipse cx="50" cy="50" rx="45" ry="15" stroke="#EC4899" strokeWidth="2"/>
                    </svg>
                    <div>
                        <div className="font-syncopate font-bold text-sm md:text-base tracking-widest leading-none text-white group-hover:text-gray-300 transition-colors">Parther Technologies</div>
                        <div className="text-[0.6rem] tracking-[0.3em] text-gray-400 mt-1 uppercase font-semibold">Enterprise Software</div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 font-syncopate font-bold text-sm tracking-widest uppercase">
                    <button onClick={() => navigate('home')} className={`text-white hover:text-purple-400 transition-colors border-b-2 pb-1 ${currentView === 'home' ? 'border-purple-400 text-purple-400' : 'border-transparent hover:border-purple-400'}`}>HOME</button>
                    <button className="text-white hover:text-purple-400 transition-colors border-b-2 pb-1 border-transparent hover:border-purple-400">SERVICES</button>
                    <button className="text-white hover:text-purple-400 transition-colors border-b-2 pb-1 border-transparent hover:border-purple-400">INDUSTRIES</button>
                    <button className="text-white hover:text-purple-400 transition-colors border-b-2 pb-1 border-transparent hover:border-purple-400">PRICING</button>
                    <button onClick={() => navigate('subscribe')} className={`text-white hover:text-purple-400 transition-colors border-b-2 pb-1 ${currentView === 'subscribe' ? 'border-purple-400 text-purple-400' : 'border-transparent hover:border-purple-400'}`}>START A PROJECT</button>
                </nav>

                {/* Mobile Hamburger Menu Button */}
                <button className="md:hidden text-white text-3xl focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </header>

        {/* Mobile Fullscreen Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center">
              <button className="absolute top-8 right-8 text-white text-4xl hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
                  <i className="fa-solid fa-xmark"></i>
              </button>
              <nav className="flex flex-col space-y-6 text-center font-syncopate font-bold text-3xl tracking-widest">
                  <button onClick={() => navigate('home')} className="text-white hover:text-purple-400 transition-colors uppercase">HOME</button>
                  <button className="text-white hover:text-purple-400 transition-colors uppercase">SERVICES</button>
                  <button className="text-white hover:text-purple-400 transition-colors uppercase">INDUSTRIES</button>
                  <button className="text-white hover:text-purple-400 transition-colors uppercase">PRICING</button>
                  <button onClick={() => navigate('subscribe')} className="text-white hover:text-purple-400 transition-colors uppercase mt-8 text-purple-400">START A PROJECT</button>
              </nav>
          </div>
        )}

        {/* Main Content Container */}
        <main>
            {/* ================= HOME VIEW ================= */}
            {currentView === 'home' && (
              <div className="view-section active">
                  
                  {/* Hero Section */}
                  <div className="sticky top-0 h-[100vh] w-full z-0">
                    <section className="relative h-full flex flex-col justify-center hero-bg">
                        <div className="absolute inset-0 hero-overlay"></div>
                        
                        <div className="container mx-auto px-6 relative z-10 mt-20 md:mt-0 flex flex-col h-full justify-center">
                            <h1 className="font-syncopate font-bold text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] tracking-tighter text-white mb-12 drop-shadow-lg">
                                AUTOMATE.<br/>DOMINATE.
                            </h1>
                            
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 w-full max-w-6xl text-lg md:text-xl font-medium text-gray-200">
                                <p className="md:w-1/2 md:pr-10 leading-relaxed">
                                    We architect custom enterprise software and deploy Generative Engine Optimization (GEO) strategies.
                                </p>
                                <p className="md:w-1/2 md:pl-10 md:text-right leading-relaxed">
                                    Designed specifically for industrial, healthcare, and SaaS companies in Eastern India.
                                </p>
                            </div>
                        </div>
                    </section>
                  </div>

                  {/* Latest Episodes Section */}
                  <section className="relative z-10 bg-white text-black py-24 border-t-8 border-black shadow-2xl">
                      <div className="container mx-auto px-6">
                          <div className="mb-16 max-w-3xl">
                              <h2 className="font-syncopate font-bold text-4xl md:text-5xl mb-6 tracking-tight border-b-2 border-black pb-4 inline-block">
                                  Architectural Foundations for Growth
                              </h2>
                              <p className="text-gray-600 text-xl leading-relaxed">
                                  We don't just write code. We eliminate operational bottlenecks through purpose-built technology stacks. Choose your path below.
                              </p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                              <article className="group cursor-pointer">
                                  <div className="mb-6 h-64 overflow-hidden clip-corner bg-gray-200 relative">
                                      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" alt="AI Circuit Board" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                  </div>
                                  <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">Custom SaaS & ERP</h3>
                                  <p className="text-gray-700 leading-relaxed text-lg">
                                      Replace fragmented spreadsheets with unified, secure, cloud-native operational software tailored to your workflows.
                                  </p>
                              </article>
                              
                              <article className="group cursor-pointer">
                                  <div className="mb-6 h-64 overflow-hidden clip-corner bg-gray-200 relative">
                                      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" alt="Satellite in Space" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                  </div>
                                  <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">Generative Engine Optimization</h3>
                                  <p className="text-gray-700 leading-relaxed text-lg">
                                      Dominate AI search results. We structure your digital assets so ChatGPT and Google AI cite you first.
                                  </p>
                              </article>

                              <article className="group cursor-pointer">
                                  <div className="mb-6 h-64 overflow-hidden clip-corner bg-black flex items-center justify-center relative">
                                      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" alt="Digital City Wireframe" className="w-full h-full object-cover opacity-80 mix-blend-screen transition-transform duration-700 group-hover:scale-110" />
                                  </div>
                                  <h3 className="text-2xl font-bold mb-3 font-syncopate tracking-tight">Enterprise Digital Hubs</h3>
                                  <p className="text-gray-700 leading-relaxed text-lg">
                                      High-performance architecture boasting sub-2.5s LCP. Turn your website into a highly localized lead machine.
                                  </p>
                              </article>
                          </div>
                      </div>
                  </section>

                  {/* Join The Circuit Section */}
                  <section className="py-32 relative overflow-hidden flex flex-col items-center text-center px-6 bg-black border-y-8 border-gray-900">
                      <div className="absolute inset-0 opacity-20 hero-bg pointer-events-none mix-blend-luminosity"></div>
                      
                      <div className="relative z-10 max-w-3xl flex flex-col items-center">
                          <h2 className="font-syncopate font-bold text-4xl md:text-6xl mb-8 tracking-tight text-white drop-shadow-md">
                              Start a Project
                          </h2>
                          <p className="text-xl md:text-2xl mb-12 text-gray-300 font-medium leading-relaxed">
                              Bypass the sales pitch. Speak directly with our architectural team.
                          </p>
                          <button onClick={() => navigate('subscribe')} className="bg-white text-black font-bold font-syncopate tracking-widest text-lg py-5 px-12 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                              START ARCHITECTURE REVIEW
                          </button>
                      </div>
                  </section>
              </div>
            )}

            {/* ================= SUBSCRIBE VIEW ================= */}
            {currentView === 'subscribe' && (
              <div className="view-section active pt-24">
                   {/* Decorative Abstract Banner */}
                   <div className="h-48 md:h-72 w-full hero-bg bg-bottom relative">
                       <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black pointer-events-none"></div>
                   </div>

                   {/* Submission Form Section */}
                   <section className="bg-black text-white pb-24 px-6 pt-10">
                       <div className="container mx-auto max-w-6xl">
                           <div className="flex flex-col lg:flex-row gap-16 items-start">
                               
                               <div className="lg:w-2/5">
                                   <h1 className="font-syncopate font-bold text-5xl md:text-6xl mb-6 tracking-tight leading-tight">
                                       Submit Your<br/>Story
                                   </h1>
                                   <p className="text-gray-400 text-xl leading-relaxed">
                                       We're always looking for the next big innovation to share with our listeners. Connect with our editorial team.
                                   </p>
                               </div>
                               
                               <div className="lg:w-3/5 w-full">
                                   <form className="space-y-6" onSubmit={(e) => {
                                      e.preventDefault(); 
                                      const btn = e.currentTarget.querySelector('button'); 
                                      if(btn) {
                                        const origText = btn.innerText; 
                                        btn.innerText = 'Sent!'; 
                                        setTimeout(()=>btn.innerText=origText, 2000); 
                                      }
                                      e.currentTarget.reset();
                                    }}>
                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                           <input type="text" placeholder="First name*" required className="w-full bg-white text-black p-4 text-lg outline-none focus:ring-2 focus:ring-purple-500 transition-shadow placeholder:text-gray-500 font-medium" />
                                           <input type="text" placeholder="Last name*" required className="w-full bg-white text-black p-4 text-lg outline-none focus:ring-2 focus:ring-purple-500 transition-shadow placeholder:text-gray-500 font-medium" />
                                       </div>
                                       
                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                           <input type="email" placeholder="Email address*" required className="w-full bg-white text-black p-4 text-lg outline-none focus:ring-2 focus:ring-purple-500 transition-shadow placeholder:text-gray-500 font-medium" />
                                           <input type="tel" placeholder="Phone number*" required className="w-full bg-white text-black p-4 text-lg outline-none focus:ring-2 focus:ring-purple-500 transition-shadow placeholder:text-gray-500 font-medium" />
                                       </div>
                                       
                                       <textarea placeholder="Message*" required rows={5} className="w-full bg-white text-black p-4 text-lg outline-none resize-none focus:ring-2 focus:ring-purple-500 transition-shadow placeholder:text-gray-500 font-medium"></textarea>
                                       
                                       <div className="flex flex-col items-start gap-4 pt-2">
                                           <button type="submit" className="bg-white text-black font-bold font-syncopate tracking-widest text-lg py-4 px-12 hover:bg-gray-200 transition-colors w-full md:w-auto">
                                               Submit
                                           </button>
                                           <p className="text-sm text-gray-600 font-medium">Protected by reCAPTCHA (Privacy / Terms)</p>
                                       </div>
                                   </form>
                               </div>
                           </div>
                       </div>
                   </section>

                   {/* Social Media Links Section */}
                   <section className="bg-white text-black py-20 px-6 border-b-[16px] border-black">
                      <div className="container mx-auto">
                          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
                              
                              <a href="#" className="flex items-center space-x-6 group">
                                  <i className="fa-brands fa-youtube text-6xl group-hover:text-red-600 transition-colors"></i>
                                  <div className="flex flex-col">
                                      <span className="font-bold text-3xl font-syncopate">Youtube</span>
                                      <span className="text-gray-500 text-base font-syncopate tracking-widest font-bold mt-1 group-hover:text-black transition-colors">tech.news</span>
                                  </div>
                              </a>
                              
                              <a href="#" className="flex items-center space-x-6 group">
                                  <i className="fa-brands fa-instagram text-6xl group-hover:text-pink-600 transition-colors"></i>
                                  <div className="flex flex-col">
                                      <span className="font-bold text-3xl font-syncopate">Instagram</span>
                                      <span className="text-gray-500 text-base font-syncopate tracking-widest font-bold mt-1 group-hover:text-black transition-colors">tech.news</span>
                                  </div>
                              </a>
                              
                              <a href="#" className="flex items-center space-x-6 group">
                                  <i className="fa-brands fa-facebook-f text-5xl ml-2 group-hover:text-blue-600 transition-colors"></i>
                                  <div className="flex flex-col">
                                      <span className="font-bold text-3xl font-syncopate">Facebook</span>
                                      <span className="text-gray-500 text-base font-syncopate tracking-widest font-bold mt-1 group-hover:text-black transition-colors">tech.news</span>
                                  </div>
                              </a>

                          </div>
                      </div>
                   </section>
              </div>
            )}
        </main>


      </div>
    </>
  );
}
