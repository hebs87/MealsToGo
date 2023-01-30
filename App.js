import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import RestaurantsScreen from './src/features/restaurants/screens/Restaurants.screen';

const App = () => {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default App;
