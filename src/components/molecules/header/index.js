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

const header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 46,
            height: 30,
            width: 30,
            justifyContent: 'center',
          }}
          onPress={onBack}
          activeOpacity={1.0}>
          <Image source={Arrow} style={{alignSelf: 'center'}} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
});
