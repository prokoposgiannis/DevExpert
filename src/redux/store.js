import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cardsSlice';
import modalsSlice from './slices/modalsSlice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    modals: modalsSlice,
  },
});
