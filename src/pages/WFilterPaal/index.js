import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  TextInput
} from 'react-native';
import firebase from 'firebase';

import Header from '../../components/molecules/header';
import CardKeranjang from '../../components/molecules/CardKeranjang';
import ButtonCheckOut from '../../components/atoms/buttonCheckOut';
import {showMessage} from 'react-native-flash-message';
import { responsiveHeight, responsiveWidth } from '../../utils/responsive';
import FoodCardHome from '../../components/molecules/FoodCardHome';
import CardWarungFood from '../../components/molecules/CardWarungFood';

const WFilterPaal = ({navigation, route}) => {
  const {uid,WarungID} = route.params;
  const [search,setSearch] = useState('');
  const [onWarung, setOnWarung] = useState([]);
  const [locationPaal,setLocationPaal] = useState('Paal');

  const handleWarung = key => {
    navigation.navigate('ProfilWarung', {uid: uid, WarungID: key});
  };

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
  }

  useEffect(() => {
    getWarung();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onBack={() => navigation.goBack()} title="Warung" />
      
      <ScrollView>
      <View style={styles.SectionStyle}>
        <Image
          source={require('../../assets/icon/search.png')}
          style={styles.ImageStyle}
        />
        {/* Fitur Seach  */}
        <TextInput
            placeholder={'Search Warung name...'}
            // type={text}
            value={search}
            style={{flex:1}}
            onChangeText={value => setSearch(value)}
        />
      </View>
      {search.length === 0 ? (
              <View>
                <View>
                  {onWarung
                    .filter(warung => warung.alamat.includes(locationPaal)&&
                                    warung.name.includes(search))
                    .map(key => (
                      <View>
                        <CardWarungFood
                          name={key.name}
                          image={key.photo}
                          totalRating={key.totalRating}
                          location={key.alamat}
                          Ilocation={require('../../assets/icon/Direction.png')}
                          onPress={() => handleWarung(key.id)}
                        />
                      </View>
                    ))}
                </View>
              </View>
            ) : (
              onWarung
                .filter(
                  warung => warung.alamat.includes(locationPaal)&&
                          warung.name.toLowerCase().includes(search.toLowerCase()))
                .map(key => (
                  <View>
                    <CardWarungFood
                      name={key.name}
                      image={key.photo}
                      totalRating={key.totalRating}
                      location={key.alamat}
                      onPress={() => handleWarung(key.id)}
                    />
                  </View>
                ))
            )}
      </ScrollView>
    </View>
  );
};

export default WFilterPaal;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignSelf:'center',
    borderWidth: 0.5,
    borderColor: '#000',
    width:responsiveWidth(350),
    height: responsiveHeight(48.5),
    borderRadius: 5,
    margin: 10,
    borderWidth: 0.3,
    borderRadius: 10,
    fontSize: 14,
  },
  ImageStyle: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
