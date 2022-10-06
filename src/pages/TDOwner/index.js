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
  
  const TDOwner = ({navigation, route}) => {
    const {uid, homestayID} = route.params;
    const [transaksi, setTransaksi] = useState({});
    const [users, setUsers] = useState({});
    const [userss, setUserss] = useState({});
    
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
  
    useEffect(() => {
      getTransaksi();
    }, []);

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
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header title="Transaction" />
  
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 20, marginRight: 61, marginTop: 30}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {transaksi.namaHomestay}
            </Text>
            <Text style={{fontSize: 15, marginTop: 3}}>{transaksi.alamatHomestay}</Text>
            {/* <Image
              style={{width: 51, height: 20, marginTop: 7}}
              source={require('../../assets/icon/Rating.png')}
            /> */}
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 18,
              }}>
              Owner : {transaksi.namaOwner}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 8,
              }}>
              {transaksi.noHandphoneOwner}
            </Text>
          </View>
          <Image
            style={{
              position: 'absolute',
              marginTop: 30,
              marginLeft: '65.1%',
              width: 111,
              height: 106,
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
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {transaksi.namaPenyewa}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 12,
            }}>
            {transaksi.emailPenyewa}
          </Text>
          <Text
            style={{
              fontSize: 15,
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
          }}
        />
  
        
        <View
          style={{
            marginTop: 13,
            marginBottom: 13,
            justifyContent: 'center',
            // marginLeft: 20,
            flexDirection: 'row',
          }}>
          <CountDown
            until={2400000}
            digitStyle={{backgroundColor: 'white'}}
            onFinish={() => alert('finished')}
            // onPress={() => alert('hello')}
            size={15}
          />
        </View>
  
        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: 371,
            alignSelf: 'center',
            bottom: 10,
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
  
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:40}}>
            <View>
                <ButtonTransaction
                title={'Paid'}
                btnView={styles.btnView}
                onPress={() => navigation.replace('OnavigationBar', {uid: uid})}
                />
            </View>
            <View style={{marginLeft:'10%',marginTop:10}}>
                <Image style={{width:80,height:80,alignSelf:'center'}} source={require('../../assets/icon/iconOrderStatus.png')}/>
                <Text style={{fontSize:20,alignSelf:'center'}}>{transaksi.status}</Text>
            </View>
            
        </View>
        
      </View>
    );
  };
  
  export default TDOwner;
  
  const styles = StyleSheet.create({
    btnView: {
      marginTop: '20%',
      marginBottom: 57.69,
      alignItems: 'center',
    },
  });
  