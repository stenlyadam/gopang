import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Button from '../../components/atoms/Button';
import { responsiveHeight, responsiveWidth } from '../../utils/responsive';

const LoginOptions = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>GOPANG</Text>
      <View style={{width:200,alignSelf:'center'}}>
        <Image
          style={styles.Logo}
          source={require('../../assets/logo/LogoGOPANG.png')}
        />
      </View>
      
      <Text style={styles.loginAs}>Login as :</Text>
      <View style={styles.button1}>
        {/* da props dri component button didalam folder atoms-button*/}
        <Button
          onPress={() => navigation.navigate('OwnerScreen')}
          title="Owner"
        />
        <Text></Text>
        <Button
          onPress={() => navigation.navigate('UserScreen')}
          title="User"
        />
      </View>
    </View>
  );
};

export default LoginOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Logo: {
    alignSelf:'center',
    marginLeft:50
  },
  loginAs: {
    marginTop: 50,
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 55,
  },
  font: {
    marginTop: 141,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 36,
    fontFamily: 'New Times Roman',
    textAlign: 'center',
  },
  textButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  button1: {
    marginTop: 10,
    width: responsiveWidth(300),
    alignSelf:'center',
    alignItems:'center',
  },
});
