import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/molecules/header';
const Helps = ({navigation}) => {
    return (
        <View>
               <Header 
      title="Help" 
      onBack={()=>navigation.goBack()}
      />
            <Text>Help</Text>
        </View>
    )
}

export default Helps

const styles = StyleSheet.create({})
