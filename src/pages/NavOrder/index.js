import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/molecules/header';
import TabOrder from '../../components/molecules/TabOrder';

const NavOrder = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header title="Order" />
      <TabOrder style={{flex: 1}} />
      {/* <View style={{flex: 1}}></View> */}
      {/* Navigation */}
    </View>
  );
};

export default NavOrder;

const styles = StyleSheet.create({});
