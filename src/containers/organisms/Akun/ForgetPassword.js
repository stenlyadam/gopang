import {StyleSheet, Text, View, Image, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/molecules/header';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';
import {setForm} from '../../../redux';
import {useDispatch, useSelector} from 'react-redux';

const ForgetPassword = ({navigation}) => {
  const [text] = useState(null);

  const {form} = useSelector(state => state.ForgetReducer); //destructuring form dll.
  const dispatch = useDispatch();

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  const sendData = () => {
    console.log('data yang dikirim', Email);
  };

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
            type={text}
            input={styles.input}
            value={form.FrgtEmail}
            onChangeText={value => onInputChange(value, 'FrgtEmail')}
          />
          <Button
            title={'Send intruction'}
            btnView={styles.btnView}
            onPress={() => console.log('Data terkirim: ', form.FrgtEmail)}
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
