import React, { useState } from 'react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import RsvpSection from './components/RsvpSection';
import Menu from './components/Menu';
import { Share2 } from 'lucide-react';

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Buteco do Lucas 2026',
          text: 'Vem pro meu Buteco! Churrasco, Cerveja e Resenha! 🥩🍻',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      alert('Link copiado!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // If menu is open, render only the menu component
  if (showMenu) {
    return <Menu onBack={() => setShowMenu(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative flex flex-col items-center overflow-x-hidden selection:bg-yellow-500 selection:text-black font-sans pb-32">
      
      {/* Chalkboard Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0 chalk-pattern"></div>

      {/* TOP WAVE (Yellow) */}
      <div className="absolute top-0 left-0 w-full h-48 z-0 overflow-hidden pointer-events-none">
         <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#FFC107' }}></path>
         </svg>
      </div>

      {/* FLOATING DECORATIONS */}
      {/* Espetinho Left */}
      <img 
        src="https://pngimg.com/d/kebab_PNG53.png" 
        alt="Espetinho" 
        className="absolute top-28 -left-10 w-40 rotate-45 drop-shadow-xl z-20 opacity-90 pointer-events-none hidden md:block"
      />
      {/* Espetinho Right */}
      <img 
        src="https://pngimg.com/d/kebab_PNG53.png" 
        alt="Espetinho" 
        className="absolute top-48 -right-10 w-40 -rotate-12 drop-shadow-xl z-20 opacity-90 pointer-events-none hidden md:block"
      />

      {/* BOTTOM WAVE (Yellow) */}
      <div className="fixed bottom-0 left-0 w-full h-32 z-0 overflow-hidden pointer-events-none">
         <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#FFC107' }}></path>
         </svg>
      </div>

      {/* Share Button */}
      <button 
        onClick={handleShare}
        className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full border border-white/20 shadow-lg transition-transform active:scale-95"
        aria-label="Compartilhar"
      >
        <Share2 size={20} />
      </button>

      <main className="w-full max-w-lg px-4 flex flex-col items-center z-10 pt-12 relative">
        <Hero />
        
        <div className="w-full mt-6">
          <EventDetails onOpenMenu={() => setShowMenu(true)} />
        </div>

        <div className="w-full mt-8 relative z-30">
          <RsvpSection />
        </div>
      </main>

       {/* Footer Text integrated into bottom wave */}
       <footer className="fixed bottom-4 w-full text-center z-20 pointer-events-none">
          <p className="font-condensed text-[#1a1a1a] text-lg tracking-wider opacity-80 uppercase font-bold">
            Se beber, chame o Uber!
          </p>
       </footer>
    </div>
  );
};

export default App;