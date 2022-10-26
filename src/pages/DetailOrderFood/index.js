import {StyleSheet, Text, View, Image,BackHandler,Alert} from 'react-native';
import React,{useState,useEffect} from 'react';
import firebase from 'firebase';

import Header from '../../components/molecules/header';
import ButtonChat from '../../components/atoms/ButtonChat';

const DetailOrderFood = ({navigation,route}) => {
  const {uid,WarungID} = route.params;
  const [DataOrder, setDataOrder] = useState([]);
  const [totalBayar, setTotalBayar] = useState(0);
  const [warung,setWarung] = useState({});
  const [barang,setBarang] = useState(0);

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
            // setTotalBayar(productArray.total);
          }
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

    const getWarung = () => {
      firebase
        .database()
        .ref(`warung/${WarungID}`)
        .on('value', res => {
          if (res.val()) {
            setWarung(res.val());
            //   setOnPhoto(true);
            // console.log(users.photo);
          }
          // console.log('ini owner', users);
        });
    };

    const handleSubmitGoBack =()=>{
      firebase.database().ref(`users/pelanggan/${uid}/keranjang`).remove();
  
      navigation.replace('NavigationBar', {uid: uid});
    };

  useEffect(() => {
    getOrder();
    total();
    getWarung();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleSubmitGoBack();
      return true;
    })
    return () => backHandler.remove()
  }, []);
  console.log(WarungID)

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Order Details" onBack={handleSubmitGoBack} />
      <View style={styles.garis1} />
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.warung}>Warung {warung.name}</Text>
        </View>
        <View style={{marginLeft: 50, marginTop: 32}}>
          <Image source={require('../../assets/icon/iconbluecek.png')} />
        </View>
      </View>

      <View
        style={{
          marginTop: 3,
          marginLeft:20,
          marginRight:20,
          alignItems:'flex-end'
        }}>
        <View>
          <Text style={{fontSize: 18,marginRight:'9%'}}>Progress</Text>
        </View>
      </View>

      <View style={styles.garis} />

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
            <View>
              <Text style={{fontSize: 14}}>{key.name}</Text>
            </View>
            <View style={{marginHorizontal: 10}}></View>
            <View>
              <Text style={{fontSize: 14}}>{key.jumlah}</Text>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 14}}>{key.biaya}</Text>
          </View>
        </View>
      ))}

      <View style={styles.garis3} />

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
            <Text style={{fontSize: 17}}>Total</Text>
          </View>
        </View>
        
        <View>
          <Text style={{fontSize: 17}}>
            IDR{' '}
              {` ${totalBayar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}
              ,-
          </Text>
        </View>
      </View>
      {/* total dan Button Order */}
      <View style={styles.garis2} />
      <ButtonChat
        title="Chat"
        onPress={() => navigation.navigate('DetailOrderDone')}
      />
    </View>
  );
};

export default DetailOrderFood;

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
  garis3: {
    height: 1,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  garis2: {
    height: 1,
    marginTop: 50,
    marginBottom:10,
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
    marginLeft: 31,
    alignItems: 'center',
    textAlign: 'center',
  },
});
