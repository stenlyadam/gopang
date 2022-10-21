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

const MenuGazebo = ({navigation, route}) => {
  const {uid} = route.params;
  const [pictures, setPictures] = useState([]);

  const handleSubmit = key => {
    navigation.navigate('InfoGazebo', {uid: uid, gazeboID: key});
    console.log('ini gazebo', uid);
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
          setPictures(productArray);
          // console.log(productArray);
        }
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <Header title="Gazebo" onBack={() => navigation.goBack()} />
      <View style={{backgroundColor: 'white'}} />

      {/* Search */}
      {/* <View style={styles.elevation}>
        <View style={styles.searchBox}>
          <TextInput placeholder="Search Gazebo you want..." />
          <Image
            source={require('../../assets/icon/search.png')}
            style={styles.search}
          />
        </View>
      </View> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{top: '-18%'}}
        style={styles.elevation}>
        {/* Gazebo 1 */}
        {pictures.map(key => (
          <CardGazebo
            title="Gazebo Wahyu"
            location={key.location}
            image={`${key.photo}`}
            size={key.size}
            onPress={() => handleSubmit(key.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MenuGazebo;

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
