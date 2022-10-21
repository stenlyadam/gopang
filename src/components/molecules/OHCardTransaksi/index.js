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
            marginTop: 30,
            marginLeft: 20,
            width: 87,
            height: 87,
            borderRadius: 10,
          }}
          source={{uri: `data:image/jpeg;base64, ${props.photo}`}}
          // source={require('../../../assets/homestay/HomestayWahyu.png')}
        />
        <View style={{marginLeft: 10, marginTop: 24}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.nama}</Text>
          <Text style={{fontSize: 10, marginTop: 3,fontWeight:'bold'}}>{props.alamat}</Text>
          <Text style={{fontSize: 10, marginTop: 3}}>Customer :</Text>
          <Text style={{fontSize: 8}}>{props.customer}</Text>
          <Text style={{fontSize: 13, marginTop: 10, fontWeight: 'bold'}}>
            Rp.
            {`${props.harga}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </Text>
        </View>

        {props.status != "completed" ?(
          <Text
            style={{
              // position: 'absolute',
              marginTop: 55,
              marginLeft: '20%',
              fontSize: 20,
              fontWeight: '700',
            }}>
            {props.status}
          </Text>
        ):(
          <Text
            style={{
              // position: 'absolute',
              marginTop: 55,
              marginLeft: '15%',
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

export default HCardTransaksi;

const styles = StyleSheet.create({});
