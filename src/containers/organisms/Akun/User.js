import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import TextTouchable from '../../../components/atoms/TextTouchable';
import {setForm} from '../../../redux';

const User = ({navigation}) => {
  const id = {
    Email: 'admin',
    Password: 'admin',
  };

  const {form, title, user, desc} = useSelector(state => state.LoginReducer); //destructuring form dll.
  const dispatch = useDispatch();

  // buat menampilkan data yang dikirim lewat input bisa menggunakan react debugger
  const sendData = () => {
    console.log('data yang dikirim', form);
  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Text style={styles.fontUser}>{user}</Text>
          <Text style={styles.fontSignin}>{title}</Text>
        </View>

        {/* Render Logo GOPANG */}
        <View>
          <Image
            source={require('../../../assets/logo/LogoGOPANG.png')}
            style={styles.logo}
          />
        </View>

        <View>
          <Text style={styles.textEnter}>{desc}</Text>
        </View>

        {/* Render Text Input yg so props */}
        <View style={{alignItems: 'center'}}>
          <Input
            placeholder={'Email'}
            focus={true}
            input={styles.input}
            value={form.Email}
            onChangeText={value => onInputChange(value, 'Email')}
          />
          <Input
            placeholder={'Password'}
            input={styles.input}
            value={form.Password}
            onChangeText={value => onInputChange(value, 'Password')}
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
              if (form.Email == id.Email && form.Password == id.Password) {
                navigation.replace('NavigationBar');
              } else if (!form.Email && !form.Password) {
                Alert.alert('Anda harus mengisi Password&Email !');
              } else if (!form.Email) {
                Alert.alert('Anda harus mengisi Email !');
              } else if (!form.Password) {
                Alert.alert('Anda harus mengisi Password !');
              } else {
                Alert.alert('Password/Email Anda masukan Salah!!!');
              }
            }}
          />

          <Text style={styles.textOr}>Or</Text>

          <TouchableOpacity style={styles.ButtonGoogle}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../assets/logo/logoGoogle.png')}
                style={styles.logoGoogle}
              />
              <Text style={styles.textButtonGoogle}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TextTouchable
            ViewContainer={styles.ContainertxtSignUp}
            txtStyling={styles.textDont}
            text={'Dont have an account?'}
            stylingTitle={styles.titleSignup}
            onPress={() => navigation.replace('SignUpUser')}
            title={'Sign Up'}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textEnter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A8A6A7',
    marginLeft: 90,
    marginTop: 25,
  },
  fontSignin: {
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 4,
    marginLeft: 139,
    color: '#000000',
  },
  fontUser: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 90,
    marginLeft: 183,
    color: '#000000',
  },
  logo: {
    width: 184,
    height: 185,
    marginTop: 4,
    marginLeft: 130,
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
    width: 343,
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
