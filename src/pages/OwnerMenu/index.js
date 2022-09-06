import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Header from '../../components/molecules/header';
import firebase from '../../config/Firebase';

const OwnerMenu = ({navigation, route}) => {
  const {uid} = route.params;
  const [homestay, setHomestay] = useState({});
  const [isHomestay, setIsHomestay] = useState(false);

  const getHomestay = () => {
    firebase

      .database()
      .ref(`homestay/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setHomestay(res.val());
          setIsHomestay(true);
        }
      });
  };

  useEffect(() => {
    getHomestay();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Home" />

      {isHomestay === false && (
        <TouchableOpacity
          onPress={() => navigation.navigate('AddHomestay', {uid: uid})}>
          <Image
            source={require('../../assets/owner/ButtonAddFood.png')}
            style={{margin: 20, width: 371, height: 170}}
          />
        </TouchableOpacity>
      )}

      {isHomestay === true && (
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsOwner', {uid: uid})}>
            <Image
              style={{
                width: 347,
                height: 152,
                borderRadius: 8,
                alignSelf: 'center',
              }}
              source={{uri: `data:image/jpeg;base64, ${homestay.photo}`}}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default OwnerMenu;

const styles = StyleSheet.create({});
