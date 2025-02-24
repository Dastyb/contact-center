"use client";

import React, { useState } from 'react';
import FilterBar from '@/components/FilterBar';
import AgentCard from '@/components/AgentCard';

const TestPage = () => {
  const [filters, setFilters] = useState<{ status?: string; waitTime?: number }>({});

  const agents = [
    { name: 'Juan Pérez', status: 'disponible', waitTime: 2 },
    { name: 'Ana Gómez', status: 'en llamada', waitTime: 5 },
    { name: 'Carlos Ruiz', status: 'pausa', waitTime: 3 },
  ];

  // Filtrar la lista según los parámetros seleccionados
  const filteredAgents = agents.filter((agent) => {
    const matchesStatus = filters.status ? agent.status === filters.status : true;
    const matchesWaitTime = filters.waitTime ? agent.waitTime <= filters.waitTime : true;
    return matchesStatus && matchesWaitTime;
  });

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Prueba de Filtro</h1>

      {/* Componente de Filtros */}
      <FilterBar onFilterChange={setFilters} />

      {/* Lista de Agentes Filtrados */}
      <div className="space-y-2">
        {filteredAgents.length > 0 ? (
          filteredAgents.map((agent, index) => (
            <AgentCard
              key={index}
              name={agent.name}
              status={agent.status as 'disponible' | 'en llamada' | 'pausa'}
              waitTime={`${agent.waitTime} minutos`}
            />
          ))
        ) : (
          <p>No hay agentes que coincidan con los filtros.</p>
        )}
      </div>
    </div>
  );
};

export default TestPage;