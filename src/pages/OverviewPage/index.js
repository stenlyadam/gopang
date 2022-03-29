import { StyleSheet, Text, View,Image,Dimensions, ScrollView } from 'react-native'
import React from 'react';
import Header from '../../components/molecules/header';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';


const OverviewPage = ({navigation}) => {
  return (
    <ScrollView>
    <View style={{flex:1}}>
        <Header 
        title='Booking overview' 
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

        <View style={{marginTop:13,marginBottom:13,marginLeft:20}}>
            <Text style={{
                fontSize:15,
                fontWeight:'bold'
                }}>
                    Reyner Senduk
                </Text>
            <Text style={{
                fontSize:15,
                marginTop:12,
                }}>
                    Reynersenduk@gmail.com
                </Text>
            <Text style={{
                fontSize:15,
                marginTop:12,
                }}>
                    081354989898
                </Text>
        </View>
        
        <View style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width:371,
            alignSelf:'center'
        }}/> 
        
        <View style={{marginTop:13,justifyContent:'space-between',marginBottom:13,marginLeft:20,flexDirection:'row'}}>
            <Text style={{
                fontSize:15,
                }}>
                    Check-in
                </Text>
            <Text style={{
                fontSize:15,
                marginRight:20
                }}>
                    Sun Feb 6 2022
                </Text>
        </View>

        <View style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width:371,
            alignSelf:'center'
        }}/> 
        
        <View style={{marginTop:13,justifyContent:'space-between',marginBottom:13,marginLeft:20,flexDirection:'row'}}>
            <Text style={{
                fontSize:15,
                }}>
                    Check-out
                </Text>
            <Text style={{
                fontSize:15,
                marginRight:20
                }}>
                    Mon Feb 07 2022
                </Text>
        </View>

        <View style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width:371,
            alignSelf:'center'
        }}/> 
        
        <View style={{marginTop:13,justifyContent:'space-between',marginBottom:13,marginLeft:20,flexDirection:'row'}}>
            <Text style={{
                fontSize:15,
                }}>
                    For
                </Text>
            <Text style={{
                fontSize:15,
                marginRight:20
                }}>
                    1 Night
                </Text>
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
                    Total payment
                </Text>
            <Text style={{
                fontSize:20,
                marginRight:20,
                fontWeight:'bold'
                }}>
                    Rp200.000
                </Text>
        </View>

        <ButtonTransaction 
            title={'Next'} 
            btnView={styles.btnView} 
            onPress={()=>navigation.navigate('TransactionDetails')}
            />
    </View>
    </ScrollView>
  )
}

export default OverviewPage

const styles = StyleSheet.create({
    btnView:{
        marginTop:147,
        marginBottom:57.69,
        alignItems:'center'
      }
})