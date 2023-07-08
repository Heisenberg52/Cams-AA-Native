import {View, Text} from 'react-native';
import React from 'react';
import {VITE_IMAGE_BASE_URL} from '@env';
import ManinNavigation from './src/navigations/MainNavigation';

const App = () => {
  console.log('Test', VITE_IMAGE_BASE_URL);

  return (
    <>
      <ManinNavigation />
    </>
  );
};

export default App;
