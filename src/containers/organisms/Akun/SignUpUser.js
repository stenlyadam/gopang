import { StyleSheet, Text, View, Image, ScrollView,Alert } from 'react-native'
import React, {useState} from 'react'
import Input from '../../../components/atoms/Input'
import Button from '../../../components/atoms/Button';
import TextTouchable from '../../../components/atoms/TextTouchable';

const SignUpUser = ({navigation}) => {
    const [text] = useState(null);
    const [number] = useState(null);

  return (
    <ScrollView>
    <View style={{flex:1}}>
      
        <View style={{alignItems:'center'}}>
            <Text style={styles.fontUser}>User</Text>
            <Text style={styles.fontSignup}>Sign Up</Text>
            <Text style={styles.fontCreate}>First create your account</Text>
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
        <Button title={'Sign Up'} btnView={styles.btnSignUp} onPress={() => Alert.alert('Your Registration Is Successful')} />
    
        <TextTouchable 
        ViewContainer={styles.ContainertxtSignIn}
        txtStyling={styles.textAlready}
        text={'Already Have an Account'}
        stylingTitle={styles.titleSignin} 
        onPress={()=>navigation.replace('UserScreen')}
        title={'Sign In'}
        />
        
    </View>
    </ScrollView>
  )
}

export default SignUpUser

const styles = StyleSheet.create({
    InputContainer:{
        marginTop:70,
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