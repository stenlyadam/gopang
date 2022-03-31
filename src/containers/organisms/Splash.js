import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React, {useEffect} from 'react';

const {height,width}= Dimensions.get('window');

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('OnboardScreen')
        }, 1500);
    },[navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo/LogoGOPANG.png')} style={styles.logo} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    logo:{
        height:height-326,
        width:width-200,
        marginLeft:75,
        resizeMode: 'contain',
    },
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
    
})