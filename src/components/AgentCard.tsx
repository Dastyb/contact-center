// src/components/AgentCard.tsx
import React from 'react';

type AgentCardProps = {
  name: string;
  status: 'disponible' | 'en llamada' | 'pausa';
  waitTime: string;
};

const statusColors = {
  disponible: 'bg-green-100 text-green-700',
  'en llamada': 'bg-red-100 text-red-700',
  pausa: 'bg-yellow-100 text-yellow-700',
};

const AgentCard: React.FC<AgentCardProps> = ({ name, status, waitTime }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">Tiempo de espera: {waitTime}</p>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}
      >
        {status}
      </span>
    </div>
  );
};

export default AgentCard;
