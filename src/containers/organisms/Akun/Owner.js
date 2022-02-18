import React, {useState} from 'react';
import { Text,View,StyleSheet,Image,TextInput, ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import TextTouchable from '../../../components/atoms/TextTouchable';
import SignUpOwner from './SignUpOwner';



const User = ({navigation}) => {
  const [text] = useState(null);
  const [number] = useState(null);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View> 
        <Text style={styles.fontUser}>Owner</Text> 
        <Text style={styles.fontSignin}>Sign In</Text>
      </View>

      {/* Render Logo GOPANG */}
      <Image 
      source={require('../../../assets/logo/LogoGOPANG.png')} 
      style={styles.logo} 
      />
  
      <Text style={styles.fontEnter}>Enter your email and password</Text>

      {/* Render Text Input yang so props */}
      <View style={{alignItems:'center'}}>
        <Input placeholder={'Email'} focus={true} type={text} input={styles.input} />
        <Input placeholder={'Password'} TextEntry={true} type={number} input={styles.input} />
      </View>

      {/* Forget Password props */}
      <TextTouchable title={'Forgot Password?'} stylingTitle={styles.textForgot} />

      {/* Render Button dan dont have an account*/}
      <View style={{alignItems:'center'}}>
          <Button title='Login' />
          <TextTouchable 
          ViewContainer={styles.ContainertxtSignUp}
          txtStyling={styles.textDont}
          text={'Dont have an account?'}
          stylingTitle={styles.titleSignup} 
          onPress={()=>navigation.replace('SignUpOwner')}
          title={'Sign Up'}
          />
      </View>
    </View>
    </ScrollView> 
  );
}
export default User;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  fontEnter:{
    fontSize:16,
    fontWeight:'bold',
    color:'#A8A6A7',
    marginLeft:90,
    marginTop:25,
  },
  fontSignin:{
    fontWeight:'bold',
    fontSize:40,
    marginTop:4,
    marginLeft:139,
    color:'#000000'
  },
  fontUser:{
    fontSize:17,
    fontWeight:'bold',
    marginTop:69,
    marginLeft:183,
    color:'#000000'
  },
  logo:{
    width:184,
    height:185,
    marginTop:4,
    marginLeft:130
  },
  input:{
    height: 54,
    width:343,
    padding: 10,
    fontSize:16,
    borderRadius:6,
    borderWidth:0.3,
    backgroundColor:'#EDEDF0',
    marginTop:20.29,
  },
  textForgot:{
    marginLeft:235.37,
    marginBottom:10,
    color:'#007AFF',
    textDecorationLine:'underline'
  },
  titleSignup:{ 
    color:'#007AFF',
    fontWeight:'bold'
  },
  textDont:{
    fontSize:16,
    color:'#A8A6A7',
  },
  ContainertxtSignUp:{
    flexDirection:'row',
    marginTop:10.27
  }
})