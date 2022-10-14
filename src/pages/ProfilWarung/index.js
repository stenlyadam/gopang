import React, {useState} from 'react';
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
import firebase from 'firebase';
import {useEffect} from 'react';

const ProfilWarung = ({navigation, route}) => {
  const {uid, WarungID} = route.params;
  const [onWarung, setOnWarung] = useState([]);
  const [onFood, setOnFood] = useState([]);
  // const [toCard, setToCard] = useState([]);

  const addToCart = key => {
    const cart = {
      kategori: key.kategori,
      name: key.name,
      photo: key.photo,
      price: key.price,
      jumlah: 1,
      kodeMakanan: key.id,
      biaya: key.price,
    };

    firebase
      .database()
      .ref(`users/pelanggan/${uid}/keranjang/${key.id}`)
      .get()
      .then(snapshot => {
        const data = snapshot.val();
        // console.log('data', data.jumlah);
        const total = data.jumlah + 1;
        const biaya = key.price * total;
        // console.log('total', total);
        firebase
          .database()
          .ref(`users/pelanggan/${uid}/keranjang/${key.id}`)
          .set({
            jumlah: total,
            biaya: biaya,
            name: key.name,
            price: key.price,
            photo: key.photo,
            kodeMakanan: key.kodeMakanan,
            kategori: key.kategori,
          });
        console.log('cek snapshot:');
      })
      .catch(error => {
        firebase
          .database()
          .ref(`users/pelanggan/${uid}/keranjang/${key.id}`)
          .set(cart);
        console.log('cek catch:');
      });
  };

  // Mengambil Data Warung
  const getWarung = () => {
    firebase
      .database()
      .ref(`warung/${WarungID}`)
      .on('value', res => {
        if (res.val()) {
          // setLoading(false);
          setOnWarung(res.val());
        }
      });
  };

  // Mengambil Data Food
  const getFood = () => {
    firebase
      .database()
      .ref(`warung/${WarungID}/food`)
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          // console.log(keranjang[0].namaProduk);
          Object.keys(rawData).map(key => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setOnFood(productArray);
        }
      });
  };

  useEffect(() => {
    getWarung();
    getFood();
  }, []);

  return (
    <View>
      <Header onBack={() => navigation.goBack()} />

      {/* chart */}
      <TouchableOpacity
        style={{position: 'absolute', marginLeft: '85%', top: '2%'}}
        onPress={() => navigation.navigate('ChartFood', {uid: uid})}>
        <Image
          source={require('../../assets/icon/chart.png')}
          style={{height: 38, width: 38}}
        />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gambar */}
        <View>
          <Image
            source={{uri: `data:image/jpeg;base64, ${onWarung.photo}`}}
            style={{
              width: '100%',
              height: 319,
            }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.NamaWarung}>Warung {onWarung.name}</Text>
          <View style={{marginTop: 17, marginLeft: 95}}>
            <Image
              style={{marginLeft: 90, width: 45}}
              source={require('../../assets/icon/ratingfood.png')}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 31, marginTop: 9}}>
          <Image source={require('../../assets/icon/pinMap.png')} />
          <Text style={{marginLeft: 15, fontSize: 14}}>
            Desa {onWarung.alamat}
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 31, marginTop: 6}}>
          <Image source={require('../../assets/icon/clockIcon.png')} />
          <Text style={{marginLeft: 13, fontSize: 14}}>
            {onWarung.delivery} Minute Delivery Time
          </Text>
        </View>

        {/* Popular Items */}
        <Text style={{fontSize: 15, marginLeft: 31, marginTop: 27}}>
          Popular Items
        </Text>

        <View style={{marginBottom: 90}}>
          {onFood.map(key => (
            <View style={{flexDirection: 'row'}}>
              <CardWarung
                title={key.name}
                harga={key.price}
                image={{uri: `data:image/jpeg;base64, ${key.photo}`}}
                onPress={() => addToCart(key)}
              />
            </View>
          ))}
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
