import { StyleSheet, Text, View,TouchableOpacity,Image, TouchableHighlight } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <View style={props.btnView}>
        {/* for se tampil button discreen mana saja */}
        <TouchableHighlight underlayColor={{color:'#006688'}} style={styles.Button} onPress={props.onPress}>
                <Text style={styles.textButton}>{props.title}</Text>
        </TouchableHighlight>
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
        width:154.4,
        height:63.31,
      },
    textButton:{
        fontSize:18,
        fontWeight: 'bold',
        color:'white'
      },
})