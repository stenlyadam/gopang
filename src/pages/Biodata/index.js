import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Header from '../../components/molecules/header'

const Filter = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <Header 
        title='Fill in your info' 
        onBack={()=>navigation.goBack()}
        />
    </View>
  )
}

export default Filter;

const styles = StyleSheet.create({

})