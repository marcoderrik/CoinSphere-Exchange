
import React from 'react';
import { useSelector } from 'react-redux';
// Logo utilizzato nell'header

const Logo = () => {
  // Tema attuale per scegliere i colori del testo
  const { mode } = useSelector(state => state.theme);
  const logoSrc = '/logo.png';

  return (
    <div className="flex items-center">
    {/* Immagine del logo */}
    <img
      src={logoSrc}
      alt="Logo CoinSphere Exchange"
      className="w-10 h-10 mr-3"
    />
    <div className="flex flex-col">
    {/* Nome applicazione */}
    <span className={`font-bold text-xl leading-tight tracking-tight ${
      mode === 'dark' ? 'text-white' : 'text-gray-900'
    }`}>
      CoinSphere
    </span>
    {/* Tagline */}
    <span className="text-xs bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-semibold -mt-0.5">
      Exchange
    </span>
    </div>
</div>
  );
};

export default Logo;
