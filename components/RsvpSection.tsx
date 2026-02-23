import React from 'react';
import { MessageCircle } from 'lucide-react';

const RsvpSection: React.FC = () => {
  const groupLink = "https://chat.whatsapp.com/"; 

  return (
    <div className="w-full px-4 relative z-50 flex justify-center pb-24">
       <a
          href={groupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block w-full max-w-xs"
        >
           <div className="absolute inset-0 bg-green-900 rounded-lg translate-y-2 translate-x-0 group-active:translate-y-0 transition-transform"></div>
           <div className="relative flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-condensed text-xl py-4 px-4 rounded-lg shadow-xl active:translate-y-2 transition-all border-2 border-green-800 text-center leading-none">
             <MessageCircle size={24} className="animate-bounce shrink-0" />
             <span>ENTRAR NO GRUPO DO WHATSAPP</span>
           </div>
        </a>
    </div>
  );
};

export default RsvpSection;