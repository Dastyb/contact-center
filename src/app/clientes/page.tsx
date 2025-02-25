"use client";

import React, { useEffect, useState } from 'react';
import ClientCard from '@/components/ClientCard';
import FilterBar from '@/components/FilterBar';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';
import { useSearchParams } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

const ClientsPage = () => {
  const searchParams = useSearchParams();
  const { clients, loading, error } = useAppContext();
  const [filteredClients, setFilteredClients] = useState(clients);

  // Filtrar clientes según el parámetro de búsqueda
  useEffect(() => {
    const waitTime = searchParams.get('waitTime') ? parseInt(searchParams.get('waitTime')!) : undefined;
    const filtered = clients.filter((client) =>
      waitTime ? client.waitTime <= waitTime : true
    );
    setFilteredClients(filtered);
  }, [searchParams, clients]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message="Error al cargar la lista de clientes." onRetry={() => window.location.reload()} />;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Clientes</h1>

      {/* Filtro solo por tiempo de espera */}
      <FilterBar filterType="clients" onFilterChange={() => {}} />

      <div className="space-y-4 mt-4">
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <ClientCard key={client.id} name={client.name} waitTime={client.waitTime} />
          ))
        ) : (
          <p>No hay clientes que coincidan con el filtro.</p>
        )}
      </div>
    </div>
  );
};

export default ClientsPage;
