import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const HCardTransaksi = props => {
  //   const price = this.props.harga;
  return (
    <View>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Image
          style={{
            // position: 'absolute',
            marginTop: 30,
            marginLeft: 20,
            width: 60,
            height: 60,
            borderRadius: 10,
          }}
          source={{uri: `data:image/jpeg;base64, ${props.photo}`}}
          // source={require('../../../assets/homestay/HomestayWahyu.png')}
        />
        <View style={{marginLeft: 10, marginTop: 24}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.nama}</Text>
          <Text style={{fontSize: 10, marginTop: 3}}>{props.alamat}</Text>
          <Text style={{fontSize: 13, marginTop: 10, fontWeight: 'bold'}}>
            Rp.
            {`${props.harga}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </Text>
        </View>
        <Text
          style={{
            // position: 'absolute',
            marginTop: 35,
            marginLeft: '25%',
            fontSize: 20,
            fontWeight: '700',
          }}>
          {props.status}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: 1,
          marginTop: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          width: 371,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export default HCardTransaksi;

const styles = StyleSheet.create({});
