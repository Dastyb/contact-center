// src/hooks/useWebSocket.ts
import { useEffect } from 'react';
import { socket } from '@/services/socket';

export const useWebSocket = (event: string, callback: (data: any) => void) => {
  useEffect(() => {
    socket.on(event, callback);
    console.log(`Suscrito al evento: ${event}`);

    return () => {
      socket.off(event);
      console.log(`Desuscrito del evento: ${event}`);
    };
  }, [event, callback]);
};
