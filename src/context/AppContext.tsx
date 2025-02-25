"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAgents, getClients, Agent, Client } from '@/services/api';
import { socket } from '@/services/socket';

interface AppContextType {
  agents: Agent[];
  clients: Client[];
  loading: boolean;
  error: string | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos iniciales desde la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const agentsData = await getAgents();
        const clientsData = await getClients();
        setAgents(agentsData);
        setClients(clientsData);
      } catch (err) {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Escuchar actualizaciones en tiempo real
  useEffect(() => {
    socket.on('updateAgents', setAgents);
    socket.on('updateClients', setClients);

    return () => {
      socket.off('updateAgents');
      socket.off('updateClients');
    };
  }, []);

  return (
    <AppContext.Provider value={{ agents, clients, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de un AppProvider');
  }
  return context;
};
