import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const OFCardTransaksi = props => {
  //   const price = this.props.harga;
  return (
    <View >
      <TouchableOpacity style={{flexDirection: 'row',marginTop:5}} onPress={props.onPress}>
        <Image
          style={{
            // position: 'absolute',
            marginLeft: 20,
            width: 50,
            height: 50,
          }}
          source={props.photo}
        />
        <View style={{marginLeft: 15}}>
          {/* <Text style={{fontSize: 15, fontWeight: 'bold'}}>warung {props.namaWarung}</Text> */}
          <Text style={{fontSize: 10}}>Customer :</Text>
          <Text style={{fontSize: 8}}>{props.customer}</Text>
          <Text style={{fontSize: 13, marginTop: 3, fontWeight: 'bold'}}>
            Rp.
            {`${props.harga}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </Text>
        </View>

        {props.status != "completed" ?(
          <View style={{
            position: 'absolute',
            marginLeft:260,
            // backgroundColor:'red',
            width:130,
            height:55,
          }}>
            {props.status != "cooking" && props.status != "food on the way" ?(
              <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                alignSelf:'center',
                marginTop:2,
                textAlign:'center'
                }}>{props.status}</Text>
            ):(
              <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                alignSelf:'center',
                marginTop:3,
                textAlign:'center',
                width:100
                }}>{props.status}</Text>
            )}
          </View>
        ):(
          <View style={{
              position: 'absolute',
              marginTop: 10,
              marginLeft:230,
              width:130,
              height:30,
            }}>
            <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              alignSelf:'center',
              color:'#38A7D0',
              textAlign:'center',
              fontStyle:'italic',
              }}>{props.status}</Text>
          </View>
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

export default OFCardTransaksi;

const styles = StyleSheet.create({});
