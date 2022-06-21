import React, {useEffect, useState} from 'react';
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
import Loading from '../../components/molecules/Loading';

const MenuGazebo = ({navigation, route}) => {
  const {uid, homestayID} = route.params;
  const [homestay, setHomestay] = useState({});
  const [harga, setHarga] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('OverviewPage', {uid: uid, homestayID: homestayID});
    }, 2000);
  };

  const getHomestay = () => {
    firebase
      .database()
      .ref(`homestay/${homestayID}`)
      .on('value', res => {
        if (res.val()) {
          // setLoading(false);
          setHomestay(res.val());
          setHarga(res.val().price);
        }
      });
  };

  useEffect(() => {
    getHomestay();
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          {/* Header */}
          <Header title="Detail Homestay" onBack={() => navigation.goBack()} />

          {/* Container */}
          <View>
            <Image
              source={{uri: `data:image/jpeg;base64, ${homestay.photo}`}}
              style={{
                width: '100%',
                height: 271,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            />

            {/* nama homestay & location */}
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                marginTop: 21,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginLeft: '5.1%',
                }}>
                {homestay.name}
              </Text>
              <Image
                source={require('../../assets/icon/Rating.png')}
                style={{
                  width: 51,
                  height: 17,
                  marginTop: 12,
                  position: 'absolute',
                  right: 20,
                }}
              />
            </View>
            <TouchableOpacity style={{marginLeft: 20, flexDirection: 'row'}}>
              <Image
                source={require('../../assets/icon/Direction.png')}
                style={{
                  width: 20,
                  height: 29,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  width: 288,
                  marginLeft: 3,
                }}>
                {homestay.alamat}
              </Text>
            </TouchableOpacity>

            {/* Fasilitas */}
            <View
              style={{
                flexDirection: 'row',
                height: 58,
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'center',
              }}>
              {homestay.bedroom === true && (
                <View style={{width: 65, alignItems: 'center', marginLeft: 15}}>
                  <Image
                    source={require('../../assets/icon/Bedroom.png')}
                    style={styles.Fasilitas}
                  />
                  <Text style={styles.TFasilitas}>BEDROOM</Text>
                </View>
              )}
              {/* Fasilitas Bathroom */}
              {homestay.bathroom === true && (
                <View style={{width: 65, alignItems: 'center', marginLeft: 15}}>
                  <Image
                    source={require('../../assets/icon/Bathroom.png')}
                    style={styles.Fasilitas}
                  />
                  <Text style={styles.TFasilitas}>BATHROOM</Text>
                </View>
              )}

              {/* Fasilitas WiFi */}
              {homestay.wifi === true && (
                <View style={{width: 65, alignItems: 'center', marginLeft: 15}}>
                  <Image
                    source={require('../../assets/icon/Wifi.png')}
                    style={styles.Fasilitas}
                  />
                  <Text style={styles.TFasilitas}>WIFI</Text>
                </View>
              )}

              {/* Fasilitas AC */}
              {homestay.AC === true && (
                <View style={{width: 65, alignItems: 'center', marginLeft: 15}}>
                  <Image
                    source={require('../../assets/icon/AC.png')}
                    style={styles.Fasilitas}
                  />
                  <Text style={styles.TFasilitas}>AC</Text>
                </View>
              )}
            </View>

            {/* Description */}
            <View
              style={{
                marginLeft: '4.8%',
                marginRight: '4.8%',
                marginTop: '4.8%',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginBottom: 12,
                }}>
                Overview
              </Text>
              <Text style={{fontSize: 17}}>{homestay.description}</Text>
            </View>

            {/* Check in/out */}
            <View style={{marginLeft: 37, marginTop: 22}}>
              <Text
                style={{marginBottom: 6.37, fontSize: 14, color: '#38A7D0'}}>
                Check-in
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#F9F9F9',
                  height: 40.54,
                  marginRight: 121,
                }}>
                <Image
                  source={require('../../assets/icon/Kalender.png')}
                  style={{marginLeft: 13.18}}
                />
                <Text style={{fontSize: 18, marginLeft: 5}}>
                  Sunday, 6 February 2022
                </Text>
              </View>

              <Text
                style={{
                  marginBottom: 6.37,
                  marginTop: 15.68,
                  fontSize: 14,
                  color: '#38A7D0',
                }}>
                Check-out
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#F9F9F9',
                  height: 40.54,
                  marginRight: 121,
                }}>
                <Image
                  source={require('../../assets/icon/Kalender.png')}
                  style={{marginLeft: 13.18}}
                />
                <Text style={{fontSize: 18, marginLeft: 5}}>
                  Monday, 7 February 2022
                </Text>
              </View>
              <Text style={{fontSize: 12}}>Max.31 Days</Text>
              <Text style={{fontSize: 18, marginTop: 7.34}}>1 Malam</Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 21.68,
                  marginBottom: 34.65,
                  height: 57.35,
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#38A7D0', fontWeight: 'bold', fontSize: 20}}>
                  IDR {harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 12, marginTop: 7}}>
                  /Night
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit(homestayID)}>
                  <Text style={styles.textButton}>Booking</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
  );
};

export default MenuGazebo;

const styles = StyleSheet.create({
  elevation: {
    paddingBottom: 8,
    paddingLeft: 20,
  },
  searchBox: {
    width: 371,
    height: 45,
    paddingLeft: 23,
    paddingRight: 23,
    borderWidth: 1,
    borderRadius: 10,
  },
  Fasilitas: {},
  TFasilitas: {
    fontSize: 12,
  },
  button: {
    paddingTop: 15,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#38A7D0',
    width: 191,
    height: 57.35,
    marginLeft: 14,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
