import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from './src/containers/organisms/Onboarding'
import LoginOptionsScreen from './src/containers/organisms/LoginOptions';
import UserScreen from './src/containers/organisms/Akun/User';
import OwnerScreen from './src/containers/organisms/Akun/Owner';
import Splash from './src/containers/organisms/Splash'
import SignUpUser from './src/containers/organisms/Akun/SignUpUser';
import SignUpOwner from './src/containers/organisms/Akun/SignUpOwner';
import ForgetPassword from './src/containers/organisms/Akun/ForgetPassword';


const Stack = createNativeStackNavigator();


const Gopang=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
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
        <Stack.Screen
          name='UserScreen'
          component={UserScreen}
        />
        <Stack.Screen
          name='OwnerScreen'
          component={OwnerScreen}
        />
        <Stack.Screen
          name='SignUpOwner'
          component={SignUpOwner}
        />
        <Stack.Screen
          name='SignUpUser'
          component={SignUpUser}
        />
        <Stack.Screen
          name='ForgetPassword'
          component={ForgetPassword}
        />

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