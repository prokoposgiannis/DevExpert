import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectCards, removeCard } from '../../redux/slices/cardsSlice';
import CardItem from './CardItem';

const SectionCard = (card) => {
  const dispatch = useDispatch();
  const cardsList = useSelector(selectCards);
  const [cardIndex, setCardIndex] = useState(0);
  const cardContent = cardsList[cardIndex];
  const { question, answer } = cardContent;

  const deleteCard = (id) => {
    console.log('deleting card id', id);
    dispatch(removeCard({ id }));
  };

  const indexTestToggle = (index) => {
    setCardIndex(cardIndex === 1 ? 0 : 1);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        indexTestToggle();
      }}
    >
      <CardItem question={cardContent.question} answer={cardContent.answer} />
    </TouchableOpacity>
  );
};

export default SectionCard;
