import React from 'react';
import { View, ScrollView } from 'react-native';
import CardContainer from '../../card/CardContainer';

const flexAndColorSetter = (flex, backgroundColor) => {
  return { flex, backgroundColor };
};

export default function HomePageView() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={flexAndColorSetter(1, 'pink')} />
      <View style={flexAndColorSetter(8, 'pink')}>
        <CardContainer />
      </View>
      <View style={flexAndColorSetter(1, 'white')} />
    </View>
  );
}
