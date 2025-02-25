import axios from 'axios';

// Definición de interfaces para Agentes y Clientes
export interface Agent {
  id: number;
  name: string;
  status: 'disponible' | 'en llamada' | 'pausa';
}

export interface Client {
  id: number;
  name: string;
  waitTime: number;
}

// URL base para el mockData.json
const API_BASE_URL = '/mockData.json';

// Obtener la lista de agentes
export const getAgents = async (): Promise<Agent[]> => {
  try {
    const response = await axios.get(API_BASE_URL);
    const agents: Agent[] = response.data.agents.map((agent: any) => ({
      id: agent.id,
      name: agent.name,
      status: agent.status,
    }));
    return agents;
  } catch (error) {
    console.error('Error al obtener los agentes:', error);
    throw error;
  }
};

// Obtener la lista de clientes
export const getClients = async (): Promise<Client[]> => {
  try {
    const response = await axios.get(API_BASE_URL);
    const clients: Client[] = response.data.clients.map((client: any) => ({
      id: client.id,
      name: client.name,
      waitTime: Number(client.waitTime), // Convertir a número para asegurar consistencia
    }));
    return clients;
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    throw error;
  }
};
