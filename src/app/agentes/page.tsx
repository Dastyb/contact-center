"use client";

import React, { useEffect, useState } from 'react';
import AgentCard from '@/components/AgentCard';
import FilterBar from '@/components/FilterBar';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';
import { useSearchParams } from 'next/navigation';

const AgentsPage = () => {
  const searchParams = useSearchParams();
  const [agents, setAgents] = useState<any[]>([]);
  const [filteredAgents, setFilteredAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('/mockData.json');
        if (!response.ok) throw new Error('Error al cargar datos');
        const data = await response.json();
        setAgents(data.agents);
        setFilteredAgents(data.agents);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  useEffect(() => {
    const status = searchParams.get('status');
    const filtered = agents.filter((agent) =>
      status ? agent.status === status : true
    );
    setFilteredAgents(filtered);
  }, [searchParams, agents]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message="Error al cargar la lista de agentes." onRetry={() => window.location.reload()} />;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Agentes</h1>
      
      {/* Filtro solo por estado */}
      <FilterBar filterType="agents" onFilterChange={() => {}} />

      <div className="space-y-4 mt-4">
        {filteredAgents.length > 0 ? (
          filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              status={agent.status as 'disponible' | 'en llamada' | 'pausa'}
              //waitTime={`${agent.waitTime} minutos`}
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
