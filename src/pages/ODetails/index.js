import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import Header from '../../components/molecules/header';
import CheckBox from '@react-native-community/checkbox';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import firebase from '../../config/Firebase';

const ODetails = ({navigation, route}) => {
  const {uid} = route.params;
  const [homestay, setHomestay] = useState({});
  const [harga, setHarga] = useState('');
  const [statusModal, setStatusModal] = useState(false);
  const [namaBaru, setNamaBaru] = useState('');
  const [alamatBaru, setAlamatBaru] = useState('');
  const [descriptionBaru, setDescriptionBaru] = useState('');
  const [priceBaru, setPriceBaru] = useState('');

  const [bedroomBaru, setBedroomBaru] = useState(false);
  const [bathroomBaru, setBathroomBaru] = useState(false);
  const [ACBaru, setACBaru] = useState(false);
  const [wifiBaru, setWifiBaru] = useState(false);

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState('');
  const [photoBase64, setPhotoBase64] = useState('');

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
    setStatusModal(false);
    const data = {
      AC: ACBaru,
      alamat: alamatBaru,
      bathroom: bathroomBaru,
      bedroom: bedroomBaru,
      description: descriptionBaru,
      location: homestay.location,
      name: namaBaru,
      photo: homestay.photo,
      price: priceBaru,
      status: homestay.status,
      wifi: wifiBaru,
    };
    firebase.database().ref(`homestay/${uid}`).set(data);
  };

  const getHomestay = () => {
    firebase

      .database()
      .ref(`homestay/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setHomestay(res.val());
          setHarga(res.val().price);
        }
      });
  };

  useEffect(() => {
    getHomestay();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Modal visible={statusModal} transparent={true} animationType="slide">
        <View style={styles.Box}>
          <Text
            style={{
              left: 10,
              fontSize: 18,
              color: 'black',
              top: 5,
              fontWeight: '600',
            }}>
            Edit your homestay
          </Text>
          <Text
            style={{
              left: 10,
              fontSize: 15,
              color: 'black',
              top: 8,
              fontWeight: '600',
            }}>
            Name
          </Text>
          <TextInput
            placeholder={homestay.name}
            style={styles.textInput}
            value={namaBaru}
            onChangeText={value => setNamaBaru(value)}
          />
          <Text
            style={{
              left: 10,
              fontSize: 15,
              color: 'black',
              top: 8,
              fontWeight: '600',
            }}>
            Address
          </Text>
          <TextInput
            placeholder={homestay.description}
            style={styles.textInput}
            value={alamatBaru}
            onChangeText={value => setAlamatBaru(value)}
          />
          <Text
            style={{
              left: 10,
              fontSize: 15,
              color: 'black',
              top: 8,
              fontWeight: '600',
            }}>
            Fasility
          </Text>

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
                value={bedroomBaru}
                onValueChange={newValue => setBedroomBaru(newValue)}
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
                value={bathroomBaru}
                onValueChange={newValue => setBathroomBaru(newValue)}
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
                value={ACBaru}
                onValueChange={newValue => setACBaru(newValue)}
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
                value={wifiBaru}
                onValueChange={newValue => setWifiBaru(newValue)}
              />
            </View>
          </View>

          {/* <Text
            style={{
              left: 10,
              fontSize: 15,
              color: 'black',
              top: 8,
              fontWeight: '600',
            }}>
            Description
          </Text>
          <TextInput
            placeholder={homestay.description}
            style={styles.textInput}
            value={descriptionBaru}
            onChangeText={value => setDescriptionBaru(value)}
          /> */}
          <Text
            style={{
              left: 10,
              fontSize: 15,
              color: 'black',
              top: 8,
              fontWeight: '600',
            }}>
            Price
          </Text>
          <TextInput
            placeholder={homestay.description}
            style={styles.textInput}
            value={priceBaru}
            onChangeText={value => setPriceBaru(value)}
          />
          <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
            <Text style={styles.Save}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{position: 'absolute', bottom: 19, right: 27}}
            onPress={() => setStatusModal(false)}>
            <Text style={{color: 'black', fontSize: 15}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{flex: 1}}>
        {/* Header */}
        <Header title="Detail Homestay" onBack={() => navigation.goBack()} />

        {/* Container */}
        <View>
          <TouchableOpacity onPress={getImage}>
            {hasPhoto && (
              <Image
                source={{uri: photo}}
                style={{
                  width: '100%',
                  height: 271,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              />
            )}
            {!hasPhoto && (
              <Image
                source={{uri: `data:image/jpeg;base64, ${homestay.photo}`}}
                style={{
                  width: '100%',
                  height: 271,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.Simpan}>
            <Text style={styles.Simpan1}>Save</Text>
          </TouchableOpacity>

          {/* nama homestay & location */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginTop: 21,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginLeft: '5.1%',
              }}>
              {homestay.name}
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 25}}
              onPress={() => setStatusModal(true)}>
              <Image source={require('../../assets/warung/penEdit.png')} />
            </TouchableOpacity>

            <Image
              source={require('../../assets/icon/Rating.png')}
              style={{
                width: 51,
                height: 17,
                marginTop: 12,
                position: 'absolute',
                right: 20,
                top: 20,
              }}
            />
          </View>
          <TouchableOpacity style={{marginLeft: 20, flexDirection: 'row'}}>
            <Image
              source={require('../../assets/icon/Direction.png')}
              style={{
                width: 20,
                height: 29,
              }}
            />
            <Text
              style={{
                fontSize: 15,
                width: 288,
                marginLeft: 3,
              }}>
              {homestay.alamat}
            </Text>
          </TouchableOpacity>

          {/* Fasilitas */}
          <View
            style={{
              flexDirection: 'row',
              height: 58,
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'center',
            }}>
            {/* Fasilitas Bedroom */}
            {homestay.bedroom === true && (
              <View style={{width: 65, alignItems: 'center', marginLeft: 15}}>
                <Image
                  source={require('../../assets/icon/Bedroom.png')}
                  style={styles.Fasilitas}
                />
                <Text style={styles.TFasilitas}>BEDROOM</Text>
              </View>
            )}

            {/* Fasilitas Bathroom */}
            {homestay.bathroom === true && (
              <View style={{width: 65, alignItems: 'center', marginLeft: 15}}>
                <Image
                  source={require('../../assets/icon/Bathroom.png')}
                  style={styles.Fasilitas}
                />
                <Text style={styles.TFasilitas}>BATHROOM</Text>
              </View>
            )}

            {/* Fasilitas WiFi */}
            {homestay.wifi === true && (
              <View style={{width: 65, alignItems: 'center', marginLeft: 15}}>
                <Image
                  source={require('../../assets/icon/Wifi.png')}
                  style={styles.Fasilitas}
                />
                <Text style={styles.TFasilitas}>WIFI</Text>
              </View>
            )}

            {/* Fasilitas AC */}
            {homestay.AC === true && (
              <View style={{width: 65, alignItems: 'center', marginLeft: 15}}>
                <Image
                  source={require('../../assets/icon/AC.png')}
                  style={styles.Fasilitas}
                />
                <Text style={styles.TFasilitas}>AC</Text>
              </View>
            )}
          </View>

          {/* Description */}
          <View
            style={{
              marginLeft: '4.8%',
              marginRight: '4.8%',
              marginTop: '4.8%',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 12,
              }}>
              Description
            </Text>
            <Text style={{fontSize: 17}}>{homestay.description}</Text>
          </View>

          {/* Check in/out */}
          <View style={{marginLeft: 25, marginTop: 36}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', top: 10}}>
              Price
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 34.65,
                height: 57.35,
                alignItems: 'center',
              }}>
              <Text
                style={{color: '#38A7D0', fontWeight: 'bold', fontSize: 20}}>
                IDR {harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 12, marginTop: 7}}>
                /Night
              </Text>
              {/* <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('EditHomestay', {uid})}>
                <Text style={styles.textButton}>Edit</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ODetails;

const styles = StyleSheet.create({
  elevation: {
    paddingBottom: 8,
    paddingLeft: 20,
  },
  searchBox: {
    width: 371,
    height: 45,
    paddingLeft: 23,
    paddingRight: 23,
    borderWidth: 1,
    borderRadius: 10,
  },
  Fasilitas: {},
  TFasilitas: {
    fontSize: 12,
  },
  button: {
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#38A7D0',
    width: 120,
    height: 38,
    position: 'absolute',
    right: '12%',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  Box: {
    backgroundColor: '#E6E6E6',
    // opacity: 0.9,
    width: '85%',
    height: '57%',
    borderRadius: 5,
    alignSelf: 'center',
    top: '15%',
  },
  textInput: {
    // backgroundColor: 'red',
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 5,
    top: 5,
    margin: 7,
    paddingLeft: 15,
  },
  Button: {
    position: 'absolute',
    backgroundColor: '#38A7D0',
    alignSelf: 'center',
    width: '40%',
    height: '7%',
    bottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  Save: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  fasilitas: {
    // flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 39,
    marginLeft: '9%',
    marginRight: '9%',
    // width: '100%',
    // justifyContent: 'center',
  },
  Simpan: {
    backgroundColor: '#38A7D0',
    position: 'absolute',
    right: '5%',
    top: '35%',
    borderRadius: 5,
    width: '20%',
    height: '5%',
  },
  Simpan1: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
  },
});
