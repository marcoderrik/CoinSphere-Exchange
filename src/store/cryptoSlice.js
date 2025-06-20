import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Slice responsabile del recupero dati sulle criptovalute

// ✅ Async thunk per la lista di criptovalute
export const fetchCryptos = createAsyncThunk(
  'crypto/fetchCryptos',
  async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1'
    );
    return await res.json();
  }
);

// ✅ Async thunk per i dettagli di una criptovaluta
export const fetchCryptoDetail = createAsyncThunk(
  'crypto/fetchCryptoDetail',
  async (id) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    return await res.json();
  }
);

// ✅ Slice Redux
const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    cryptos: [],
    selectedCrypto: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 📦 Lista
      .addCase(fetchCryptos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCryptos.fulfilled, (state, action) => {
        state.loading = false;
        state.cryptos = action.payload;
      })
      .addCase(fetchCryptos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // 📄 Dettagli
      .addCase(fetchCryptoDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedCrypto = null;
      })
      .addCase(fetchCryptoDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCrypto = action.payload;
      })
      .addCase(fetchCryptoDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cryptoSlice.reducer;
