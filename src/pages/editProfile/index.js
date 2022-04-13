import React ,{useState} from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert,
    TouchableOpacity
 } from 'react-native'
import Header from '../../components/molecules/header';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input'


const EditProfile = ({navigation}) => {
    const [text] = useState(null);
    const [number] = useState(null);
    return (
        <View style={{flex:1}}>
        <Header 
        title="Edit Profile" 
        onBack={()=>navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
        <View 
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../assets/image/fotoProfile.png')}
      style={{
        width:170,
        height:150,
      }} />
      <TouchableOpacity
      style={{
          position: 'absolute',
          top: 130,
          left: 220
      }}>
          <Image source={require('../../assets/image/kamera.png')}/>
      </TouchableOpacity>
        </View>

        <View style={styles.InputContainer}>
            <Input placeholder={'Full Name'} input={styles.input} />
            <Input placeholder={'Email'} type={text} input={styles.input} />
            <Input placeholder={'Phone Number'} type={number} input={styles.input} />
            <Input placeholder={'Password'} type={number} TextEntry={true} input={styles.input} />
            <Input placeholder={'Confirm your password'} type={number} TextEntry={true} input={styles.input} />
        </View>
              {/* Render Button Sign Up dan Touchable Sign In */}
              <Button title={'Update Profile'} btnView={styles.btnSignUp} onPress={() => Alert.alert('Your Update Profile Is Successful')} />
              </ScrollView>
    </View>

    )
}

export default EditProfile

const styles = StyleSheet.create({
    InputContainer:{    
        marginTop:70,
        alignItems:'center'
    },
    btnSignUp:{
        marginTop:40,
        alignItems:'center'
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
