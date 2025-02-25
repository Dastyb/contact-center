// src/services/socket.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const intervals: Record<string, NodeJS.Timeout> = {};

export const socket = {
  // Suscribirse a eventos simulados
  on: (event: string, callback: (data: any) => void) => {
    if (event === 'updateAgents' || event === 'updateClients') {
      if (intervals[event]) return;

      intervals[event] = setInterval(async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/simulate`);
          const { agents, clients } = await response.json();

          if (event === 'updateAgents') callback(agents);
          if (event === 'updateClients') callback(clients);
        } catch (error) {
          console.error(`Error en la simulación de ${event}:`, error);
        }
      }, 10000);

      console.log(`Simulación iniciada para el evento: ${event}`);
    }
  },

  // Cancelar la suscripción
  off: (event: string) => {
    if (intervals[event]) {
      clearInterval(intervals[event]);
      delete intervals[event];
      console.log(`Simulación detenida para el evento: ${event}`);
    }
  },
};
