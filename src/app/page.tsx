"use client";

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="relative min-h-screen md:h-screen flex items-center justify-center 
                    bg-[url('/fondo-azul.jpg')] bg-cover bg-center bg-no-repeat 
                    text-white font-['Open Sans']">

      <div className="absolute top-8 left-8">
        <img src="/logo-comunicall.png" alt="Logo Comunicall" className="h-12 md:h-12 lg:w-[320px] lg:h-auto xl:w-[320px] xl:h-auto " />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6">
        
        <div className="text-center md:w-1/2 mt-4 md:mb-8">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-[#021d49]">
            Centro de <br />
            <span className="text-white">Contacto</span>
          </h1>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4">
            <Link href="/agentes">
              <button className="bg-white text-blue-500 px-6 py-2 rounded-lg hover:bg-gray-200">
                Ver Agentes
              </button>
            </Link>

            <Link href="/clientes">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                Ver Clientes
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex justify-center md:justify-end w-1/2">
          <img
            src="/imagen-mujer.png"
            alt="Asesora"
            className="h-30 md:h-30 lg:w-[450px] lg:h-auto xl:w-[520px] xl:h-auto 
                       mt-6 md:mt-10 xl:mt-20 xl:ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
