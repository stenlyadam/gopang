import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const CardWarungFood = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.Trestaurant}
        activeOpacity={1.0}>
        <Image source={{uri: `data:image/jpeg;base64, ${props.image}`}} style={styles.foodStyle}/>
        <View style={{marginLeft:5}}>
            <Text style={{fontSize:16,fontWeight:'bold',marginLeft:15}}>Warung {props.name}</Text>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../../../assets/rating.png')} style={{width:10,height:10,alignSelf:'center',marginLeft:15}}/>
              <Text style={{fontSize:12,fontWeight:'bold',marginLeft:2}}>{props.totalRating}</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:15,marginTop:30}}>
            <Image source={props.Ilocation} />
            <Text style={{fontSize:12,fontWeight:'bold',marginBottom:20,marginLeft:3}}>{props.location}</Text>
            </View>
        </View>
        </TouchableOpacity>
    </View>
  );
};

export default CardWarungFood;

const styles = StyleSheet.create({
    Trestaurant: {
        flexDirection:'row',
        marginTop:10,
        marginLeft:20,
        marginRight:20,
      },
    foodStyle:{
        width:90,
        height:90,
        borderRadius:10
    }
});
