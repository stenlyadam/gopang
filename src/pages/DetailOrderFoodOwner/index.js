import {StyleSheet, Text, View, Image,BackHandler,Alert,Linking, TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
import firebase from 'firebase';

import Header from '../../components/molecules/header';
import ButtonChat from '../../components/atoms/ButtonChat';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';
import Loading from '../../components/molecules/Loading';
import { responsiveWidth } from '../../utils/responsive';


const DetailOrderFoodOwner = ({navigation,route}) => {
  const {uid,WarungID} = route.params;
  const [DataOrder, setDataOrder] = useState({});
  const [totalBayar, setTotalBayar] = useState(0);
  const [orders,setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTransaksiFood = () => {
    firebase
      .database()
      .ref(`transaksiFood/${WarungID}`)
      .on('value', res => {
        if (res.val()) {
          setDataOrder(res.val());
        }
      });
  };

     // Hitung Total pembayaran makanan
     const total = () => {
      firebase
        .database()
        .ref(`transaksiFood/${WarungID}/pesanan`)
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
      .ref(`transaksiFood/${WarungID}/pesanan`)
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
          setOrders(productArray);
          // setTotalBayar(productArray.total);
        }
      });
  };

  const handleSubmitGoBack =()=>{
    // firebase.database().ref(`users/pelanggan/${uid}/keranjang`).remove();

    navigation.goBack();
  };

  const handleSubmitAccepted =()=>{
    setLoading(true);
    const data = {
      IDPemesan: DataOrder.IDPemesan,
      IDwarung: DataOrder.IDwarung,
      namaPemesan: DataOrder.namaPemesan,
      namaWarung: DataOrder.namaWarung,
      pesanan: DataOrder.pesanan,
      phonePemesan: DataOrder.phonePemesan,
      photo: DataOrder.photo,
      total: DataOrder.total,
      phoneOwner: DataOrder.phoneOwner,
      status: 'cooking',
    }
    firebase.database().ref(`transaksiFood/${WarungID}`).set(data);
  
    setTimeout(() => {
      setLoading(false);
      alert('Order accepted.');
    }, 1000);
  }

  const handleSubmitReject =()=>{
    setLoading(true);
    firebase.database().ref(`transaksiFood/${WarungID}`).remove();
    
    setTimeout(() => {
      setLoading(false);
      alert('Transaction has been rejected');
    }, 1000);
    handleSubmitGoBack();
  }

  const handleSubmitOtw =()=>{
    setLoading(true);
    const data = {
      IDPemesan: DataOrder.IDPemesan,
      IDwarung: DataOrder.IDwarung,
      namaPemesan: DataOrder.namaPemesan,
      namaWarung: DataOrder.namaWarung,
      pesanan: DataOrder.pesanan,
      phonePemesan: DataOrder.phonePemesan,
      photo: DataOrder.photo,
      total: DataOrder.total,
      phoneOwner: DataOrder.phoneOwner,
      status: 'food on the way',
    }
    firebase.database().ref(`transaksiFood/${WarungID}`).set(data);
  
    setTimeout(() => {
      setLoading(false);
      alert('food information on the way sent.');
    }, 1000);
  }

  const handleSubmitCompleted =()=>{
    setLoading(true);
    const data = {
      IDPemesan: DataOrder.IDPemesan,
      IDwarung: DataOrder.IDwarung,
      namaPemesan: DataOrder.namaPemesan,
      namaWarung: DataOrder.namaWarung,
      pesanan: DataOrder.pesanan,
      phonePemesan: DataOrder.phonePemesan,
      photo: DataOrder.photo,
      total: DataOrder.total,
      phoneOwner: DataOrder.phoneOwner,
      status: 'completed',
    }
    firebase.database().ref(`transaksiFood/${WarungID}`).set(data);
  
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }


  useEffect(() => {
    getOrder();
    getTransaksiFood();
    total();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleSubmitGoBack();
      return true;
    })
    return () => backHandler.remove()
  }, []);

  const sendOnWa = () => {
    let mobile = DataOrder.phonePemesan;
    if (mobile) {
      // Kode negara 62 = Indonesia
      let url = 'whatsapp://send?text=' + '&phone=62' + DataOrder.phonePemesan;
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
      <Header title="Order Details" onBack={handleSubmitGoBack} />
      <View style={styles.garis1} />
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={{fontSize:18,marginTop:20,position:'absolute',marginLeft:5,fontWeight:'bold'}}>Customer :</Text>
          <Text style={styles.warung}>{DataOrder.namaPemesan}</Text>
          {DataOrder.status !== "completed"?(
            <Text style={{fontSize:10,marginTop:5,marginLeft:5,fontWeight:'bold'}}>No : {DataOrder.phonePemesan}</Text>
          ):(
            <View></View>
          )}
        </View>
        <View style={{
          marginTop: 32,
          marginLeft:'67%',
          width:responsiveWidth(100),
          alignItems:'center',
          position:'absolute'
          }}>
          <Image source={require('../../assets/icon/iconbluecek.png')} />
        </View>
      </View>

      <View
        style={{
          marginLeft:'70%',
          marginTop:40,
          width:100,
        }}>
        <View>
          <Text style={{fontSize: 18,textAlign:'center'}}>{DataOrder.status}</Text>
        </View>
      </View>

      <View style={styles.garis} />

      <Text style={styles.order}>Orders</Text>

      {/* Food 1 */}
      {orders.map(key => (
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
      {DataOrder.status !== "completed"?(
        <ButtonChat title='Chat customer' onPress={() => sendOnWa()} />
      ):(
        <View></View>
      )}

      {DataOrder.status !== "waiting to accepted" ?(
        <View>
          {DataOrder.status !== "food on the way" && DataOrder.status !== "completed" ?(
            <View style={{marginTop:20,alignItems:'center'}}>
              <Text style={{marginBottom:10,fontSize:18,marginTop:40}}>Is the food ready?</Text>
              <ButtonTransaction 
              title='food on the way' 
              onPress={() => handleSubmitOtw(WarungID)}
              />
            </View>
          ):(
            <View >
              {DataOrder.status !== "completed" ?(
                <View style={{marginTop:20,alignItems:'center'}}>
                  <Text style={{marginBottom:10,fontSize:18,marginTop:40}}>Has the customer received the food?</Text>
                  <ButtonTransaction 
                  title='Yes'
                  onPress={() => handleSubmitCompleted(WarungID)}
                  />
                </View>
              ):(
                <View></View>
              )}
            </View>
          )}
        </View>
      ):(
        <View style={{marginTop:20,alignItems:'center'}}>
          <Text style={{marginBottom:10,fontSize:18,marginTop:40}}>would you like to receive this order?</Text>
          <ButtonTransaction 
          title='Accept' 
          onPress={() => handleSubmitAccepted(WarungID)}
          />
          <Text style={{marginTop:5,marginBottom:5}}>Or</Text>
          <TouchableOpacity onPress={()=> handleSubmitReject(WarungID)}>
            <Text style={{color:'red',fontStyle:'italic',fontSize:15,textDecorationLine:'underline'}}>Reject</Text>
          </TouchableOpacity>
        </View>
      )}
      
    </View>
    {loading && <Loading />}
    </>
  );
};

export default DetailOrderFoodOwner;

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
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 52,
    width:200,
    textAlign:'center',
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
