import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import AddFood from '../';
import ChatBox from '../ChatBox';
import NavOrder from '../NavOrder';
import Profile from '../Profile';
import {View, Image} from 'react-native';


const TabsOwner = () => {
  return (
    <Tab.Navigator>     
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

export default TabsOwner;
