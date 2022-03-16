import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import Header from '../../components/molecules/header';
import CardHomestay from '../../components/molecules/CardHomestay';
import Input from '../../components/atoms/Input'

const MenuHomestay = ({navigation}) => {
  const [text] = useState(null);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <Header title="Homestay" onPress={()=>navigation.navigate('MenuHome')} />
      
      {/* Container */}
      <ScrollView>
      <View>
        <View>
          <Input placeholder={'Search'} type={text} input={styles.searchBox} />
        </View>
        <View>
          <CardHomestay title='Wahyu' location='Marinsow Village, North Sulawesi' image={require('../../assets/home/Wahyu.png')} />
          <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} /> 
          <CardHomestay title='Juniver' location='Pulisan Village, North Sulawesi' image={require('../../assets/home/Juniver.png')} />
          <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
          <CardHomestay title='Komplex Jembatan' location='Kinunang Village, North Sulawesi' image={require('../../assets/home/Jembatan.png')} />
          <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
          <CardHomestay title='Wahyu' location='Marinsow Village, North Sulawesi' image={require('../../assets/home/Wahyu.png')} />
          <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
          <CardHomestay title='Wahyu' location='Marinsow Village, North Sulawesi' image={require('../../assets/home/Wahyu.png')} />
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
    width: '77.8%',
    height: 45,
    paddingLeft: 23,
    paddingRight: 23,
    borderWidth: 0.3,
    borderRadius: 10,
    marginLeft:10
  },
});
