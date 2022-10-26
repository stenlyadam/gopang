import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import firebase from 'firebase';

import Header from '../../components/molecules/header';
import ButtonOrder from '../../components/atoms/ButtonOrder';

const TotalFood = ({navigation, route}) => {
  const {uid, WarungID} = route.params;
  const [DataOrder, setDataOrder] = useState([]);
  const [totalBayar, setTotalBayar] = useState(0);
  const [barang,setBarang] = useState(0);

  const [warung,setWarung] = useState({});
  const [pelanggan, setPelanggan] = useState({});
  const [owner, setOwner] = useState({});

  //Handle Submit
  const handleSubmit = () => {
    const data = {
      status: 'waiting to accepted',
      IDPemesan: uid,
      namaPemesan: pelanggan.name,
      phonePemesan: pelanggan.number,
      phoneOwner: owner.number,
      total: totalBayar,
      pesanan: DataOrder,
      IDwarung: WarungID,
      namaWarung: warung.name,
      photo: warung.photo
      // jumlah:,
      // namaMakanan:,
    };
    firebase.database().ref(`transaksiFood`).push(data);

    navigation.replace('DetailOrderFood', {
      uid: uid,
      WarungID: WarungID,
    });
  };

  // Hitung Total pembayaran makanan
  const total = () => {
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
          let count = 0;
          // let barang = 0;
          for (let i = 0; i < productArray.length; i++) {
            count = +count + +productArray[i].biaya;
            // barang = +barang + +productArray[i].jumlah;
            setTotalBayar(count);
            // setBarang(barang);
          }
        }
      });
  };

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

  const getPelanggan = () => {
    firebase

      .database()
      .ref(`users/pelanggan/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setPelanggan(res.val());
          //   setOnPhoto(true);
          // console.log(users.photo);
        }
        // console.log('ini pelanggan', users);
      });
  };

  const getOwner = () => {
    firebase

      .database()
      .ref(`users/owner/${WarungID}`)
      .on('value', res => {
        if (res.val()) {
          setOwner(res.val());
          //   setOnPhoto(true);
          // console.log(users.photo);
        }
        // console.log('ini owner', users);
      });
  };

  const getWarung = () =>{
    firebase

      .database()
      .ref(`warung/${WarungID}`)
      .on('value',res=>{
        if (res.val()){
          setWarung(res.val());
        }
      })
  }

  useEffect(() => {
    getOrder();
    total();
    getPelanggan();
    getOwner();
    getWarung();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onBack={() => navigation.goBack()} />
      <View style={styles.garis1} />

      <Text style={styles.order}>Orders</Text>

      {/* Food 1 */}
      {DataOrder.map(key => (
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
            Rp{' '}
            {` ${totalBayar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}
            ,-
          </Text>
        </View>

        {/* button order  */}
        <ButtonOrder
          title="Order"
          // onPress={() => navigation.navigate('DetailOrderDelivered')}
          onPress={() => handleSubmit()}
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
