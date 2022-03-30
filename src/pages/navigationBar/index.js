import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import MenuHome from '../HomeMenu';
import ChatBox from '../ChatBox';
import NavOrder from '../NavOrder';
import Profile from '../Profile';
import {View, Image} from 'react-native';

const Tabs = () => {
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
          height: 63,
          paddingBottom: 20,
          paddingHorizontal: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIconStyle: {},
      }}>
      <Tab.Screen
        name="Home"
        component={MenuHome}
        options={{
          tabBarShowLabel:false,
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
        options={{
          tabBarShowLabel:false,
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
        name="Message"
        component={ChatBox}
        options={{
          tabBarShowLabel:false,
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 16}}>
              {color == '#28384D' ? (
                <Image
                  source={require('../../assets/icon/iconChatAktif.png')}
                />
              ) : (
                <Image source={require('../../assets/icon/iconChat.png')} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel:false,
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
