import React, { useState } from 'react';
import { View } from 'react-native';
import HomePageStyles from '../../styles/HomePageStyles';
import SectionCard from '../../card/SectionCard';

export default function HomePageView() {
  return (
    <View style={HomePageStyles.container}>
      <SectionCard
      // key={cardsList[cardIndex].id.toString()}
      // id={cardsList[cardIndex].id}
      // question={cardsList[cardIndex].question}
      // answer={cardsList[cardIndex].answer}
      ></SectionCard>
    </View>
  );
}
