import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Header from '../../components/molecules/header';
import ButtonChat from '../../components/atoms/ButtonChat';

const DetailOrderDelivered = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Orther Details" onBack={() => navigation.goBack()} />
      <View style={styles.garis1} />
      <View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.warung}>Warung Jessica</Text>
          </View>
          <View style={{marginLeft: 50, marginTop: 32}}>
            <Image source={require('../../assets/icon/iconbluecek.png')} />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 28,
          marginTop: 3,
        }}>
        <View>
          <Text style={{fontSize: 20, marginLeft: 280}}>Delivered</Text>
        </View>
      </View>
      <View style={styles.garis} />
      <Text style={styles.order}>Orders</Text>

      {/* Food 1 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 28,
          marginTop: 21,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 20}}>Nasi Kuning</Text>
          </View>
          <View style={{marginHorizontal: 10}}></View>
          <View>
            <Text style={{fontSize: 20}}>2</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 20}}>24.000</Text>
        </View>
      </View>

      {/* Drink 1 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 28,
          marginTop: 3,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 20}}>Nutrisari</Text>
          </View>
          <View style={{marginHorizontal: 10}}></View>
          <View>
            <Text style={{fontSize: 20}}>1</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 20}}>5.000</Text>
        </View>
      </View>

      {/* Biaya Aplikasi */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 28,
          marginTop: 3,
        }}>
        <View style={{flexDirection: 'row', marginTop: 25}}>
          <View>
            <Text style={{fontSize: 20}}>Biaya jasa aplikasi</Text>
          </View>
        </View>

        <View>
          <Text style={{fontSize: 20, marginTop: 25}}>2.000</Text>
        </View>
      </View>

      <View style={styles.garis} />

      {/* Total */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 28,
          marginTop: 3,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 20}}>Total</Text>
          </View>
        </View>

        <View>
          <Text style={{fontSize: 20}}>31.000</Text>
        </View>
      </View>

      <View style={styles.garis} />
      {/* total dan Button Order */}
      <View style={styles.garis2} />
      <ButtonChat title="Chat" onPress={() => navigation.navigate('')} />
    </View>
  );
};

export default DetailOrderDelivered;

const styles = StyleSheet.create({
  garis1: {
    height: 1,
    marginTop: 11,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  garis: {
    height: 1,
    marginTop: 13,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  garis2: {
    height: 1,
    marginTop: 280,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  warung: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 31,
    marginTop: 52,
    // alignItems: 'center',
    // textAlign: 'center',
  },
  order: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    // marginLeft: 31,
    alignItems: 'center',
    textAlign: 'center',
  },
});
