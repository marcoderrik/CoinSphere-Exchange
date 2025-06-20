import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
// Header con navigazione e switch tema

const Header = () => {
  const dispatch = useDispatch();
  // Dallo store leggiamo se l'utente è loggato e il suo ruolo
  const { isAuthenticated, role } = useSelector(state => state.auth);
  // Tema corrente (chiaro/scuro)
  const { mode } = useSelector(state => state.theme);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      mode === 'dark'
        ? 'bg-gray-900 border-gray-700'
        : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src="/logo.png"
              alt="Logo CoinSphere"
              className="w-10 h-10 mr-2"
            />
            <span
              className={`text-xl font-bold ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              CoinSphere
            </span>
          </Link>
            {/* Collegamenti principali */}
            <nav className="flex-1 flex justify-center space-x-4">
            <Link
              to="/mercati"
              className={`text-sm font-semibold ${
                mode === 'dark'
                  ? 'text-white hover:text-blue-400'
                  : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              Mercati
            </Link>
            {isAuthenticated && (
              <Link
                to="/dashboard"
                className={`text-sm font-semibold ${
                  mode === 'dark'
                    ? 'text-white hover:text-blue-400'
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Dashboard
              </Link>
            )}
            {/* Link visibile solo agli amministratori */}
            {isAuthenticated && role === 'admin' && (
              <Link
                to="/admin"
                className={`text-sm font-semibold ${
                  mode === 'dark'
                    ? 'text-white hover:text-blue-400'
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Admin
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Pulsante per cambiare tema */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-2 rounded-lg transition-colors ${
                mode === 'dark'
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {mode === 'dark' ? '☀️' : '🌙'}
            </button>

            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className={`text-sm font-semibold ${
                  mode === 'dark'
                    ? 'text-white hover:text-blue-400'
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className={`text-sm font-semibold ${
                  mode === 'dark'
                    ? 'text-white hover:text-blue-400'
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
