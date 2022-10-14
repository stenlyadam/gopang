import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ButtonIcon from '../../atoms/ButtonIcon';

const InputChat = ({value, onChangeText, onButtonPress}) => {
  return (
    <View style={{padding: 16, flexDirection: 'row'}}>
      <TextInput
        style={styles.input}
        placeholder="Massage..."
        value={value}
        onChangeText={onChangeText}
      />
      <ButtonIcon disable onPress={onButtonPress} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    marginRight: 10,
    fontSize: 14,
    fontWeight: 'normal',
    maxHeight: 46,
  },
});
