import React, { useState } from 'react';
import { calculateBBQSupplies } from '../services/geminiService';
import { BBQPlan, GuestCount } from '../types';
import { Calculator, Utensils, Beer, Flame, Loader2 } from 'lucide-react';

const Churrascometro: React.FC = () => {
  const [guests, setGuests] = useState<GuestCount>({ men: 0, women: 0, children: 0 });
  const [plan, setPlan] = useState<BBQPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    if (guests.men === 0 && guests.women === 0 && guests.children === 0) {
      return;
    }
    
    setLoading(true);
    setError('');
    setPlan(null);
    
    try {
      const result = await calculateBBQSupplies(guests);
      setPlan(result);
    } catch (err) {
      setError('Não foi possível calcular agora. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const updateGuests = (type: keyof GuestCount, delta: number) => {
    setGuests(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta)
    }));
  };

  const getIcon = (category: string) => {
    switch(category) {
      case 'meat': return <Utensils size={18} />;
      case 'drink': return <Beer size={18} />;
      default: return <Flame size={18} />;
    }
  };

  return (
    <div className="bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-700 w-full max-w-md mx-auto mb-8">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <Calculator className="text-ember-500" />
        <h2 className="text-2xl font-display text-white">Churrascômetro IA</h2>
      </div>

      <p className="text-neutral-400 text-center mb-6 text-sm">
        Vai levar algo? Calcule a quantidade ideal baseada no número de pessoas que você está levando!
      </p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Homens', key: 'men' as const },
          { label: 'Mulheres', key: 'women' as const },
          { label: 'Crianças', key: 'children' as const },
        ].map((type) => (
          <div key={type.key} className="flex flex-col items-center bg-neutral-900 p-3 rounded-lg border border-neutral-700">
            <span className="text-neutral-300 text-sm mb-2">{type.label}</span>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => updateGuests(type.key, -1)}
                className="w-8 h-8 rounded-full bg-neutral-700 text-white flex items-center justify-center hover:bg-neutral-600"
              >
                -
              </button>
              <span className="text-xl font-bold w-6 text-center">{guests[type.key]}</span>
              <button 
                onClick={() => updateGuests(type.key, 1)}
                className="w-8 h-8 rounded-full bg-ember-600 text-white flex items-center justify-center hover:bg-ember-500"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleCalculate}
        disabled={loading || (guests.men + guests.women + guests.children === 0)}
        className="w-full py-3 bg-ember-600 hover:bg-ember-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all flex items-center justify-center space-x-2 mb-6"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" />
            <span>Calculando com IA...</span>
          </>
        ) : (
          <>
            <Flame />
            <span>Calcular Quantidades</span>
          </>
        )}
      </button>

      {error && <p className="text-red-400 text-center text-sm">{error}</p>}

      {plan && (
        <div className="animate-fade-in bg-neutral-900 rounded-lg p-4 border border-neutral-700">
          <h3 className="text-ember-500 font-bold mb-3 flex items-center gap-2">
             Sugestão de Compras
          </h3>
          <ul className="space-y-2 mb-4">
            {plan.supplies.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between text-sm border-b border-neutral-800 pb-2 last:border-0">
                <span className="flex items-center text-neutral-300 gap-2">
                  <span className="text-ember-600">{getIcon(item.category)}</span>
                  {item.item}
                </span>
                <span className="font-bold text-white">{item.quantity}</span>
              </li>
            ))}
          </ul>
          {plan.tips && (
            <div className="bg-ember-900/20 p-3 rounded border border-ember-900/50">
              <p className="text-xs text-ember-200 italic">💡 Dica do Mestre: {plan.tips}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Churrascometro;