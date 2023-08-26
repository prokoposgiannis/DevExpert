import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeScreenCards: [
    { id: 1, question: 'What are you?', answer: 'The best.' },
    { id: 2, question: 'Where are you?', answer: 'On the TOP!' },
  ],
};

const cards = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    removeCard: (state, action) => {
      let cardIndex = state.homeScreenCards.findIndex(
        (card) => card.id === action.payload.id
      );
      console.log('CardIndex', cardIndex);
      console.log('removed', state.homeScreenCards.splice(cardIndex, 1));
    },
    addCard: (state, action) => {
      state.homeScreenCards.push(...action.payload.cards);
    },
  },
});

export const selectCards = (state) => state.cards.homeScreenCards;
export const { removeCard, addCard } = cards.actions;
export default cards.reducer;
