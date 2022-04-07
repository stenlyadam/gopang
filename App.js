import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardScreen from './src/containers/organisms/Onboarding';
import LoginOptionsScreen from './src/containers/organisms/LoginOptions';
import UserScreen from './src/containers/organisms/Akun/User';
import OwnerScreen from './src/containers/organisms/Akun/Owner';
import Splash from './src/containers/organisms/Splash';
import SignUpUser from './src/containers/organisms/Akun/SignUpUser';
import ForgetPassword from './src/containers/organisms/Akun/ForgetPassword';
import MenuHome from './src/pages/HomeMenu';
import MenuHometay from './src/pages/MenuHomestay';
import MenuGazebo from './src/pages/MenuGazebo';
import MenuFood from './src/pages/MenuFood';
import ProfilWarung from './src/pages/ProfilWarung';
import Charts from './src/pages/Charts';
import TotalFood from './src/pages/TotalFood';


// const MyContext = React.createContext();



const Stack = createNativeStackNavigator();

// const myState = React.useMemo(()=>({

//   stateCardFoood: (props) =>{
//     console.log("props:", props)
//   }

// }))

const Gopang = () => {
  return (
    // <MyContext.Provider value={myState}>
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
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="MenuHome" component={MenuHome} />
          <Stack.Screen name="MenuHomestay" component={MenuHometay} />
          <Stack.Screen name="MenuGazebo" component={MenuGazebo} />
          <Stack.Screen name="MenuFood" component={MenuFood} />
          <Stack.Screen name="ProfilWarung" component={ProfilWarung} /> 
          <Stack.Screen name="Charts" component={Charts} /> 
          <Stack.Screen name="TotalFood" component={TotalFood} /> 
        </Stack.Navigator>
      </NavigationContainer>
      // </MyContext.Provider>
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
