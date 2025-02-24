"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

type FilterBarProps = {
  onFilterChange: (filters: { status?: string; waitTime?: number }) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [status, setStatus] = useState<string>(searchParams.get('status') || '');
  const [waitTime, setWaitTime] = useState<number | undefined>(
    searchParams.get('waitTime') ? parseInt(searchParams.get('waitTime')!) : undefined
  );

  // Actualizar la URL y aplicar filtros
  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);

    if (status) {
      params.set('status', status);
    } else {
      params.delete('status');
    }

    if (waitTime !== undefined && !isNaN(waitTime)) {
      params.set('waitTime', waitTime.toString());
    } else {
      params.delete('waitTime');
    }

    // Actualizar la URL sin recargar la página
    router.push(`${pathname}?${params.toString()}`);

    // Pasar los filtros actualizados al componente padre
    onFilterChange({ status, waitTime });
  };

  // Limpiar filtros
  const clearFilters = () => {
    setStatus('');
    setWaitTime(undefined);
    router.push(pathname);
    onFilterChange({});
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      {/* Filtro por estado */}
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

      {/* Filtro por tiempo de espera */}
      <input
        type="number"
        placeholder="Tiempo de espera (min)"
        className="border p-2 rounded w-40"
        value={waitTime ?? ''}
        onChange={(e) => setWaitTime(e.target.value ? parseInt(e.target.value) : undefined)}
      />

      {/* Botón de aplicar filtros */}
      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Aplicar Filtros
      </button>

      {/* Botón de limpiar filtros */}
      <button
        onClick={clearFilters}
        className="bg-gray-300 px-4 py-2 rounded"
      >
        Limpiar
      </button>
    </div>
  );
};

export default FilterBar;
