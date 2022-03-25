import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/molecules/header';
import Navigation from '../../components/molecules/navigationBar';

const NavOrder = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header title="Order" />

      <View style={{flex: 1}}></View>
      {/* Navigation */}
      <Navigation
        navigateHome={() => navigation.navigate('HomeScreen')}
        navigateChat={() => navigation.navigate('ChatBox')}
        navigateUser={() => navigation.navigate('NavProfil')}
      />
    </View>
  );
};

export default NavOrder;

const styles = StyleSheet.create({});
