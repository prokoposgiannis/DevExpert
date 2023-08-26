import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomePageView from './src/components/Screens/HomePage/HomePageView';

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      <HomePageView />
      <StatusBar style='auto' />
      {/* </NavigationContainer> */}
    </Provider>
  );
};

export default App;
