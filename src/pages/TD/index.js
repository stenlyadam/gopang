import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Linking,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/molecules/header';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';
import firebase from '../../config/Firebase';
import CountDown from 'react-native-countdown-component';
import ButtonChat from '../../components/atoms/ButtonChat';
const dayjs = require('dayjs');

const TransactionDetails = ({navigation, route}) => {
  const {uid, homestayID} = route.params;
  const [transaksi, setTransaksi] = useState({});
  const [users, setUsers] = useState({});
  const [ratingModal, setRatingModal] = useState(false);
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const [homestay, setHomestay] = useState({});

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
        .ref(`homestay/${transaksi.IDhomestay}/ratings/${uid}`);
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
            .ref(`homestay/${transaksi.IDhomestay}/ratings`)
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
            .ref(`homestay/${transaksi.IDhomestay}`)
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

  const getHomestay = () => {
    firebase

      .database()
      .ref(`homestay/${homestayID}`)
      .on('value', res => {
        if (res.val()) {
          setHomestay(res.val());
          // setHarga(res.val().price);
        }
      });
  };

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

  const getUser = () => {
    firebase

      .database()
      .ref(`users/pelanggan/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
          //   setOnPhoto(true);
          // console.log(users.photo);
        }
        //   console.log('ini user', users);
      });
  };

  useEffect(
    () =>
      navigation.addListener('blur', () => {
        setTransaksi(null);
      }),
    [navigation],
  );

  useEffect(() => {
    getUser();
    getTransaksi();
    getHomestay();
  }, []);

  //quick fix for countdown component not updating
  useEffect(
    () => setCountdownComponentForceUpdate(prevState => prevState + 1),
    [transaksi?.paymentExpireDateTime],
  );

  const sendOnWa = () => {
    let mobile = transaksi.noHandphoneOwner;
    if (mobile) {
      // Kode negara 62 = Indonesia
      let url =
        'whatsapp://send?text=' + '&phone=62' + transaksi.noHandphoneOwner;
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
    <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header title="Transaction" />

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

        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 20, marginRight: 61, marginTop: 30}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {transaksi.namaHomestay}
            </Text>
            <Text style={{fontSize: 15, marginTop: 3}}>
              {transaksi.alamatHomestay} Beach
            </Text>
            {/* <Image
              style={{width: 51, height: 20, marginTop: 7}}
              source={require('../../assets/icon/Rating.png')}
            /> */}
            <View style={{flexDirection: 'column'}}>
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
                  marginTop: 5,
                }}>
                {transaksi.namaOwner}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                }}>
                {transaksi.noHandphoneOwner}
              </Text>
            </View>
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
              marginBottom: 12,
            }}>
            Customer
          </Text>
          <Text
            style={{
              fontSize: 14,
            }}>
            {users.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
            }}>
            {users.email}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
            }}>
            {users.number}
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
            justifyContent: 'space-between',
            marginBottom: 13,
            marginLeft: 20,
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text
              style={{
                fontSize: 15,
                color: '#38A7D0',
              }}>
              Check In
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginRight: 20}}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
              }}>
              {dayjs(transaksi.checkin).format('dddd, DD MMMM YYYY')}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 5,
            justifyContent: 'space-between',
            marginBottom: 13,
            marginLeft: 20,
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text
              style={{
                fontSize: 15,
                color: '#38A7D0',
              }}>
              Check Out
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginRight: 20}}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
              }}>
              {dayjs(transaksi.checkout).format('dddd, DD MMMM YYYY')}
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: 371,
            alignSelf: 'center',
            marginBottom: 13,
          }}
        />

        {transaksi.status == 'paid' || transaksi.status == 'completed' ? (
          <View>
            <ButtonChat title="Chat Owner" onPress={() => sendOnWa()} />
          </View>
        ) : (
          <View>
            <View
              style={{
                marginTop: 13,
                marginBottom: 13,
                justifyContent: 'center',
                // marginLeft: 20,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Estimate your order
              </Text>
              <CountDown
                /*
          ni react-native-countdown-component untuk sementara ada bug:
          ((https://github.com/talalmajali/react-native-countdown-component/issues/102))

          Depe countdown nda mo ta update walaupun tu data yang torang
          ada passing ke 'until' itu so ta ganti.

          Untuk sementara, depe fix itu torang msti rubah tu prop 'id' tiap kali torang pe
          data transaksi berubah, makanya ada tambah state baru yang depe nama 'countdownComponentForceUpdate'
          */
                id={countdownComponentForceUpdate} //quick fix for countdown component not updating
                until={
                  transaksi?.paymentExpireDateTime
                    ? dayjs(transaksi.paymentExpireDateTime).diff(
                        dayjs(),
                        'second',
                      )
                    : 0
                }
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

            <ButtonChat title="Chat Owner" onPress={() => sendOnWa()} />
          </View>
        )}

        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: 371,
            alignSelf: 'center',
            top: 10,
          }}
        />

        <View style={{alignSelf: 'center', marginTop: 40}}>
          <View>
            {/* <ButtonTransaction
              title={'Paid'}
              btnView={styles.btnView}
              onPress={() => navigation.replace('NavigationBar', {uid: uid})}
              /> */}
            {transaksi.status == 'paid' || transaksi.status == 'completed' ? (
              <View>
                <Image
                  style={{width: 100, height: 100, alignSelf: 'center'}}
                  source={require('../../assets/icon/iconOrderStatus.png')}
                />
                <Text style={{fontSize: 20, alignSelf: 'center'}}>
                  {transaksi.status}
                </Text>
              </View>
            ) : (
              <View>
                <Image
                  style={{width: 100, height: 100, alignSelf: 'center'}}
                  source={require('../../assets/icon/iconOrderUnpaid.png')}
                />
                <Text
                  style={{fontSize: 20, alignSelf: 'center', marginBottom: 10}}>
                  {transaksi.status}
                </Text>
              </View>
            )}

            {transaksi.status == 'completed' && (
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

            {/* <ButtonTransaction title={'Rating'} onPress={()=> setRatingModal(true)} /> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TransactionDetails;

const styles = StyleSheet.create({
  btnView: {
    marginTop: '20%',
    marginBottom: 57.69,
    alignItems: 'center',
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
  container: {
    flex: 1,
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
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
  btnStyle: {
    backgroundColor: '#ff6200',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 110,
    borderRadius: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ViewRat: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    color: 'yellow',
  },
});
