import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../../pages/HomeMenu';
import MenuHome from '../../../pages/HomeMenu';
import Biodata from '../../../pages/Biodata';

const Tab = createBottomTabNavigator();

const navigationTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MenuHome} />
      <Tab.Screen name="Profil" component={Biodata} />
    </Tab.Navigator>
  );
};

export default navigationTabs;

const styles = StyleSheet.create({});
