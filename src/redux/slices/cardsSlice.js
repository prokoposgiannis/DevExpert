import { createSlice } from '@reduxjs/toolkit';
import { db, collection, getDocs } from '../../firebase/config';

const initialState = {
  homeScreenCards: [],
};

const getCards = () => {
  const articlesRef = collection(db, 'cards');
  return getDocs(articlesRef);
};

const cards = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    removeCard: (state, action) => {
      let cardIndex = state.homeScreenCards.findIndex(
        (card) => card.id === action.payload.id
      );
      console.log(`removed card ${cardIndex + 1}`),
        state.homeScreenCards.splice(cardIndex);
    },
    loveCard: (state, action) => {
      let cardIndex = state.homeScreenCards.findIndex(
        (card) => card.id === action.payload.id
      );

      state.homeScreenCards[cardIndex].isLoved =
        !state.homeScreenCards[cardIndex].isLoved;
    },

    addHomeScreenCards: (state, action) => {
      state.homeScreenCards.push(...action.payload.cards);
    },
  },
});

export const selectCards = (state) => state.cards.homeScreenCards;
export const { removeCard, addCard, loveCard, addHomeScreenCards } =
  cards.actions;
export { getCards };
export default cards.reducer;
