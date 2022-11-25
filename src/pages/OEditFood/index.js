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
  const {uid, foodId} = route.params;
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newkategori, setNewKategori] = useState('');

  //
  const [food, setFood] = useState({});
  const [users, setUsers] = useState({});
  const [warung, setGetWarung] = useState({});
  //
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');

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

  const getWarung = () => {
    firebase
      .database()
      .ref(`warung/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setGetWarung(res.val());
          console.log('ini warung', warung);
        }
      });
  };

  const getFood = () => {
    firebase
      .database()
      .ref(`food/${foodId}`)
      .on('value', res => {
        if (res.val()) {
          setFood(res.val());
          console.log('ini food', food);
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

  const handleUpdate = () => {
    setLoading(true);
    if (newName === '') {
      setNewName(food.name);
    }
    if (newPrice === '') {
      setNewPrice(food.price);
    }
    if (newkategori === '') {
      setNewKategori(food.kategori);
    }
    if (photoBase64 === '') {
      setPhotoBase64(food.photo);
    }

    const data = {
      name: newName ? newName : food.name,
      price: newPrice ? newPrice : food.price,
      kategori: newkategori ? newkategori : food.kategori,
      photo: photoBase64 ? photoBase64 : food.photo,
      location: food.location,
      IDwarung: food.IDwarung,
      namaWarung: food.name,
    };
    firebase.database().ref(`food/${foodId}`).set(data);
    setLoading(false);
    navigation.navigate('OWarung', {uid: uid});
    showMessage({
      message: 'update success',
      type: 'default',
      backgroundColor: 'green',
      color: 'white',
    });
  };

  useEffect(() => {
    getUser();
    getFood();
    getWarung();
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
          title="Edit Food"
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
                <Text style={styles.textAddPhoto}>Add New Photo</Text>
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
              placeholder={food.name}
              input={styles.input}
              value={newName}
              onChangeText={value => setNewName(value)}
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
              placeholder={food.price}
              keyboardType="number-pad"
              input={styles.input}
              value={newPrice}
              onChangeText={value => setNewPrice(value)}
            />
          </View>
          {/* {'New Price'} */}

          <View
            style={{
              margin: 10,
              marginLeft: 30,
              marginRight: 20,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Category</Text>
            <RadioButtonRN
              data={data}
              selectedBtn={e => setNewKategori(e.value)}
              withoutBox="false"
            />
          </View>

          <View
            style={{marginTop: 63, marginBottom: 57.69, alignItems: 'center'}}>
            <Button
              title={'Update'}
              onPress={() => {
                handleUpdate();
              }}
              onValueChange={data => setNewKategori(data)}
              // style={{width: 206, height: 58}}
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

// if (newname === '') {
//   setNewName(foods.newname);
// }
// if (newprice === '') {
//   setNewPrice(foods.newprice);
// }

// const newData = {
//   name: newname,
//   price: newprice,
// };