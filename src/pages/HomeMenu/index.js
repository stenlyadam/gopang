import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import firebase from '../../config/Firebase';
import FoodCardHome from '../../components/molecules/FoodCardHome';
import CardHomestay from '../../components/molecules/CardHomestay';

const HomeMenu = ({navigation, route}) => {
  const {uid} = route.params;
  const [pictures, setPictures] = useState([]);
  const [onWarung, setOnWarung] = useState([]);
  const [selectedValue] = useState('Paal');
  const [locationPaal] = useState('Paal');

  const handleSubmit = key => {
    navigation.navigate('infoHomestay', {uid: uid, homestayID: key});
  };
  const handleWarung = key => {
    navigation.navigate('ProfilWarung', {uid: uid, WarungID: key});
  };

  useEffect(() => {
    getHomestay();
    getWarung();
  }, []);

  const getWarung = () => {
    firebase
      .database()
      .ref(`warung`)
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
          setOnWarung(productArray);
        }
      });
  };

  const getHomestay = async () => {
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
          const sort = productArray.sort(
            (a, b) => a.totalRating - b.totalRating,
          );
          const descending = sort.reverse();
          const slice = descending.slice(0, 3);
          setPictures(slice);
        }
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {/*Likupang North*/}
        <View style={{position: 'relative'}}>
          <Image
            source={require('../../assets/home/Likupang.png')}
            style={{
              width: '100%',
              height: 229,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          />
          <Image
            source={require('../../assets/home/Logo.png')}
            style={{
              height: 34,
              width: 31,
              position: 'absolute',
              top: 13,
              left: '68.61%',
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000000',
              position: 'absolute',
              top: 21,
              left: '74%',
              width: 79,
              height: 25,
            }}>
            GOPANG
          </Text>
        </View>

        {/*Kategori*/}
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            marginRight: '58.3%',
            marginTop: 27,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MenuHomestay', {uid: uid})}
            style={{
              width: '60%',
              alignItems: 'center',
            }}>
            <View style={styles.pindah}>
              <Image source={require('../../assets/icon/Homestay.png')} />
            </View>
            <Text style={{fontSize: 15, textAlign: 'center'}}>Homestay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MenuGazebo', {uid: uid})}
            style={{
              width: '60%',
              alignItems: 'center',
            }}>
            <View style={styles.pindah}>
              <Image source={require('../../assets/icon/Gazebo.png')} />
            </View>
            <Text style={{fontSize: 15, textAlign: 'center'}}>Gazebo</Text>
          </TouchableOpacity>
        </View>

        {/*Recomended Homestay*/}
        <Text style={styles.recomHomestay}>Recomended Homestay</Text>
        <View style={{marginTop: 10, width: '100%', justifyContent: 'center'}}>
          {selectedValue === 'Paal' && (
            <View>
              {pictures
                // .filter(homestay => homestay.location.includes(locationPaal))
                .map(key => (
                  <View>
                    <CardHomestay
                      title={key.name}
                      image={`${key.photo}`}
                      location={key.location}
                      price={key.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                      // status={`${key.status}`}
                      onPress={() => handleSubmit(key.id)}
                      rating={key.totalRating}
                    />
                  </View>
                ))}
            </View>
          )}
        </View>

        {/*Popular Destinations*/}
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 14,
            marginLeft: 20,
          }}>
          Popular Destinations
        </Text>
        <View style={styles.Gdestination}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('OptionMenuPaal', {uid: uid})}
              activeOpacity={0.8}>
              <Image
                source={require('../../assets/pantai/Paal/Paal4.png')}
                style={{height: 170, width: 173, borderRadius: 20}}
              />
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '40%',
                  fontSize: 20,
                  color: 'white',
                }}>
                Paal Beach
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '53%',
                  fontSize: 13,
                  color: 'white',
                }}>
                Homestay • Gazebo • Food
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 20}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('OptionMenuPulisan', {uid: uid})
              }
              activeOpacity={0.8}>
              <Image
                source={require('../../assets/pantai/Pulisan/Pulisan5.jpg')}
                style={{height: 170, width: 173, borderRadius: 20}}
              />
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '40%',
                  fontSize: 20,
                  color: 'white',
                }}>
                Pulisan Beach
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '53%',
                  fontSize: 13,
                  color: 'white',
                }}>
                Homestay • Gazebo • Food
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 25}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('OptionMenuKinunang', {uid: uid})
              }
              activeOpacity={0.8}>
              <Image
                source={require('../../assets/pantai/Kinunang/Kinunang1.jpg')}
                style={{height: 170, width: 173, borderRadius: 20}}
              />
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '40%',
                  fontSize: 20,
                  color: 'white',
                }}>
                Kinunang Beach
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '53%',
                  fontSize: 13,
                  color: 'white',
                }}>
                Homestay • Gazebo • Food
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 20, marginTop: 25}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('OptionMenuLarata', {uid: uid})
              }
              activeOpacity={0.8}>
              <Image
                source={require('../../assets/pantai/Larata/Larata1.jpg')}
                style={{height: 170, width: 173, borderRadius: 20}}
              />
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '40%',
                  fontSize: 20,
                  color: 'white',
                }}>
                Larata Hill
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '53%',
                  fontSize: 13,
                  color: 'white',
                }}>
                Homestay • Food
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Trending Restaurant*/}
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 15,
            marginLeft: 20,
          }}>
          Trending Restaurant
        </Text>
        <View style={styles.restaurant}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {onWarung.map(key => (
              <View style={{flexDirection: 'row'}}>
                <FoodCardHome
                  name={key.name}
                  location={key.alamat}
                  image={`${key.photo}`}
                  onPress={() => handleWarung(key.id)}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeMenu;

const styles = StyleSheet.create({
  pindah: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#A7DFD8',
    backgroundColor: '#A7DFD8',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recomHomestay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 10,
  },
  wahyu: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 11,
    marginBottom: 5,
    marginLeft: 11,
  },
  juniver: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 11,
  },
  jembatan: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 11,
    marginBottom: 5,
    marginLeft: 11,
  },
  Gdestination: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
  },
  Fdestination: {
    flexDirection: 'row',
    marginBottom: 17,
  },
  restaurant: {
    flexDirection: 'row',
    marginHorizontal: 17,
    marginTop: 15,
    marginBottom: 55,
  },
  Trestaurant: {
    marginRight: 21,
  },
  location: {
    fontWeight: 'normal',
    fontSize: 12,
    width: 187,
    height: 16,
    marginLeft: 4,
  },
  foodStyle: {
    width: 112,
    height: 124,
    borderRadius: 5,
  },
});
