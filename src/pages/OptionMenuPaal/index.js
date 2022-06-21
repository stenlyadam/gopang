import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/header';
import CategoryFeature from '../../components/molecules/CategoryFeature';
import Button from '../../components/atoms/Button';

const OptionMenuPaal = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <Header title={'Paal Beach'} onBack={() => navigation.goBack()} />

      {/* Container */}
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/pantai/PaalBeach.png')}
          style={{width: '100%'}}
        />

        {/* Describe */}
        <View style={{width: '100%', flexDirection: 'row', marginTop: 28}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: '5.1%'}}>
            Paal Beach
          </Text>
          {/* <Image
            source={require('../../assets/icon/Rating.png')}
            style={{width: 51, height: 17, marginTop: 12, marginLeft: '38.9%'}}
          /> */}
        </View>
        <TouchableOpacity style={{marginLeft: 14, flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icon/Direction.png')}
            style={{width: 20, height: 29}}
          />
          <Text style={{fontSize: 15, width: 288, marginLeft: 3}}>
            Marinsow Village, East Likupang District, North Minahasa Regency,
            North Sulawesi
          </Text>
        </TouchableOpacity>
        <View
          style={{marginLeft: '4.8%', marginRight: '4.8%', marginTop: '4.8%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 12}}>
            Overview
          </Text>
          <Text style={{fontSize: 17}}>
            Paal Beach is one of the tourist attractions in Likupang,North
            Sulawesi. When visiting here, you will find a beach with clean white
            sand strands on the shoreline and a beautiful turquoise sea like
            crystal.
          </Text>
        </View>

        {/* Category */}
        <CategoryFeature
          onPress1={() => navigation.navigate('MenuHomestay')}
          onPress2={() => navigation.navigate('MenuGazebo')}
          onPress3={() => navigation.navigate('MenuFood')}
        />
        <View style={{marginLeft: 20, marginBottom: 27}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 18,
              marginTop: 20,
            }}>
            Galery
          </Text>
          <Image source={require('../../assets/pantai/GPaal.png')} />
        </View>
        <Button
          title={'Get Direction'}
          btnView={styles.btnView}
          onPress={() => Alert.alert('Go to the map')}
        />
      </ScrollView>
    </View>
  );
};

export default OptionMenuPaal;

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
  btnView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 19.27,
  },
});
