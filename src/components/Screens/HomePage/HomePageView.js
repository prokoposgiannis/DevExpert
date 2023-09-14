import React from 'react';
import { View } from 'react-native';
import CardContainer from '../../card/CardContainer';
import BottomBar from '../../bottomBar/BottomBar';
import AddNewCardModal from '../../modals/addNewCardModal/AddNewCardModal';

const flexAndColorSetter = (flex, backgroundColor) => {
  return { flex, backgroundColor };
};

export default function HomePageView() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <AddNewCardModal />
      <View style={flexAndColorSetter(1, 'pink')} />
      <View style={flexAndColorSetter(8, 'pink')}>
        <CardContainer />
      </View>
      <BottomBar style={{ flex: 1 }} />
    </View>
  );
}
