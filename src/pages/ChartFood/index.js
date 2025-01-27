import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import firebase from 'firebase';

import Header from '../../components/molecules/header';
import CardKeranjang from '../../components/molecules/CardKeranjang';
import ButtonCheckOut from '../../components/atoms/buttonCheckOut';
import {showMessage} from 'react-native-flash-message';

const ChartFood = ({navigation, route}) => {
  const {uid,WarungID} = route.params;
  const [dataKeranjang, setDataKeranjang] = useState([]);
  const [barang,setBarang] = useState(0);

  const dataCart = () => {
    firebase
      .database()
      .ref(`users/pelanggan/${uid}/keranjang`)
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
          setDataKeranjang(productArray);
        }
      });
  };

  const handleSubmitGoBack =()=>{
    navigation.goBack();
  };

  useEffect(() => {
    dataCart();
    total();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleSubmitGoBack();
      return true;
    })
    return () => backHandler.remove()
  }, []);

  // const handleDelete = key => {
  //   firebase
  //     .database()
  //     .ref(`users/pelanggan/${uid}/keranjang/${key.id}`)
  //     .remove();
  // };

  // Fitur Tambah dan kurang jumlah makanan

  // Mengurangi Jumlah makanan yang di add
  const handleMinus = key => {
    const total = key.jumlah - 1;
    const biaya = total * key.price;
    firebase.database().ref(`users/pelanggan/${uid}/keranjang/${key.id}`).set({
      jumlah: total,
      biaya: biaya,
      name: key.name,
      price: key.price,
      photo: key.photo,
      kodeMakanan: key.id,
      IDWarung:WarungID,
    });
    if (key.jumlah === 1) {
      firebase
        .database()
        .ref(`users/pelanggan/${uid}/keranjang/${key.id}`)
        .remove();
    }
    // if (keranjang === false) {
    //   setTotalHarga(0);
    //   setJumlahBarang(0);
    // }
  };

  // Menambah Jumlah makanan yang di add
  const handlePlus = key => {
    const total = key.jumlah + 1;
    const biaya = total * key.price;
    firebase.database().ref(`users/pelanggan/${uid}/keranjang/${key.id}`).set({
      jumlah: total,
      biaya: biaya,
      name: key.name,
      price: key.price,
      photo: key.photo,
      IDWarung:WarungID,
      kodeMakanan: key.id,
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

  const handleButtonCheckOut = () =>{
    if(barang<=0){
      showMessage({
        message: 'You have to add something food',
        type: 'default',
        backgroundColor: 'red', // background color
        color: 'white', // text color
      });
    }else{
      navigation.navigate('TotalFood', {uid: uid, WarungID: WarungID})
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onBack={() => navigation.goBack()} />
      

      {dataKeranjang == 0 ?(
        <Text style={{alignSelf:'center',marginTop:200,fontSize:18}}>You have to add something food.</Text>
      ):(
        <View>
          <Text style={styles.teks}>Delivery location</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 15}}>
            {' '}
            Paal Beach
          </Text>

          <View style={styles.garis} />
          <View>
            {dataKeranjang
            .filter(item =>item.IDWarung.includes(WarungID))
            .map(key => (
              <CardKeranjang
                title={key.name}
                harga={key.price}
                jumlah={key.jumlah}
                image={{uri: `data:image/jpeg;base64, ${key.photo}`}}
                onMinus={() => handleMinus(key)}
                onPlus={() => handlePlus(key)}
              />
            ))}

            {/* <CardKeranjang
              title="Nutrisari"
              harga="Rp. 5.000"
              image={require('../../assets/imgFood/Nutrisari.png')}
            /> */}
          </View>
          <View style={styles.ButtonCheckOut} />
          <ButtonCheckOut
            title="Check Out"
            onPress={handleButtonCheckOut}
            nav={navigation}
          />
        </View> 
      )}

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
  ButtonCheckOut: {
    height: 1,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginTop: 20,
  },
});
