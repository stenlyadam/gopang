import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../../components/molecules/header';
import CardGazebo from '../../components/molecules/CardGazebo';
import firebase from '../../config/Firebase';
import {Picker} from '@react-native-picker/picker';
import { responsiveWidth } from '../../utils/responsive';

const MenuGazeboKinunang = ({navigation, route}) => {
  const {uid} = route.params;
  const [gazebo, setGazebo] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('unavailable');
  const [locationPaal, setLocationPaal] = useState('Paal');
  const [selectedValue, setSelectedValue] = useState('All');
  const [locationPulisan, setLocationPulisan] = useState('Pulisan');
  const [locationKinunang, setLocationKinunang] = useState('Kinunang');

  const handleSubmit = key => {
    navigation.navigate('InfoGazebo', {uid: uid, gazeboID: key});
  };

  useEffect(() => {
    firebase
      .database()
      .ref(`gazebo`)
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];

          Object.keys(rawData).map(key => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setGazebo(productArray);
          // console.log(productArray);
        }
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <Header title="Gazebo Kinunang" onBack={() => navigation.goBack()} />
      <View style={{backgroundColor: 'white'}} />

      {/* Gazebo 1 */}
      <View style={{flexDirection:'row'}}>
            <View
              style={{
                borderWidth: 0.3,
                height: 41,
                width: 146,
                borderRadius: 10,
                marginLeft: 20,
                marginBottom:10,
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
                  label="All Size"
                  value="All"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="3x2"
                  value="3x2"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="3x4"
                  value="3x4"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="4x4"
                  value="4x4"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="5x4"
                  value="5x4"
                  style={{fontSize: 15}}
                />
              </Picker>
            </View>
          </View>
          
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.elevation}>
        
            
        {selectedValue === "All" &&(
            <View>
                {gazebo
                .filter(gazebo => gazebo.alamat.includes(locationKinunang))
                .map(key => (
                    <View style={{width: responsiveWidth(390),alignSelf:'center',justifyContent:'center'}}>
                    <CardGazebo
                        title={key.name}
                        location={key.alamat}
                        price={key.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        image={`${key.photo}`}
                        size={key.size}
                        onPress={() => handleSubmit(key.id)}
                    />
                    </View>
                ))}
            </View>
        )}
        {selectedValue === "3x2" &&(
            <View>
                {gazebo
                .filter(gazebo => gazebo.alamat.includes(locationKinunang)&&
                gazebo.size == '3x2')
                .map(key => (
                    <View style={{width: responsiveWidth(390),alignSelf:'center',justifyContent:'center'}}>
                    <CardGazebo
                        title={key.name}
                        location={key.alamat}
                        price={key.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        image={`${key.photo}`}
                        size={key.size}
                        onPress={() => handleSubmit(key.id)}
                    />
                    </View>
                ))}
            </View>
        )}

        {selectedValue === "3x4" &&(
            <View>
                {gazebo
                .filter(gazebo => gazebo.alamat.includes(locationKinunang)&&
                gazebo.size == '3x4')
                .map(key => (
                    <View style={{width: responsiveWidth(390),alignSelf:'center',justifyContent:'center'}}>
                    <CardGazebo
                        title={key.name}
                        location={key.alamat}
                        price={key.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        image={`${key.photo}`}
                        size={key.size}
                        onPress={() => handleSubmit(key.id)}
                    />
                    </View>
                ))}
            </View>
        )}
        {selectedValue === "4x4" &&(
            <View>
                {gazebo
                .filter(gazebo => gazebo.alamat.includes(locationKinunang)&&
                gazebo.size == '4x4')
                .map(key => (
                    <View style={{width: responsiveWidth(390),alignSelf:'center',justifyContent:'center'}}>
                    <CardGazebo
                        title={key.name}
                        location={key.alamat}
                        price={key.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        image={`${key.photo}`}
                        size={key.size}
                        onPress={() => handleSubmit(key.id)}
                    />
                    </View>
                ))}
            </View>
        )}
        {selectedValue === "5x4" &&(
            <View>
                {gazebo
                .filter(gazebo => gazebo.alamat.includes(locationKinunang)&&
                gazebo.size == '5x4')
                .map(key => (
                    <View style={{width: responsiveWidth(390),alignSelf:'center',justifyContent:'center'}}>
                    <CardGazebo
                        title={key.name}
                        location={key.alamat}
                        price={key.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        image={`${key.photo}`}
                        size={key.size}
                        onPress={() => handleSubmit(key.id)}
                    />
                    </View>
                ))}
            </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MenuGazeboKinunang;

const styles = StyleSheet.create({
  elevation: {
    paddingBottom: 8,
    // paddingLeft: 20,
  },
  searchBox: {
    width: '95%',
    height: '23%',
    paddingRight: 20,
    paddingLeft: 26,
    borderWidth: 1,
    borderRadius: 10,
    position: 'relative',
  },
  search: {
    position: 'absolute',
    top: 10,
    left: 6.41,
  },
});
