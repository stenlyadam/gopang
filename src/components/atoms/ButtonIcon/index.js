import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ButtonIcon = ({disable}) => {
  return (
    <TouchableOpacity style={styles.container(disable)}>
      {disable && (
        <Image
          source={require('../../../assets/icon/sendAktif.png')}
          style={{width: 35, height: 35}}
        />
      )}
      {!disable && (
        <Image
          source={require('../../../assets/icon/send.png')}
          style={{width: 35, height: 35}}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: disable => ({
    width: 40,
    height: 40,
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
  }),
});
