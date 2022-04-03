import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/pages/router';
import { store } from './src/redux';
import { Provider } from 'react-redux';

const Gopang = () => {
  return (
    <Provider store={store} >
    <NavigationContainer>
      <Router />
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
