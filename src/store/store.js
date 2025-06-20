import { configureStore } from '@reduxjs/toolkit';
import authReducer   from './authSlice';
import themeReducer  from './themeSlice';
import cryptoReducer from './cryptoSlice';
// Configurazione dello store Redux

export const store = configureStore({
  reducer: {
    auth:   authReducer,
    theme:  themeReducer,
    crypto: cryptoReducer
  }
});
