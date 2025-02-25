import axios from 'axios';

// Interfaces para Agentes y Clientes
export interface Agent {
  id: number;
  name: string;
  status: 'disponible' | 'en llamada' | 'pausa' | 'desconocido';
}

export interface Client {
  id: number;
  name: string;
  waitTime: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

if (!API_BASE_URL) {
  throw new Error('La variable NEXT_PUBLIC_API_URL no está configurada.');
}

export const getAgents = async (): Promise<Agent[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/simulate`);
    return response.data.agents;
  } catch (error) {
    console.error('Error al obtener los agentes:', error);
    throw error;
  }
};

export const getClients = async (): Promise<Client[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/simulate`);
    return response.data.clients;
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    throw error;
  }
};
