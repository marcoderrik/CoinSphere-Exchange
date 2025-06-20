import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Footer con link rapidi e copyright

const Footer = () => {
  // Tema corrente per applicare colori adeguati
  const { mode } = useSelector(state => state.theme);

  return (
    <footer
      className={`border-t mt-auto ${
        mode === 'dark'
          ? 'bg-gray-900 border-gray-700 text-gray-400'
          : 'bg-gray-50 border-gray-200 text-gray-600'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
        <span>© 2024 CoinSphere</span>
        <nav className="flex space-x-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="/mercati">Mercati</Link>
          <a href="#">Contatti</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;