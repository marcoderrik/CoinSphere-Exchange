import React from 'react';
import { useSelector } from 'react-redux';
import CryptoList from '../components/Crypto/CryptoList';
// Pagina che mostra l'elenco completo delle criptovalute

export default function CryptoListPage() {
  // Tema corrente
  const { mode } = useSelector(state => state.theme);
  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto p-4">
        <h1 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Mercati Crypto</h1>
        <div className={`${mode === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
          <CryptoList />
        </div>
      </div>
    </div>
  );
}
