// Rappresenta una singola riga della lista delle criptovalute
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CryptoItem({ crypto }) {
  // Recuperiamo il tema corrente per applicare gli stili corretti
  const { mode } = useSelector(state => state.theme);

  return (
    <li className={`p-2 flex justify-between items-center ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      {/* Link alla pagina di dettaglio della crypto */}
      <Link to={`/crypto/${crypto.id}`} className="flex items-center space-x-2 font-medium">
        <img src={crypto.image} alt={crypto.name} className="w-5 h-5" />
        <span>{crypto.name}</span>
        <span className="uppercase text-sm text-gray-500">{crypto.symbol}</span>
      </Link>
      {/* Prezzo corrente formattato */}
      <span className={mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
        ${crypto.current_price.toLocaleString()}
      </span>
    </li>
  );
}
