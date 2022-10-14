/* eslint-disable */
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

import Button from '../../components/atoms/Button';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const dayjs = require('dayjs');

const MenuGazebo = ({navigation, route}) => {
  const {uid, homestayID} = route.params;
  const [homestay, setHomestay] = useState({});
  const [harga, setHarga] = useState('');
  const [status, setStatus] = useState('');
  // const [Date, setDate] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentDatePickerContext, setCurrentDatePickerContext] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    {
      checkInDate === null && checkOutDate === null ? (
        alert('Please add Check In or Check Out ! ')
      ) : (
        <View>
          {checkOutDate == null ? (
            alert('Please add Check Out')
          ) : (
            <View>
              {checkInDate == null
                ? alert('Please add Check In')
                : (setLoading(true),
                  setTimeout(() => {
                    setLoading(false);
                    navigation.navigate('OverviewPage', {
                      uid: uid,
                      homestayID: homestayID,
                      checkInDate: checkInDate.toString(),
                      checkOutDate: checkOutDate.toString(),
                    });
                  }, 1000))}
            </View>
          )}
        </View>
      );
    }
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
          setStatus(res.val().status);
        }
      });
  };

  useEffect(() => {
    getHomestay();
  }, []);

  const toggleDatePicker = isVisible => setShowDatePicker(isVisible);

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
              <Text
                style={{
                  marginTop: 10,
                  position: 'absolute',
                  right: '11%',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {homestay.totalRating}
              </Text>
              <Image
                source={require('../../assets/rating.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 12,
                  position: 'absolute',
                  right: '6%',
                }}
              />
            </View>
            <TouchableOpacity style={{marginLeft: 20, flexDirection: 'row'}}>
              <Image
                source={require('../../assets/icon/Direction.png')}
                style={{
                  width: 15,
                  height: 20,
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
            <View style={{marginLeft: '4.8%', marginTop: 22}}>
              <View>
                {[
                  [
                    'Check-in',
                    () => {
                      toggleDatePicker(true);
                      setCurrentDatePickerContext('checkIn');
                    },
                    checkInDate,
                  ],
                  [
                    'Check-out',
                    () => {
                      toggleDatePicker(true);
                      setCurrentDatePickerContext('checkOut');
                    },
                    checkOutDate,
                  ],
                ].map((el, idx) => (
                  <View key={idx} style={{marginBottom: 10}}>
                    <Text
                      style={{
                        color: '#38A7D0',
                      }}>
                      {el[0]}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        style={{
                          // backgroundColor: 'rgba(0, 0, 0, 0.03)',
                          // borderBottomWidth: 3,
                          // borderBottomColor: 'rgba(0, 0, 0, 0.09)',
                          // borderRadius: 3,
                          // padding: 5,
                          paddingTop: 15,
                          alignItems: 'center',
                          borderRadius: 20,
                          backgroundColor: 'rgba(0, 0, 0, 0.03)',
                          borderBottomColor: 'rgba(0, 0, 0, 0.10)',
                          borderBottomWidth: 3,
                          width: 200,
                          height: 50,
                        }}
                        onPress={el[1]}>
                        <Text>
                          {el[2]
                            ? dayjs(el[2]).format('dddd, DD MMMM YYYY')
                            : `Please add a ${el[0].toLowerCase()} date`}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}

                <Text>Max. 31 Days</Text>

                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                  }}>
                  {checkInDate && checkOutDate
                    ? `${dayjs(checkOutDate).diff(
                        dayjs(checkInDate),
                        'day',
                      )} Night`
                    : '-'}
                </Text>
              </View>

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
                {status == 'available' ? (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSubmit(homestayID)}>
                    <Text style={styles.textButton}>Booking</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.button2}>
                    <Text style={styles.textButton}>Booked</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <DateTimePickerModal
        onConfirm={date => {
          if (currentDatePickerContext === '')
            return alert("Internal Error: Date Picker context isn't primed!");

          currentDatePickerContext === 'checkIn'
            ? setCheckInDate(date)
            : setCheckOutDate(date);

          toggleDatePicker(false);
        }}
        onCancel={() => toggleDatePicker(false)}
        isVisible={showDatePicker}
      />
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
  button2: {
    paddingTop: 15,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'grey',
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
