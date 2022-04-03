import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'

const Input = ({input,placeholder, ...rest}) => {
  const [onChangeNumber] = useState(null);

  return (
    <View>
      <TextInput
        style={input}
        placeholder={placeholder}
        {...rest}
        />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
})