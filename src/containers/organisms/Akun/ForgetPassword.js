import {StyleSheet, Text, View, Image, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/molecules/header';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';

const ForgetPassword = ({navigation}) => {


  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Header onBack={() => navigation.goBack()} />
        <View style={{flex: 1, alignItems: 'center', marginTop: 16}}>
          <Text style={styles.fontResetPass}>Reset Password</Text>
          <Image
            style={styles.image}
            source={require('../../../assets/image/ImageKeyForget.png')}
          />
          <Text style={styles.textReset}>
            Provide your account's email for which you want to reset your
            password
          </Text>
          <Input
              placeholder={'Email'}
              focus={true}
              input={styles.input}
              value={email}
              // onChangeText={value => setEmail(value)}
              keyboardType="email-address"
            />
          <Button
            title={'Send intruction'}
            btnView={styles.btnView}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    width: 247,
    height: 220,
  },
  fontResetPass: {
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 69,
    marginRight: 77,
    color: '#000000',
    textAlign: 'center',
  },
  input: {
    height: 54,
    width: 343,
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.3,
    backgroundColor: '#EDEDF0',
    marginTop: 60,
  },
  textReset: {
    marginTop: 4,
    width: 286,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A8A6A7',
  },
  btnView: {
    marginTop: 35,
  },
});
