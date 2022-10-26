import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, BackHandler,Alert} from 'react-native';
import Header from '../../components/molecules/header';
import firebase from '../../config/Firebase';

const OwnerMenu = ({navigation, route}) => {
  const {uid} = route.params;
  const [homestay, setHomestay] = useState({});
  const [warung, setWarung] = useState({});
  const [isHomestay, setIsHomestay] = useState(false);
  const [isWarung, setIsWarung] = useState(false);

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

  const backPressed = () => {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed')},
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      { cancelable: false });
      return true;
  }
  const exit=()=>{
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      backPressed();
      return true;
    })
    return () => backHandler.remove()
  }

  useEffect(() => {
    getHomestay();
    exit();
  }, []);

  const getWarung = () => {
    firebase

      .database()
      .ref(`warung/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setWarung(res.val());
          setIsWarung(true);
        }
      });
  };

  useEffect(() => {
    getWarung();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Home" />
      <View
        style={{
          height: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          width: '100%',
          alignSelf: 'center',
        }}
      />
      <View
        style={{
          alignItems: 'flex-start',
          // justifyContent: 'flex-start',
          alignSelf: 'center',
          marginTop: 20,
          width: 347,
          height: '5%',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#38A7D0'}}>
          HOMESTAY
        </Text>
      </View>
      <View>
        {isHomestay === false && (
          <TouchableOpacity
            onPress={() => navigation.navigate('AddHomestay', {uid: uid})}>
            <Image
              source={require('../../assets/owner/ButtonAddFood.png')}
              style={{margin: 20, width: 345, height: 170}}
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
                  opacity: 0.7,
                }}
                source={{uri: `data:image/jpeg;base64, ${homestay.photo}`}}
              />
              <View
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '15%',
                }}>
                <Text style={{fontSize: 30, fontWeight: '600', color: 'black'}}>
                  {homestay.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View
        style={{
          alignItems: 'flex-start',
          // justifyContent: 'flex-start',
          alignSelf: 'center',
          marginTop:20,
          width: 347,
          height: '5%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#38A7D0'}}>
          RESTAURANT
        </Text>
      </View>

      <View>
        {isWarung === false && (
          <TouchableOpacity
            onPress={() => navigation.navigate('OAddWarung', {uid: uid})}>
            <Image
              source={require('../../assets/owner/ButtonAddFood.png')}
              style={{margin: 20, width: 345, height: 170}}
            />
          </TouchableOpacity>
        )}

        {isWarung === true && (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('OWarung', {uid: uid})}>
              <Image
                style={{
                  width: 347,
                  height: 152,
                  borderRadius: 8,
                  alignSelf: 'center',
                  opacity: 0.7,
                }}
                source={{uri: `data:image/jpeg;base64, ${warung.photo}`}}
              />
              <View
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '15%',
                }}>
                <Text style={{fontSize: 30, fontWeight: '600', color: 'black'}}>
                  {warung.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default OwnerMenu;

const styles = StyleSheet.create({});
