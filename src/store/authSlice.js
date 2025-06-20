import { createSlice } from '@reduxjs/toolkit';
// Gestisce autenticazione e portfolio fittizio

const initialState = {
  user: null,
  isAuthenticated: false,
  role: null,
  portfolio: {
    balance: 10000,
    holdings: []
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Salva le informazioni dell'utente dopo il login
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.role = action.payload.role;
    },
    // Resetta lo stato in fase di logout
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.role = null;
    },
    // Aggiorna il portfolio utente
    updatePortfolio: (state, action) => {
      state.portfolio = action.payload;
    }
  },
});

export const { login, logout, updatePortfolio } = authSlice.actions;
export default authSlice.reducer;
