import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ScrollView, 
    Alert,
    BackHandler
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Header from '../../components/molecules/header';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';
import Loading from '../../components/molecules/Loading';

const ChangePassword = ({navigation}) => {
    const [newPassword,setNewPassword] = useState('');
    const [currentPassword,setCurrentPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }
     // Changes user's password...
    const onChangePasswordPress = () => {
        reauthenticate(currentPassword).then(() => {
        var user = firebase.auth().currentUser;
        user.updatePassword(newPassword).then(() => {
            setLoading(false);
            showMessage({
                message: 'Password was changed',
                type: 'default',
                backgroundColor: 'green', // background color
                color: 'white', // text color
            }); 
            navigation.goBack();
        }).catch((error) => { 
            setLoading(false);
            showMessage({
                message: error.message,
                type: 'default',
                backgroundColor: 'red', // background color
                color: 'white', // text color
            }, 2000); 
        });
        }).catch((error) => { 
            setLoading(false);
            showMessage({
                message: error.message,
                type: 'default',
                backgroundColor: 'red', // background color
                color: 'white', // text color
            }, 2000);  
        });
    }


    const handleSubmitGoBack =()=>{
    // firebase.database().ref(`users/pelanggan/${uid}/keranjang`).remove();

    navigation.goBack();
    };

    useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        handleSubmitGoBack();
        return true;
    })
    return () => backHandler.remove()
    }, []);

  return (
    <>
      <View style={{flex: 1,backgroundColor:'white'}}>
        <Header title='Change Password' onBack={()=>navigation.goBack()}/>

        <Input
            placeholder={'Old Password'}
            input={styles.input}
            value={currentPassword}
            onChangeText={value => setCurrentPassword(value)}
            secureTextEntry={true}
        />

        <Input
            placeholder={'New password'}
            focus={true}
            input={styles.input}
            value={newPassword}
            onChangeText={value => setNewPassword(value)}
            secureTextEntry={true}
        />

        <Button 
            title='Change' 
            btnView={styles.btnView}
            onPress={onChangePasswordPress}
        />
      </View>
      {loading && <Loading />}
      </>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
    input: {
        height: 54,
        width: 343,
        padding: 10,
        fontSize: 16,
        borderRadius: 6,
        borderWidth: 0.3,
        backgroundColor: '#EDEDF0',
        marginTop: 20,
        alignSelf:'center'
    },
    btnView: {
        marginTop: 20,
        alignSelf:'center'
    },
});
