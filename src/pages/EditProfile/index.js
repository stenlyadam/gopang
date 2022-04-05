import { StyleSheet, Text, View, Image, ScrollView,Alert, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button';
import Header from '../../components/molecules/header';

const SignUpUser = ({navigation}) => {
    const [text] = useState(null);
    const [number] = useState(null);

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <Header title='Change Profile'  onBack={() => navigation.goBack()} />
        <ScrollView>
        <View style={{alignItems:'center'}}>
          <Image source={require('../../assets/image/myProfile.png')}/>
          <TouchableOpacity 
            style={{
                position:'absolute',
                top:150,
                left:275
            }}
            >
            <Image source={require('../../assets/icon/ScreenProfile/AddPhoto.png')}/>
          </TouchableOpacity>
        </View>

        {/* Render TextInput */}
        <View style={styles.InputContainer}>
            <Input placeholder={'Full Name'} input={styles.input} />
            <Input placeholder={'Email'} type={text} input={styles.input} />
            <Input placeholder={'Phone Number'} type={number} input={styles.input} />
            <Input placeholder={'Password'} type={number} TextEntry={true} input={styles.input} />
            <Input placeholder={'Confirm your password'} type={number} TextEntry={true} input={styles.input} />
        </View>

        {/* Render Button Sign Up dan Touchable Sign In */}
        <Button title={'Update Profile'} btnView={styles.btnSignUp} onPress={() => Alert.alert('Your Registration Is Successful')} />
        </ScrollView>
    </View>
  )
}

export default SignUpUser

const styles = StyleSheet.create({
    InputContainer:{
        marginTop:51.29,
        alignItems:'center'
    },
    fontSignup:{
        fontWeight:'bold',
        fontSize:40,
        alignItems:'center',
        color:'#000000'
    },
    fontUser:{
        fontWeight:'bold',
        fontSize:17,
        alignItems:'center',
        color:'#000000',
        marginTop:70,
    },
    fontCreate:{
        fontWeight:'bold',
        fontSize:16,
        alignItems:'center',
        color:'#A8A6A7',
        marginTop:27
    },
    titleSignin:{ 
        color:'#007AFF',
        fontWeight:'bold',
        fontSize:16,
    },
    textAlready:{
        color:'#808080',
        fontSize:16,
    },
    btnSignUp:{
        marginTop:40,
        marginBottom:58,
        alignItems:'center'
    },
    ContainertxtSignIn:{
        flexDirection:'row',
        marginLeft:83,
        marginTop:11.27
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
})