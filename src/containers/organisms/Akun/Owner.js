import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import TextTouchable from '../../../components/atoms/TextTouchable';
import firebase from '../../../config/Firebase';
import {showMessage} from 'react-native-flash-message';
import Loading from '../../../components/molecules/Loading';
import Header from '../../../components/molecules/header';
import { responsiveWidth } from '../../../utils/responsive';

const User = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        setLoading(false);
        const uid = res.user.uid;
        navigation.replace('OnavigationBar', {uid: res.user.uid});
        // console.log(uid);
      })
      .catch(error => {
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: 'red', // background color
          color: 'white', // text color
        });
      });
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <Header onBack={() => navigation.goBack()} />
        <View>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View>
            <Text style={styles.fontUser}>Owner</Text>
            <Text style={styles.fontSignin}>Sign In</Text>
          </View>

          {/* Render Logo GOPANG */}
          <View style={{width:200,alignSelf:'center'}}>
            <Image
              source={require('../../../assets/logo/LogoGOPANG.png')}
              style={styles.logo}
            />
          </View>

          <View>
            <Text style={styles.textEnter}>Enter your email and password</Text>
          </View>

          {/* Render Text Input yg so props */}
          <View style={{alignItems: 'center'}}>
            <Input
              placeholder={'Email'}
              focus={true}
              input={styles.input}
              value={email}
              onChangeText={value => setEmail(value)}
              keyboardType="email-address"
            />
            <Input
              placeholder={'Password'}
              input={styles.input}
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry={true}
            />
          </View>

          {/* Forget Password props */}
          <TextTouchable
            title={'Forgot Password?'}
            stylingTitle={styles.textForgot}
            onPress={() => navigation.navigate('ForgetPassword')}
          />

          {/* Render Button dan dont have an account *button login yang props */}
          <View style={{alignItems: 'center'}}>
            <Button
              title="Login"
              onPress={() => {
                handleSubmit();
              }}
            />

            <TextTouchable
              ViewContainer={styles.ContainertxtSignUp}
              txtStyling={styles.textDont}
              text={'Dont have an account?'}
              stylingTitle={styles.titleSignup}
              onPress={() => navigation.replace('SignUpOwner')}
              title={'Sign Up'}
            />
          </View>
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
  );
};
export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textEnter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A8A6A7',
    alignSelf:'center',
    marginTop: 25,
  },
  fontSignin: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 4,
    alignSelf:'center',
    color: '#000000',
  },
  fontUser: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf:'center',
    color: '#000000',
    marginTop: 30,
  },
  logo: {
    width: 184,
    height: 185,
    marginTop: 4,
    marginLeft: 50,
    alignSelf:'center'
  },
  Button: {
    paddingTop: 15,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#38A7D0',
    width: 353.92,
    height: 61.73,
  },
  input: {
    height: 54,
    width: responsiveWidth(343),
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.3,
    backgroundColor: '#EDEDF0',
    marginTop: 20,
  },
  ButtonGoogle: {
    color: '#C7C8C8',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#C7C8C8',
    width: 323.72,
    height: 61,
  },
  textButtonGoogle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  textForgot: {
    marginLeft: 236,
    marginBottom: 10,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  textOr: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 7.27,
    marginBottom: 8,
  },
  logoGoogle: {
    width: 24,
    height: 27,
    marginRight: 17,
    marginTop: 17,
  },
  titleSignup: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  tcbSignup: {
    marginLeft: 7,
  },
  textDont: {
    fontSize: 16,
    color: '#A8A6A7',
  },
  ContainertxtSignUp: {
    flexDirection: 'row',
    marginTop: 11.27,
  },
});
