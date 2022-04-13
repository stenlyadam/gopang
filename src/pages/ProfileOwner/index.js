import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
 } from 'react-native';
import Header from '../../components/molecules/header';

const Owner = ({navigation}) => {
    return (
        <View>
      <Header 
      title="Profile Owner" 
      onBack={()=>navigation.goBack()}
      />
            
            <View style={styles.profilOwner}>
                <Image source={require('../../assets/image/POwner.png')} />
                    <View>
                    <Text style={{paddingLeft: 10,paddingTop: 3, fontSize: 18, fontWeight: 'bold'}}>Claudio mambu</Text>
                    <Text style={{ fontSize: 13, paddingLeft: 10,paddingTop: 3,}}>ClaudioManbu@gmail.com</Text>
                    <Text style={{ fontSize: 13, paddingLeft: 10,paddingTop: 3,}}>089698073144</Text>
                    </View>
            </View>
               <View style={styles.textowner}>
                 <Text>A business owner is one person who is in control of the operational and monetary aspects of a business. Any entity that produces and sells goods and services for profit, such as an ecommerce store or freelance writer, is considered a business. Businesses can be run alone or with a group of people.</Text>
               </View>

               <View style={{flexDirection:'row',marginTop:200,marginBottom:34.65,height:57.35,alignItems:'center'}}>
               <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('addFood')}>
              <Text style={styles.textButton}>Add Food</Text>
            </TouchableOpacity>
               </View>
        </View>
    )
}

export default Owner

const styles = StyleSheet.create({
    profilOwner: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40
    },
    textowner: {
      marginTop: 10,
      marginLeft: 50,
      marginRight: 50,
      textAlign: 'center',
      fontSize: 15
    },
    button:{
      paddingTop:15,
      alignItems:'center',
      borderRadius:20,
      backgroundColor: "#38A7D0",
      width:275,
      height:57.35,
      marginLeft: 45,
    },
    textButton:{
      fontSize:20,
      fontWeight: 'bold',
      color:'white'
    }
})
