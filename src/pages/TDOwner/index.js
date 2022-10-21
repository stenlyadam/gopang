import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    Touchable,
    TouchableHighlight,
    Alert,
    Linking
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import Header from '../../components/molecules/header';
  import ButtonTransaction from '../../components/atoms/ButtonTransaction';
  import firebase from '../../config/Firebase';
  import CountDown from 'react-native-countdown-component';
  import ButtonChat from '../../components/atoms/ButtonChat';
  import Loading from '../../components/molecules/Loading';
  const dayjs = require('dayjs');
  
  const TDOwner = ({navigation, route}) => {
    const {uid, homestayID} = route.params;
    const [transaksi, setTransaksi] = useState({});
    const [loading, setLoading] = useState(false);
    const [homestay,setHomestay] = useState({});
    const [harga, setHarga] = useState('');
    const [status, setStatus] = useState('');

    //quick fix for countdown component not updating
    const [countdownComponentForceUpdate, setCountdownComponentForceUpdate] = useState(0);
    
    const getTransaksi = () => {
      firebase
  
        .database()
        .ref(`transaksi/${homestayID}`)
        .on('value', res => {
          if (res.val()) {
            setTransaksi(res.val());
            //   setHarga(res.val().price);
          }
        });
    };

    const getHomestay = () => {
      firebase
  
        .database()
        .ref(`homestay/${uid}`)
        .on('value', res => {
          if (res.val()) {
            setHomestay(res.val());
            setHarga(res.val().price);
            setStatus(res.val().status);
          }
        });
    };

    useEffect(() => navigation.addListener('blur', () => {
        setTransaksi(null);
    }), [navigation]);

    useEffect(() => {
      getTransaksi();
      getHomestay();
    }, []);

    //quick fix for countdown component not updating
    useEffect(() =>
        setCountdownComponentForceUpdate(prevState => prevState + 1)
        , [transaksi?.paymentExpireDateTime])

    const handleSubmitPaid = () => {
      setLoading(true);
      const data = {
        IDhomestay:transaksi.IDhomestay,
        IDpenyewa:transaksi.IDpenyewa,
        alamatHomestay:transaksi.alamatHomestay,
        emailPenyewa:transaksi.emailPenyewa,
        fotoHomestay:transaksi.fotoHomestay,
        harga:transaksi.harga,
        kategori:transaksi.kategori,
        namaHomestay:transaksi.namaHomestay,
        namaOwner:transaksi.namaOwner,
        namaPenyewa:transaksi.namaPenyewa,
        noHandphoneOwner:transaksi.noHandphoneOwner,
        phonePenyewa:transaksi.phonePenyewa,
        status: 'paid',
        total:transaksi.total,
        time: 86400,
        checkin: transaksi.checkin,
        checkout: transaksi.checkout,
        paymentExpireDateTime: dayjs().add(24, 'hour').toDate().toString(),
      };
      firebase.database().ref(`transaksi/${homestayID}`).set(data);
      setTimeout(() => {
        setLoading(false);
        alert('Homestay Paid Off');
      }, 2000);
    };

    const handleSubmitCompleted = () => {
      setLoading(true);
      const data = {
        IDhomestay:transaksi.IDhomestay,
        IDpenyewa:transaksi.IDpenyewa,
        alamatHomestay:transaksi.alamatHomestay,
        emailPenyewa:transaksi.emailPenyewa,
        fotoHomestay:transaksi.fotoHomestay,
        harga:transaksi.harga,
        kategori:transaksi.kategori,
        namaHomestay:transaksi.namaHomestay,
        namaOwner:transaksi.namaOwner,
        namaPenyewa:transaksi.namaPenyewa,
        noHandphoneOwner:transaksi.noHandphoneOwner,
        phonePenyewa:transaksi.phonePenyewa,
        status: 'completed',
        total:transaksi.total,
        time: 86400,
        checkin: transaksi.checkin,
        checkout: transaksi.checkout,
        paymentExpireDateTime: dayjs().add(24, 'hour').toDate().toString(),
      };
      firebase.database().ref(`transaksi/${homestayID}`).set(data);

      const dataHomestay = {
        price: homestay.price,
        name: homestay.name,
        description: homestay.description,
        alamat: homestay.alamat,
        location: homestay.location,
        photo: homestay.photo,
        bedroom: homestay.bedroom,
        bathroom: homestay.bathroom,
        AC: homestay.AC,
        wifi: homestay.wifi,
        ratings: homestay.ratings,
        status: 'available',
      };
      firebase.database().ref(`homestay/${uid}`).set(dataHomestay);
      
      setTimeout(() => {
        setLoading(false);
        alert('Homestay Check Out');
        navigation.replace('OnavigationBar', {uid: uid})
      }, 2000);
    };

    const sendOnWa = () => {
        let mobile = transaksi.phonePenyewa;
        if (mobile) {
          // Kode negara 62 = Indonesia
          let url = 'whatsapp://send?text=' + '&phone=62' + transaksi.phonePenyewa;
          Linking.openURL(url)
            .then(data => {
              console.log('WhatsApp Opened');
            })
            .catch(() => {
              alert('Make sure Whatsapp installed on your device');
            });
        } else {
          alert('Nomor telepon pembeli tidak terdaftar di Whatsapp.');
        }
      };
  
    return (
      <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Header title="Transaction" />
  
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 20, marginRight: 61, marginTop: 30}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {transaksi.namaHomestay}
            </Text>
            <Text style={{fontSize: 15, marginTop: 3}}>{transaksi.alamatHomestay} Beach</Text>
            {/* <Image
              style={{width: 51, height: 20, marginTop: 7}}
              source={require('../../assets/icon/Rating.png')}
            /> */}
            <View style={{flexDirection:'column'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 18,
                }}>
                Owner
              </Text>
              <Text
                style={{
                  fontSize: 14,
                }}>
                {transaksi.namaOwner}
                {transaksi.noHandphoneOwner}
              </Text>
            </View>
          </View>
          <Image
            style={{
              position: 'absolute',
              marginTop: 30,
              marginLeft: '63%',
              width: 120,
              height: 110,
              borderRadius: 20,
            }}
            source={{uri: `data:image/jpeg;base64, ${transaksi.fotoHomestay}`}}
          />
        </View>
        <View
          style={{
            height: 1,
            marginTop: 18,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: 371,
            alignSelf: 'center',
          }}
        />
  
        <View style={{marginTop: 13, marginBottom: 13, marginLeft: 20}}>
          <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom:12
            }}>Customer</Text>
          <Text
            style={{
              fontSize: 14,
            }}>
            {transaksi.namaPenyewa}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 12,
            }}>
            {transaksi.emailPenyewa}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 12,
            }}>
            {transaksi.phonePenyewa}
          </Text>
        </View>
  
        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: 371,
            alignSelf: 'center',
            marginBottom:10
          }}
        />
  
        <ButtonChat
          title="Chat Customer"
          onPress={() => sendOnWa()}
        />
  
        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: 371,
            alignSelf: 'center',
            top: 10,
          }}
        />
  
        {transaksi.status !== 'completed'?(
          <View style={{alignSelf:'center'}}>
              {transaksi.status == 'unpaid'?(
                <View style={{marginTop:50}}>
                <Image style={{width:80,height:80,alignSelf:'center'}} source={require('../../assets/icon/iconOrderStatus.png')}/>
                <Text style={{fontSize:20,alignSelf:'center',fontWeight:'bold'}}>{transaksi.status}</Text>
                <Text style={{
                  marginTop: 20,
                  fontSize:18
                }}>Has it paid off ?</Text>
                </View>
              ) : (
                <View style={{marginTop:50}}>
                <Image style={{width:80,height:80,alignSelf:'center'}} source={require('../../assets/icon/iconOrderStatus.png')}/>
                <Text style={{fontSize:20,alignSelf:'center'}}>{transaksi.status}</Text>
                <Text style={{
                  marginTop:10,
                  fontSize:18,
                }}>Have you checked out ?</Text>
                </View>
              )}

              {transaksi.status == 'unpaid' ? (
                  <ButtonTransaction
                  title={'Paid'}
                  btnView={styles.btnView}
                  onPress={() => handleSubmitPaid(homestayID)}
                  />
              ) : (
                <ButtonTransaction
                  title={'Completed'}
                  btnView={styles.btnView}
                  onPress={() => handleSubmitCompleted(homestayID)}
                  />
              )}
              
          </View>
        ):(
          <View style={{marginTop:50}}>
            <Image style={{width:80,height:80,alignSelf:'center'}} source={require('../../assets/icon/iconOrderStatus.png')}/>
            <Text style={{fontSize:20,alignSelf:'center'}}>{transaksi.status}</Text>
          </View>
        )}
      
      </ScrollView>
      </View>
      {loading && <Loading />}
      </>
    );
  };
  
  export default TDOwner;
  
  const styles = StyleSheet.create({
    btnView: {
      marginTop:5,
      marginBottom: 15,
      flex:1,
      alignItems: 'center',
    },
  });
  