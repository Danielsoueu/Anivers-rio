import React from 'react';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="text-center pt-10 pb-6 px-4 w-full relative z-10">
      
      {/* Decorative Top Badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-1 font-display tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,0.5)] rotate-[-2deg] z-20">
        CONVITE OFICIAL
      </div>

      <div className="flex flex-col items-center justify-center">
        
        {/* Main Title Block */}
        <div className="relative mt-8 mb-4 transform rotate-1">
          <h2 className="text-3xl font-display text-white/90 tracking-widest mb-0 drop-shadow-md">
            CHURRASCO DO
          </h2>
          <h1 className="text-7xl md:text-8xl font-display text-orange-500 tracking-tighter leading-[0.85] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] stroke-black">
            LUCAS
          </h1>
          <div className="absolute -right-4 top-0 text-yellow-400 animate-pulse">
            <Sparkles size={32} />
          </div>
        </div>

        {/* Subtitle / Theme */}
        <div className="bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-xl px-6 py-2 transform -rotate-2 mb-8">
           <p className="font-display text-xl text-white tracking-wider flex items-center gap-2">
             <UtensilsCrossed size={20} />
             ADEGA • RESENHA • FUMAÇA
           </p>
        </div>

        {/* Date & Time Ticket */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-[#2a2a2a] border-2 border-white/20 p-3 rounded shadow-[4px_4px_0px_black] min-w-[120px]">
            <span className="block text-xs font-sans text-neutral-400 uppercase">Quando?</span>
            <span className="block font-display text-3xl text-white">28/02</span>
          </div>
          <div className="bg-[#2a2a2a] border-2 border-white/20 p-3 rounded shadow-[4px_4px_0px_black] min-w-[100px]">
             <span className="block text-xs font-sans text-neutral-400 uppercase">Hora?</span>
             <span className="block font-display text-3xl text-yellow-500">22H</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;