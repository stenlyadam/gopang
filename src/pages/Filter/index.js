import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import Header from '../../components/molecules/header';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CardHomestay from '../../components/molecules/CardHomestay';
import firebase from '../../config/Firebase';

const Filter = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState('Likupang');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textIn, setTextIn] = useState('Click Here');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.toUTCString(); // + '-' + (tempDate.getMonth() + 1) +'-' + tempDate.getFullYear()
    setTextIn(fDate);

    console.log(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const uid = route.params;
  const [pictures, setPictures] = useState([]);

  const handleSubmit = key => {
    navigation.navigate('infoHomestay', {uid: uid, homestayID: key});
  };

  useEffect(() => {
    firebase
      .database()
      .ref(`homestay`)
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          // console.log(keranjang[0].namaProduk);
          Object.keys(rawData).map(key => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setPictures(productArray);
        }
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header title="Filter" onBack={() => navigation.goBack()} />

      {/* Container */}
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../../assets/image/HomestayFilter.png')}
            style={{
              width: '100%',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute',
              top: 103,
              left: 21,
              width: 160,
              height: 41,
            }}>
            Homestay
          </Text>
        </View>

        {/* Destination */}
        <View>
          <Text
            style={{
              marginLeft: 30,
              marginTop: 8,
              fontSize: 14,
              color: '#38A7D0',
            }}>
            Destination
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
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Paal" value="Paal" style={{fontSize: 14}} />
              <Picker.Item
                label="Pulisan"
                value="Pulisan"
                style={{fontSize: 14}}
              />
              <Picker.Item
                label="Kinunang"
                value="Kinunang"
                style={{fontSize: 14}}
              />
            </Picker>
          </View>

          <View>
            <ScrollView>
              {Homestay.length === 0 ? (
                <View>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Semua Item
                  </Text>
                  <View style={styles.list}>
                    {products
                      .filter(produk => produk.kategori.includes(kategori))
                      .map(key => (
                        <View style={{flexDirection: 'row'}}>
                          <CardHomestay
                            title={key.name}
                            alamat={key.alamat}
                            image={`${key.photo}`}
                            price={key.price}
                            onPress={() => handleSubmit(key.id)}
                          />
                        </View>
                      ))}
                  </View>
                </View>
              ) : (
                products
                  .filter(
                    produk =>
                      produk.kategori.includes(kategori) &&
                      produk.namaProduk
                        .toLowerCase()
                        .includes(search.toLowerCase()),
                  )
                  .map(key => (
                    <View style={{flexDirection: 'row'}}>
                      <CardHomestay
                        title={key.name}
                        alamat={key.alamat}
                        image={`${key.photo}`}
                        price={key.price}
                        onPress={() => handleSubmit(key.id)}
                      />
                    </View>
                  ))
              )}
            </ScrollView>
            {/* {pictures.map(key => (
              
            ))} */}
          </View>

          {/* Check-In/Out */}

          {/* <View style={{backgroundColor:'#EDEDF0',height:64,borderRadius:0.3}}>
            <Text style={{fontSize:14,color:'#38A7D0'}}>Check-in</Text>
            <TouchableOpacity style={styles.ButtonDate} onPress={()=>showMode('date')} >
              <Text style={{fontWeight:'bold',fontSize:20}}>{textIn}</Text>
              <Image source={require('../../assets/icon/Kalender.png')} />
            </TouchableOpacity>
          </View>
          {show && (
              <DateTimePicker
              testID='dateTimePicker'
              minimumDate={date}
              dateFormat='day month year'
              value={date}
              mode={mode}
              is24Hour={true}
              display='default'
              onChange={onChange}
          />)} */}
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  ButtonDate: {
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
  },
});
