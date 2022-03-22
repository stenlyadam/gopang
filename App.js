import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardScreen from './src/containers/organisms/Onboarding';
import LoginOptionsScreen from './src/containers/organisms/LoginOptions';
import UserScreen from './src/containers/organisms/Akun/User';
import OwnerScreen from './src/containers/organisms/Akun/Owner';
import Splash from './src/containers/organisms/Splash';
import SignUpUser from './src/containers/organisms/Akun/SignUpUser';
import MenuHome from './src/pages/HomeMenu';
import MenuHometay from './src/pages/MenuHomestay';
import MenuGazebo from './src/pages/MenuGazebo';
import InfoGazebo from './src/pages/InfoGazebo';
import Chat from './src/pages/Chat';
import ChatBox from './src/pages/ChatBox';
import NavOrder from './src/pages/NavOrder';
import NavProfil from './src/pages/NavProfil';

const Stack = createNativeStackNavigator();

const Gopang = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
        <Stack.Screen
          name="LoginOptionsScreen"
          component={LoginOptionsScreen}
        />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="OwnerScreen" component={OwnerScreen} />
        <Stack.Screen name="SignUpUser" component={SignUpUser} />
        <Stack.Screen name="HomeScreen" component={MenuHome} />
        <Stack.Screen name="MenuGazebo" component={MenuGazebo} />
        <Stack.Screen name="MenuHomestay" component={MenuHometay} />
        <Stack.Screen name="InfoGazebo" component={InfoGazebo} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="NavOrder" component={NavOrder} />
        <Stack.Screen name="ChatBox" component={ChatBox} />
        <Stack.Screen name="NavProfil" component={NavProfil} />
      </Stack.Navigator>
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
