// src/app/api/simulate/route.ts
import { NextResponse } from 'next/server';

let agents = [
  { id: 1, name: 'Juan Pérez', status: 'disponible' },
  { id: 2, name: 'Carlos Ruiz', status: 'pausa' },
  { id: 3, name: 'María López', status: 'disponible' },
  { id: 4, name: 'Ana García', status: 'en llamada' },
];

let clients = [
  { id: 1, name: 'Pedro Ramírez', waitTime: 5 },
  { id: 2, name: 'José González', waitTime: 6 },
  { id: 3, name: 'Luisa Rodríguez', waitTime: 1 },
  { id: 4, name: 'Miguel Sánchez', waitTime: 9 },
  { id: 5, name: 'Sofía Martínez', waitTime: 3 },
];

const getRandomStatus = () => {
    const statuses = ['disponible', 'pausa', 'en llamada'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

export async function GET() {
  agents = agents.map(agent => ({
    ...agent,
    status: getRandomStatus(),
  }));

  clients = clients.map(client => ({
    ...client,
    waitTime: Math.floor(Math.random() * 15) + 1,
  }));

  return NextResponse.json({ agents, clients });
}
