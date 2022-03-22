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
          style={{position: 'absolute', left: 46}}
          onPress={onBack}>
          <View>
            <Image source={Arrow} style={{height: 22.39, width: 10}} />
          </View>
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
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
