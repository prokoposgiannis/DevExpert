import React, { useEffect } from 'react';
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

  useEffect(() => {
    showCollectionResponse();
  }, []);

  return cardsList.map((item, key) => <CardItem key={key} item={item} />);
};

export default CardContainer;
