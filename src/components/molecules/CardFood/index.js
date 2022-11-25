import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const CardFood = props => {
  //console.log(props)

  return (
    <TouchableOpacity onPress={props.onPress} >
    <View
      style={{
        height: 100,
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      <Image source={{uri: `data:image/jpeg;base64, ${props.image}`}} 
             style={{
              marginTop: 14, 
              marginBottom: 14,
              width:80,
              height:80,
              borderRadius:10
            }}/>
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
              <Text style={styles.kategori}>{props.kategori}</Text>
              <Text style={styles.namaMakanan}>{props.title}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 11,marginTop:7}}>
            <Text style={styles.harga}>Rp.{`${props.harga}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 11, marginTop: 5}}>
            <Image source={require('../../../assets/icon/Direction.png')} />
            <Text style={styles.location}>{props.alamat}, Warung {props.warung}</Text>
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
          }}></View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default CardFood;

const styles = StyleSheet.create({
  namaMakanan: {
    fontSize: 16,
    fontWeight: 'bold',
    height: 25,
  },
  kategori: {
    fontSize:10,
  },
  harga: {
    fontWeight: 'normal',
    fontSize: 15,
    width: 187,
    height: 25,
  },
  location: {
    flexDirection: 'row',
    fontWeight: 'normal',
    fontSize: 13,
    width: 187,
    height: 50,
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
});
