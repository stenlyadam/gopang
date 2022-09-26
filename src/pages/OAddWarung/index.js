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

const OAddWarung = ({navigation, route}) => {
  const {uid} = route.params;
  const [users, setUsers] = useState({});
  const [name, setName] = useState('');
  const [alamat, setAlamat] = useState('');
  const [delivery, setDelivery] = useState('');
  //const [facility, setFacility] = useState('');
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
      {maxHeight: 200, maxWidth: 200, includeBase64: true},
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
      delivery.length == 0 ||
      hasPhoto == false
    ) {
      showMessage({
        message: 'All data must be filled!!',
        type: 'default',
        backgroundColor: '#D9435E',
        color: 'white',
      });
    } else {
      const data = {
        name: name,
        alamat: alamat,
        delivery: delivery,
        photo: photoBase64,
      };
      firebase.database().ref(`warung/${uid}`).set(data);
      navigation.navigate('OnavigationBar', {uid: uid});
      showMessage({
        message: 'Sucsess Add Warung',
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
        title="Add Warung"
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
              <Text style={styles.textAddPhoto}>Add Photo Warung</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 15}}>
        <Text style={{marginLeft: 40, fontWeight: 'bold', fontSize: 16}}>
          Warung Name
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Warung Name'}
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
          Delivery Time
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Delivery Time'}
            input={styles.input}
            value={delivery}
            onChangeText={value => setDelivery(value)}
          />
        </View>

        <View style={{marginTop: 63, alignItems: 'center'}}>
          <Button
            title={'Add Warung'}
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

export default OAddWarung;

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
