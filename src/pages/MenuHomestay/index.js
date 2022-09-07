import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Header from '../../components/molecules/header';
import CardHomestay from '../../components/molecules/CardHomestay';
import Input from '../../components/atoms/Input';
import firebase from '../../config/Firebase';

const MenuHomestay = ({navigation, route}) => {
  const uid = route.params;
  const [pictures, setPictures] = useState([]);

  const handleSubmit = key => {
    navigation.navigate('infoHomestay', {uid: uid, homestayID: key});
  };

  useEffect(() => {
    firebase
      .database()
      .ref(`homestay`)
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
        }
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <Header title="Homestay" onBack={() => navigation.goBack()} />

      {/* Container */}
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: '77.8%', marginLeft: 10}}>
              <Input
                placeholder={'Search'}
                // type={text}
                input={styles.searchBox}
              />
            </View>
            {/* Filter */}
            <View style={{marginLeft: 6, marginTop: 12}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Filter')}
                style={{
                  width: 63,
                  height: 24,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View style={styles.navigation}>
                  <Image source={require('../../assets/icon/filter.png')} />
                </View>
                <Text style={{fontSize: 15, textAlign: 'center'}}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View>
              {pictures.map(key => (
                <View style={{flexDirection: 'row'}}>
                  <CardHomestay
                    title={key.name}
                    location={key.alamat}
                    image={`${key.photo}`}
                    price={key.price}
                    onPress={() => handleSubmit(key.id)}
                  />
                </View>
              ))}
            </View>

            {/* <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
            <CardHomestay
              title="Juniver"
              location="Pulisan Village, North Sulawesi"
              image={require('../../assets/home/Juniver.png')}
            />
            <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
            <CardHomestay
              title="Komplex Jembatan"
              location="Kinunang Village, North Sulawesi"
              image={require('../../assets/home/Jembatan.png')}
            />
            <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
            <CardHomestay
              title="Wahyu"
              location="Marinsow Village, North Sulawesi"
              image={require('../../assets/home/Wahyu.png')}
            />
            <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
            <CardHomestay
              title="Wahyu"
              location="Marinsow Village, North Sulawesi"
              image={require('../../assets/home/Wahyu.png')}
            /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuHomestay;

const styles = StyleSheet.create({
  elevation: {
    paddingBottom: 8,
    paddingLeft: 20,
  },
  searchBox: {
    height: 45,
    paddingLeft: 23,
    paddingRight: 23,
    borderWidth: 0.3,
    borderRadius: 10,
  },
});
