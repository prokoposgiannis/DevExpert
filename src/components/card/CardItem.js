import React, { useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import CardContent from './CardContent';
import HomePageStyles from '../styles/HomePageStyles';
import { removeCard, loveCard } from '../../redux/slices/cardsSlice';
import { useDispatch } from 'react-redux';

const { width, height } = Dimensions.get('screen');

const CardItem = (props) => {
  const dispatch = useDispatch();
  const [CardIsExpanded, setCardIsExpanded] = useState(false);
  const [cardPositionValues, setCardPositionValues] = useState({
    top: '30%',
    bottom: '30%',
    right: '10%',
    left: '10%',
  });

  const deleteCard = (id) => {
    dispatch(removeCard({ id }));
    if (CardIsExpanded == true) {
      console.log(CardIsExpanded);
      setCardIsExpanded(false);
      console.log(!CardIsExpanded);
    } else {
      return;
    }
  };

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
    dispatch(loveCard({ id }));
  };

  return (
    <View
      style={styles.containerR}
      // style={[
      //   HomePageStyles.cardStyle,
      //   {
      //     top: cardPositionValues.top,
      //     bottom: cardPositionValues.bottom,
      //     left: cardPositionValues.left,
      //     right: cardPositionValues.right,
      //   },
      // ]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  containerR: {
    width,
    // height,
    // alignItems: 'center',
    // backgroundColor: 'orange',
    // borderColor: 'black',
    // borderWidth: 1,
    // radius: 6,
  },
});

export default CardItem;
