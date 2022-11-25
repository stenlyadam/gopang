import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import Header from '../../components/molecules/header';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const SignUpUser = ({navigation, route}) => {
  const {uid} = route.params;
  const [users, setUsers] = useState({});
  const [name, setEmail] = useState(null);
  const [desc,setDesc] = useState(null);
  const [location,setLocation] = useState(null);
  const [facility,setFacility] = useState(null);
  const [price, setPrice] = useState(null);
  const [photo, setPhoto] = useState('');
  const [hasPohto, setHasPhoto] = useState(false);
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
            message: 'Upload photo dibatalkan',
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

  const handleSumbit = () => {
    if (price) {
      const data = {
        price: price,
        name: name,
        description:desc,
        location:location,
        photo: photoBase64,
      };
      firebase.database().ref(`homestay/${uid}`).set(data);
      showMessage({
        message: 'Perubahan berhasil dilakukan',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Change Profile" onBack={() => navigation.goBack()} />
      <ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.avatar} onPress={getImage}>
            {hasPohto && (
              <Image
                // source={require('../../assets/dummyChat/dummy3.jpg')}
                style={{width: 110, height: 110, borderRadius: 110 / 2}}
                source={{uri: photo}}
              />
            )}
            {!hasPohto && (
              <View style={styles.addPhoto}>
                <Text style={styles.textAddPhoto}>Add Photo Homestay</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Render TextInput */}
        <View style={styles.InputContainer}>
          <View>
            <Text style={{marginLeft: 10}}>Nama Homestay</Text>
            <Input
              placeholder='Enter your homestay name...'
              input={styles.inputName}
              value={name}
              onChangeText={value => setEmail(value)}
            />
            <Text style={{marginLeft: 10, marginTop: 15}}>Description</Text>
            <Input
              placeholder='Enter your homestay description...'
              value={desc}
              input={styles.inputNumber}
              onChangeText={value => setDesc(value)}
            />
            <Text style={{marginLeft: 10, marginTop: 15}}>Location</Text>
            <Input
              placeholder='Enter your homestay location...'
              value={location}
              input={styles.inputNumber}
              onChangeText={value => setLocation(value)}
            />
            <Text style={{marginLeft: 10, marginTop: 15}}>Price</Text>
            <Input
              placeholder='Enter your homestay price...'
              value={price}
              input={styles.inputNumber}
              onChangeText={value => setPrice(value)}
              keyboardType="number-pad"
            />
            {/* <Input placeholder={'Password'} type={number} TextEntry={true} input={styles.input} />
            <Input placeholder={'Confirm your password'} type={number} TextEntry={true} input={styles.input} /> */}
          </View>
        </View>

        {/* Render Button Sign Up dan Touchable Sign In */}
        <Button
          title={'Update Profile'}
          btnView={styles.btnSignUp}
          onPress={() => {
            handleSumbit();
            // pake show message
            // pake navigate bale ke halaman sebeumnya
          }}
        />
      </ScrollView>
    </View>
  );
};

export default SignUpUser;

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  InputContainer: {
    marginTop: 51.29,
    alignItems: 'center',
  },
  fontSignup: {
    fontWeight: 'bold',
    fontSize: 40,
    alignItems: 'center',
    color: '#000000',
  },
  fontUser: {
    fontWeight: 'bold',
    fontSize: 17,
    alignItems: 'center',
    color: '#000000',
    marginTop: 70,
  },
  fontCreate: {
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    color: '#A8A6A7',
    marginTop: 27,
  },
  titleSignin: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textAlready: {
    color: '#808080',
    fontSize: 16,
  },
  btnSignUp: {
    marginTop: 40,
    marginBottom: 58,
    alignItems: 'center',
  },
  ContainertxtSignIn: {
    flexDirection: 'row',
    marginLeft: 83,
    marginTop: 11.27,
  },
  inputName: {
    height: 54,
    width: 343,
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.3,
    backgroundColor: '#EDEDF0',
    marginTop: 10,
  },
  inputNumber: {
    height: 54,
    width: 343,
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.3,
    backgroundColor: '#EDEDF0',
    marginTop: 10,
  },
  textAddPhoto: {
    fontSize: 15,
    maxWidth: 100,
    textAlign: 'center',
    fontWeight: '400',
  },
});
