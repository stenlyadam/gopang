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
import Loading from '../../components/molecules/Loading';

const OEditProfil = ({navigation, route}) => {
  const {uid} = route.params;
  const [users, setUsers] = useState({});
  const [name, setEmail] = useState(null);
  const [number, setNumber] = useState(null);
  const [photo, setPhoto] = useState('');
  const [hasPohto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');
  console.log(uid);

  const [loading, setLoading] = useState(false);

  const getUser = () => {
    firebase

      .database()
      .ref(`users/owner/${uid}`)
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

  const handleSumbit = () => {
    setLoading(true);
    if (number && name && photoBase64) {
      const data = {
        email: users.email,
        number: number,
        name: name,
        photo: photoBase64,
      };
      firebase.database().ref(`users/owner/${uid}`).set(data);
      setLoading(false);
      showMessage({
        message: 'Perubahan berhasil dilakukan',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }

    if (!number) {
      const dataWithoutNumber = {
        email: users.email,
        number: users.number,
        name: name,
        photo: photoBase64,
      };
      firebase.database().ref(`users/owner/${uid}`).set(dataWithoutNumber);
      setLoading(false);
      showMessage({
        message: 'Update Profile Sucsess',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }

    if (!name) {
      const dataWithoutName = {
        email: users.email,
        number: number,
        name: users.name,
        photo: photoBase64,
      };
      firebase.database().ref(`users/owner/${uid}`).set(dataWithoutName);
      setLoading(false);
      showMessage({
        message: 'Update Profile Sucsess',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }

    if (!photoBase64) {
      const dataWithoutPhoto = {
        email: users.email,
        number: number,
        name: name,
        photo: users.photo,
      };
      firebase.database().ref(`users/owner/${uid}`).set(dataWithoutPhoto);
      setLoading(false);
      showMessage({
        message: 'Update Profile Sucsess',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }

    if (!number && !name) {
      const dataWithoutNumberName = {
        email: users.email,
        number: users.number,
        name: users.name,
        photo: photoBase64,
      };
      firebase.database().ref(`users/owner/${uid}`).set(dataWithoutNumberName);
      setLoading(false);
      showMessage({
        message: 'Update Profile Sucsess',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }

    if (!number && !photoBase64) {
      const dataWithoutNumberPhoto = {
        email: users.email,
        number: users.number,
        name: name,
        photo: users.photo,
      };
      firebase.database().ref(`users/owner/${uid}`).set(dataWithoutNumberPhoto);
      setLoading(false);
      showMessage({
        message: 'Update Profile Sucsess',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }

    if (!name && !photoBase64) {
      const dataWithoutNamePhoto = {
        email: users.email,
        number: number,
        name: users.name,
        photo: users.photo,
      };
      firebase.database().ref(`users/owner/${uid}`).set(dataWithoutNamePhoto);
      setLoading(false);
      showMessage({
        message: 'Update Profile Sucsess',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }

    navigation.goBack({uid: uid});
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
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
                  <Text style={styles.textAddPhoto}>Add Photo</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Render TextInput */}
          <View style={styles.InputContainer}>
            <View>
              <Text style={{marginLeft: 10}}>Full Name</Text>
              <Input
                placeholder={users.name}
                input={styles.inputName}
                value={name}
                onChangeText={value => setEmail(value)}
              />
              {/* <Input placeholder={'Email'} type={text} input={styles.input} /> */}
              <Text style={{marginLeft: 10, marginTop: 15}}>Phone Number</Text>
              <Input
                placeholder={users.number}
                type={number}
                value={number}
                input={styles.inputNumber}
                onChangeText={value => setNumber(value)}
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
      {loading && <Loading />}
    </>
  );
};

export default OEditProfil;

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
    maxWidth: 45,
    textAlign: 'center',
    fontWeight: '400',
  },
});
