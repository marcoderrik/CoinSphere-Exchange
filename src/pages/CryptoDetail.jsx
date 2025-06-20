import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoDetail } from '../store/cryptoSlice';
// Pagina di dettaglio pera singola criptovaluta
import OrderForm from '../components/Trading/OrderForm';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const CryptoDetail = () => {
  // Leggiamo l'id dalla URL
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCrypto, loading, error } = useSelector(state => state.crypto);
  const { mode } = useSelector(state => state.theme);

  // Al cambio dell'id effettuiamo il fetch dei dettagli
  useEffect(() => {
    if (id) {
      dispatch(fetchCryptoDetail(id));
    }
  }, [dispatch, id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Errore: {error}</div>;
  if (!selectedCrypto) return <div>Nessun dato</div>;

  // Formatta il prezzo in USD
  const formatPrice = (price) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 8
    }).format(price);
  };

  // Formatta le market cap con le lettere per indicare gli ordini di grandezza
  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap?.toLocaleString() || 'N/A'}`;
  };

  const priceChange = selectedCrypto.market_data?.price_change_percentage_24h || 0;
  const isPositive = priceChange >= 0;

  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className={`p-6 rounded-lg border mb-8 ${mode === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={selectedCrypto.image?.large}
                alt={selectedCrypto.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h1 className={`text-3xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {selectedCrypto.name}
                </h1>
                <p className={`text-lg uppercase font-medium ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {selectedCrypto.symbol}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className={`text-3xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {formatPrice(selectedCrypto.market_data?.current_price?.usd)}
              </p>
              <p className={`text-lg font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? '+' : ''}{priceChange.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        {/* Descrizione dettagliata */}
        <div className="mt-8">
          <p className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'} whitespace-pre-line`}>
            {selectedCrypto.description?.en || 'Descrizione non disponibile.'}
          </p>
        </div>

        <OrderForm crypto={{
          name: selectedCrypto.name,
          symbol: selectedCrypto.symbol,
          image: selectedCrypto.image?.small,
          current_price: selectedCrypto.market_data?.current_price?.usd
        }} />
      </div>
    </div>
  );
};

export default CryptoDetail;