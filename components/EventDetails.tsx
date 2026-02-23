import React from 'react';
import { MapPin, Navigation, Beef, Beer, CheckCircle2 } from 'lucide-react';

const EventDetails: React.FC = () => {
  const mapLink = "https://share.google/yJXralUSZFII9bFaF";
  const wazeLink = "https://waze.com/ul?q=Adega%20777"; 
  
  return (
    <div className="w-full max-w-2xl mx-auto relative mb-12 px-2">
      
      {/* Container simulating a board layout */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* LEFT COLUMN: Map "Polaroid" */}
        <div className="w-full md:w-1/2 relative group">
          {/* Tape effect */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/20 backdrop-blur-sm transform -rotate-2 z-20 shadow-sm"></div>
          
          <div className="bg-white p-3 pb-12 shadow-[10px_10px_20px_rgba(0,0,0,0.5)] transform rotate-[-2deg] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] hover:z-10 relative">
             <div className="border border-neutral-200 h-48 w-full bg-neutral-100 overflow-hidden relative grayscale-[30%] hover:grayscale-0 transition-all">
                <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    title="map" 
                    scrolling="no" 
                    src="https://maps.google.com/maps?q=Adega+777&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0"
                  ></iframe>
             </div>
             <div className="absolute bottom-3 left-0 right-0 text-center">
                <p className="font-display text-black text-xl">ADEGA 777 📍</p>
                <p className="font-sans text-neutral-500 text-xs">Onde o filho chora e a mãe não vê</p>
             </div>
          </div>

          {/* Buttons with DEEP PRESS animation */}
          <div className="mt-6 space-y-4 px-2">
            <a 
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full group block"
            >
              <div className="absolute inset-0 bg-blue-900 rounded-lg translate-y-2 translate-x-0 group-active:translate-y-0 transition-transform"></div>
              <div className="relative bg-blue-600 border-2 border-blue-900 rounded-lg p-4 flex items-center justify-center gap-3 text-white font-display text-lg tracking-wide transform translate-y-0 group-active:translate-y-2 transition-transform duration-100">
                <MapPin className="group-hover:scale-110 transition-transform" />
                ABRIR NO MAPS
              </div>
            </a>

            <a 
              href={wazeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full group block"
            >
              <div className="absolute inset-0 bg-cyan-900 rounded-lg translate-y-2 translate-x-0 group-active:translate-y-0 transition-transform"></div>
              <div className="relative bg-cyan-400 border-2 border-cyan-800 rounded-lg p-4 flex items-center justify-center gap-3 text-black font-display text-lg tracking-wide transform translate-y-0 group-active:translate-y-2 transition-transform duration-100">
                <Navigation className="group-hover:scale-110 transition-transform" />
                IR DE WAZE
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: The Rules (Chalk Style) */}
        <div className="w-full md:w-1/2 pt-4">
          <div className="bg-transparent border-l-4 border-dotted border-white/20 pl-6 py-2">
             <h3 className="font-display text-2xl text-orange-500 mb-6 -rotate-1">REGRAS DO JOGO:</h3>
             
             <ul className="space-y-8">
               <li className="relative">
                 <div className="flex items-start gap-4">
                   <div className="bg-red-600 text-white p-2 rounded-full shadow-[2px_2px_0px_black] transform -rotate-6">
                      <Beef size={24} />
                   </div>
                   <div>
                     <h4 className="font-display text-xl text-white mb-1">A Carne</h4>
                     <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                       Traga o que for comer. A grelha é comunitária, mas o corte é seu! 
                     </p>
                   </div>
                 </div>
               </li>

               <li className="relative">
                 <div className="flex items-start gap-4">
                   <div className="bg-yellow-500 text-black p-2 rounded-full shadow-[2px_2px_0px_white] transform rotate-3">
                      <Beer size={24} />
                   </div>
                   <div>
                     <h4 className="font-display text-xl text-white mb-1">A Bebida</h4>
                     <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                       <span className="bg-yellow-500/20 text-yellow-200 px-1 rounded">PROIBIDO LEVAR!</span> Consumo na adega. Preço justo pra gente fortalecer o local.
                     </p>
                   </div>
                 </div>
               </li>

               <li className="relative">
                 <div className="flex items-start gap-4">
                   <div className="bg-green-600 text-white p-2 rounded-full shadow-[2px_2px_0px_black] transform -rotate-3">
                      <CheckCircle2 size={24} />
                   </div>
                   <div>
                     <h4 className="font-display text-xl text-white mb-1">A Presença</h4>
                     <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                       Não seja o furo do rolê. Confirma aí embaixo pra gente calcular o carvão.
                     </p>
                   </div>
                 </div>
               </li>
             </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;