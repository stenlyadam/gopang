import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/pages/router';
import {store} from './src/redux';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

const Gopang = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

export default Gopang;

/*
        <Stack.Screen
          name='Splash'
          component={Splash}
        />
        <Stack.Screen
          name='OnboardScreen'
          component={OnboardScreen}
        />
        <Stack.Screen
          name='LoginOptionsScreen'
          component={LoginOptionsScreen}
        />
*/
