// src/components/ClientCard.tsx
import React from 'react';

type ClientCardProps = {
  name: string;
  waitTime: number; 
};

const ClientCard: React.FC<ClientCardProps> = ({ name, waitTime }) => {
  // tiempo espera mayor a 5 minutos
  const isDelayed = waitTime > 5;

  return (
    <div className={`border rounded-lg p-4 shadow-md bg-white flex justify-between items-center ${isDelayed ? 'border-red-500' : 'border-gray-300'}`}>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className={`text-sm ${isDelayed ? 'text-red-600' : 'text-gray-600'}`}>
          Tiempo de espera: {waitTime} {waitTime === 1 ? 'minuto' : 'minutos'}
        </p>
      </div>
      {isDelayed && (
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
          Espera prolongada
        </span>
      )}
    </div>
  );
};

export default ClientCard;
