import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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

  useEffect(() => {
    getWarung();
    getFood();
  }, []);

  const getFood = () => {
    firebase
      .database()
      .ref(`warung/${uid}/food`)
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
    firebase.database().ref(`warung/${uid}/food/${key.id}`).remove();
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
              {warung.alamat}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/warung/clock.png')}
              style={{marginLeft: '5.1%', marginTop: 10}}
            />
            <Text style={{marginTop: 10, marginLeft: '1%', fontSize: 14}}>
              {warung.delivery}
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
            onPress={() => navigation.navigate('AddFood', {uid})}>
            <Image
              source={require('../../assets/warung/AddFood.png')}
              style={{marginLeft: '5.1%', marginTop: 10}}
            />
          </TouchableOpacity>
        </View>

        <View style={{top: 15}}>
          {food == true ? (
            pictures.map(key => (
              <View style={{flexDirection: 'row'}}>
                <CardFoodOwner
                  title={key.name}
                  harga={key.price}
                  image={`${key.photo}`}
                  onDelete={() => handleDelete(key)}
                  // myCondition={1}
                />
              </View>
            ))
          ) : (
            <Text>Belum ada makanan</Text>
          )}
          {/* {pictures.map(key => (
            <View style={{flexDirection: 'row'}}>
              <CardFoodOwner
                title={key.name}
                harga={key.price}
                image={`${key.photo}`}
                onDelete={() => handleDelete(key)}
                // myCondition={1}
              />
            </View>
          ))} */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Warung;

const styles = StyleSheet.create({});
