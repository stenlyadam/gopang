import {StyleSheet, Text, View, Image, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';
import TextTouchable from '../../../components/atoms/TextTouchable';
import firebase from '../../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const SignUpUser = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (password === confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, confirmPassword)
        .then(res => {
          const data = {
            name: name,
            number: number,
            email: email,
          };
          const uid = res.user.uid;
          firebase.database().ref(`users/pelanggan/${uid}`).set(data);
          navigation.replace('UserScreen');
          showMessage({
            message: 'Your Registration Is Successful',
            type: 'default',
            backgroundColor: 'green', // background color
            color: 'white', // text color
          });
        })
        .catch(error =>
          showMessage({
            message: error.message,
            type: 'default',
            backgroundColor: 'red', // background color
            color: 'white', // text color
          }),
        );
    } else {
      Alert.alert('Salah');
    }
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.fontUser}>User</Text>
          <Text style={styles.fontSignup}>Sign Up</Text>
          <Text style={styles.fontCreate}>First create your account</Text>
        </View>

        {/* Render TextInput */}
        <View style={styles.InputContainer}>
          <Input
            placeholder={'Full Name'}
            input={styles.input}
            value={name}
            onChangeText={value => setName(value)}
          />
          <Input
            placeholder={'Email'}
            input={styles.input}
            value={email}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
          <Input
            placeholder={'Phone Number'}
            type={number}
            input={styles.input}
            value={number}
            onChangeText={value => setNumber(value)}
            keyboardType="number-pad"
          />
          <Input
            placeholder={'Password'}
            type={number}
            TextEntry={true}
            input={styles.input}
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <Input
            placeholder={'Confirm your password'}
            type={number}
            TextEntry={true}
            input={styles.input}
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
            secureTextEntry={true}
          />
        </View>

        {/* Render Button Sign Up dan Touchable Sign In */}
        <Button
          title={'Sign Up'}
          btnView={styles.btnSignUp}
          onPress={() => {
            handleSubmit();
          }}
        />

        <TextTouchable
          ViewContainer={styles.ContainertxtSignIn}
          txtStyling={styles.textAlready}
          text={'Already Have an Account'}
          stylingTitle={styles.titleSignin}
          onPress={() => navigation.replace('UserScreen')}
          title={'Sign In'}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpUser;

const styles = StyleSheet.create({
  InputContainer: {
    marginTop: 70,
    alignItems: 'center',
  },
  fontSignup: {
    fontWeight: 'bold',
    fontSize: 40,
    alignItems: 'center',
    color: '#000000',
  },
  fontUser: {
    fontWeight: 'bold',
    fontSize: 17,
    alignItems: 'center',
    color: '#000000',
    marginTop: 70,
  },
  fontCreate: {
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    color: '#A8A6A7',
    marginTop: 27,
  },
  titleSignin: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textAlready: {
    color: '#808080',
    fontSize: 16,
  },
  btnSignUp: {
    marginTop: 40,
    alignItems: 'center',
  },
  ContainertxtSignIn: {
    flexDirection: 'row',
    marginLeft: 83,
    marginTop: 11.27,
  },
  input: {
    height: 54,
    width: 343,
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.3,
    backgroundColor: '#EDEDF0',
    marginTop: 20,
  },
});
