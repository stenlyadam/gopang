import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const HCardTransaksi = props => {
  //   const price = this.props.harga;
  return (
    <View>
      <TouchableOpacity style={{flexDirection: 'row'}} onPress={props.onPress}>
        <Image
          style={{
            // position: 'absolute',
            marginTop: 15,
            width: 60,
            height: 60,
            borderRadius: 10,
          }}
          source={{uri: `data:image/jpeg;base64, ${props.photo}`}}
          // source={require('../../../assets/homestay/HomestayWahyu.png')}
        />
        <View style={{marginLeft: 10, marginTop: 14}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.nama}</Text>
          <Text style={{fontSize: 10, marginTop: 3}}>{props.alamat}</Text>
          <Text style={{fontSize: 13, marginTop: 10, fontWeight: 'bold'}}>
            Rp.
            {`${props.harga}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </Text>
        </View>
        {props.status != "completed" ?(
          <Text
            style={{
              position: 'absolute',
              marginTop: 25,
              marginLeft: '75%',
              fontSize: 20,
              fontWeight: '700',
              textAlign:'center'
            }}>
            {props.status}
          </Text>
        ):(
          <Text
            style={{
              position: 'absolute',
              marginTop: 25,
              marginLeft: '70%',
              fontSize: 20,
              color:'#38A7D0',
              fontStyle:'italic',
              fontWeight: '700',
              textAlign:'center',
            }}>
            {props.status}
          </Text>
        )}
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
