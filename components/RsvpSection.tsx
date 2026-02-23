import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const RsvpSection: React.FC = () => {
  const groupLink = "https://chat.whatsapp.com/"; 

  return (
    <div className="w-full max-w-lg mx-auto mb-16 relative px-4">
      {/* Sticker effect background */}
      <div className="absolute inset-0 bg-green-800 rounded-xl transform rotate-2 scale-[1.02] shadow-2xl opacity-50 z-0"></div>
      
      <div className="relative z-10 bg-[#1a472a] border-4 border-[#2d8a4e] rounded-xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,0.4)]">
        
        {/* Ticket Perforations */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#1a1a1a] rounded-r-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#1a1a1a] rounded-l-full"></div>

        <div className="p-8 text-center flex flex-col items-center">
          <div className="mb-4 text-green-400 animate-bounce">
            <MessageCircle size={48} />
          </div>
          
          <h2 className="text-3xl font-display text-white mb-2 leading-none">
            GRUPO VIP
          </h2>
          <p className="text-green-200/80 font-sans text-sm mb-6 max-w-[250px]">
            Entre no grupo pra combinar carona e mandar o comprovante do pix (brincadeira... ou não)
          </p>

          <a
            href={groupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 bg-white text-green-900 font-display text-xl py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 w-full"
          >
            ENTRAR AGORA
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RsvpSection;