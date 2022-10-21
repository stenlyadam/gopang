import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../components/molecules/header';
import Input from '../../components/atoms/Input';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/atoms/Button';
import firebase from '../../config/Firebase';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const OAddHomestay = ({navigation, route}) => {
  const [Bedroom, setBedroom] = useState(false);
  const [Bathroom, setBathroom] = useState(false);
  const [AC, setAC] = useState(false);
  const [Wifi, setWifi] = useState(false);

  const {uid} = route.params;
  const [users, setUsers] = useState({});
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [alamat, setAlamat] = useState('');
  const [location, setLocation] = useState('');
  //const [facility, setFacility] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');
  console.log(uid);

  const getUser = () => {
    firebase

      .database()
      .ref(`users/pelanggan/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
          console.log('ini', users);
        }
      });
  };

  const getImage = () => {
    launchImageLibrary(
      {maxHeight: 720, maxWidth: 1280, includeBase64: true},
      res => {
        if (res.didCancel) {
          setHasPhoto(false);
          showMessage({
            message: 'Upload photo cancel',
            type: 'default',
            backgroundColor: '#D9435E',
            color: 'white',
          });
        } else {
          setPhoto(res.assets[0].uri);
          setPhotoBase64(res.assets[0].base64);
          setHasPhoto(true);
        }
      },
    );
  };

  const handleSubmit = () => {
    if (
      name.length == 0 ||
      alamat.length == 0 ||
      location.length == 0 ||
      desc.length == 0 ||
      price.length == 0 ||
      hasPhoto == false
    ) {
      showMessage({
        message: 'mana mana jo dang dulu',
        type: 'default',
        backgroundColor: '#D9435E',
        color: 'white',
      });
    } else {
      const data = {
        price: price,
        name: name,
        description: desc,
        alamat: alamat,
        location: location,
        photo: photoBase64,
        bedroom: Bedroom,
        bathroom: Bathroom,
        AC: AC,
        wifi: Wifi,
        ratings: '',
        totalRating: 0,
        status: 'available',
      };
      firebase.database().ref(`homestay/${uid}`).set(data);
      navigation.navigate('OnavigationBar', {uid: uid});
      showMessage({
        message: 'Sucsess Add Homestay',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }
    // if (price) {
    //   const data = {
    //     price: price,
    //     name: name,
    //     description: desc,
    //     location: location,
    //     photo: photoBase64,
    //   };
    //   firebase.database().ref(`homestay/${uid}`).set(data);
    //   navigate(`/src/containers/organisms/Akun/User.js/${uid}`);
    //   showMessage({
    //     message: 'Perubahan berhasil dilakukan',
    //     type: 'default',
    //     backgroundColor: 'green',
    //     color: 'white',
    //   });
    // }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        title="Add Homestay"
        navigation={navigation}
        onBack={() => navigation.goBack()}
      />

      {/* <TouchableOpacity>
        <Image
          source={require('../../assets/owner/ButtonAddFood.png')}
          style={{margin: 32, width: 347, height: 152}}
        />
      </TouchableOpacity> */}

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.avatar} onPress={getImage}>
          {hasPhoto && (
            <Image
              // source={require('../../assets/dummyChat/dummy3.jpg')}
              style={{width: 347, height: 152, borderRadius: 8}}
              source={{uri: photo}}
            />
          )}
          {!hasPhoto && (
            <View style={styles.addPhoto}>
              <Text style={styles.textAddPhoto}>Add Photo Homestay</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 15}}>
        <Text style={{marginLeft: 40, fontWeight: 'bold', fontSize: 16}}>
          Homestay Name
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Full Name'}
            input={styles.input}
            value={name}
            onChangeText={value => setName(value)}
          />
        </View>
        <Text
          style={{
            marginLeft: 40,
            paddingTop: 15,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Address
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Address'}
            input={styles.input}
            value={alamat}
            onChangeText={value => setAlamat(value)}
          />
        </View>
        <Text
          style={{
            marginLeft: 40,
            paddingTop: 15,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Location
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Location'}
            input={styles.input}
            value={location}
            onChangeText={value => setLocation(value)}
          />
        </View>
        <View style={styles.fasilitas}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/owner/Doublebed.png')}
              style={{height: 28, width: 28}}
            />
            <Text>Bedroom</Text>
            <CheckBox
              disabled={false}
              value={Bedroom}
              onValueChange={newValue => setBedroom(newValue)}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/owner/bathtub.png')}
              style={{height: 28, width: 28}}
            />
            <Text>Bathroom</Text>
            <CheckBox
              disabled={false}
              value={Bathroom}
              onValueChange={newValue => setBathroom(newValue)}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/owner/AC.png')}
              style={{height: 28, width: 28}}
            />
            <Text>AC</Text>
            <CheckBox
              disabled={false}
              value={AC}
              onValueChange={newValue => setAC(newValue)}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/owner/wifi.png')}
              style={{height: 28, width: 28}}
            />
            <Text>Wifi</Text>
            <CheckBox
              disabled={false}
              value={Wifi}
              onValueChange={newValue => setWifi(newValue)}
            />
          </View>
        </View>
        <Text
          style={{
            marginLeft: 40,
            paddingTop: 15,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Description
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Description'}
            input={styles.input}
            value={desc}
            onChangeText={value => setDesc(value)}
          />
        </View>
        <Text
          style={{
            marginLeft: 40,
            paddingTop: 15,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Price
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Price'}
            keyboardType="number-pad"
            input={styles.input}
            value={price}
            onChangeText={value => setPrice(value)}
          />
        </View>
        <View
          style={{marginTop: 63, marginBottom: 57.69, alignItems: 'center'}}>
          <Button
            title={'Add Homestay'}
            onPress={() => {
              handleSubmit();
            }}
            // onPress={() => navigation.navigate('DetailsOwner')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OAddHomestay;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 343,
    paddingTop: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.3,
    backgroundColor: '#EDEDF0',
  },
  fasilitas: {
    // flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 39,
    marginLeft: 60,
    marginRight: 60,
    // width: '100%',
    // justifyContent: 'center',
  },
  avatar: {
    width: 347,
    height: 152,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
