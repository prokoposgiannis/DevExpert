import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Animated } from 'react-native';
import { useSelector } from 'react-redux';
import {
  selectCards,
  getCards,
  addHomeScreenCards,
} from '../../redux/slices/cardsSlice';
import CardItem from './CardItem';

import { useDispatch } from 'react-redux';

const CardContainer = () => {
  const cardsList = useSelector(selectCards);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  showCollectionResponse = () => {
    getCards()
      .then((snapshot) => {
        let cards = [];
        snapshot.forEach((doc) => {
          let card = doc.data();
          card.id = doc.id;
          cards.push(card);
        });
        dispatch(addHomeScreenCards({ cards }));
      })
      .catch((error) => {
        console.log('Error getting articles:\n', error);
      });
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  useEffect(() => {
    showCollectionResponse();
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        data={cardsList.slice().sort((a, b) => a.cardNumber - b.cardNumber)}
        renderItem={({ item }) => (
          <CardItem item={item} onShowIndex={() => showIndex()} />
        )}
        keyExtractor={(item, index) => {
          return index;
        }}
        onViewableItemsChanged={handleOnViewableItemsChanged}
      />
    </View>
  );
};

export default CardContainer;
