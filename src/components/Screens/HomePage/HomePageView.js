import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import HomePageStyles from '../../styles/HomePageStyles';
import CardContainer from '../../card/CardContainer';

export default function HomePageView() {
  return (
    <SafeAreaView style={HomePageStyles.container}>
      <View>
        <CardContainer />
      </View>
    </SafeAreaView>
  );
}
