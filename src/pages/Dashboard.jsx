import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
// Dashboard personale per l'utente

const Dashboard = () => {
  const { isAuthenticated, user, portfolio } = useSelector(state => state.auth);
  const { mode } = useSelector(state => state.theme);

  // Se l'utente non è loggato lo reindirizziamo al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Calcolo del valore totale degli asset posseduti
  const totalPortfolioValue = portfolio.holdings.reduce((total, holding) => total + holding.value, 0);
  const totalValue = portfolio.balance + totalPortfolioValue;

  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Benvenuto, {user}!
          </h1>
          <p className={`text-lg ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Ecco il tuo portfolio di trading
          </p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-lg ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-lg font-semibold mb-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Saldo Disponibile
            </h3>
            <p className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              ${portfolio.balance.toFixed(2)}
            </p>
          </div>

          <div className={`p-6 rounded-lg ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-lg font-semibold mb-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Valore Investimenti
            </h3>
            <p className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              ${totalPortfolioValue.toFixed(2)}
            </p>
          </div>

          <div className={`p-6 rounded-lg ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-lg font-semibold mb-2 ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Valore Totale
            </h3>
            <p className={`text-2xl font-bold text-green-600`}>
              ${totalValue.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Holdings */}
        <div className={`p-6 rounded-lg ${
          mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Le Tue Crypto
          </h2>

          {portfolio.holdings.length === 0 ? (
            <div className="text-center py-8">
              <p className={`text-lg ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Non hai ancora investimenti in criptovalute
              </p>
            <Link
                to="/mercati"
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Inizia a Investire
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${
                    mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <th className={`text-left py-3 px-4 font-semibold ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Asset
                    </th>
                    <th className={`text-right py-3 px-4 font-semibold ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Quantità
                    </th>
                    <th className={`text-right py-3 px-4 font-semibold ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Valore
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Elenco degli asset posseduti */}
                  {portfolio.holdings.map((holding, index) => (
                    <tr key={index} className={`border-b ${
                      mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={holding.image}
                            alt={holding.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className={`font-semibold ${
                              mode === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                              {holding.name}
                            </p>
                            <p className={`text-sm ${
                              mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              {holding.symbol.toUpperCase()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className={`py-4 px-4 text-right font-medium ${
                        mode === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {holding.amount.toFixed(6)}
                      </td>
                      <td className={`py-4 px-4 text-right font-bold ${
                        mode === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        ${holding.value.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;