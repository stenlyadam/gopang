import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { responsiveHeight, responsiveWidth } from '../../../utils/responsive';
import ButtonDetails from '../../atoms/buttonDetails';

const CardHomestay = props => {
  return (
    <View
      style={{
        height: 118,
        width: responsiveWidth(370),
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0,
      }}>
      <Image
        source={{uri: `data:image/jpeg;base64, ${props.image}`}}
        style={{
          marginTop: 14,
          marginBottom: 14,
          width: responsiveWidth(80),
          height: responsiveHeight(90),
          borderRadius: 10,
        }}
      />
      <View
        style={{
          marginLeft: 12,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: responsiveHeight(70),
            width:responsiveWidth(205),
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
          </View>
          <View style={{flexDirection: 'row', marginLeft: 11}}>
            <Image source={require('../../../assets/icon/Direction.png')} />
            <Text style={styles.location}>{props.location} village</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: '15%',
            width:responsiveWidth(40),
            right: '-30%',
          }}>
          <Image source={require('../../../assets/rating.png')} style={{width:12,height:12,alignSelf:'center'}} />
          <Text
            style={{
              fontWeight: 'bold',
              left: '11%',
              color: 'black',
              fontSize: 13,
            }}>
            {props.rating}
          </Text>
        </View>

        <View
          style={{
            width: responsiveWidth(110),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            marginLeft: 11,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#38A7D0', fontWeight: 'bold', fontSize: 12}}>
              IDR {props.price}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 10, marginTop: 1}}>
              /Night
            </Text>
          </View>
          <View
            style={{position: 'absolute', marginLeft: 188, marginBottom: 50,width:60,alignItems:'center'}}>
            {props.status === 'available' && (
              <Text style={styles.status}>{props.status}</Text>
            )}
            {props.status === 'unavailable' && (
              <Text style={styles.status1}>{props.status}</Text>
            )}
            <ButtonDetails onSubmit={props.onPress} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardHomestay;

const styles = StyleSheet.create({
  wahyu: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontWeight: 'normal',
    fontSize: 12,
    width: 187,
    marginLeft: 4,
  },
  containerTitle: {
    width: 167,
    height: 22,
    marginTop: 11,
    marginBottom: 5,
    marginLeft: 11,
    marginRight: 55,
    flexDirection: 'row',
  },
  status: {
    fontSize: 10,
    marginTop: -12,
    color: 'green',
  },
  status1: {
    fontSize: 10,
    marginTop: 3,
    marginTop: -12,
    color: 'black',
  },
});
