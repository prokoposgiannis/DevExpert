import React, { useState } from 'react';
import { Dimensions, Animated, PanResponder, FlatList } from 'react-native';
import CardContent from './CardContent';
import HomePageStyles from '../styles/HomePageStyles';
import { removeCard, loveCard } from '../../redux/slices/cardsSlice';

import {
  ScrollView,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import { useDispatch } from 'react-redux';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CardItem = (props) => {
  const dispatch = useDispatch();
  const deleteCard = (id) => {
    // console.log('deleting article id', id);
    dispatch(removeCard({ id }));
    if (CardIsExpanded == true) {
      console.log(CardIsExpanded);
      setCardIsExpanded(false);
      console.log(!CardIsExpanded);
    } else {
      return;
    }
  };

  const [CardIsExpanded, setCardIsExpanded] = useState(false);

  const [cardPositionValues, setCardPositionValues] = useState({
    top: '30%',
    bottom: '30%',
    right: '10%',
    left: '10%',
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
        top: '30%',
        bottom: '30%',
        right: '10%',
        left: '10%',
      });
      setCardIsExpanded(!CardIsExpanded);
    }
  };
  const loveTheCard = (id) => {
    // console.log('loving card id', id);
    dispatch(loveCard({ id }));
  };

  const [xPosition, setXPosition] = useState(new Animated.Value(0));
  let cardOpacity = new Animated.Value(1);
  let rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
  });

  let panResponder = PanResponder.create({
    // onStartShouldSetPanResponder: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return Math.abs(gestureState.dy) > Math.abs(gestureState.dx * 3);
    },
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return Math.abs(gestureState.dy) > Math.abs(gestureState.dx * 3);
    },
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      xPosition.setValue(gestureState.dx);
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
    // <GestureHandlerRootView>
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        HomePageStyles.cardStyle,
        {
          opacity: cardOpacity,
          transform: [{ translateX: xPosition }, { rotate: rotateCard }],
          top: cardPositionValues.top,
          bottom: cardPositionValues.bottom,
          left: cardPositionValues.left,
          right: cardPositionValues.right,
        },
      ]}
    >
      {/* <FlatList
        nestedScrollEnabled={true}
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          width: 100,
          height: 100,
        }}
      > */}
      <CardContent
        id={props.item.id}
        isLoved={props.item.isLoved}
        isCardexpanded={CardIsExpanded}
        question={props.item.question}
        answer={props.item.answer}
        loveCard={() => loveTheCard(props.item.id)}
        cardExpander={() => cardExpandController()}
      />
      {/* </FlatList> */}
    </Animated.View>
    // </GestureHandlerRootView>
  );
};

export default CardItem;
