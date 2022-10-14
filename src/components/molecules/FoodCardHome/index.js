import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const FoodCardHome = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.Trestaurant}
        activeOpacity={1.0}>
        <Image source={{uri: `data:image/jpeg;base64, ${props.image}`}} style={styles.foodStyle}/>
        <View style={{marginLeft:5}}>
            <Text style={{fontSize:12,fontWeight:'bold'}}>Warung {props.name}</Text>
            <Image source={require('../../../assets/icon/Rating.png')}/>
            <View style={{flexDirection:'row'}}>
            <Image source={props.Ilocation} />
            <Text style={{fontSize:12,fontWeight:'bold',marginBottom:20}}>{props.location}</Text>
            </View>
        </View>
        </TouchableOpacity>
    </View>
  );
};

export default FoodCardHome;

const styles = StyleSheet.create({
    Trestaurant: {
        marginRight: 21,
      },
    foodStyle:{
        width:112,
        height:124,
        borderRadius:5
    }
});
