"use client";

import React from 'react';

type ErrorMessageProps = {
  message: string;
  onRetry?: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="flex items-center justify-between p-4 border border-red-400 bg-red-100 rounded-lg">
      <div>
        <p className="text-red-700 font-medium">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Reintentar
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
