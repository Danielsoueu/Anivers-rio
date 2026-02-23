import React from 'react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import RsvpSection from './components/RsvpSection';
import { Share2 } from 'lucide-react';

const App: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Aniversário do Lucas 2026',
          text: 'Bora comemorar meu aniver! Churrasco, Adega e Resenha! 🥩🍻',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      alert('Link copiado para a área de transferência!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    // Chalkboard background texture
    <div className="min-h-screen bg-[#1a1a1a] relative flex flex-col items-center overflow-x-hidden selection:bg-orange-500 selection:text-white pb-10 font-sans text-neutral-100">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" 
           style={{ 
             backgroundImage: `url("https://www.transparenttextures.com/patterns/black-chalk.png")`,
             backgroundRepeat: 'repeat'
           }}>
      </div>
      
      {/* Floating Share Button */}
      <button 
        onClick={handleShare}
        className="fixed top-4 right-4 z-50 bg-orange-600 hover:bg-orange-500 p-3 rounded-full text-white border-2 border-white/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-all active:translate-y-1 active:shadow-none"
        aria-label="Compartilhar"
      >
        <Share2 size={20} />
      </button>

      <main className="w-full max-w-2xl px-4 flex flex-col items-center z-10 pt-6">
        <Hero />
        
        <div className="w-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <EventDetails />
        </div>

        <div className="w-full animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <RsvpSection />
        </div>
      </main>

      <footer className="text-neutral-500 text-sm py-8 text-center w-full mt-auto relative z-10 font-display tracking-widest opacity-60">
        <p>PREPARE O FÍGADO! 🍻</p>
      </footer>
    </div>
  );
};

export default App;