import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ButtonPlusMinus = (props, {navigation}) => {
  return (
    <View style={props.btnView}>
      {/* for se tampil button discreen mana saja */}
      <TouchableOpacity
        underlayColor={{color: '#006688'}}
        style={styles.Button}
        onPress={props.onPress}
        activeOpacity={0.6}>
        <Text style={styles.textButton}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPlusMinus;

const styles = StyleSheet.create({
  Button: {
    paddingTop: 15,
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#38A7D0',
    marginTop: 3,
    width: 28,
    height: 25,
  },
  textButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
