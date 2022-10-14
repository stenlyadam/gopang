import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

const CardKeranjang = props => {
  console.log('card warung:', props);

  return (
    <View
      style={{
        height: 100,
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0,
      }}>
      <Image
        source={props.image}
        style={{
          marginTop: 14,
          marginBottom: 14,
          width: 120,
          height: 88,
          borderRadius: 20,
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
            height: 60,
            flexDirection: 'column',
          }}>
          {/* Nama Makanan */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.containerTitle}>
              <Text style={styles.namaMakanan}>{props.title}</Text>
            </View>
          </View>

          {/* Harga makanan */}
          <View style={{flexDirection: 'row', marginLeft: 11}}>
            <Text style={styles.harga}>Rp.{props.harga}</Text>
          </View>
        </View>

        {/* Button Input Jumlah Makanan */}

        <View style={styles.plusminus}>
          <TouchableOpacity style={{right: '50%'}} onPress={props.onMinus}>
            <Image source={require('../../../assets/icon/minus.png')} />
          </TouchableOpacity>

          <Text style={{fontSize: 20}}>{props.jumlah}</Text>

          <TouchableOpacity style={{left: '50%'}} onPress={props.onPlus}>
            <Image source={require('../../../assets/icon/plus.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardKeranjang;

const styles = StyleSheet.create({
  namaMakanan: {
    fontSize: 15,
    fontWeight: 'bold',
    height: 30,
  },
  harga: {
    fontWeight: 'normal',
    fontSize: 15,
    width: 187,
    height: 25,
  },
  // location: {
  //   flexDirection: 'row',
  //   fontWeight: 'normal',
  //   fontSize: 13,
  //   width: 187,
  //   height: 50,
  //   marginLeft: 4,
  // },
  containerTitle: {
    width: 167,
    height: 22,
    marginTop: 11,
    marginBottom: 5,
    marginLeft: 11,
    marginRight: 55,
  },
  plusminus: {
    flexDirection: 'row',

    marginLeft: '58%',
    marginBottom: 4,
  },
});
