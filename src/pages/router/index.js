import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import OwnerScreen from '../../containers/organisms/Akun/Owner';
import SignUpUser from '../../containers/organisms/Akun/SignUpUser';
import UserScreen from '../../containers/organisms/Akun/User';
import ForgetPassword from '../../containers/organisms/Akun/ForgetPassword';
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
import infoHomestay from '../infoHomestay';
import Filter from '../Filter';
import Biodata from '../Biodata';
import OverviewPage from '../OverviewPage';
import TransactionDetails from '../TransactionDetails';
import SuccessPage from '../SuccessPage';
import OptionMenuPaal from '../OptionMenuPaal';
import OptionMenuPulisan from '../OptionMenuPulisan';
import EditProfile from '../EditProfile';
import AboutApp from '../AboutApp';
import SignUpOwner from '../../containers/organisms/Akun/SignUpOwner';
import OwnerMenu from '../OwnerMenu';
import AddHomestay from '../OAddHomestay';
import DetailsOwner from '../ODetails';
import EditHomestay from '../OEditHomestay';
import ProfilWarung from '../ProfilWarung';
import MenuFood from '../MenuFood';
import ChartFood from '../ChartFood';
import TotalFood from '../TotalFood';
import DetailOrderDone from '../DetailOrderDone';
import DetailOrderDelivered from '../DetailOrderDelivered';
import OProfile from '../OProfile';
import OnavigationBar from '../OnavigationBar';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
      <Stack.Screen name="LoginOptionsScreen" component={LoginOptionsScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="OwnerScreen" component={OwnerScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="SignUpOwner" component={SignUpOwner} />
      <Stack.Screen name="SignUpUser" component={SignUpUser} />
      <Stack.Screen name="NavigationBar" component={NavigationBar} />
      <Stack.Screen name="MenuHome" component={MenuHome} />
      <Stack.Screen name="MenuGazebo" component={MenuGazebo} />
      <Stack.Screen name="MenuHomestay" component={MenuHometay} />
      <Stack.Screen name="InfoGazebo" component={InfoGazebo} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatBox" component={ChatBox} />
      <Stack.Screen name="infoHomestay" component={infoHomestay} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="Biodata" component={Biodata} />
      <Stack.Screen name="OverviewPage" component={OverviewPage} />
      <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
      <Stack.Screen name="SuccessPage" component={SuccessPage} />
      <Stack.Screen name="OptionMenuPaal" component={OptionMenuPaal} />
      <Stack.Screen name="OptionMenuPulisan" component={OptionMenuPulisan} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AboutApp" component={AboutApp} />
      <Stack.Screen name="OwnerMenu" component={OwnerMenu} />
      <Stack.Screen name="AddHomestay" component={AddHomestay} />
      <Stack.Screen name="DetailsOwner" component={DetailsOwner} />
      <Stack.Screen name="EditHomestay" component={EditHomestay} />
      <Stack.Screen name="ProfilWarung" component={ProfilWarung} />
      <Stack.Screen name="MenuFood" component={MenuFood} />
      <Stack.Screen name="ChartFood" component={ChartFood} />
      <Stack.Screen name="TotalFood" component={TotalFood} />
      <Stack.Screen name="DetailOrderDone" component={DetailOrderDone} />
      <Stack.Screen
        name="DetailOrderDelivered"
        component={DetailOrderDelivered}
      />
      <Stack.Screen name="OProfile" component={OProfile} />
      <Stack.Screen name="OnavigationBar" component={OnavigationBar} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
