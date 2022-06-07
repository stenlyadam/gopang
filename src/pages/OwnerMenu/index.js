import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Header from '../../components/molecules/header';

const OwnerMenu = ({navigation, route}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Home" />

      <TouchableOpacity onPress={() => navigation.navigate('AddHomestay')}>
        <Image
          source={require('../../assets/owner/ButtonAddFood.png')}
          style={{margin: 20, width: 371, height: 170}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OwnerMenu;

const styles = StyleSheet.create({});
