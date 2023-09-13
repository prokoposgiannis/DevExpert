import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Animated, Text } from 'react-native';
import { useSelector } from 'react-redux';
import {
  selectCards,
  getCards,
  addHomeScreenCards,
} from '../../redux/slices/cardsSlice';
import CardItem from './CardItem';
import Pagination from '../Pagination';

import { useDispatch } from 'react-redux';

const CardContainer = () => {
  const cardsList = useSelector(selectCards);
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;
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

  const handleOnScroll = (event) => {
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: false,
    })(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
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
        data={cardsList}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      {/* <Pagination data={cardsList} scrollX={scrollX} index={index} /> */}
    </View>
  );
};

export default CardContainer;
