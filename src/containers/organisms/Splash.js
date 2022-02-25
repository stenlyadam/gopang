import { StyleSheet, Text, View,Image } from 'react-native'
import React, {useEffect} from 'react'

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
        marginTop:306,
        resizeMode: 'contain',
    },
    container:{
        marginLeft:128,
    }
})