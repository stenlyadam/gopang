import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'

const Input = (props) => {
  const [onChangeNumber] = useState(null);

  return (
    <View>
      <TextInput
        style={props.input}
        onChangeText={onChangeNumber}
        value={props.type}
        placeholder={props.placeholder}
        secureTextEntry={props.TextEntry}
        autoFocus={props.focus}
        />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
})