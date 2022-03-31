import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Header from '../../components/molecules/header';
import CardHomestay from '../../components/molecules/CardHomestay';
import Input from '../../components/atoms/Input';

const MenuHomestay = ({navigation}) => {
  const [text] = useState(null);

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
                type={text}
                input={styles.searchBox}
              />
            </View>
            {/* Filter */}
            <View style={{marginLeft: 6, marginTop: 12}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Filter')}
                style={{
                  width: 63,
                  height: 24,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View style={styles.navigation}>
                  <Image source={require('../../assets/icon/filter.png')} />
                </View>
                <Text style={{fontSize: 15, textAlign: 'center'}}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <CardHomestay
              title="Wahyu"
              location="Marinsow Village, North Sulawesi"
              image={require('../../assets/home/Wahyu.png')}
              onPress={() => navigation.navigate('infoHomestay')}
            />
            <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
            <CardHomestay
              title="Juniver"
              location="Pulisan Village, North Sulawesi"
              image={require('../../assets/home/Juniver.png')}
            />
            <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
            <CardHomestay
              title="Komplex Jembatan"
              location="Kinunang Village, North Sulawesi"
              image={require('../../assets/home/Jembatan.png')}
            />
            <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
            <CardHomestay
              title="Wahyu"
              location="Marinsow Village, North Sulawesi"
              image={require('../../assets/home/Wahyu.png')}
            />
            <View style={{height: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)'}} />
            <CardHomestay
              title="Wahyu"
              location="Marinsow Village, North Sulawesi"
              image={require('../../assets/home/Wahyu.png')}
            />
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
    height: 45,
    paddingLeft: 23,
    paddingRight: 23,
    borderWidth: 0.3,
    borderRadius: 10,
  },
});
