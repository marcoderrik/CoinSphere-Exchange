// Componente principale dell'app che gestisce le rotte
import { Routes, Route } from 'react-router-dom';
// Layout comune alle varie pagine
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
// Pagine dell'applicazione
import Homepage from './pages/Homepage';
import CryptoListPage from './pages/CryptoListPage';
import CryptoDetail from './pages/CryptoDetail';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      {/* Intestazione visibile in tutte le pagine */}
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />
          {/* Pagina con la lista delle criptovalute */}
          <Route path="/mercati" element={<CryptoListPage />} />
          {/* Dettaglio della singola criptovaluta */}
          <Route path="/crypto/:id" element={<CryptoDetail />} />
          {/* Pagina di login */}
          <Route path="/login" element={<Login />} />
          {/* Dashboard riservata agli utenti loggati */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Area amministratore */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      {/* Footer comune */}
      <Footer />
    </>
  );
}

export default App;
