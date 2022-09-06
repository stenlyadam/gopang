import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/molecules/header';
import TabOrder from '../../components/molecules/TabOrder';

const NavOrder = ({navigation, route}) => {
  const {uid} = route.params;
  console.log('ini uid di NavOrder', uid);
  return (
    <View style={{flex: 1}}>
      <Header title="Order" />
      <TabOrder uid={uid} style={{flex: 1}} />
    </View>
  );
};

export default NavOrder;

const styles = StyleSheet.create({});
