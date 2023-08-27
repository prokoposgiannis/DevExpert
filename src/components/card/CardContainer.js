import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectCards, removeCard } from '../../redux/slices/cardsSlice';
import QuestionSet from './QuestionSet';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const SCREEN_WIDTH = Dimensions.get('window').width;

const CardContainer = (card) => {
  const [noMoreCard, setNoMoreCard] = useState(false);
  const dispatch = useDispatch();
  const cardsList = useSelector(selectCards);
  const [cardIndex, setCardIndex] = useState(0);
  const { question, answer } = cardsList[cardIndex];

  return (
    <View>
      {cardsList.map((item, key) => (
        <QuestionSet
          key={key}
          item={item}
          question={item.question}
          answer={item.answer}
        />
      ))}
      {noMoreCard ? (
        <Text style={{ fontSize: 22, color: '#000' }}>
          No more questions found. Please add some manually or start again.
        </Text>
      ) : null}
    </View>
  );
};

export default CardContainer;
