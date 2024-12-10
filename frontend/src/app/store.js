// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice.js'; // Example reducer

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: authReducer,
    },
  });
};
