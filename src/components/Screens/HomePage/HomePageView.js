import React from 'react';
import { View } from 'react-native';
import CardContainer from '../../card/CardContainer';

const flexAndColorSetter = (flex, backgroundColor) => {
  return { flex, backgroundColor };
};

console.log(flexAndColorSetter(1, 'green'));
console.log(flexAndColorSetter(1, 'green'));

export default function HomePageView() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={flexAndColorSetter(1, 'white')} />
      <View style={flexAndColorSetter(2, 'pink')}>
        <CardContainer />
      </View>
      <View style={flexAndColorSetter(1, 'grey')} />
    </View>
  );
}
