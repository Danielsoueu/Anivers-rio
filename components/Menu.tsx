import React from 'react';
import { ArrowLeft, Phone, Instagram, Star } from 'lucide-react';

interface MenuProps {
  onBack: () => void;
}

const Menu: React.FC<MenuProps> = ({ onBack }) => {
  
  const renderPriceItem = (name: string, price: string) => (
    <div className="flex justify-between items-end border-b border-dashed border-neutral-700 pb-1 mb-2 last:mb-0">
      <span className="text-neutral-300 font-condensed text-xl tracking-wide uppercase leading-none pb-1">{name}</span>
      <span className="text-[#FFC107] font-bold font-hand text-lg whitespace-nowrap ml-2">{price}</span>
    </div>
  );

  const renderSectionTitle = (title: string) => (
    <div className="flex items-center gap-4 mb-4 mt-8">
       <div className="h-px bg-[#FFC107] flex-1 opacity-50"></div>
       <h3 className="font-display text-2xl text-[#FFC107] uppercase text-center tracking-wider">{title}</h3>
       <div className="h-px bg-[#FFC107] flex-1 opacity-50"></div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] text-white flex flex-col relative pb-20">
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 chalk-pattern"></div>
      
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#FFC107]/20 p-4 shadow-lg flex items-center gap-4">
        <button 
          onClick={onBack}
          className="bg-[#FFC107] text-black p-2 rounded-full hover:bg-white transition-colors shadow-[2px_2px_0px_black]"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-hand text-3xl text-white drop-shadow-md">Cardápio Adega 777</h2>
      </div>

      <div className="px-4 py-6 max-w-lg mx-auto w-full z-10">
        
        {/* DESTAQUE MANSÃO MAROMBA (ESTILO IMAGEM) */}
        <div className="bg-[#1a1a1a] border-2 border-[#FFC107] p-6 rounded-xl shadow-[0_0_20px_rgba(255,193,7,0.2)] relative mt-4 mb-8">
            {/* TÍTULO FLUTUANTE */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFC107] text-black px-6 py-2 shadow-lg transform -rotate-1">
                <h3 className="font-display text-2xl uppercase tracking-black leading-none text-center">
                    MANSÃO<br/>MAROMBA
                </h3>
            </div>
            
            <div className="space-y-4 mt-4 pt-2">
                <div className="flex justify-between items-end border-b border-neutral-700/50 pb-2">
                    <span className="font-condensed text-2xl uppercase text-white tracking-wide">COMBO WHISKY</span>
                    <span className="font-hand text-3xl text-[#FFC107]">R$ 25,00</span>
                </div>
                
                <div className="flex justify-between items-end border-b border-neutral-700/50 pb-2">
                    <span className="font-condensed text-2xl uppercase text-white tracking-wide">COMBO GIN MELANCIA</span>
                    <span className="font-hand text-3xl text-[#FFC107]">R$ 25,00</span>
                </div>

                <div className="text-center pt-2">
                    <p className="font-bold text-sm text-green-500 uppercase tracking-wider">
                        + ADICIONAL GELO E LIMÃO: R$ 3,00
                    </p>
                </div>
            </div>
        </div>

        {/* DOSES */}
        {renderSectionTitle("Doses (Individuais)")}
        <div className="bg-neutral-800/50 p-5 rounded-lg border border-white/10 space-y-5">
            <div>
               <h4 className="text-[#FFC107] font-bold mb-2 border-b border-white/10 flex items-center gap-2"><Star size={14}/> WHISKY</h4>
               {renderPriceItem("Buchanan's", "R$ 55,00")}
               {renderPriceItem("Chivas / Old Parr / Jack Sabor", "R$ 45,00")}
               {renderPriceItem("Jack Daniels (Tradicional)", "R$ 40,00")}
               {renderPriceItem("Ballantines / Red Label / B&W", "R$ 35,00")}
               {renderPriceItem("Passaport / White Horse", "R$ 30,00")}
               {renderPriceItem("Chanceler", "R$ 12,00")}
               {renderPriceItem("Mastergold", "R$ 10,00")}
            </div>
            <div>
               <h4 className="text-[#FFC107] font-bold mb-2 border-b border-white/10 flex items-center gap-2"><Star size={14}/> GIN</h4>
               {renderPriceItem("Tanqueray", "R$ 50,00")}
               {renderPriceItem("Beefeater", "R$ 45,00")}
               {renderPriceItem("Eternity Sabor", "R$ 18,00")}
               {renderPriceItem("Eternity Tradicional", "R$ 15,00")}
               {renderPriceItem("Full London", "R$ 10,00")}
            </div>
            <div>
               <h4 className="text-[#FFC107] font-bold mb-2 border-b border-white/10 flex items-center gap-2"><Star size={14}/> VODKA & OUTROS</h4>
               {renderPriceItem("Licor 43", "R$ 35,00")}
               {renderPriceItem("Smirnoff / Malibu", "R$ 25,00")}
               {renderPriceItem("Askov", "R$ 15,00")}
               {renderPriceItem("Smirnoff Ice (Garrafa)", "R$ 13,00")}
               {renderPriceItem("Dreher", "R$ 6,00")}
               {renderPriceItem("Velho Barreiro", "R$ 5,00")}
               {renderPriceItem("Cachaça 51", "R$ 4,00")}
            </div>
            <p className="text-xs text-center text-red-400 font-bold bg-red-900/20 p-2 rounded border border-red-900/50">
                OBS: Adição de Red Bull em qualquer dose: + R$ 5,00
            </p>
        </div>

        {/* COMBOS E GARRAFAS */}
        {renderSectionTitle("Combos & Garrafas")}
        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <table className="w-full text-sm text-left text-neutral-300 border-collapse min-w-[600px]">
             <thead className="text-xs text-[#1a1a1a] uppercase bg-[#FFC107] border-b border-[#FFC107]">
                 <tr>
                    <th className="px-3 py-3 rounded-tl-lg">Bebida</th>
                    <th className="px-3 py-3 text-center">Só Garrafa</th>
                    <th className="px-3 py-3 text-center">C/ Vibe</th>
                    <th className="px-3 py-3 text-center rounded-tr-lg">C/ RedBull</th>
                 </tr>
             </thead>
             <tbody className="bg-neutral-900">
                {/* Jack Sabor */}
                <tr className="border-b border-neutral-800 hover:bg-white/5">
                   <td className="px-3 py-3 font-bold text-white">Jack Daniels (Sabor)</td>
                   <td className="px-3 py-3 text-center text-[#FFC107]">R$ 185</td>
                   <td className="px-3 py-3 text-center">R$ 220</td>
                   <td className="px-3 py-3 text-center">R$ 270</td>
                </tr>
                {/* Jack Trad */}
                <tr className="border-b border-neutral-800 hover:bg-white/5">
                   <td className="px-3 py-3 font-bold text-white">Jack Daniels (Trad.)</td>
                   <td className="px-3 py-3 text-center text-[#FFC107]">R$ 175</td>
                   <td className="px-3 py-3 text-center">R$ 200</td>
                   <td className="px-3 py-3 text-center">R$ 260</td>
                </tr>
                {/* Red Label */}
                <tr className="border-b border-neutral-800 hover:bg-white/5">
                   <td className="px-3 py-3 font-bold text-white">Red Label</td>
                   <td className="px-3 py-3 text-center text-[#FFC107]">R$ 110</td>
                   <td className="px-3 py-3 text-center">R$ 130</td>
                   <td className="px-3 py-3 text-center">R$ 170</td>
                </tr>
                {/* Malibu */}
                <tr className="border-b border-neutral-800 hover:bg-white/5">
                   <td className="px-3 py-3 font-bold text-white">Malibu</td>
                   <td className="px-3 py-3 text-center text-[#FFC107]">R$ 80</td>
                   <td className="px-3 py-3 text-center">R$ 100</td>
                   <td className="px-3 py-3 text-center">R$ 150</td>
                </tr>
                {/* Passaport */}
                <tr className="border-b border-neutral-800 hover:bg-white/5">
                   <td className="px-3 py-3 font-bold text-white">Passaport</td>
                   <td className="px-3 py-3 text-center text-[#FFC107]">R$ 75</td>
                   <td className="px-3 py-3 text-center">R$ 80</td>
                   <td className="px-3 py-3 text-center">R$ 110</td>
                </tr>
                {/* Chanceler */}
                <tr className="border-b border-neutral-800 hover:bg-white/5">
                   <td className="px-3 py-3 font-bold text-white">Chanceler</td>
                   <td className="px-3 py-3 text-center text-[#FFC107]">R$ 30</td>
                   <td className="px-3 py-3 text-center">R$ 55</td>
                   <td className="px-3 py-3 text-center">R$ 80</td>
                </tr>
                {/* Full London */}
                <tr className="border-b border-neutral-800 hover:bg-white/5">
                   <td className="px-3 py-3 font-bold text-white">Full London Gin</td>
                   <td className="px-3 py-3 text-center text-[#FFC107]">R$ 25</td>
                   <td className="px-3 py-3 text-center">R$ 40</td>
                   <td className="px-3 py-3 text-center">R$ 70</td>
                </tr>
                {/* Mastergold */}
                <tr className="border-b border-neutral-800 hover:bg-white/5">
                   <td className="px-3 py-3 font-bold text-white">Mastergold</td>
                   <td className="px-3 py-3 text-center text-[#FFC107]">R$ 20</td>
                   <td className="px-3 py-3 text-center">R$ 35</td>
                   <td className="px-3 py-3 text-center">R$ 70</td>
                </tr>
                 {/* Askov */}
                 <tr className="border-b border-neutral-800 hover:bg-white/5">
                   <td className="px-3 py-3 font-bold text-white">Askov Vodka</td>
                   <td className="px-3 py-3 text-center text-[#FFC107]">R$ 20</td>
                   <td className="px-3 py-3 text-center text-neutral-600">-</td>
                   <td className="px-3 py-3 text-center text-neutral-600">-</td>
                </tr>
             </tbody>
          </table>
        </div>

        {/* CERVEJAS */}
        {renderSectionTitle("Cervejas")}
        <div className="bg-neutral-800/50 p-4 rounded-lg border border-white/10 space-y-4">
            <div>
                <h4 className="text-[#FFC107] font-bold text-sm uppercase mb-1">Garrafas 600ml</h4>
                {renderPriceItem("Heineken / Spaten", "R$ 18,00")}
                {renderPriceItem("Original", "R$ 16,00")}
            </div>
            <div>
                <h4 className="text-[#FFC107] font-bold text-sm uppercase mb-1">Long Neck</h4>
                {renderPriceItem("Heineken", "R$ 12,00")}
                {renderPriceItem("Corona", "R$ 10,00")}
            </div>
            <div>
                <h4 className="text-[#FFC107] font-bold text-sm uppercase mb-1">Lata Grande (473ml)</h4>
                {renderPriceItem("Heineken", "R$ 10,00")}
                {renderPriceItem("Brahma / Spaten", "R$ 7,00")}
                {renderPriceItem("Budweiser", "R$ 6,00")}
            </div>
            <div>
                <h4 className="text-[#FFC107] font-bold text-sm uppercase mb-1">Lata Padrão / Pequena</h4>
                {renderPriceItem("Heineken", "R$ 8,00")}
                {renderPriceItem("Spaten/Bud/Original", "R$ 5,00")}
                {renderPriceItem("Brahma/Skol/Amstel/Itaipava", "R$ 5,00")}
            </div>
            <div>
                <h4 className="text-[#FFC107] font-bold text-sm uppercase mb-1">Prontas para Beber</h4>
                {renderPriceItem("Draft Chopp", "R$ 15,00")}
                {renderPriceItem("Xeque Mate", "R$ 12,00")}
                {renderPriceItem("Xeque Mate c/ Limão", "R$ 14,00")}
                {renderPriceItem("Skol Beats / GT", "R$ 12,00")}
            </div>
        </div>

        {/* NÃO ALCOÓLICOS */}
        {renderSectionTitle("Não Alcoólicos")}
        <div className="bg-neutral-800/50 p-4 rounded-lg border border-white/10">
            {renderPriceItem("Bally 2L", "R$ 15,00")}
            {renderPriceItem("Vibe 2L", "R$ 14,00")}
            {renderPriceItem("Red Bull", "R$ 14,00")}
            {renderPriceItem("Monster", "R$ 8,00")}
            {renderPriceItem("Coca-Cola 2L", "R$ 15,00")}
            {renderPriceItem("Fanta 2L", "R$ 14,00")}
            {renderPriceItem("Refris Lata Variados", "R$ 5,00 - 6,00")}
            {renderPriceItem("Água com Gás", "R$ 5,50")}
            {renderPriceItem("Água sem Gás", "R$ 4,00")}
        </div>

        {/* TABACARIA */}
        {renderSectionTitle("Tabacaria & Conveniência")}
        <div className="bg-neutral-800/50 p-4 rounded-lg border border-white/10">
            {renderPriceItem("Dunhill / Marlboro", "R$ 15,00")}
            {renderPriceItem("Rothmans / LM", "R$ 8,50 - 10,00")}
            {renderPriceItem("Narguilé Ziggy", "R$ 16,00")}
            {renderPriceItem("Narguilé Smyrna", "R$ 18,00")}
            {renderPriceItem("Carvão (unidade)", "R$ 1,50")}
            {renderPriceItem("Sessão Completa", "R$ 35,00")}
            {renderPriceItem("Sedas", "R$ 4,00 - 5,00")}
            {renderPriceItem("Piteiras", "R$ 4,00 - 6,00")}
            {renderPriceItem("Isqueiro Bic", "R$ 5,00")}
            {renderPriceItem("Salgadinhos / Trident", "R$ 3,50")}
            {renderPriceItem("Gelo", "R$ 5,00")}
        </div>

        {/* CONTATO FOOTER */}
        <div className="mt-12 mb-8 text-center border-t border-neutral-800 pt-8">
            <div className="flex flex-col items-center gap-2">
                <p className="text-white font-bold text-lg flex items-center gap-2">
                    <Phone size={18} className="text-[#FFC107]" /> (11) 93203-3480
                </p>
                <a 
                  href="https://instagram.com/ADEGA777_OFICIAL" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white font-bold text-lg flex items-center gap-2 hover:text-[#FFC107] transition-colors"
                >
                    <Instagram size={18} className="text-[#FFC107]" /> @ADEGA777_OFICIAL
                </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;