// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   homeScreenCards: [
//     { id: 1, isLoved: true, question: 'What are you?', answer: 'The best.' },
//     {
//       id: 2,
//       isLoved: false,
//       question: 'Where are you?',
//       answer: 'On the TOP!',
//     },
//   ],
// };

// const cards = createSlice({
//   name: 'cards',
//   initialState,
//   reducers: {
//     removeCard: (state, action) => {
//       let cardIndex = state.homeScreenCards.findIndex(
//         (card) => card.id === action.payload.id
//       );
//       console.log('CardIndex', cardIndex);
//       console.log('removed', state.homeScreenCards.splice(cardIndex, 1));
//     },
//     loveCard: (state, action) => {
//       let cardIndex = state.homeScreenCards.findIndex(
//         (card) => card.id === action.payload.id
//       );

//       state.homeScreenCards[cardIndex].isLoved =
//         !state.homeScreenCards[cardIndex].isLoved;
//     },
//     // addCard: (state, action) => {
//     //   state.homeScreenCards.push(...action.payload.cards);
//     // },
//   },
// });

// export const selectCards = (state) => state.cards.homeScreenCards;
// export const { removeCard, addCard, loveCard } = cards.actions;
// export default cards.reducer;

// import React, { useState } from 'react';
// import { Dimensions, Animated, PanResponder } from 'react-native';

// const SCREEN_WIDTH = Dimensions.get('window').width;

//   const [xPosition, setXPosition] = useState(new Animated.Value(0));
//   let cardOpacity = new Animated.Value(1);
//   let rotateCard = xPosition.interpolate({
//     inputRange: [-200, 0, 200],
//     outputRange: ['-20deg', '0deg', '20deg'],
//   });

//   let panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: (evt, gestureState) => false,
//     onMoveShouldSetPanResponder: (evt, gestureState) => true,
//     onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
//     onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
//     onPanResponderMove: (evt, gestureState) => {
//       xPosition.setValue(gestureState.dx);
//       if (gestureState.dx > SCREEN_WIDTH - 250) {
//         swipeDirection = 'Right';
//       } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
//         swipeDirection = 'Left';
//       }
//     },
//     onPanResponderRelease: (evt, gestureState) => {
//       if (
//         gestureState.dx < SCREEN_WIDTH - 150 &&
//         gestureState.dx > -SCREEN_WIDTH + 150
//       ) {
//         Animated.spring(xPosition, {
//           toValue: 0,
//           speed: 5,
//           bounciness: 10,
//           useNativeDriver: false,
//         }).start();
//       } else if (gestureState.dx > SCREEN_WIDTH - 150) {
//         Animated.parallel([
//           Animated.timing(xPosition, {
//             toValue: SCREEN_WIDTH,
//             duration: 200,
//             useNativeDriver: false,
//           }),
//           Animated.timing(cardOpacity, {
//             toValue: 0,
//             duration: 200,
//             useNativeDriver: false,
//           }),
//         ]).start(() => {
//           console.log(props.item.id);
//           deleteCard(props.item.id);
//         });
//       } else if (gestureState.dx < -SCREEN_WIDTH + 150) {
//         Animated.parallel([
//           Animated.timing(xPosition, {
//             toValue: -SCREEN_WIDTH,
//             duration: 200,
//             useNativeDriver: false,
//           }),
//           Animated.timing(cardOpacity, {
//             toValue: 0,
//             duration: 200,
//             useNativeDriver: false,
//           }),
//         ]).start(() => {
//           deleteCard(props.item.id);
//         });
//       }
//     },
//   });

//   return (
//     <Animated.View
//       {...panResponder.panHandlers}
//       style={[
//         HomePageStyles.cardStyle,
//         {
//           opacity: cardOpacity,
//           transform: [{ translateX: xPosition }, { rotate: rotateCard }],
//         },
//       ]}
//     >
//       <CardContent
//         item={props.item}
//         id={props.item.id}
//         isLoved={props.item.isLoved}
//         question={props.item.question}
//         answer={props.item.answer}
//         loveCard={() => loveTheCard(props.item.id)}
//       />
//     </Animated.View>
//   );
// };

// export default CardItem;
