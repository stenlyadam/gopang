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
import CardWarung from '../../components/molecules/CardWarung';

const ProfilWarung = ({navigation}) => {
  console.log('profil warung.navigate:', navigation);
  return (
    <View>
      <Header onBack={() => navigation.goBack()} />

      {/* chart */}
      <TouchableOpacity
        style={{position: 'absolute', marginLeft: 320, top: 13}}
        onPress={() => navigation.navigate('ChartFood')}>
        <Image
          source={require('../../assets/icon/chart.png')}
          style={{height: 43, width: 50}}
        />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gambar */}
        <View>
          <Image
            source={require('../../assets/imgFood/restaurant.png')}
            style={{
              width: '100%',
              height: 319,
            }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.NamaWarung}>Warung Jessica, Paal Beach</Text>
          <View style={{marginTop: 17, marginLeft: 95}}>
            <Image source={require('../../assets/icon/ratingfood.png')} />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 31, marginTop: 9}}>
          <Image source={require('../../assets/icon/pinMap.png')} />
          <Text style={{marginLeft: 15, fontSize: 14}}>Marinsow Village</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 31, marginTop: 6}}>
          <Image source={require('../../assets/icon/clockIcon.png')} />
          <Text style={{marginLeft: 13, fontSize: 14}}>
            30 Minute Delivery Time
          </Text>
        </View>

        {/* Popular Items */}
        <Text style={{fontSize: 15, marginLeft: 31, marginTop: 27}}>
          Popular Items
        </Text>

        <View>
          <CardWarung
            title="Pisang Goroho krepek"
            harga="Rp. 12.000"
            image={require('../../assets/imgFood/kerpek.png')}
          />

          <CardWarung
            title="Nutrisari"
            harga="Rp. 5.000"
            image={require('../../assets/imgFood/Nutrisari.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilWarung;

const styles = StyleSheet.create({
  NamaWarung: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 33,
    marginTop: 11,
    alignItems: 'center',
    textAlign: 'left',
    //backgroundColor:'yellow',
    flexDirection: 'row',
  },
});
