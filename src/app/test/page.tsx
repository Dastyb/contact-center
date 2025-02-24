// src/app/test/page.tsx
import React from 'react';
import ClientCard from '@/components/ClientCard';

const TestPage = () => {
  const clients = [
    { name: 'Pedro Ramírez', waitTime: 3 },
    { name: 'María López', waitTime: 7 },
    { name: 'Luis Torres', waitTime: 10 },
  ];

  return (
    <div className="p-8 space-y-4">
      {clients.map((client, index) => (
        <ClientCard key={index} name={client.name} waitTime={client.waitTime} />
      ))}
    </div>
  );
};

export default TestPage;

