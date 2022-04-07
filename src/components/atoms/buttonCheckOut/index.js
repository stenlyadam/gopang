import { StyleSheet, Text,TouchableOpacity ,View } from 'react-native'
import React from 'react'

const ButtonCheckOut = ({props,nav}) => {
  console.log("navigation:",nav)
  return (
        <TouchableOpacity onPress={() =>{ nav.navigate('TotalFood') }} style={styles.CheckOut}>
        <Text style={styles.textAdd}>Check Out</Text>
       </TouchableOpacity>
  )
}

export default ButtonCheckOut;

const styles = StyleSheet.create({
  CheckOut: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: 130,
    height: 34,
    marginLeft: 264,
    marginTop:15,
    backgroundColor: '#38A7D0',
    alignItems: 'center',
  },
  textAdd: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
  },
})