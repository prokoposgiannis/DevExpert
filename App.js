import React from 'react';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomePageView from './src/components/Screens/HomePage/HomePageView';

import {
  GestureHandlerRootView,
  onGestureEvent,
} from 'react-native-gesture-handler';

const App = () => {
  return (
    // <GestureHandlerRootView
    //   onGestureEvent={onGestureEvent}
    //   activeOffsetX={[-30, 0]}
    //   style={{ flex: 1 }}
    // >
    <Provider store={store}>
      <HomePageView />
    </Provider>
    // </GestureHandlerRootView>
  );
};

export default App;
