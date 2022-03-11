import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const buttonDetails = ({onSubmit, title}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <Text style={styles.textDetails}>{title}</Text>
    </TouchableOpacity>
  );
};

export default buttonDetails;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: 55,
    height: 25,
    backgroundColor: '#38A7D0',
  },
  textDetails: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
