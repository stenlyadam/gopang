import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/pages/router';

const Gopang = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
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
