import axios from 'axios';

const API_BASE_URL = '/mockData.json';

// Obtener la lista de agentes
export const getAgents = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.agents;
  } catch (error) {
    console.error('Error al obtener los agentes:', error);
    throw error;
  }
};

// Obtener la lista de clientes
export const getClients = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.clients;
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    throw error;
  }
};
