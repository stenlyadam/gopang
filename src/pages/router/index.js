import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import OwnerScreen from '../../containers/organisms/Akun/Owner';
import SignUpUser from '../../containers/organisms/Akun/SignUpUser';
import UserScreen from '../../containers/organisms/Akun/User';
import LoginOptionsScreen from '../../containers/organisms/LoginOptions';
import OnboardScreen from '../../containers/organisms/Onboarding';
import Splash from '../../containers/organisms/Splash';
import Chat from '../Chat';
import ChatBox from '../ChatBox';
import MenuHome from '../HomeMenu';
import InfoGazebo from '../InfoGazebo';
import MenuGazebo from '../MenuGazebo';
import MenuHometay from '../MenuHomestay';
import NavigationBar from '../navigationBar';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
      <Stack.Screen name="LoginOptionsScreen" component={LoginOptionsScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="OwnerScreen" component={OwnerScreen} />
      <Stack.Screen name="SignUpUser" component={SignUpUser} />
      <Stack.Screen name="NavigationBar" component={NavigationBar} />
      <Stack.Screen name="MenuHome" component={MenuHome} />
      <Stack.Screen name="MenuGazebo" component={MenuGazebo} />
      <Stack.Screen name="MenuHomestay" component={MenuHometay} />
      <Stack.Screen name="InfoGazebo" component={InfoGazebo} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatBox" component={ChatBox} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
