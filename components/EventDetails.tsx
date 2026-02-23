import React from 'react';
import { MapPin, Navigation, Utensils, Beer, FileText } from 'lucide-react';

interface EventDetailsProps {
  onOpenMenu: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ onOpenMenu }) => {
  const mapLink = "https://share.google/ojmjxBbr7XUJOJAhO";
  const wazeLink = "https://waze.com/ul?q=R.+Lino+Coutinho,+1871+-+Ipiranga,+São+Paulo"; 
  
  return (
    <div className="w-full relative px-2 flex flex-col items-center gap-10">
      
      {/* --- DATE & TIME SECTION --- */}
      <div className="flex flex-col items-center relative z-20">
        {/* RIBBON DATE */}
        <div className="relative w-full max-w-xs mx-auto h-16 mb-2 flex items-center justify-center hover:scale-105 transition-transform cursor-default">
            <div className="absolute inset-0 bg-[#FFC107] transform -skew-x-6 rounded-sm border-2 border-black shadow-hard"></div>
            <div className="absolute top-2 -left-3 w-6 h-12 bg-[#c29200] -z-10 transform skew-y-6 border border-black"></div>
            <div className="absolute top-2 -right-3 w-6 h-12 bg-[#c29200] -z-10 transform -skew-y-6 border border-black"></div>
            <h2 className="relative z-10 font-condensed text-4xl text-[#1a1a1a] tracking-wider pt-1 font-bold">
            28 DE FEVEREIRO
            </h2>
        </div>

        {/* TIME */}
        <h3 className="font-display text-6xl text-[#FFFDD0] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-2">
            Às 22h
        </h3>
      </div>

      {/* --- MAP CARD --- */}
      <div className="w-full max-w-sm relative z-10 group">
         {/* Tape visual decoration */}
         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/20 rotate-1 backdrop-blur-sm z-20 shadow-sm"></div>

         <div className="bg-[#1a1a1a] p-1 rotate-1 group-hover:rotate-0 transition-transform duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-white/5">
             <div className="border-2 border-dashed border-[#FFC107]/60 p-5 flex flex-col items-center bg-[#202020]">
                
                <h4 className="font-display text-2xl text-[#FFC107] uppercase mb-1 tracking-wide">A Adega</h4>
                <p className="font-hand text-neutral-300 text-lg mb-4 text-center leading-tight">
                   R. Lino Coutinho, 1871 <br/> Ipiranga, São Paulo - SP
                </p>

                {/* Iframe Wrapper */}
                <div className="w-full h-40 bg-neutral-800 mb-5 border-2 border-[#1a1a1a] shadow-inner relative overflow-hidden">
                   <iframe 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      title="map" 
                      scrolling="no" 
                      src="https://maps.google.com/maps?q=R.+Lino+Coutinho,+1871+-+Ipiranga,+São+Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 w-full">
                    <a 
                      href={mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 bg-[#FFC107] text-black font-condensed font-bold py-3 text-lg rounded shadow-[2px_2px_0px_black] active:translate-y-1 active:shadow-none transition-all border border-black group/btn"
                    >
                        <MapPin size={18} className="group-hover/btn:scale-110 transition-transform"/> MAPS
                    </a>
                    <a 
                      href={wazeLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 bg-[#33CCFF] text-black font-condensed font-bold py-3 text-lg rounded shadow-[2px_2px_0px_black] active:translate-y-1 active:shadow-none transition-all border border-black group/btn"
                    >
                        <Navigation size={18} className="group-hover/btn:scale-110 transition-transform" /> WAZE
                    </a>
                </div>
             </div>
         </div>
      </div>

      {/* --- INFO CARDS --- */}
      <div className="grid gap-6 w-full max-w-sm relative z-10">
        
        {/* CARNE */}
        <div className="bg-[#1a1a1a] border-l-8 border-[#FFC107] p-6 shadow-lg relative overflow-hidden">
            <div className="flex items-start gap-4 relative z-10">
                <div className="bg-[#FFC107]/20 p-3 rounded-full text-[#FFC107]">
                    <Utensils size={24} />
                </div>
                <div>
                    <h5 className="font-display text-xl text-white mb-2 uppercase tracking-wide">A Carne</h5>
                    <p className="font-sans text-neutral-400 text-sm leading-relaxed">
                        Cada um traz sua carne de preferência (vale de picanha a linguiça, o que importa é o ponto!).
                    </p>
                </div>
            </div>
        </div>

        {/* BEBIDA */}
        <div className="bg-[#1a1a1a] border-l-8 border-red-500 p-6 shadow-lg relative overflow-hidden">
            <div className="flex items-start gap-4 relative z-10">
                <div className="bg-red-500/20 p-3 rounded-full text-red-500">
                    <Beer size={24} />
                </div>
                <div className="w-full">
                    <h5 className="font-display text-xl text-white mb-2 uppercase tracking-wide">A Bebida</h5>
                    <p className="font-sans text-neutral-400 text-sm leading-relaxed mb-3">
                        <span className="text-red-500 font-bold uppercase block mb-1">Proibido levar cooler!</span>
                        A adega tá abastecida com tudo o que há de melhor. <span className="text-white font-bold">Consumo exclusivo no local!</span>
                    </p>
                    
                    {/* BUTTON TO OPEN MENU */}
                    <button 
                      onClick={onOpenMenu}
                      className="w-full bg-[#FFC107] hover:bg-[#FFD54F] text-[#1a1a1a] font-condensed font-bold uppercase py-2 px-4 rounded shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                    >
                      <FileText size={18} /> Ver Cardápio da Adega
                    </button>
                </div>
            </div>
        </div>

      </div>

      {/* BEER GLASS DECORATION */}
      <div className="absolute bottom-[-20px] left-[-20px] w-32 h-48 z-0 pointer-events-none opacity-60 mix-blend-screen">
         <img 
           src="https://pngimg.com/d/beer_PNG2388.png" 
           alt="Copo de Cerveja" 
           className="w-full h-full object-contain"
         />
      </div>

    </div>
  );
};

export default EventDetails;