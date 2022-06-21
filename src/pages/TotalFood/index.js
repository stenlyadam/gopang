import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Header from '../../components/molecules/header';
import ButtonOrder from '../../components/atoms/ButtonOrder';

const TotalFood = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onBack={() => navigation.goBack()} />
      <View style={styles.garis1} />

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
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 20}}>Biaya jasa aplikasi</Text>
          </View>
        </View>

        <View>
          <Text style={{fontSize: 20}}>2.000</Text>
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

      <View style={styles.garis1} />
      <View style={styles.garis} />

      <View style={{flexDirection: 'row', paddingHorizontal: 27, marginTop: 5}}>
        <View style={{flexDirection: 'row', marginLeft: 1, marginTop: 20}}>
          <View style={{marginTop: 5}}>
            <Image source={require('../../assets/icon/Dollar.png')} />
          </View>
          <Text style={{fontSize: 18, marginLeft: 6}}>Payment Method</Text>
        </View>
        <View>
          <Text style={{fontSize: 18, marginLeft: 70, width: 85, height: 65}}>
            COD(Cash on Delivery)
          </Text>
        </View>
      </View>
      <View style={styles.garis} />

      {/* total dan Button Order */}
      <View style={styles.garis2} />
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={{fontSize: 18, marginLeft: 35, marginTop: 20}}>
            Total
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginLeft: 10,
              marginTop: 16,
            }}>
            Rp 31.000,-
          </Text>
        </View>
        <ButtonOrder
          title="Order"
          onPress={() => navigation.navigate('DetailOrderDone')}
        />
      </View>
    </View>
  );
};

export default TotalFood;

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
  order: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 15,
    alignItems: 'center',
    textAlign: 'center',
  },
});
