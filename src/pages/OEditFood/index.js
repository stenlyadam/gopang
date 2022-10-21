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
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import RadioButtonRN from 'radio-buttons-react-native';
import firebase from '../../config/Firebase';
import Loading from '../../components/molecules/Loading';

const OEditFood = ({navigation, route}) => {
  const {uid} = route.params;
  const [users, setUsers] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  //const [facility, setFacility] = useState('');
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');
  const [kategori, setKategori] = useState('');
  console.log(uid);

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    if (name.length == 0 || price.length == 0 || hasPhoto == false) {
      showMessage({
        message: 'All data must be filled!!',
        type: 'default',
        backgroundColor: '#D9435E',
        color: 'white',
      });
    } else {
      const data = {
        name: name,
        price: price,
        photo: photoBase64,
        kategori: kategori,
      };
      firebase.database().ref(`warung/${uid}/food/`).push(data);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Warung', {uid: uid});
        showMessage({
          message: 'Sucsess Add Add',
          type: 'default',
          backgroundColor: 'green',
          color: 'white',
        });
      }, 2000);
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

  const data = [
    {
      label: 'Food',
      value: 'Food',
    },
    {
      label: 'Snack',
      value: 'Snack',
    },
    {
      label: 'Drink',
      value: 'Drink',
    },
  ];

  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <Header
          title="Add Food"
          navigation={navigation}
          onBack={() => navigation.goBack()}
        />

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.avatar} onPress={getImage}>
            {hasPhoto && (
              <Image
                // source={require('../../assets/dummyChat/dummy3.jpg')}
                style={{borderRadius: 152 / 2, width: 152, height: 152}}
                source={{uri: photo}}
              />
            )}
            {!hasPhoto && (
              <View style={styles.addPhoto}>
                <Text style={styles.textAddPhoto}>Add Photo Food</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={{top: 40}}>
          <Text style={{marginLeft: 30, fontWeight: 'bold', fontSize: 16}}>
            Food Name
          </Text>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Input
              placeholder={'Food Name'}
              input={styles.input}
              value={name}
              onChangeText={value => setName(value)}
            />
          </View>

          <Text
            style={{
              marginLeft: 30,
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
            style={{
              margin: 10,
              marginLeft: 30,
              marginRight: 20,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Category</Text>
            <RadioButtonRN
              data={data}
              selectedBtn={e => setKategori(e.value)}
              withoutBox="false"
            />
          </View>

          <View
            style={{marginTop: 63, marginBottom: 57.69, alignItems: 'center'}}>
            <Button
              title={'Add Food'}
              onPress={() => {
                handleSubmit();
              }}
              onValueChange={data => setKategori(data)}
              style={{width: 206, height: 58}}
              // onPress={() => navigation.navigate('DetailsOwner')}
            />
          </View>
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
  );
};

export default OEditFood;

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
    borderRadius: 152 / 2,
    width: 152,
    height: 152,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
