import React, {useState} from 'react';
import { Text,View,StyleSheet,Image,TextInput, ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import TextTouchable from '../../../components/atoms/TextTouchable';



const User = ({navigation}) => {
  const [text] = useState(null);
  const [number] = useState(null);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View> 
        <Text style={styles.fontUser}>User</Text> 
        <Text style={styles.fontSignin}>Sign In</Text>
      </View>

      {/* Render Logo GOPANG */}
      <View>
        <Image 
          source={require('../../../assets/logo/LogoGOPANG.png')} 
          style={styles.logo} />
      </View>

      <View>
        <Text style={styles.fontEnter}>Enter your email and password</Text> 
      </View>

      {/* Render Text Input yg so props */}
      <View style={{alignItems:'center'}}>
        <Input placeholder={'Email'} focus={true} type={text} input={styles.input} />
        <Input placeholder={'Password'} TextEntry={true} type={number} input={styles.input} />
      </View>

      {/* Forget Password props */}
      <TextTouchable title={'Forgot Password?'} stylingTitle={styles.textForgot} />

      {/* Render Button dan dont have an account *button login yang props */}
      <View style={{alignItems:'center'}}>

          <Button title='Login' />

          <Text style={styles.textOr}>Or</Text>

          <TouchableOpacity style={styles.ButtonGoogle}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../../../assets/logo/logoGoogle.png')} style={styles.logoGoogle} />
              <Text style={styles.textButtonGoogle}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
          
          <TextTouchable 
          ViewContainer={styles.ContainertxtSignUp}
          txtStyling={styles.textDont}
          text={'Dont have an account?'}
          stylingTitle={styles.titleSignup} 
          onPress={()=>navigation.replace('SignUpUser')}
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
    marginTop:90,
    marginLeft:183,
    color:'#000000'
  },
  logo:{
    width:184,
    height:185,
    marginTop:4,
    marginLeft:130
  },
  Button:{
    paddingTop:15,
    alignItems:'center',
    borderRadius:20,
    backgroundColor: "#38A7D0",
    width:353.92,
    height:61.73,
  },
  input:{
    height: 54,
    width:343,
    padding: 10,
    fontSize:16,
    borderRadius:6,
    borderWidth:0.3,
    backgroundColor:'#EDEDF0',
    marginTop:20,
  },
  ButtonGoogle:{
    color:'#C7C8C8',
    alignItems:'center',
    borderRadius:20,
    backgroundColor: "#C7C8C8",
    width:323.72,
    height:61,
  },
  textButtonGoogle:{
    fontSize:18,
    fontWeight: 'bold',
    color:'white',
    marginTop:20
  },
  textForgot:{
    marginLeft:236,
    marginBottom:10,
    color:'#007AFF',
    textDecorationLine:'underline'
  },
  textOr:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:18,
    marginTop:7.27,
    marginBottom:8
  },
  logoGoogle:{
    width:24,
    height:27,
    marginRight:17,
    marginTop:17
  },
  titleSignup:{ 
    color:'#007AFF',
    fontWeight:'bold'
  },
  tcbSignup:{
    marginLeft:7,
  },
  textDont:{
    fontSize:16,
    color:'#A8A6A7',
  },
  ContainertxtSignUp:{
    flexDirection:'row',
    marginTop:11.27
  }
})