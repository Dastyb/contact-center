"use client";

import React, { useEffect, useState } from 'react';
import ClientCard from '@/components/ClientCard';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';

const ClientsPage = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('/mockData.json');
        const data = await response.json();
        setClients(data.clients);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return <ErrorMessage message="Error al cargar la lista de clientes." onRetry={() => window.location.reload()} />;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Clientes</h1>
      <div className="space-y-4">
        {clients.map((client) => (
          <ClientCard key={client.id} name={client.name} waitTime={client.waitTime} />
        ))}
      </div>
    </div>
  );
};

export default ClientsPage;
