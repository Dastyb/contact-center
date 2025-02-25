// src/context/AppContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAgents, getClients } from '@/services/api';

// Definir el tipo de datos para agentes y clientes
interface Agent {
  id: number;
  name: string;
  status: string;
}

interface Client {
  id: number;
  name: string;
  waitTime: number;
}

interface AppContextType {
  agents: Agent[];
  clients: Client[];
  loading: boolean;
  error: string | null;
}

// Crear el contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Proveedor del contexto
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos desde la API Mock
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

  return (
    <AppContext.Provider value={{ agents, clients, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar el contexto
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de un AppProvider');
  }
  return context;
};
