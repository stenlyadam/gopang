import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../../components/molecules/header';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';
import firebase from '../../config/Firebase';

const OverviewPage = ({navigation, route}) => {
  const {uid, homestayID} = route.params;
  const [homestay, setHomestay] = useState({});
  const [harga, setHarga] = useState('');

  const [users, setUsers] = useState({});

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
          setHarga(res.val().price);
        }
      });
  };

  useEffect(() => {
    getHomestay();
  }, []);

  const getUser = () => {
    firebase

      .database()
      .ref(`users/pelanggan/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
          //   setOnPhoto(true);
          console.log(users.photo);
        }
        console.log('ini user', users);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header title="Booking overview" onBack={() => navigation.goBack()} />

        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 20, marginRight: 61, marginTop: 49}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {homestay.name}
            </Text>
            <Text style={{fontSize: 15, marginTop: 3}}>
              {homestay.location}
            </Text>
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
            marginTop: 26,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: 371,
            alignSelf: 'center',
          }}
        />

        <View style={{marginTop: 13, marginBottom: 13, marginLeft: 20}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {users.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 12,
            }}>
            {users.email}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 12,
            }}>
            {users.number}
          </Text>
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
            justifyContent: 'space-between',
            marginBottom: 13,
            marginLeft: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 15,
            }}>
            Check-in
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginRight: 20,
            }}>
            Sun Feb 6 2022
          </Text>
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
            justifyContent: 'space-between',
            marginBottom: 13,
            marginLeft: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 15,
            }}>
            Check-out
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginRight: 20,
            }}>
            Mon Feb 07 2022
          </Text>
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
            justifyContent: 'space-between',
            marginBottom: 13,
            marginLeft: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 15,
            }}>
            For
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginRight: 20,
            }}>
            1 Night
          </Text>
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
            justifyContent: 'space-between',
            marginBottom: 13,
            marginLeft: 20,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Total payment
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginRight: 20,
              fontWeight: 'bold',
            }}>
            Rp {harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </Text>
        </View>

        <ButtonTransaction
          title={'Next'}
          btnView={styles.btnView}
          onPress={() => handleSubmit(homestayID)}
        />
      </View>
    </ScrollView>
  );
};

export default OverviewPage;

const styles = StyleSheet.create({
  btnView: {
    marginTop: 147,
    marginBottom: 57.69,
    alignItems: 'center',
  },
});
