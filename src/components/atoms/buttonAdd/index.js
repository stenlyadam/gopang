import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// const buttonAdd = ({onSubmit, navigation}) => {
const buttonAdd = props => {
  console.log('props:', props);
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('charts')}
      style={styles.buttonAdd}>
      <Text style={styles.textAdd}>Add</Text>
    </TouchableOpacity>
  );
};

export default buttonAdd;

const styles = StyleSheet.create({
  buttonAdd: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: 86,
    height: 25,
    marginLeft: 150,
    backgroundColor: '#38A7D0',
    alignItems: 'center',
  },
  textAdd: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
