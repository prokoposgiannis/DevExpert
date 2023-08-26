import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectCards, removeCard } from '../../redux/slices/cardsSlice';

const SectionCard = (card) => {
  const dispatch = useDispatch();
  const cardsList = useSelector(selectCards);
  const [cardIndex, setCardIndex] = useState(0);
  const deleteCard = (id) => {
    console.log('deleting card id', id);
    dispatch(removeCard({ id }));
  };
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('card', card.id);
        deleteCard(card.id);
      }}
    >
      <View>
        <Text>{cardsList[cardIndex].question} </Text>
        <Text>{cardsList[cardIndex].answer} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionCard;
