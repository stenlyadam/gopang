import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView, StyleSheet,
  Text, TouchableOpacity, View
} from 'react-native';
import CardHomestay from '../../components/molecules/CardHomestay';
import firebase from '../../config/Firebase';


const HomeMenu = ({navigation,route}) => {
  const {uid} = route.params;
  const [homestay, setUsers] = useState({});

  const getUser = () => {
    firebase

      .database()
      .ref(`homestay/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
          setOnPhoto(true);
          console.log(homestay.photo);
        }
        console.log('ini homestay', homestay);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {/*Likupang North*/}
        <View>
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
            onPress={() => navigation.navigate('MenuHomestay')}
            style={{
              width: '60%',
              alignItems: 'center',
            }}>
            <View style={styles.navigation}>
              <Image source={require('../../assets/icon/Homestay.png')} />
            </View>
            <Text style={{fontSize: 15, textAlign: 'center'}}>Homestay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MenuGazebo')}
            style={{
              width: '60%',
              alignItems: 'center',
            }}>
            <View style={styles.navigation}>
              <Image source={require('../../assets/icon/Gazebo.png')} />
            </View>
            <Text style={{fontSize: 15, textAlign: 'center'}}>Gazebo</Text>
          </TouchableOpacity>
        </View>

        {/*Recomended Homestay*/}
        <Text style={styles.recomHomestay}>Recomended Homestay</Text>
        <View style={{marginTop: 10, width: '100%', justifyContent: 'center'}}>
          {/* Wahyu */}
          <CardHomestay
            title={homestay.name}
            location="Marinsow Village, North Sulawesi"
            image={require('../../assets/home/Wahyu.png')}
            onPress={() => navigation.navigate('infoHomestay')}
          />

          {/* Juniver */}
          <CardHomestay
            title="Juniver"
            location="Pulisan Village, North Sulawesi"
            image={require('../../assets/home/Juniver.png')}
          />

          {/* Komplex Jembatan */}
          <CardHomestay
            title="Komplex Jembatan"
            location="Kinunang Village, North Sulawesi"
            image={require('../../assets/home/Jembatan.png')}
          />
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
              onPress={() => navigation.navigate('OptionMenuPaal')}>
              <Image
                source={require('../../assets//home/Paal.png')}
                style={{height: 170, width: 173}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OptionMenuPulisan')}>
              <Image
                source={require('../../assets/home/Pulisan.png')}
                style={{height: 170, width: 173}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 25}}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/home/Kinunang.png')}
                style={{height: 170, width: 173}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 20, marginTop: 25}}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/home/Larata.png')}
                style={{height: 170, width: 173}}
              />
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
        <View>
          <View style={styles.restaurant}>
            <TouchableOpacity style={styles.Trestaurant}>
              <Image source={require('../../assets/home/WarungJessica.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Trestaurant}>
              <Image source={require('../../assets/home/WarungWahyu.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Trestaurant}>
              <Image source={require('../../assets/home/WarungJeniver.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeMenu;

const styles = StyleSheet.create({
  navigation: {
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
});
