"use client";

import React, { useEffect, useState } from 'react';
import AgentCard from '@/components/AgentCard';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';

const AgentsPage = () => {
  const [agents, setAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('/mockData.json');
        const data = await response.json();
        setAgents(data.agents);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return <ErrorMessage message="Error al cargar la lista de agentes." onRetry={() => window.location.reload()} />;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Agentes</h1>
      <div className="space-y-4">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            name={agent.name}
            status={agent.status as 'disponible' | 'en llamada' | 'pausa'}
            waitTime={`${agent.waitTime} minutos`}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentsPage;
