import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from './src/containers/organisms/Onboarding'
import LoginOptionsScreen from './src/containers/organisms/LoginOptions';
import UserScreen from './src/containers/organisms/Akun/User';
import OwnerScreen from './src/containers/organisms/Akun/Owner';
import Splash from './src/containers/organisms/Splash'
import SignUpUser from './src/containers/organisms/Akun/SignUpUser';
import ForgetPassword from './src/containers/organisms/Akun/ForgetPassword';
import MenuHome from './src/pages/HomeMenu'

const Stack = createNativeStackNavigator();


const Gopang=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='OnboardScreen' component={OnboardScreen} />
        <Stack.Screen name='LoginOptionsScreen' component={LoginOptionsScreen} />
        <Stack.Screen name='UserScreen' component={UserScreen} />
        <Stack.Screen name='OwnerScreen' component={OwnerScreen} />
        <Stack.Screen name='SignUpUser' component={SignUpUser} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        <Stack.Screen name='MenuHome' component={MenuHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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