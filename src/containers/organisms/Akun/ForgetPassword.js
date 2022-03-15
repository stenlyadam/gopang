import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import header from '../../../components/molecules/header'
import Input from '../../../components/atoms/Input'

const ForgetPassword = ({navigation}) => {
  const [text] = useState(null);
  return (
    <View style={{flex:1}}>
        <header/>
        <View style={{flex:1,alignItems:'center', marginTop:16}}>
            <Text style={styles.fontResetPass}>Reset Password</Text>
            <Image 
              style={styles.image}
              source={require('../../../assets/image/ImageKeyForget.png')}
            />
            <Text>Provide your account's email for which you want to reset your password</Text>
            <Input placeholder={'Email'} focus={true} type={text} input={styles.input} />
        </View>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  image:{
    marginTop:10,
    width:247,
    height:220
  },
  fontResetPass:{
    fontWeight:'bold',
    fontSize:40,
    marginLeft:69,
    marginRight:77,
    color:'#000000',
    textAlign:'center'
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
})