import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TextTouchable = (props) => {
  return (
    <View style={props.ViewContainer}>
      <Text style={props.txtStyling}>{props.text}</Text>
      <TouchableOpacity style={props.stylingTouchable} onPress={props.onPress}>
        <Text style={props.stylingTitle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TextTouchable

const styles = StyleSheet.create({})