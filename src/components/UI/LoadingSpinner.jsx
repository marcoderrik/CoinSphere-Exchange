import React from 'react';
import { useSelector } from 'react-redux';
// Spinner di caricamento mostrato durante le richieste async

const LoadingSpinner = () => {
  // Recuperiamo il tema per colorare il testo
  const { mode } = useSelector(state => state.theme);

  return (
    <div className="flex justify-center items-center py-12">
      {/* Cerchio esterno e interno per animazione */}
      <div className="relative">
        <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
      </div>
      <span className={`ml-3 text-lg font-medium ${
        mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
      }`}>
        Caricamento...
      </span>
    </div>
  );
};

export default LoadingSpinner;
