import React, { useState } from 'react';
import { View } from 'react-native';
import HomePageStyles from '../../styles/HomePageStyles';
import SectionCard from '../../card/SectionCard';

export default function HomePageView() {
  return (
    <View style={HomePageStyles.container}>
      <SectionCard />
    </View>
  );
}
