import React, { useState } from 'react';
import { Dimensions, Animated, PanResponder } from 'react-native';
import CardContent from './CardContent';
import HomePageStyles from '../styles/HomePageStyles';
import { removeCard, loveCard } from '../../redux/slices/cardsSlice';

import { useDispatch } from 'react-redux';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CardItem = (props) => {
  const dispatch = useDispatch();
  const deleteCard = (id) => {
    console.log('deleting article id', id);
    dispatch(removeCard({ id }));
  };

  const [CardIsExpanded, setCardIsExpanded] = useState(false);

  const [cardPositionValues, setCardPositionValues] = useState({
    top: '20%',
    bottom: '20%',
    right: '20%',
    left: '20%',
  });

  const cardExpandController = () => {
    if (!CardIsExpanded) {
      setCardPositionValues({
        top: '2%',
        bottom: '2%',
        right: '2%',
        left: '2%',
      });
      setCardIsExpanded(!CardIsExpanded);
    } else {
      setCardPositionValues({
        top: '20%',
        bottom: '20%',
        right: '20%',
        left: '20%',
      });
      setCardIsExpanded(!CardIsExpanded);
    }
  };
  const loveTheCard = (id) => {
    console.log('loving card id', id);
    dispatch(loveCard({ id }));
  };

  const [xPosition, setXPosition] = useState(new Animated.Value(0));
  let cardOpacity = new Animated.Value(1);
  let rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
  });

  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      xPosition.setValue(gestureState.dx);
      if (gestureState.dx > SCREEN_WIDTH - 250) {
        swipeDirection = 'Right';
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        swipeDirection = 'Left';
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (
        gestureState.dx < SCREEN_WIDTH - 150 &&
        gestureState.dx > -SCREEN_WIDTH + 150
      ) {
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 250) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          deleteCard(props.item.id);
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          deleteCard(props.item.id);
        });
      }
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        HomePageStyles.cardStyle,
        {
          opacity: cardOpacity,
          transform: [{ translateX: xPosition }, { rotate: rotateCard }],
          top: 4,
          top: cardPositionValues.top,
          bottom: cardPositionValues.bottom,
          left: cardPositionValues.left,
          right: cardPositionValues.right,
        },
      ]}
    >
      <CardContent
        id={props.item.id}
        isLoved={props.item.isLoved}
        isCardexpanded={CardIsExpanded}
        question={props.item.question}
        answer={props.item.answer}
        loveCard={() => loveTheCard(props.item.id)}
        cardExpander={() => cardExpandController()}
      />
    </Animated.View>
  );
};

export default CardItem;
