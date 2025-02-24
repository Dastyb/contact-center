"use client";

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Centro de Contacto</h1>

      <div className="space-y-4">
        <Link href="/agentes">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Ver Agentes
          </button>
        </Link>

        <Link href="/clientes">
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 ml-4">
            Ver Clientes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
