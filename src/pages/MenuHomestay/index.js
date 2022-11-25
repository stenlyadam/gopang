import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  BackHandler
} from 'react-native';
import Header from '../../components/molecules/header';
import CardHomestay from '../../components/molecules/CardHomestay';
import Input from '../../components/atoms/Input';
import firebase from '../../config/Firebase';
import { responsiveWidth } from '../../utils/responsive';

const MenuHomestay = ({navigation, route}) => {
  const {uid} = route.params;
  const [pictures, setPictures] = useState([]);
  const [search, setSearch] = useState('');

  const handleSubmit = key => {
    navigation.navigate('infoHomestay', {uid: uid, homestayID: key});
  };

  const handleSubmitGoBack =()=>{
    navigation.goBack();
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

      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        handleSubmitGoBack();
        return true;
      })
      return () => backHandler.remove()
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
                value={search}
                input={styles.searchBox}
                onChangeText={value => setSearch(value)}
              />
            </View>
            {/* Filter */}
            <View style={{marginLeft: 6, marginTop: 12}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Filter',{uid: uid})}
                style={{
                  width: 63,
                  height: 24,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
                activeOpacity={1.0}>
                <View style={styles.navigation}>
                  <Image source={require('../../assets/icon/filter.png')} />
                </View>
                <Text style={{fontSize: 15, textAlign: 'center'}}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.productContainer}>
            {search.length === 0 ? (
              <View>
                  {pictures
                    .filter(homestay => homestay.name.includes(search))
                    .map(key => (
                      <View style={{width: responsiveWidth(350),alignSelf:'center',justifyContent:'center'}}>
                        <CardHomestay
                          title={key.name}
                          image={`${key.photo}`}
                          location={key.location}
                          price={key.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                          status={`${key.status}`}
                          onPress={() => handleSubmit(key.id)}
                          rating={key.totalRating}
                        />
                      </View>
                    ))}
              </View>
            ) : (
                pictures
                .filter(homestay =>homestay.name.toLowerCase().includes(search.toLowerCase()))
                .map(key => (
                  <View style={{width: responsiveWidth(350),alignSelf:'center',justifyContent:'center'}}>
                    <CardHomestay
                      title={key.name}
                      image={`${key.photo}`}
                      location={key.location}
                      price={key.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                      status={`${key.status}`}
                      onPress={() => handleSubmit(key.id)}
                      rating={key.totalRating}
                    />
                  </View>
                ))
            )}
          </ScrollView>
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
  productContainer:{
    marginTop: 10,
    width:responsiveWidth(411),
    justifyContent:'center'
  },
  searchBox: {
    height: 45,
    paddingLeft: 23,
    paddingRight: 23,
    borderWidth: 0.3,
    borderRadius: 10,
  },
});
