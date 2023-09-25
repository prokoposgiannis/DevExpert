import React from 'react';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomePageView from './src/components/Screens/HomePage/HomePageView';

const App = () => {
  return (
    <Provider store={store}>
      <HomePageView />
    </Provider>
  );
};

export default App;
