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
    Modal
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import Header from '../../components/molecules/header';
  import ButtonTransaction from '../../components/atoms/ButtonTransaction';
  import firebase from '../../config/Firebase';
  import CountDown from 'react-native-countdown-component';
  import ButtonChat from '../../components/atoms/ButtonChat';
  
  const TransactionDetails = ({navigation, route}) => {
    const {uid, homestayID} = route.params;
    const [transaksi, setTransaksi] = useState({});
    const [users, setUsers] = useState({});
    const [ratingModal,setRatingModal] = useState(false);
    const [defaultRating, setDefaultRating] = useState(0);
    const [maxRating, setmaxRating] = useState([1,2,3,4,5])
    // const IDhomestay = useState(transaksi.IDhomestay);
    console.log(transaksi.IDhomestay)
    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

    const CustomRatingBar = () =>{
      return(
          <View style={styles.CustomRatingBarStyle}>
               {
                   maxRating.map((item, key) =>{
                       return(
                           <TouchableOpacity
                           activeOpacity={0.7}
                           key={item}
                           onPress={() => setDefaultRating(item)}
                           >
                          <Image
                          style={styles.starImgStyle}
                          source={
                              item <= defaultRating
                              ? {uri : starImgFilled}
                              : {uri : starImgCorner}
                          }
                          />
                           </TouchableOpacity>
                       )
                   })
               }
          </View>
      )
  }
  const onRatingSubmit =()=>{
    console.log(uid)
    console.log(defaultRating)
    if(defaultRating){
        const Allrating = firebase.database().ref(`homestay/${transaksi.IDhomestay}/ratings/${uid}`)
        const Ratings={
            rating:defaultRating
        }
        Allrating
        .update(Ratings)
        .then((data)=>{
            alert('Thankyou for your feedback ' + defaultRating + ' ' + 'of' + ' ' + maxRating.length + ' ' + 'Star Rating');
            navigation.replace('NavigationBar', {uid: uid})
        })
        .catch((error) =>{
            console.log("Error : ",error)
        })
    }else{
       alert('Error','enter the message first');
    }
  }
    
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
  
    useEffect(() => {
      getUser();
    }, []);

    const sendOnWa = () => {
      let mobile = transaksi.noHandphoneOwner;
      if (mobile) {
        // Kode negara 62 = Indonesia
        let url = 'whatsapp://send?text=' + '&phone=62' + transaksi.noHandphoneOwner;
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
        <Modal visible={ratingModal} transparent={true} animationType="slide">
          <View style={styles.Box}>
              <CustomRatingBar />
              <Text style={styles.TextStyle}>
              {defaultRating + '/' + maxRating.length}
              </Text>
              <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnStyle}
              onPress={onRatingSubmit}
              >
                  <Text style={styles.textTombol}>SUBMIT</Text>
              </TouchableOpacity>
          </View>
        </Modal>

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
            {users.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 12,
            }}>
            {users.email}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 12,
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
            marginBottom: 13,
            justifyContent: 'center',
            // marginLeft: 20,
            flexDirection: 'row',
          }}>
          <CountDown
            until={86400}
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
          title="Chat Owner"
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
  
        <View style={{alignSelf:'center',marginTop:40}}>
            <View>
                {/* <ButtonTransaction
                title={'Paid'}
                btnView={styles.btnView}
                onPress={() => navigation.replace('NavigationBar', {uid: uid})}
                /> */}
                {transaksi.status == 'paid' || transaksi.status == 'completed' ? (
                  <View>
                    <Image style={{width:100,height:100,alignSelf:'center'}} source={require('../../assets/icon/iconOrderStatus.png')}/>
                    <Text style={{fontSize:20,alignSelf:'center'}}>{transaksi.status}</Text>
                  </View>
                ) : (
                  <View>
                    <Image style={{width:100,height:100,alignSelf:'center'}} source={require('../../assets/icon/iconOrderUnpaid.png')}/>
                    <Text style={{fontSize:20,alignSelf:'center'}}>{transaksi.status}</Text>
                  </View>
                )}

                {transaksi.status == 'completed'&&(
                  <View>
                    <Text style={{alignSelf:'center',marginTop:20}}>Give us a feedback</Text>
                    <TouchableOpacity 
                      style={{
                        width:80,
                        height:30,
                        backgroundColor:'white',
                        alignItems:'center',
                        alignSelf:'center',
                        borderRadius:5,
                        borderColor:'#',
                        marginTop:3,
                        borderWidth:1}} onPress={()=> setRatingModal(true)} >
                          <Text style={{marginTop:'7%'}}>Click Here</Text>
                    </TouchableOpacity>
                  </View>
                )}
                
                {/* <ButtonTransaction title={'Rating'} onPress={()=> setRatingModal(true)} /> */}
            </View>
        </View>
        
      </View>
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
      top: '60%',
    },
    container:{
      flex:1,
    },
    TextStyle:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
    },
    CustomRatingBarStyle:{
        justifyContent:'center',
        flexDirection:'row',
    },
    starImgStyle:{
      
        width:50,
        height:50,
        resizeMode:'cover'
    },
    btnStyle:{
        backgroundColor: '#ff6200',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal:110,
        borderRadius:10,
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
      },
      ViewRat:{
        textAlign:'left',
        fontSize:20,
        fontWeight:'bold',
        margin:5,
        color: 'yellow',
    },
  });
  