import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { responsiveWidth } from '../../../utils/responsive';

const buttonDetails = ({onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <Text style={styles.textDetails}>Details</Text>
    </TouchableOpacity>
  );
};

export default buttonDetails;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: responsiveWidth(55),
    height: responsiveWidth(25),
    backgroundColor: '#38A7D0',
    alignItems:'center'
  },
  textDetails: {
    fontSize: 8,
    fontWeight: 'bold',
    color: 'white',
  },
});
