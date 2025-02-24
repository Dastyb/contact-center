"use client";

import React, { useState } from 'react';
import ErrorMessage from '@/components/ErrorMessage';

const TestPage = () => {
  const [hasError, setHasError] = useState(true);

  const handleRetry = () => {
    alert('Intentando nuevamente...');
    setHasError(false); // Simula que el error se resolvió
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Prueba de ErrorMessage</h1>

      {hasError ? (
        <ErrorMessage
          message="No se pudieron cargar los datos. Inténtalo nuevamente."
          onRetry={handleRetry}
        />
      ) : (
        <p className="text-green-600">Datos cargados correctamente 🎉</p>
      )}
    </div>
  );
};

export default TestPage;
