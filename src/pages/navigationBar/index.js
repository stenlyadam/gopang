import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import MenuHome from '../HomeMenu';
import ChatBox from '../ChatBox';
import NavOrder from '../NavOrder';
import Profile from '../Profile';
import {View, Image} from 'react-native';

const Tabs = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#28384D',
        headerShown: false,

        tabBarStyle: {
          marginBottom: 0,
          backgroundColor: 'white',
          elevation: 0,
          height: 55,
          width:'60%',
          marginLeft:'20%',
          position:'absolute',
          marginBottom:18,
          shadowColor:'#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5,
          paddingBottom: 20,
          paddingHorizontal: 10,
          borderRadius:50
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIconStyle: {},
      }}>
      <Tab.Screen
        name="Home"
        component={MenuHome}
        initialParams={{uid: uid}}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 16}}>
              {color == '#28384D' ? (
                <Image
                  source={require('../../assets/icon/iconHomeAktif.png')}
                />
              ) : (
                <Image source={require('../../assets/icon/iconHome.png')} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={NavOrder}
        initialParams={{uid: uid}}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 16}}>
              {color == '#28384D' ? (
                <Image
                  source={require('../../assets/icon/iconOrderAktif.png')}
                />
              ) : (
                <Image source={require('../../assets/icon/iconOrder.png')} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{uid: uid}}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 16}}>
              {color == '#28384D' ? (
                <Image
                  source={require('../../assets/icon/iconUserAktif.png')}
                />
              ) : (
                <Image source={require('../../assets/icon/iconUser.png')} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
