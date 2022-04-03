import { StyleSheet, Text, View,Image,Dimensions, ScrollView, Touchable, TouchableHighlight, Alert } from 'react-native'
import React from 'react';
import Header from '../../components/molecules/header';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';


const TransactionDetails = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <Header 
        title='Transaction' 
        onBack={()=>navigation.goBack()}
        />
        
        <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:20,marginRight:61,marginTop:49}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Homestay Wahyu</Text>
                <Text style={{fontSize:15,marginTop:14}}>Marinsow Village, Paal beach</Text>
                <Image
                    style={{width:51,height:20,marginTop:7}}
                    source={require('../../assets/icon/Rating.png')}
                />
            </View>
            <Image
                style={{position:'absolute',marginTop:30,marginLeft:'65.1%'}}
                source={require('../../assets/image/BookingWahyu.png')}
            />
        </View>
        <View style={{
            height: 1,
            marginTop:26, 
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width:371,
            alignSelf:'center'
        }}/> 

        <View style={{marginTop:13,justifyContent:'space-between',marginBottom:13,marginLeft:20,flexDirection:'row'}}>
            <View style={{flexDirection:'row',marginTop:5}}>
                <Image source={require('../../assets/icon/Dollar.png')}/>
                <Text style={{
                    fontSize:15,
                    }}>
                        Payment Method
                    </Text>
            </View>
            
            <TouchableHighlight
                onPress={()=>Alert.alert('SuccessPage')}
                style={{marginRight:20}}
            >
                <View style={{flexDirection:'row'}}>
                    <Text style={{
                        fontSize:15,
                        marginTop:5
                        }}>
                            Indomaret
                        </Text>
                    <Image source={require('../../assets/icon/ArrowRight.png')}/>
                </View>
            </TouchableHighlight>
        </View>

        <View style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width:371,
            alignSelf:'center'
        }}/> 

        <View style={{marginTop:13,justifyContent:'space-between',marginBottom:13,marginLeft:20,flexDirection:'row'}}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold'
                }}>
                    Estimation
                </Text>
            <Text style={{
                fontSize:20,
                marginRight:20,
                fontWeight:'bold'
                }}>
                    23.30.15
                </Text>
        </View>

        <View style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width:371,
            alignSelf:'center'
        }}/> 

        <ButtonTransaction 
            title={'Book Now'} 
            btnView={styles.btnView} 
            onPress={()=>navigation.replace('SuccessPage')}
            />
    </View>
  )
}

export default TransactionDetails;

const styles = StyleSheet.create({
    btnView:{
        marginTop:338,
        marginBottom:57.69,
        alignItems:'center'
      }
})