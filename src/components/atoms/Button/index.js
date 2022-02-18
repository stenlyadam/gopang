import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Button = (props,{navigation}) => {
  return (
    <View style={props.btnView}>
        {/* for se tampil button discreen mana saja */}
        <TouchableOpacity style={styles.Button} onPress={props.onPress}>
                <Text style={styles.textButton}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    Button:{
        paddingTop:15,
        alignItems:'center',
        borderRadius:20,
        backgroundColor: "#38A7D0",
        width:353.92,
        height:61.73,
      },
    textButton:{
        fontSize:18,
        fontWeight: 'bold',
        color:'white'
      },
})