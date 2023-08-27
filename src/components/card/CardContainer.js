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
  const dispatch = useDispatch();
  const cardsList = useSelector(selectCards);
  const [cardIndex, setCardIndex] = useState(0);
  const cardContent = cardsList[cardIndex];
  const { question, answer } = cardContent;

  const leftSwipe = () => {
    return (
      <View>
        <Text>OI</Text>
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderLeftActions={leftSwipe}>
        <QuestionSet question={question} answer={answer} />
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default CardContainer;

// return (
//   <TouchableOpacity
//     style={CardContainerStyles.container}
//     onPress={() => {
//       indexTestToggle();
//     }}
//   >
//     <QuestionSet question={question} answer={answer} />
//   </TouchableOpacity>
// );

// const deleteCard = (id) => {
//   console.log('deleting card id', id);
//   dispatch(removeCard({ id }));
// };

// const indexTestToggle = (index) => {
//   setCardIndex(cardIndex === 1 ? 0 : 1);
// };
