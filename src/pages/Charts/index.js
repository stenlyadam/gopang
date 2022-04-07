import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/molecules/header';
import CardWarungJessica from '../../components/molecules/CardWarungJessica';
import ButtonCheckOut from '../../components/atoms/buttonCheckOut';

const Chart = ({navigation}) => {
  return (
    <View>
      {/* <Header onBack={() => navigation.goBack()} setIconChart={1}/> */}
      <Header onBack={() => navigation.navigate('ProfilWarung')}/>
      <Text style={styles.teks} >Delivery location</Text>
      <Text style={{fontWeight: 'bold', fontSize:20, marginLeft: 15,}} > Paal Beach</Text>

      <View style={styles.garis} />

      <View>
      <CardWarungJessica
        title="Pisang Goroho krepek"
        harga="Rp. 12.000"
        image={require('../../assets/imgFood/kerpek.png')}
      />

      <CardWarungJessica
        title="Nutrisari"
        harga="Rp. 5.000"
        image={require('../../assets/imgFood/Nutrisari.png')}
      />
      </View>
      <View style={styles.garis1} />
      <ButtonCheckOut nav={navigation}/>


    </View>
  )
}

export default Chart

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

})