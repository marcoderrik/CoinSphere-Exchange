import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Pagina principale con presentazione del sito

const Homepage = () => {
  // Recuperiamo il tema corrente
  const { mode } = useSelector(state => state.theme);

  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
      {/* Sezione principale (hero) */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Il Futuro del Trading 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              È Qui
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${
            mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Compra, vendi e scambia criptovalute con la piattaforma più sicura e innovativa del mercato
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/mercati"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Inizia a Tradare
            </Link>
            <Link
              to="/login"
              className={`border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                mode === 'dark'
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Crea Account
            </Link>
          </div>

          {/* Statistiche */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className={`p-6 rounded-lg ${
              mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <h3 className="text-3xl font-bold text-blue-600">50M+</h3>
              <p className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Utenti Registrati
              </p>
            </div>
            <div className={`p-6 rounded-lg ${
              mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <h3 className="text-3xl font-bold text-purple-600">200+</h3>
              <p className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Criptovalute Supportate
              </p>
            </div>
            <div className={`p-6 rounded-lg ${
              mode === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <h3 className="text-3xl font-bold text-green-600">$50B+</h3>
              <p className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Volume Scambiato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione caratteristiche */}
      <section className={`py-20 ${
        mode === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-12 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Perché Scegliere CoinSphere?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-lg text-center ${
              mode === 'dark' ? 'bg-gray-900' : 'bg-white shadow-lg'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔒</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Sicurezza Avanzata
              </h3>
              <p className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Proteggiamo i tuoi fondi con tecnologie di sicurezza all'avanguardia e cold storage.
              </p>
            </div>

            <div className={`p-8 rounded-lg text-center ${
              mode === 'dark' ? 'bg-gray-900' : 'bg-white shadow-lg'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Trading Veloce
              </h3>
              <p className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Esegui ordini in millisecondi con il nostro motore di trading ad alte prestazioni.
              </p>
            </div>

            <div className={`p-8 rounded-lg text-center ${
              mode === 'dark' ? 'bg-gray-900' : 'bg-white shadow-lg'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Commissioni Basse
              </h3>
              <p className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Goditi commissioni competitive e trasparenti su tutte le tue operazioni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione di invito all'azione (CTA) */}
      <section className={`py-20 ${
        mode === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Pronto a Iniziare?
          </h2>
          <p className={`text-xl mb-8 ${
            mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Unisciti a milioni di trader in tutto il mondo
          </p>
          <Link
            to="/login"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Registrati Gratis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;