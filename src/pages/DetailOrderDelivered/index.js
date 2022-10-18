import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import firebase from 'firebase';

import Header from '../../components/molecules/header';
import ButtonChat from '../../components/atoms/ButtonChat';

const DetailOrderDelivered = ({navigation,route}) => {
  const {uid} = route.params;
  const [DataOrder, setDataOrder] = useState([]);

  const getOrder = () => {
    firebase
      .database()
      .ref(`users/pelanggan/${uid}/keranjang`)
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
          setDataOrder(productArray);
        }
      });
  };
  
  useEffect(()=>{
    getOrder();
  })

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onBack={() => navigation.goBack()} />
      <View style={styles.garis1} />
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.warung}>Warung {warung.name}</Text>
        </View>
        <View style={{marginLeft: 50, marginTop: 32}}>
          <Image source={require('../../assets/icon/iconbluecek.png')} />
        </View>
      </View>

      <Text style={styles.order}>Orders</Text>

      {/* Food 1 */}
      {DataOrder
      .map(key => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 28,
            marginTop: 21,
          }}>
          <View style={{flexDirection: 'row'}}>
            {/*  */}
            <View>
              <Text style={{fontSize: 20}}>{key.name}</Text>
            </View>

            <View style={{marginHorizontal: 10}}></View>
            <View>
              <Text style={{fontSize: 20}}>{key.jumlah}</Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 20}}>Rp. {key.biaya}</Text>
          </View>
        </View>
      ))}

      <View style={styles.garis} />

      {/* Total */}

      {/* <View style={styles.garis1} /> */}
      {/* <View style={styles.garis} /> */}

      {/* <View style={{flexDirection: 'row', paddingHorizontal: 27, marginTop: 5}}>
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
      <View style={styles.garis} /> */}

      <View style={styles.garis2} />

      {/* total  */}
      <View style={{flexDirection: 'row'}}>
        

        {/* button order  */}
      </View>
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
