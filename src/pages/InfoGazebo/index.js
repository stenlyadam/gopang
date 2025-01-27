import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView
} from 'react-native';
import Header from '../../components/molecules/header';
import firebase from '../../config/Firebase';

const InfoGazebo = ({navigation, route}) => {
  const {uid, gazeboID} = route.params;
  const [gazebo, setGazebo] = useState({});

  const getGazebo = () => {
    firebase
      .database()
      .ref(`gazebo/${gazeboID}`)
      .on('value', res => {
        if (res.val()) {
          // setLoading(false);
          setGazebo(res.val());
          // setHarga(res.val().price);
          // setStatus(res.val().status);
        }
      });
  };

  useEffect(() => {
    getGazebo();
    console.log(gazebo.ID);
  }, []);

  const sendOnWa = () => {
    let mobile = gazebo.number;
    if (mobile) {
      // Kode negara 62 = Indonesia
      let url = 'whatsapp://send?text=' + '&phone=62' + gazebo.number;
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
    <View style={{flex: 1}}>
      <ScrollView>
      <Header
        // title=""
        navigation={navigation}
        onBack={() => navigation.goBack()}
      />

      <Image source={{uri: `data:image/jpeg;base64, ${gazebo.photo}`}} style={styles.gambar} />
      <View style={{flexDirection: 'row'}}>
        <View>
          
          <View style={{flexDirection: 'row', paddingTop: 12}}>
            <Text style={styles.namaGazebo}>Gazebo {gazebo.name}</Text>
            <Text style={styles.ukuran}>{gazebo.size}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/icon/Direction.png')}
              style={styles.direction}
            />
            <Text style={styles.alamat}>{gazebo.alamat}</Text>
          </View>

          <View>
            <Text style={styles.overview}>Overview</Text>
            <View
              style={{
                borderColor: '#F0F0F0',
                backgroundColor: '#E9E9E9',
                borderRadius: 7,
                // justifyContent: 'center',
                width: '83%',
                marginLeft: 20,
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={styles.deskripsi}>
                Gazebo is a freestanding roofed that you can chillout with your
                family or friends. in gazebo u can buy some food and drinks,
                gazebo near in beach and have a good view.
              </Text>
            </View>
          </View>
          <View style={{marginTop: 28, marginLeft: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Contact</Text>
            <View style={{flexDirection: 'row', marginTop: 18}}>
              <Image
                source={require('../../assets/Gazebo/contact.png')}
                style={{width: 35, height: 40}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Owner</Text>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: '#38A7D0'}}>
                  {gazebo.number}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{flexDirection: 'row', marginTop: 22}} onPress={() => sendOnWa()}>
              <Image
                source={require('../../assets/icon/iconChatAktif.png')}
                style={{width: 35, height: 40}}
              />
                <Text style={{fontSize: 15, fontWeight: 'bold',marginTop: 8, marginLeft: 10}}>
                  Chat Owner
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default InfoGazebo;

const styles = StyleSheet.create({
  gambar: {
    width: '100%',
    height: 280,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // backgroundColor: 'red',
  },
  direction: {
    width: 17,
    height: 24,
    marginLeft: 20,
    marginTop: 3,
  },
  alamat: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#9E9D9D',
    marginTop: 3,
  },
  namaGazebo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  ukuran: {
    fontSize: 18, 
    fontWeight: 'bold', 
    paddingLeft: 120, 
    paddingTop: 12},
  overview: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 16,
  },
  deskripsi: {
    fontSize: 15,
    fontWeight: 'normal',
    marginLeft: 5,
    marginTop: 5,
    // marginLeft: 20,
    // marginTop: 10,
    color: 'black',
  },
});
