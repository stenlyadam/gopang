
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
import MenuHome from '../HomeMenu';
import InfoGazebo from '../InfoGazebo';
import MenuGazebo from '../MenuGazebo';
import MenuHometay from '../MenuHomestay';
import NavigationBar from '../navigationBar';
import infoHomestay from '../infoHomestay';
import Filter from '../Filter';
import OverviewPage from '../OverviewPage';
import TransactionDetails from '../TransactionDetails';
import OptionMenuPaal from '../OptionMenuPaal';
import OptionMenuPulisan from '../OptionMenuPulisan';
import EditProfile from '../EditProfile';
import AboutApp from '../AboutApp';
import SignUpOwner from '../../containers/organisms/Akun/SignUpOwner';
import OwnerMenu from '../OwnerMenu';
import AddHomestay from '../OAddHomestay';
import DetailsOwner from '../ODetails';
import ProfilWarung from '../ProfilWarung';
import MenuFoodPaal from '../MenuFoodPaal';
import ChartFood from '../ChartFood';
import TotalFood from '../TotalFood';
import DetailOrderFood from '../DetailOrderFood';
import OProfile from '../OProfile';
import OnavigationBar from '../OnavigationBar';
import OptionMenuKinunang from '../OptionMenuKinunang';
import OptionMenuLarata from '../OptionMenuLarata';
import TabOrder from '../../components/molecules/TabOrder';
import TD from '../../pages/TD';
import OAddWarung from '../../pages/OAddWarung';
import OWarung from '../../pages/OWarung';
import OAddFood from '../../pages/OAddFood';
import OEditFood from '../../pages/OEditFood';
import MenuGazeboPaal from '../../pages/MenuGazeboPaal';
import MenuGazeboPulisan from '../ManuGazeboPulisan';
import MenuGazeboKinunang from '../MenuGazeboKinunang';
import TDOwner from '../TDOwner';
import OEditProfile from '../OEditProfile';
import DetailOrderFoodOwner from '../DetailOrderFoodOwner';
import DetailOrderFoodUser from '../DetailOrderFoodUser';
import ChangePassword from '../ChangePassword';
import MenuFoodPulisan from '../MenuFoodPulisan';
import MenuFoodKinunang from '../MenuFoodKinunang';
import Help from '../Help';
import OAddGazebo from '../OAddGazebo';
import OGazebo from '../OGazebo';
import WFilterPaal from '../WFilterPaal';
import WFilterPulisan from '../WFilterPulisan';
import WFilterKinunang from '../WFilterKinunang';

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
      <Stack.Screen name="MenuGazeboPaal" component={MenuGazeboPaal} />
      <Stack.Screen name="MenuGazeboPulisan" component={MenuGazeboPulisan} />
      <Stack.Screen name="MenuGazeboKinunang" component={MenuGazeboKinunang} />
      <Stack.Screen name="MenuHomestay" component={MenuHometay} />
      <Stack.Screen name="InfoGazebo" component={InfoGazebo} />
      <Stack.Screen name="infoHomestay" component={infoHomestay} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="WFilterPaal" component={WFilterPaal} />
      <Stack.Screen name="WFilterPulisan" component={WFilterPulisan} />
      <Stack.Screen name="WFilterKinunang" component={WFilterKinunang} />
      <Stack.Screen name="OverviewPage" component={OverviewPage} />
      <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
      <Stack.Screen name="TD" component={TD} />
      <Stack.Screen name="TDOwner" component={TDOwner} />
      <Stack.Screen name="OptionMenuPaal" component={OptionMenuPaal} />
      <Stack.Screen name="OptionMenuPulisan" component={OptionMenuPulisan} />
      <Stack.Screen name="OptionMenuKinunang" component={OptionMenuKinunang} />
      <Stack.Screen name="OptionMenuLarata" component={OptionMenuLarata} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AboutApp" component={AboutApp} />
      <Stack.Screen name="OwnerMenu" component={OwnerMenu} />
      <Stack.Screen name="AddHomestay" component={AddHomestay} />
      <Stack.Screen name="DetailsOwner" component={DetailsOwner} />
      <Stack.Screen name="ProfilWarung" component={ProfilWarung} />
      <Stack.Screen name="MenuFoodPaal" component={MenuFoodPaal} />
      <Stack.Screen name="MenuFoodPulisan" component={MenuFoodPulisan} />
      <Stack.Screen name="MenuFoodKinunang" component={MenuFoodKinunang} />
      <Stack.Screen name="ChartFood" component={ChartFood} />
      <Stack.Screen name="TotalFood" component={TotalFood} />
      <Stack.Screen name="DetailOrderFood" component={DetailOrderFood} />
      <Stack.Screen name="TabOrder" component={TabOrder} />
      <Stack.Screen name="OProfile" component={OProfile} />
      <Stack.Screen name="OnavigationBar" component={OnavigationBar} />
      <Stack.Screen name="OAddWarung" component={OAddWarung} />
      <Stack.Screen name="OAddGazebo" component={OAddGazebo} />
      <Stack.Screen name="OWarung" component={OWarung} />
      <Stack.Screen name="OGazebo" component={OGazebo} />
      <Stack.Screen name="OAddFood" component={OAddFood} />
      <Stack.Screen name="OEditFood" component={OEditFood} />
      <Stack.Screen name="OEditProfile" component={OEditProfile} />
      <Stack.Screen name="DetailOrderFoodOwner" component={DetailOrderFoodOwner} />
      <Stack.Screen name="DetailOrderFoodUser" component={DetailOrderFoodUser} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
