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

import CardFoodOwner from '../../components/molecules/CardFoodOwner';

const Warung = ({navigation, route}) => {
  const {uid} = route.params;
  const [warung, setWarung] = useState({});
  const [pictures, setPictures] = useState([]);
  const [food, setFood] = useState(false);

  const getWarung = () => {
    firebase

      .database()
      .ref(`warung/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setWarung(res.val());
        }
      });
  };

  const handleSubmitGoBack =()=>{
    // firebase.database().ref(`users/pelanggan/${uid}/keranjang`).remove();

    navigation.goBack();
  };

  useEffect(() => {
    getWarung();
    getFood();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleSubmitGoBack();
      return true;
    })
    return () => backHandler.remove()
  }, []);

  const getFood = () => {
    firebase
      .database()
      .ref(`food`)
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          // console.log(keranjang[0].namaProduk);
          Object.keys(rawData).map(key => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setPictures(productArray);
          setFood(true);
        }
      });
  };

  const handleDelete = key => {
    firebase.database().ref(`food/${key.id}`).remove();
  };

  const handleEdit = key => {
    // const data = {
    //   name: nameBaru,
    //   price: priceBaru,
    // };
    // firebase.database().ref(`warung/${uid}/food`).set(data);
    navigation.navigate('OEditFood',{uid:uid, foodId: key})
  };
  
  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        {/* Header */}
        <Header title="Warung" onBack={() => navigation.goBack()} />
        <View>
          <Image
            source={{uri: `data:image/jpeg;base64, ${warung.photo}`}}
            style={{
              width: '100%',
              height: 271,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
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
              {warung.name}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/warung/map.png')}
              style={{marginLeft: '5.1%', marginTop: 10}}
            />
            <Text style={{marginTop: 10, marginLeft: '2%', fontSize: 14}}>
              {warung.alamat} Village
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/warung/clock.png')}
              style={{marginLeft: '5.1%', marginTop: 10}}
            />
            <Text style={{marginTop: 10, marginLeft: '1%', fontSize: 14}}>
              {warung.delivery} Minute Delivery Time
            </Text>
          </View>

          <Text
            style={{
              marginTop: 10,
              marginLeft: '6%',
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Add Food
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('OAddFood', {uid})}
            style={styles.addFood}>
            <Image
              source={require('../../assets/warung/AddFood.png')}
              style={{marginLeft: '5.1%', marginTop: 10}}
            />
          </TouchableOpacity>
        </View>

        <View style={{top: 15}}>
          {food == true ? (
            pictures
            .filter(items=> items.IDwarung.includes(uid))
            .map(key => (
              <View style={{flexDirection: 'row'}}>
                <CardFoodOwner
                  title={key.name}
                  harga={key.price}
                  image={`${key.photo}`}
                  onDelete={() => handleDelete(key)}
                  onEdit={() => handleEdit(key.id)}
                  // myCondition={1}
                />
              </View>
            ))
          ) : (
            <Text>Belum ada makanan</Text>
          )}

        </View>
      </View>
    </ScrollView>
  );
};

export default Warung;

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
