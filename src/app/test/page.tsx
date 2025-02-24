"use client";

import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

const TestPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de 3 segundos
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Prueba de Loading</h1>
      {isLoading ? <Loading /> : <p>Datos cargados correctamente 🎉</p>}
    </div>
  );
};

export default TestPage;
