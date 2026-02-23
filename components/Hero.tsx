import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="text-center w-full relative z-10 flex flex-col items-center">
      
      {/* BADGE "Aniversário do" */}
      <div className="relative mb-2">
        <div className="bg-[#FFC107] text-[#1a1a1a] px-8 py-2 rounded-xl border-4 border-[#1a1a1a] shadow-[0_4px_0_rgba(255,255,255,0.2)] transform -rotate-2 relative z-10">
          {/* Badge details */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1">
             <div className="w-1 h-3 bg-[#1a1a1a]"></div>
             <div className="w-1 h-3 bg-[#1a1a1a]"></div>
             <div className="w-1 h-3 bg-[#1a1a1a]"></div>
          </div>

          <div className="flex flex-col items-center">
             <div className="flex gap-2 text-[#1a1a1a] mb-1">
               <Star size={12} fill="currentColor" />
               <Star size={12} fill="currentColor" />
               <Star size={12} fill="currentColor" />
             </div>
             <h2 className="font-hand text-3xl font-bold leading-none transform -rotate-2">
               Aniversário do
             </h2>
          </div>
        </div>
      </div>

      {/* MAIN NAME */}
      <h1 className="text-7xl md:text-8xl font-display text-[#FFFDD0] uppercase tracking-wide drop-shadow-[4px_4px_0px_#000] mb-6 mt-2 leading-[0.9]">
        LUCAS
      </h1>

      {/* INVITE TEXT */}
      <div className="max-w-xs mx-auto mb-8">
        <p className="font-hand text-2xl md:text-3xl text-white/90 leading-tight transform rotate-1 text-shadow-sm">
          Venha comemorar meu aniversário com muita alegria, risadas, cerveja, amigos e comidas de Buteco!
        </p>
      </div>

    </div>
  );
};

export default Hero;