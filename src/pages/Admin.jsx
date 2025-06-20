import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchCryptos } from '../store/cryptoSlice';
// Pannello di controllo riservato agli admin

const Admin = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, role } = useSelector(state => state.auth);
  const { cryptos } = useSelector(state => state.crypto);
  const { mode } = useSelector(state => state.theme);

  // Carichiamo i dati delle crypto al primo render
  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  // Blocco l'accesso se l'utente non è admin
  if (!isAuthenticated || role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  // Calcoli aggregati sulle criptovalute caricate
  const totalMarketCap = cryptos.reduce((total, crypto) => total + (crypto.market_cap || 0), 0);
  const totalVolume = cryptos.reduce((total, crypto) => total + (crypto.total_volume || 0), 0);

  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Admin Dashboard
          </h1>
          <p className={`text-lg ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Pannello di controllo amministrativo
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className={`p-6 rounded-lg ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-lg font-semibold mb-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Criptovalute Monitorate
            </h3>
            <p className={`text-3xl font-bold text-blue-600`}>
              {cryptos.length}
            </p>
          </div>

          <div className={`p-6 rounded-lg ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-lg font-semibold mb-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Market Cap Totale
            </h3>
            <p className={`text-3xl font-bold text-green-600`}>
              ${(totalMarketCap / 1e12).toFixed(1)}T
            </p>
          </div>

          <div className={`p-6 rounded-lg ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-lg font-semibold mb-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Volume 24h
            </h3>
            <p className={`text-3xl font-bold text-purple-600`}>
              ${(totalVolume / 1e9).toFixed(1)}B
            </p>
          </div>

          <div className={`p-6 rounded-lg ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-lg font-semibold mb-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Stato Sistema
            </h3>
            <p className={`text-3xl font-bold text-green-500`}>
              🟢 Online
            </p>
          </div>
        </div>

        {/* Top Cryptos Table */}
        <div className={`p-6 rounded-lg ${
          mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Top Criptovalute
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${
                  mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <th className={`text-left py-3 px-4 font-semibold ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Rank
                  </th>
                  <th className={`text-left py-3 px-4 font-semibold ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Nome
                  </th>
                  <th className={`text-right py-3 px-4 font-semibold ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Prezzo
                  </th>
                  <th className={`text-right py-3 px-4 font-semibold ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    24h %
                  </th>
                  <th className={`text-right py-3 px-4 font-semibold ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Market Cap
                  </th>
                </tr>
              </thead>
              <tbody>
                {cryptos.slice(0, 10).map((crypto, index) => (
                  <tr key={crypto.id} className={`border-b ${
                    mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <td className={`py-4 px-4 font-medium ${
                      mode === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {index + 1}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p className={`font-semibold ${
                            mode === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {crypto.name}
                          </p>
                          <p className={`text-sm ${
                            mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {crypto.symbol.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={`py-4 px-4 text-right font-medium ${
                      mode === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      ${crypto.current_price.toFixed(2)}
                    </td>
                    <td className={`py-4 px-4 text-right font-medium ${
                      crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className={`py-4 px-4 text-right font-medium ${
                      mode === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      ${(crypto.market_cap / 1e9).toFixed(2)}B
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;