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
import {Picker} from '@react-native-picker/picker';

const OAddWarung = ({navigation, route}) => {
  const {uid} = route.params;
  const [users, setUsers] = useState({});
  const [name, setName] = useState('');
  const [alamat, setAlamat] = useState('');
  const [price, setPrice] = useState('');
  //const [facility, setFacility] = useState('');
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');
  const [selectedValue, setSelectedValue] = useState('Paal');
  const [selectedStatus, setSelectedStatus] = useState('unavailable');
  const [selectedValueSize, setSelectedValueSize] = useState('3x2');
  const [selectedStatusSize, setSelectedStatusSize] = useState('3x2');

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

  const handleSubmit = () => {
    if (
      name.length == 0 ||
      selectedValue.length == 0 ||
      selectedValueSize.length == 0 ||
      price.length == 0 ||
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
        alamat: selectedValue,
        size: selectedValueSize,
        price: price,
        number:users.number,
        photo: photoBase64,
      };
      firebase.database().ref(`gazebo/${uid}`).set(data);
      navigation.navigate('OnavigationBar', {uid: uid});
      showMessage({
        message: 'Sucsess Add Gazebo',
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
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        title="Add Gazebo"
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
              <Text style={styles.textAddPhoto}>Add Photo Gazebo</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 15}}>
        <Text style={{marginLeft: 40, fontWeight: 'bold', fontSize: 16}}>
          Gazebo Name
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Input your gazebo name...'}
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
          Location
        </Text>
        {/* <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Address'}
            input={styles.input}
            value={alamat}
            onChangeText={value => setAlamat(value)}
          />
        </View> */}

        <View
          style={{
            borderWidth: 0.3,
            height: 41,
            width: 146,
            borderRadius: 10,
            marginLeft: 20,
          }}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            selectedStatus={selectedStatus}
            onStatusChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            >
            <Picker.Item
              label="Paal"
              value="Paal"
              style={{fontSize: 15}}
            />
            <Picker.Item
              label="Pulisan"
              value="Pulisan"
              style={{fontSize: 15}}
            />
            <Picker.Item
              label="Kinunang"
              value="Kinunang"
              style={{fontSize: 15}}
            />
          </Picker>
        </View>
        
        <Text
          style={{
            marginLeft: 40,
            paddingTop: 15,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Size
        </Text>
        <View
              style={{
                borderWidth: 0.3,
                height: 41,
                width: 146,
                borderRadius: 10,
                marginLeft: 20,
              }}>
              <Picker
                selectedValue={selectedValueSize}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValueSize(itemValue)
                }
                selectedStatus={selectedStatusSize}
                onStatusChange={(itemValue, itemIndex) =>
                  setSelectedStatusSize(itemValue)
                }
                >
                <Picker.Item
                  label="3x2"
                  value="3x2"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="3x4"
                  value="3x4"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="4x4"
                  value="4x4"
                  style={{fontSize: 15}}
                />
                <Picker.Item
                  label="5x4"
                  value="5x4"
                  style={{fontSize: 15}}
                />
              </Picker>
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
            placeholder={'Input your gazebo price...'}
            input={styles.input}
            value={price}
            keyboardType="number-pad"
            onChangeText={value => setPrice(value)}
          />
        </View>

        <View style={{marginTop: 63, alignItems: 'center'}}>
          <Button
            title={'Add Gazebo'}
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
