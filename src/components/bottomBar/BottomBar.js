import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';

const BottomBar = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => console.log('menu')}>
        <Ionicons name='menu' size={32} color='black' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('new')}>
        <Ionicons name='md-add-sharp' size={32} color='black' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('options')}>
        <Ionicons name='ellipsis-horizontal' size={32} color='black' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default BottomBar;
