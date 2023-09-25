import { createSlice } from '@reduxjs/toolkit';
import {
  db,
  collection,
  getDocs,
  addCardToFirestore,
  deleteCardToFirestore,
} from '../../firebase/config';

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
      let cardId = state.homeScreenCards[cardIndex].id;

      state.homeScreenCards.splice(cardIndex, 1);
      deleteCardToFirestore(cardId);
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

    addCardToRedux: (state, action) => {
      let {
        category,
        question,
        answer,
        isLoved,
        key,
        cardNumber = state.homeScreenCards.length + 1,
      } = action.payload;
      state.homeScreenCards.push(action.payload);
      addCardToFirestore(category, question, answer, isLoved, key, cardNumber);
    },
  },
});

export const selectCards = (state) => state.cards.homeScreenCards;
export const { removeCard, addCardToRedux, loveCard, addHomeScreenCards } =
  cards.actions;
export { getCards };
export default cards.reducer;
