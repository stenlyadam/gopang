import {StyleSheet, Text, View, Image,BackHandler,Alert,Linking,Modal,TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
import firebase from 'firebase';

import Header from '../../components/molecules/header';
import ButtonChat from '../../components/atoms/ButtonChat';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';
import Loading from '../../components/molecules/Loading';
import { responsiveWidth } from '../../utils/responsive';

const DetailOrderFoodUser = ({navigation,route}) => {
  const {uid,WarungID} = route.params;
  const [DataOrder, setDataOrder] = useState({});
  const [totalBayar, setTotalBayar] = useState(0);
  const [orders,setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ratingModal, setRatingModal] = useState(false);
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

    // const [totalRating, setTotalRating] = useState(0);

    let totalRating = 0;

    // const [hasilAkhirRating, setHasilAkhirRating] = useState(0);
  
    //quick fix for countdown component not updating
    const [countdownComponentForceUpdate, setCountdownComponentForceUpdate] =
      useState(0);
  
    const starImgFilled =
      'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
    const starImgCorner =
      'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
  
    const CustomRatingBar = () => {
      return (
        <View style={styles.CustomRatingBarStyle}>
          {maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setDefaultRating(item)}>
                <Image
                  style={styles.starImgStyle}
                  source={
                    item <= defaultRating
                      ? {uri: starImgFilled}
                      : {uri: starImgCorner}
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    };
    const onRatingSubmit = () => {
      console.log(uid);
      console.log(defaultRating);
      if (defaultRating) {
        const Allrating = firebase
          .database()
          .ref(`warung/${DataOrder.IDwarung}/ratings/${uid}`);
        const Ratings = {
          rating: defaultRating,
        };
        Allrating.update(Ratings)
          .then(data => {
            alert(
              'Thankyou for your feedback ' +
                defaultRating +
                ' ' +
                'of' +
                ' ' +
                maxRating.length +
                ' ' +
                'Star Rating',
            );
            firebase
              .database()
              .ref(`warung/${DataOrder.IDwarung}/ratings`)
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
                  let countRating = 0;
  
                  for (let i = 0; i < productArray.length; i++) {
                    countRating = +countRating + +productArray[i].rating;
                  }
                  // console.log('Halo Rating', countRating);
                  const hasil = countRating / productArray.length;
                  console.log('Halo Rating', hasil);
                  totalRating = hasil.toFixed(1);
                }
              });
            console.log('Rating Hasil akhir', totalRating);
  
            firebase
              .database()
              .ref(`warung/${DataOrder.IDwarung}`)
              .update({totalRating: totalRating});
            // .set(dataHomestay);
  
            navigation.replace('NavigationBar', {uid: uid});
          })
          .catch(error => {
            console.log('Error : ', error);
          });
      } else {
        alert('Error', 'enter the message first');
      }
    };

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
      <Modal visible={ratingModal} transparent={true} animationType="slide">
          <View style={styles.Box}>
            <Text
              style={{
                position: 'absolute',
                fontSize: 20,
                alignSelf: 'center',
                marginTop: '12%',
              }}>
              Rating
            </Text>
            <CustomRatingBar />
            <Text style={styles.TextStyle}>
              {defaultRating + '/' + maxRating.length}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnStyle}
              onPress={onRatingSubmit}>
              <Text style={styles.textTombol}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      <View style={styles.garis1} />
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.warung}>Warung {DataOrder.namaWarung}</Text>
          {DataOrder.status !== "completed"?(
            <Text style={{fontSize:10,marginTop:5,alignSelf:'center',fontWeight:'bold'}}>No : {DataOrder.phoneOwner}</Text>
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
          marginTop:25,
          width:100,
        }}>
        <View>
          {DataOrder.status !== "completed" ?(
            <Text style={{fontSize: 18,textAlign:'center'}}>{DataOrder.status}</Text>
          ):(
            <Text style={{fontSize: 18,textAlign:'center',color:'#38A7D0'}}>{DataOrder.status}</Text>
          )}
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
        <ButtonChat title='Chat Owner' onPress={() => sendOnWa()} />
      ):(
        <View></View>
      )}

      {DataOrder.status == 'completed' && (
          <View>
            <Text style={{alignSelf: 'center', marginTop: 20}}>
              Give us a feedback
            </Text>
            <TouchableOpacity
              style={{
                width: 80,
                height: 30,
                backgroundColor: 'white',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 5,
                borderColor: '#',
                marginTop: 3,
                borderWidth: 1,
                marginBottom: 10,
              }}
              onPress={() => setRatingModal(true)}>
              <Text style={{marginTop: '7%'}}>Click Here</Text>
            </TouchableOpacity>
          </View>
        )}

    </View>
    {loading && <Loading />}
    </>
  );
};

export default DetailOrderFoodUser;

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
  Box: {
    backgroundColor: 'white',
    // opacity: 0.9,
    width: '100%',
    height: '50%',
    borderRadius: 5,
    alignSelf: 'center',
    top: '59%',
  },
  CustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '20%',
  },
  starImgStyle: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  ViewRat: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    color: 'yellow',
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  btnStyle: {
    backgroundColor: '#ff6200',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 110,
    borderRadius: 10,
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
