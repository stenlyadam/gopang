import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/molecules/header';
import CardKeranjang from '../../components/molecules/CardKeranjang';
import ButtonCheckOut from '../../components/atoms/buttonCheckOut';

const ChartFood = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onBack={() => navigation.goBack()} />
      <Text style={styles.teks}>Delivery location</Text>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 15}}>
        {' '}
        Paal Beach
      </Text>

      <View style={styles.garis} />

      <View>
        <CardKeranjang
          title="Pisang Goroho krepek"
          harga="Rp. 12.000"
          image={require('../../assets/imgFood/kerpek.png')}
        />

        <CardKeranjang
          title="Nutrisari"
          harga="Rp. 5.000"
          image={require('../../assets/imgFood/Nutrisari.png')}
        />
      </View>
      <View style={styles.garis1} />
      <ButtonCheckOut
        title="Check Out"
        onPress={() => navigation.navigate('TotalFood')}
        nav={navigation}
      />
    </View>
  );
};

export default ChartFood;

const styles = StyleSheet.create({
  teks: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 20,
  },
  garis: {
    height: 1,
    marginTop: 21,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  garis1: {
    height: 1,
    marginTop: 319,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
