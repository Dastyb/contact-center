"use client";

import React, { useEffect, useState } from 'react';
import AgentCard from '@/components/AgentCard';
import FilterBar from '@/components/FilterBar';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';
import { useSearchParams } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

const AgentsPage = () => {
  const searchParams = useSearchParams();
  const { agents, loading, error } = useAppContext();
  const [filteredAgents, setFilteredAgents] = useState(agents);

  // Filtrar agentes según el estado en la URL
  useEffect(() => {
    const status = searchParams.get('status');
    const filtered = agents.filter((agent) =>
      status ? agent.status.toLowerCase() === status.toLowerCase() : true
    );
    setFilteredAgents(filtered);
  }, [searchParams, agents]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message="Error al cargar la lista de agentes." onRetry={() => window.location.reload()} />;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Agentes</h1>
      <FilterBar filterType="agents" onFilterChange={() => {}} />

      <div className="space-y-4 mt-4">
        {filteredAgents.length > 0 ? (
          filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              status={agent.status as 'disponible' | 'en llamada' | 'pausa'}
            />
          ))
        ) : (
          <p>No hay agentes que coincidan con el filtro.</p>
        )}
      </div>
    </div>
  );
};

export default AgentsPage;
