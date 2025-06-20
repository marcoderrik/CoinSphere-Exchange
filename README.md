# CoinSphere Exchange

##  Panoramica
CoinSphere è una  applicazione  per la visualizzazione e il trading fittizio di criptovalute.
è pensato per dare l'idea di essere un crypto exchange competitor dei più grossi nel mercato ad oggi

##  Installazion
```bash
npm install
npm run dev
```

##  Struttura

public/
└── logo.png

src/
├── components/
│   ├── Crypto/
│   │   ├── CryptoList.jsx
│   │   └── CryptoItem.jsx
│   ├── Layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── Trading/
│   │   └── OrderForm.jsx
│   └── UI/
│       ├── Logo.jsx
│       └── LoadingSpinner.jsx
├── pages/
│   ├── Homepage.jsx
│   ├── CryptoListPage.jsx
│   ├── CryptoDetail.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── Admin.jsx
├── store/
│   ├── authSlice.js
│   ├── themeSlice.js
│   ├── cryptoSlice.js
│   └── store.js
├── App.jsx
├── main.jsx
└── index.css

- **src/components** – componenti riutilizzabili (Crypto, Layout, Trading, UI)
- **src/pages** – pagine principali con le route dell'app
- **src/store** – slice Redux e configurazione dello store

##  Features
- Lista delle principali criptovalute prese dall'api di CoinGecko
- Pagina di dettaglio con prezzo e form di acquisto
- Login/logout simulato con ruoli utente e admin
- Dashboard con portfolio fittizio
-  tema chiaro/scuro co 

##  Tecnologie
React 18 · Redux Toolkit · React Router · Tailwind CSS · Vite
