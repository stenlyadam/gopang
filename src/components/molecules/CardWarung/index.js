import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ButtonAdd from '../../atoms/buttonAdd';

const CardWarung = props => {

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
      <Image source={props.image} style={{marginTop: 14, marginBottom: 14,width:120,height:88,borderRadius:20}} />

      <View style={{marginTop:20,marginLeft:20}}>
        <Text style={{fontSize:13, fontWeight:'bold'}}>{props.title}</Text>
        <Text style={{marginTop:6,fontSize:13}}>{props.harga}</Text>
        <View style={{flexDirection:'column',marginTop:'7%',marginLeft:'-15%'}}>
          <ButtonAdd/>
        </View>
      </View>
      
      
    </View>
  );
};

export default CardWarung;

const styles = StyleSheet.create({
  namaMakanan: {
    fontSize: 15,
    fontWeight: 'bold',
    height: 30,
    marginTop:5
  },
  harga: {
    fontWeight: 'normal',
    fontSize: 15,
    width: 187,
    height: 25,
    marginTop:5
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
