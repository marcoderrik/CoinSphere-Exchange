import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePortfolio } from '../../store/authSlice';
// Form di acquisto per una determinata criptovaluta

const OrderForm = ({ crypto }) => {
  const dispatch = useDispatch();
  // Leggiamo tema e dati utente dallo store
  const { mode } = useSelector(state => state.theme);
  const { portfolio, isAuthenticated } = useSelector(state => state.auth);

  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState(crypto?.current_price || 0);

  // Gestione invio dell'ordine
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert('Devi effettuare il login per fare trading');
      return;
    }

    if (!amount) {
      alert('Inserisci quantità');
      return;
    }

    // Calcoliamo il costo totale dell'operazione
    const total = parseFloat(amount) * parseFloat(price);
    const newBalance = portfolio.balance - total;
    const newHoldings = [...portfolio.holdings];
    // Verifichiamo se l'utente possiede già questo asset
    const existingHolding = newHoldings.find(h => h.symbol === crypto.symbol);

    if (existingHolding) {
      existingHolding.amount += parseFloat(amount);
      existingHolding.value = existingHolding.amount * crypto.current_price;
    } else {
      newHoldings.push({
        symbol: crypto.symbol,
        name: crypto.name,
        amount: parseFloat(amount),
        value: total,
        image: crypto.image
      });
    }

    // Aggiorniamo il portfolio nello store
    dispatch(updatePortfolio({
      balance: newBalance,
      holdings: newHoldings
    }));

    alert('Ordine di acquisto eseguito con successo!');
    setAmount('');
  };

  if (!crypto) return null;

  return (
    <div className={`p-6 rounded-lg border ${
      mode === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <h3 className={`text-xl font-bold mb-4 ${
        mode === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Trading {crypto.name}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Quantità
          </label>
          <input
            type="number"
            step="0.000001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg transition-colors ${
              mode === 'dark'
                ? 'bg-gray-700 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="0.00"
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${
            mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Prezzo (USD)
          </label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg transition-colors ${
              mode === 'dark'
                ? 'bg-gray-700 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>

        {/* Riepilogo del costo totale */}
        <div className={`p-3 rounded-lg ${
          mode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <div className="flex justify-between items-center">
            <span className={`text-sm ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Totale:
            </span>
            <span className={`font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {(parseFloat(amount || 0) * parseFloat(price || 0)).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Pulsante di conferma acquisto */}
        <button
          type="submit"
          disabled={!isAuthenticated}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            !isAuthenticated
              ? mode === 'dark' ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {!isAuthenticated
            ? 'Login richiesto'
            : `Compra ${crypto.symbol.toUpperCase()}`
          }
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
