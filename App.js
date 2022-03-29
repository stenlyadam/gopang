import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import ForgetPassword from './src/containers/organisms/Akun/ForgetPassword';
import OwnerScreen from './src/containers/organisms/Akun/Owner';
import SignUpUser from './src/containers/organisms/Akun/SignUpUser';
import UserScreen from './src/containers/organisms/Akun/User';
import LoginOptionsScreen from './src/containers/organisms/LoginOptions';
import OnboardScreen from './src/containers/organisms/Onboarding';
import Splash from './src/containers/organisms/Splash';
import Filter from './src/pages/Filter';
import Biodata from './src/pages/Biodata';
import OverviewPage from './src/pages/OverviewPage';
import TransactionDetails from './src/pages/TransactionDetails';
import SuccessPage from './src/pages/SuccessPage';
import MenuHome from './src/pages/HomeMenu';
import infoHomestay from './src/pages/infoHomestay';
import MenuHomestay from './src/pages/MenuHomestay';
import OptionMenuPaal from './src/pages/OptionMenuPaal';
import OptionMenuPulisan from './src/pages/OptionMenuPulisan';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Gopang=()=>{
  return(
    <Provider store={store} >
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='OnboardScreen' component={OnboardScreen} />
        <Stack.Screen name='LoginOptionsScreen' component={LoginOptionsScreen} />
        <Stack.Screen name='UserScreen' component={UserScreen} />
        <Stack.Screen name='OwnerScreen' component={OwnerScreen} />
        <Stack.Screen name='SignUpUser' component={SignUpUser} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        <Stack.Screen name='MenuHome'  component={MenuHome} />
        <Stack.Screen name='MenuHomestay' component={MenuHomestay} />
        <Stack.Screen name='OptionMenuPaal' component={OptionMenuPaal} />
        <Stack.Screen name='OptionMenuPulisan' component={OptionMenuPulisan}/>
        <Stack.Screen name='infoHomestay' component={infoHomestay}/>
        <Stack.Screen name='Filter' component={Filter}/>
        <Stack.Screen name='Biodata' component={Biodata}/>
        <Stack.Screen name='OverviewPage' component={OverviewPage}/>
        <Stack.Screen name='TransactionDetails' component={TransactionDetails}/>
        <Stack.Screen name='SuccessPage' component={SuccessPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default Gopang;