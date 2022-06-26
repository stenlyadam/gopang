import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ButtonChat = (props, {navigation}) => {
  return (
    <View style={props.btnView}>
      {/* for se tampil button discreen mana saja */}
      <TouchableOpacity style={styles.Button} onPress={props.onPress}>
        <Text style={styles.textButton}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonChat;

const styles = StyleSheet.create({
  Button: {
    //alignItems: 'center',
    marginLeft: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#38A7D0',
    width: 186,
    height: 50,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
