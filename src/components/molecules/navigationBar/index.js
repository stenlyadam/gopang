import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import iconHome from '../../../assets/icon/iconHomeAktif.png';
import iconOrder from '../../../assets/icon/iconOrder.png';
import iconChat from '../../../assets/icon/iconChat.png';
import iconUser from '../../../assets/icon/iconUser.png';

const NavigationBar = ({
  navigateHome,
  navigateOrder,
  navigateChat,
  navigateUser,
}) => {
  return (
    <View
      style={{height: 63, flexDirection: 'row', borderStartColor: '#FFFFFF'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={navigateHome}>
          <Image style={{width: 28, height: 28}} source={iconHome} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={navigateOrder}>
          <Image style={{width: 28, height: 28}} source={iconOrder} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={navigateChat}>
          <Image style={{width: 28, height: 28}} source={iconChat} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={navigateUser}>
          <Image style={{width: 28, height: 28}} source={iconUser} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({});
