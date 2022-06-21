import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/molecules/header';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';
import firebase from '../../config/Firebase';
import CountDown from 'react-native-countdown-component';
import ButtonChat from '../../components/atoms/ButtonChat';

const TransactionDetails = ({navigation, route}) => {
  const {uid, homestayID} = route.params;
  const [homestay, setHomestay] = useState({});

  const handleSubmit = () => {
    navigation.navigate('TransactionDetails', {
      uid: uid,
      homestayID: homestayID,
    });
  };

  const getHomestay = () => {
    firebase

      .database()
      .ref(`homestay/${homestayID}`)
      .on('value', res => {
        if (res.val()) {
          setHomestay(res.val());
          //   setHarga(res.val().price);
        }
      });
  };

  useEffect(() => {
    getHomestay();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Transaction" onBack={() => navigation.goBack()} />

      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: 20, marginRight: 61, marginTop: 30}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {homestay.name}
          </Text>
          <Text style={{fontSize: 15, marginTop: 3}}>{homestay.location}</Text>
          <Image
            style={{width: 51, height: 20, marginTop: 7}}
            source={require('../../assets/icon/Rating.png')}
          />
        </View>
        <Image
          style={{
            position: 'absolute',
            marginTop: 30,
            marginLeft: '65.1%',
            width: 111,
            height: 106,
            borderRadius: 20,
          }}
          source={{uri: `data:image/jpeg;base64, ${homestay.photo}`}}
        />
      </View>
      <View
        style={{
          height: 1,
          marginTop: 45,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          width: 371,
          alignSelf: 'center',
        }}
      />

      <View
        style={{
          marginTop: 13,
          justifyContent: 'space-between',
          marginBottom: 13,
          marginLeft: 20,
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Image source={require('../../assets/icon/Dollar.png')} />
          <Text
            style={{
              fontSize: 15,
            }}>
            Payment Method
          </Text>
        </View>

        <TouchableHighlight
          onPress={() => Alert.alert('SuccessPage')}
          style={{marginRight: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 5,
              }}>
              Indomaret
            </Text>
            <Image source={require('../../assets/icon/ArrowRight.png')} />
          </View>
        </TouchableHighlight>
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          width: 371,
          alignSelf: 'center',
        }}
      />

      <View
        style={{
          marginTop: 13,
          marginBottom: 13,
          justifyContent: 'center',
          // marginLeft: 20,
          flexDirection: 'row',
        }}>
        {/* <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Estimation
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginRight: 20,
            fontWeight: 'bold',
          }}>
          23.30.15
        </Text> */}
        <CountDown
          until={50}
          digitStyle={{backgroundColor: 'white'}}
          onFinish={() => alert('finished')}
          onPress={() => alert('hello')}
          size={15}
        />
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          width: 371,
          alignSelf: 'center',
          bottom: 10,
        }}
      />

      <ButtonChat
        title="Start Chatting"
        onPress={() => navigation.navigate('Chat', uid)}
      />

      <View
        style={{
          height: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          width: 371,
          alignSelf: 'center',
          top: 10,
        }}
      />

      <ButtonTransaction
        title={'Book Now'}
        btnView={styles.btnView}
        // onPress={() => navigation.replace('SuccessPage')}
      />
    </View>
  );
};

export default TransactionDetails;

const styles = StyleSheet.create({
  btnView: {
    marginTop: 338,
    marginBottom: 57.69,
    alignItems: 'center',
  },
});
