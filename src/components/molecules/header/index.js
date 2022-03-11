import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Arrow from '../../../assets/icon/Arrow.png';

const header = ({title, navigation}) => {
  return (
    <View style={styles.containter}>
      <TouchableOpacity
        style={{position: 'absolute', left: 46}}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={Arrow} style={{height: 22.39, width: 10}} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  containter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 114,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
