import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/atoms/Header'

const ForgetPassword = () => {
  return (
    <ScrollView>
    <View>
        <Header/>
        <View style={{backgroundColor:'red'}}>
            <Text>Reset Password</Text>
        </View>
    </View>
    </ScrollView>  
    
  )
}

export default ForgetPassword

const styles = StyleSheet.create({})