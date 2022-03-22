import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Header from '../../components/molecules/header'

const Filter = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <Header 
        title='Filter' 
        onBack={()=>navigation.goBack()}
        />

        {/* Container */}
        <View style={{flex:1}}>
            <View>
                <Image 
                    source={require('../../assets/image/HomestayFilter.png')}
                />
                <Text
                    style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white',
                    position: 'absolute',
                    top: 103,
                    left:21,
                    width:160,
                    height:41
                    }}>
                    Homestay
                </Text>
            </View>

            <Text style={{
                marginLeft:20,
                marginTop:8,
                fontSize:14,
                color:'#38A7D0',
                }}>Destination</Text>
            
        </View>
    </View>
  )
}

export default Filter;

const styles = StyleSheet.create({

})