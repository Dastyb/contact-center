// src/app/test/page.tsx
import React from 'react';
import AgentCard from '@/components/AgentCard';

const TestPage = () => {
  const agents = [
    { name: 'Juan Pérez', status: 'disponible', waitTime: '2 minutos' },
    { name: 'Ana Gómez', status: 'en llamada', waitTime: '5 minutos' },
    { name: 'Carlos Ruiz', status: 'pausa', waitTime: '3 minutos' },
  ];

  return (
    <div className="p-8 space-y-4">
      {agents.map((agent, index) => (
        <AgentCard
          key={index}
          name={agent.name}
          status={agent.status as 'disponible' | 'en llamada' | 'pausa'}
          waitTime={agent.waitTime}
        />
      ))}
    </div>
  );
};

export default TestPage;
