import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  BackHandler
} from 'react-native';
import Header from '../../components/molecules/header';
import firebase from '../../config/Firebase';
import { responsiveHeight, responsiveWidth } from '../../utils/responsive';

import CardFoodOwner from '../../components/molecules/CardFoodOwner';

const Gazebo = ({navigation, route}) => {
  const {uid} = route.params;
  const [gazebo, setGazebo] = useState({});
  const [pictures, setPictures] = useState([]);
  const [food, setFood] = useState(false);

  const getGazebo = () => {
    firebase

      .database()
      .ref(`gazebo/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setGazebo(res.val());
        }
      });
  };

  const handleSubmitGoBack =()=>{
    // firebase.database().ref(`users/pelanggan/${uid}/keranjang`).remove();

    navigation.goBack();
  };

  useEffect(() => {
    getGazebo();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleSubmitGoBack();
      return true;
    })
    return () => backHandler.remove()
  }, []);
  
  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        {/* Header */}
        <Header title="Gazebo" onBack={() => navigation.goBack()} />
        <View>
          <Image
            source={{uri: `data:image/jpeg;base64, ${gazebo.photo}`}}
            style={{
              width: '100%',
              height: 271,
              borderRadius:10,
              alignSelf:'center',
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginTop: 21,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: '5.1%',
                color: 'black',
              }}>
              {gazebo.name}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/warung/map.png')}
              style={{marginLeft: '5.1%', marginTop: 10}}
            />
            <Text style={{marginTop: 10, marginLeft: '2%', fontSize: 14}}>
              {gazebo.alamat} Beach
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 18,marginLeft:20}}>
            <Image
            source={require('../../assets/Gazebo/contact.png')}
            style={{width: 35, height: 40}}
            />
            <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Owner</Text>
            <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#38A7D0'}}>
                {gazebo.number}
            </Text>
            </View>
          </View>
      </View>
      </View>
    </ScrollView>
  );
};

export default Gazebo;

const styles = StyleSheet.create({
  Box: {
    backgroundColor: 'white',
    // opacity: 0.9,
    width: '85%',
    height: '68%',
    borderRadius: 5,
    alignSelf: 'center',
    top: '-15%',
  },
  textInput: {
    // backgroundColor: 'red',
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 5,
    top: 5,
    margin: 7,
    paddingLeft: 15,
  },
  Button: {
    position: 'absolute',
    backgroundColor: '#38A7D0',
    alignSelf: 'center',
    width: '40%',
    height: '10%',
    bottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  Save: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});
