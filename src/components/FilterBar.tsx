"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

type FilterBarProps = {
  filterType: 'agents' | 'clients'; // Define si es para agentes o clientes
  onFilterChange: (filters: { status?: string; waitTime?: number }) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ filterType, onFilterChange }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [status, setStatus] = useState<string>(searchParams.get('status') || '');
  const [waitTime, setWaitTime] = useState<number | undefined>(
    searchParams.get('waitTime') ? parseInt(searchParams.get('waitTime')!) : undefined
  );

  // Aplicar filtros y actualizar la URL
  const applyFilters = () => {
    const params = new URLSearchParams();

    if (filterType === 'agents' && status) params.set('status', status);
    if (filterType === 'clients' && waitTime !== undefined) params.set('waitTime', waitTime.toString());

    router.push(`${pathname}?${params.toString()}`);
    onFilterChange({ status, waitTime });
  };

  // Limpiar filtros y resetear la URL
  const clearFilters = () => {
    setStatus('');
    setWaitTime(undefined);
    router.push(pathname);
    onFilterChange({});
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      {filterType === 'agents' && (
        <select
          className="border p-2 rounded w-40"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Todos los estados</option>
          <option value="disponible">Disponible</option>
          <option value="en llamada">En llamada</option>
          <option value="pausa">Pausa</option>
        </select>
      )}

      {filterType === 'clients' && (
        <input
          type="number"
          placeholder="Tiempo de espera (min)"
          className="border p-2 rounded w-40"
          value={waitTime ?? ''}
          onChange={(e) => setWaitTime(e.target.value ? parseInt(e.target.value) : undefined)}
        />
      )}

      <button onClick={applyFilters} className="bg-blue-500 text-white px-4 py-2 rounded">
        Aplicar Filtros
      </button>

      <button onClick={clearFilters} className="bg-gray-300 px-4 py-2 rounded">
        Limpiar
      </button>
    </div>
  );
};

export default FilterBar;