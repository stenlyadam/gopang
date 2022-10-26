import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const FCardTransaksi = props => {
  //   const price = this.props.harga;
  return (
    <View>
      <TouchableOpacity style={{flexDirection: 'row'}} onPress={props.onPress}>
        <Image
          style={{
            // position: 'absolute',
            marginTop: 15,
            marginLeft: 20,
            width: 60,
            height: 60,
            borderRadius: 10,
          }}
          source={{uri: `data:image/jpeg;base64, ${props.photo}`}}
          // source={require('../../../assets/homestay/HomestayWahyu.png')}
        />
        <View style={{marginLeft: 10, marginTop: 11}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Warung {props.namaWarung}</Text>
          <Text style={{fontSize: 10}}>{props.alamat}</Text>
          <Text style={{fontSize: 8, marginTop: 3}}>Total</Text>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>
            Rp.
            {`${props.harga}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </Text>
        </View>
        {props.status != "completed" ?(
          <Text
            style={{
              position: 'absolute',
              marginTop: 20,
              marginLeft: '65%',
              width:50,
              textAlign:'center',
              fontSize: 20,
              fontWeight: '700',
            }}>
            {props.status}
          </Text>
        ):(
          <Text
            style={{
              position: 'absolute',
              marginTop: 30,
              marginLeft: '65%',
              width:50,
              textAlign:'center',
              fontSize: 20,
              color:'#38A7D0',
              fontStyle:'italic',
              fontWeight: '700',
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

export default FCardTransaksi;

const styles = StyleSheet.create({});
