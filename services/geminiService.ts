import { GoogleGenAI, Type } from "@google/genai";
import { GuestCount, BBQPlan } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const calculateBBQSupplies = async (guests: GuestCount): Promise<BBQPlan> => {
  if (!apiKey) {
    throw new Error("API Key not configured");
  }

  const prompt = `
    Calcule uma lista de compras para um churrasco brasileiro com base no seguinte número de convidados:
    - Homens: ${guests.men}
    - Mulheres: ${guests.women}
    - Crianças: ${guests.children}

    Considere um consumo médio para um evento de 4 a 5 horas.
    Retorne uma lista detalhada de carnes, bebidas (cerveja, refrigerante, água) e acompanhamentos básicos (pão de alho, farofa, vinagrete).
    Também inclua uma dica curta e útil para o churrasqueiro.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            items: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  item: { type: Type.STRING, description: "Nome do item (ex: Picanha, Cerveja)" },
                  quantity: { type: Type.STRING, description: "Quantidade estimada com unidade (ex: 2kg, 5 latas)" },
                  category: { type: Type.STRING, description: "Categoria: 'meat', 'drink' ou 'side'" }
                },
                required: ["item", "quantity", "category"]
              }
            },
            tips: { type: Type.STRING, description: "Uma dica valiosa para o churrasco" }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const data = JSON.parse(text);
    
    // Map the raw response to our strict types
    return {
      supplies: data.items.map((i: any) => ({
        item: i.item,
        quantity: i.quantity,
        category: i.category as 'meat' | 'drink' | 'side'
      })),
      tips: data.tips
    };

  } catch (error) {
    console.error("Error calculating BBQ supplies:", error);
    throw error;
  }
};