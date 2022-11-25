import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Alert
} from 'react-native';

import Header from '../../components/molecules/header';
import CardWarung from '../../components/molecules/CardWarung';
import firebase from 'firebase';
import {useEffect} from 'react';
import {showMessage} from 'react-native-flash-message';
import { responsiveWidth } from '../../utils/responsive';

const ProfilWarung = ({navigation, route}) => {
  const {uid, WarungID} = route.params;
  const [onWarung, setOnWarung] = useState([]);
  const [onFood, setOnFood] = useState([]);
  // const [toCard, setToCard] = useState([]);
  const [barang,setBarang] = useState(0);

  const addToCart = key => {
    const cart = {
      kategori: key.kategori,
      name: key.name,
      photo: key.photo,
      price: key.price,
      jumlah: 1,
      IDWarung:WarungID,
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
            IDWarung:WarungID,
            photo: key.photo,
            kodeMakanan: key.kodeMakanan,
            kategori: key.kategori,
          });
      })
      .catch(error => {
        firebase
          .database()
          .ref(`users/pelanggan/${uid}/keranjang/${key.id}`)
          .set(cart);
      });
      showMessage({
        message: `${key.name} has been added to your cart`,
        type: 'default',
        backgroundColor: 'green', // background color
        color: 'white', // text color
        style:{position:'absolute',alignSelf:'center',marginTop:'10%',borderRadius:20}
      });
      // navigation.navigate('ChartFood',{uid:uid,WarungID:WarungID});
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
      .ref(`food`)
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

  const handleSubmitGoBack =()=>{
    firebase.database().ref(`users/pelanggan/${uid}/keranjang`).remove();

    navigation.goBack();
  };

  const handleBack=()=>{
    Alert.alert(
      'Are you sure ?',
      'The cart you added will be deleted.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'OK', 
          onPress: () => handleSubmitGoBack()
        },
      ],
      {cancelable: false},
    );
  }

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
          // let count = 0;
          let barang = 0;
          for (let i = 0; i < productArray.length; i++) {
            // count = +count + +productArray[i].biaya;
            barang = +barang + +productArray[i].jumlah;
            // setTotalBayar(count);
            setBarang(barang);
          }
        }
      });
  };

  useEffect(() => {
    total();
    getWarung();
    getFood();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert(
        'Are you sure ?',
        'The cart you added will be deleted.',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
          },
          {
            text: 'OK', 
            onPress: () => handleSubmitGoBack()
          },
        ],
        {cancelable: false},
      );

      return true})
    return () => backHandler.remove()
  }, []);



  return (
    <View>
      <Header onBack={handleBack} />

      {/* chart */}
      {barang==0?(
        <TouchableOpacity
        style={{position: 'absolute', marginLeft: '85%', top: '2%'}}
        onPress={() => navigation.navigate('ChartFood', {uid: uid,WarungID:WarungID})}>
          <Image
            source={require('../../assets/icon/chart.png')}
            style={{height: 45, width: 45}}
          />
        </TouchableOpacity>
      ):(
        <TouchableOpacity
        style={{position: 'absolute', marginLeft: '85%', top: '2%'}}
        onPress={() => navigation.navigate('ChartFood', {uid: uid,WarungID:WarungID})}>
        <Image
          source={require('../../assets/icon/chart.png')}
          style={{height: 45, width: 45}}
        />
        <View style={{position:'absolute',marginLeft:28}}>
          <Image
            source={require('../../assets/icon/Lingkaran-Merah-chart.png')}
            style={{height: 20, width: 20}}
          />
          <Text style={{
            position:'absolute',
            fontSize:13,
            color:'black',
            marginLeft:6.5,
            marginTop:1,
            fontWeight:'bold'}}>{barang}</Text>
        </View>
      </TouchableOpacity>
      )}
      

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
          <View style={{marginTop: 17, marginLeft: '40%',width:responsiveWidth(50)}}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../../assets/rating.png')} style={{width:15,height:15,alignSelf:'center'}}/>
              <Text style={{fontSize:15,fontWeight:'bold',marginLeft:2}}>{onWarung.totalRating}</Text>
            </View>
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
          {onFood
          .filter(items=> items.IDwarung.includes(WarungID))
          .map(key => (
            <View style={{flexDirection: 'row'}}>
              <CardWarung
                title={key.name}
                harga={key.price}
                status={key.stock}
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
