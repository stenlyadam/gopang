import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth } from '../../../utils/responsive';

const buttonAdd = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
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
    alignSelf:'center',
    width: responsiveWidth(86),
    height: responsiveHeight(25),
    backgroundColor: '#38A7D0',
    alignItems: 'center',
  },
  textAdd: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
