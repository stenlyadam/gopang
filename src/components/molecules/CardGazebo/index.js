import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ButtonDetails from '../../atoms/buttonDetails';

const CardGazebo = props => {
  return (
    <View
      style={{
        height: 118,
        width: 371,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0,
        borderBottomColor: '#464646',
        borderBottomWidth: 1,
      }}>
      <Image source={props.image} style={{marginTop: 14, marginBottom: 14}} />
      <View
        style={{
          marginLeft: 12,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 60,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.containerTitle}>
              <Text style={styles.wahyu}>{props.title}</Text>
            </View>
            <View>
              <Image source={require('../../../assets/icon/Rating.png')} />
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 11}}>
            <Image source={require('../../../assets/icon/Direction.png')} />
            <Text style={styles.location}>{props.location}</Text>
          </View>
        </View>
        <View
          style={{
            width: 110,
            height: 14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 29,
            marginLeft: 11,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 12}}>Size: 4x4</Text>

          <View style={styles.button}>
            <ButtonDetails title="Details" onSubmit={props.onPress} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardGazebo;

const styles = StyleSheet.create({
  wahyu: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontWeight: 'normal',
    fontSize: 12,
    width: 187,
    height: 16,
    marginLeft: 4,
  },
  containerTitle: {
    width: 167,
    height: 22,
    marginTop: 11,
    marginBottom: 5,
    marginLeft: 11,
    marginRight: 55,
  },
  button: {
    marginLeft: 156,
  },
});
