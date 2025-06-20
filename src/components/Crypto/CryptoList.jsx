// Lista delle criptovalute mostrata nella pagina Mercati
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptos } from '../../store/cryptoSlice';
import CryptoItem from './CryptoItem';
import LoadingSpinner from '../UI/LoadingSpinner';

export default function CryptoList() {
  const dispatch = useDispatch();
  // Stato proveniente dallo store redux
  const { cryptos, loading, error } = useSelector(s => s.crypto);
  const { mode } = useSelector(state => state.theme);

  // Al montaggio del componente effettuiamo la chiamata API
  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  // Gestione stati di caricamento ed errore
  if (loading) return <LoadingSpinner />;
  if (error)   return <div className="text-red-600">{error}</div>;

  return (
    <ul className={`divide-y ${mode === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
      {/* Cicliamo i risultati e mostriamo ogni crypto */}
      {cryptos.map(c => <CryptoItem key={c.id} crypto={c} />)}
    </ul>
  );
}
