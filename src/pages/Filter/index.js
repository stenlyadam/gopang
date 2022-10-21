/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState,useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import Header from '../../components/molecules/header';
import {Picker} from '@react-native-picker/picker';
import firebase from '../../config/Firebase';
import CardHomestay from '../../components/molecules/CardHomestay';

const Filter = ({navigation,route}) => {
  const {uid,homestayID} = route.params;
  const [selectedValue, setSelectedValue] = useState('All');
  const [locationPaal, setLocationPaal] = useState('Paal');
  const [locationPulisan, setLocationPulisan] = useState('Pulisan');
  const [locationKinunang, setLocationKinunang] = useState('Kinunang');
  const [pictures, setPictures] = useState([]);
  const [status] = useState('unavailable')
  const [selectedStatus, setSelectedStatus] = useState('unavailable');

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
    <View style={{flex: 1}}>
      <Header title="Filter" onBack={() => navigation.goBack()} />

      {/* Container */} 
      <ScrollView>
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../../assets/image/HomestayFilter.png')}
            style={{
              width: '100%',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute',
              top: 103,
              left: 21,
              width: 160,
              height: 41,
            }}>
            Homestay
          </Text>
        </View>

        {/* Destination */}
        <View>
          <Text
            style={{
              marginLeft: 30,
              marginTop: 20,
              fontSize: 14,
              marginBottom:5,
              color: '#38A7D0',
              fontSize:15
            }}>
            By Destination
          </Text>
          
          <View style={{flexDirection:'row'}}>
            <View
              style={{
                borderWidth: 0.3,
                height: 41,
                width: 146,
                borderRadius: 10,
                marginLeft: 20,
              }}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
                selectedStatus={selectedStatus}
                onStatusChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
                >
                  <Picker.Item
                  label="All"
                  value="All"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="Paal"
                  value="Paal"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="Pulisan"
                  value="Pulisan"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="Kinunang"
                  value="Kinunang"
                  style={{fontSize: 15}}
                />
              </Picker>
            </View>
            <Image style={{
              width:15,
              height:20,
              alignSelf:'center',
              marginLeft:15
            }} source={require('../../assets/icon/CentangHijau.png')} />
            <Text style={{alignSelf:'center',marginBottom:2,marginLeft:4,color:'green'}} >Available</Text>
          </View>
          
          <ScrollView>
          {selectedValue === "All" &&(
                <View>
                  {pictures
                  .filter(homestay => homestay.status=='available')
                  .map(key => (
                      <View>
                        <CardHomestay
                          title={key.name}
                          image={`${key.photo}`}
                          location={key.location}
                          price={key.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                          // status={`${key.status}`}
                          onPress={() => handleSubmit(key.id)}
                        />
                      </View>
                    ))}
                </View>
            )}
            {selectedValue === "Paal" &&(
                <View>
                  {pictures
                  .filter(homestay => homestay.location.includes(locationPaal) && homestay.status=='available' )
                  .map(key => (
                      <View>
                        <CardHomestay
                          title={key.name}
                          image={`${key.photo}`}
                          location={key.location}
                          price={key.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                          // status={`${key.status}`}
                          onPress={() => handleSubmit(key.id)}
                        />
                      </View>
                    ))}
                </View>
            )}
            {selectedValue === "Pulisan" &&(
                <View>
                  {pictures
                  .filter(homestay => homestay.location.includes(locationPulisan) && homestay.status=='available')
                  .map(key => (
                      <View>
                        <CardHomestay
                          title={key.name}
                          image={`${key.photo}`}
                          location={key.location}
                          price={key.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                          // status={`${key.status}`}
                          onPress={() => handleSubmit(key.id)}
                        />
                      </View>
                    ))}
                </View>
            )}
            {selectedValue === "Kinunang" &&(
                <View>
                  {pictures
                  .filter(homestay => homestay.location.includes(locationKinunang) && homestay.status=='available')
                  .map(key => (
                      <View>
                        <CardHomestay
                          title={key.name}
                          image={`${key.photo}`}
                          location={key.location}
                          price={key.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                          // status={`${key.status}`}
                          onPress={() => handleSubmit(key.id)}
                        />
                      </View>
                    ))}
                </View>
            )}
            
          </ScrollView>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  ButtonDate: {
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
  },
  picker:{
    backgroundColor:'grey'
  },
});
