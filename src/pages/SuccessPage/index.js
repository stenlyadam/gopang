import { StyleSheet, Text, View,Image,Dimensions, ScrollView } from 'react-native'
import React, {useEffect} from 'react';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';

const {height,width}= Dimensions.get('window');

const SuccessPage = ({navigation}) => {

  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={{marginTop:196}}>
      <Image source={require('../../assets/image/SuccessPage.png')} />
      <Text style={{
        fontSize:32,
        fontWeight:'bold',
        marginTop:27,
        alignSelf:'center'
      }}>SUCCESS !!!</Text>
    </View>

    <View>
        <ButtonTransaction 
            title={'Done'} 
            btnView={styles.btnView} 
            onPress={()=>navigation.replace('NavigationBar')}
            />
    </View>
    </View>
    </ScrollView>
  )
}

export default SuccessPage

const styles = StyleSheet.create({
    logo:{
        resizeMode: 'contain',
    },
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    btnView:{
      marginTop:161,
      alignItems:'center'
    }

})