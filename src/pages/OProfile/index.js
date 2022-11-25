import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  BackHandler
} from 'react-native';
import Header from '../../components/molecules/header';
import firebase from '../../config/Firebase';
import Loading from '../../components/molecules/Loading';
import { responsiveHeight, responsiveWidth } from '../../utils/responsive';

const OProfile = ({navigation, route}) => {
  const {uid} = route.params;
  const [users, setUsers] = useState({});
  const [onPhoto, setOnPhoto] = useState(false);

  const getUser = () => {
    firebase

      .database()
      .ref(`users/owner/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
          setOnPhoto(true);
          console.log(users.photo);
        }
        console.log('ini user', users);
      });
  };
  const handleSubmitGoBack =()=>{
    // firebase.database().ref(`users/pelanggan/${uid}/keranjang`).remove();

    navigation.goBack();
  };

  useEffect(() => {
    getUser();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      handleSubmitGoBack();
      return true;
    })
    return () => backHandler.remove()
  }, []);

  const onSignoutPress=()=>{
    firebase.auth().signOut();
    setTimeout(() => {
      return navigation.replace('OwnerScreen');
    }, 2000);
  }

  return (
        <>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Header title="My Profile" />

          {/* Containers */}
          <View style={{flex: 1}}>
            {/* Photo Profile */}
            <View style={{alignItems: 'center'}}>
              {onPhoto ? (
                <Image
                  source={{uri: `data:image/jpeg;base64, ${users.photo}`}}
                  style={styles.imageStyle}
                />
              ) : (
                <View
                  style={{
                    width: 168,
                    height: 168,
                    borderRadius: 168 / 2,
                    backgroundColor: '#C4C4C4',
                  }}></View>
              )}
              <View style={{top: 14, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {users.name}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#ABABAB',
                  }}>
                  {users.email}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#ABABAB',
                  }}>
                  {users.number}
                </Text>
              </View>
            </View>

            <View style={{alignItems:'center'}}>
        <View style={{marginTop: 79}}>
          <View style={{height: responsiveHeight(128), width: responsiveWidth(343), alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.buttonEditProfile}
              onPress={() => navigation.navigate('OEditProfile', {uid: uid})}>
              <Image
                source={require('../../assets/icon/ScreenProfile/iconProfile.png')}
              />
              <View style={{marginLeft: 16}}>
                <Text style={{fontSize: 13, marginBottom: 3}}>
                  Edit Profile
                </Text>
                <Text style={{fontSize: 11, color: '#ABABAB'}}>
                  Make changes to your profile
                </Text>
              </View>
              <Image
                source={require('../../assets/icon/ScreenProfile/ArrowRight.png')}
                style={{marginTop: 13, marginLeft: 250,position:'absolute'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonEditProfile}
              onPress={onSignoutPress}>
              <Image
                source={require('../../assets/icon/ScreenProfile/Logout.png')}
              />
              <View style={{marginLeft: 16}}>
                <Text style={{fontSize: 13, marginBottom: 3}}>Log out</Text>
                <Text style={{fontSize: 11, color: '#ABABAB'}}>
                  Further secure your account for safety
                </Text>
              </View>
              <Image
                source={require('../../assets/icon/ScreenProfile/ArrowRight.png')}
                style={{marginTop: 13, marginLeft: 250,position:'absolute'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <View style={{height: responsiveHeight(128), width: responsiveWidth(343), alignItems: 'center'}}>
            <TouchableOpacity style={styles.buttonLogout} onPress={()=> navigation.navigate('Help')}>
              <Image
                source={require('../../assets/icon/ScreenProfile/Help.png')}
              />
              <Text
                style={{
                  fontSize: 13,
                  marginBottom: 3,
                  alignSelf: 'center',
                  marginLeft: 16,
                }}>
                Help
              </Text>
              <Image
                source={require('../../assets/icon/ScreenProfile/ArrowRight.png')}
                style={{marginTop: 13, marginLeft: 250,position:'absolute'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonLogout}
              onPress={() => navigation.navigate('AboutApp')}>
              <Image
                source={require('../../assets/icon/ScreenProfile/AboutApp.png')}
              />
              <Text
                style={{
                  fontSize: 13,
                  marginBottom: 3,
                  alignSelf: 'center',
                  marginLeft: 16,
                }}>
                About App
              </Text>
              <Image
                source={require('../../assets/icon/ScreenProfile/ArrowRight.png')}
                style={{marginTop: 13, marginLeft: 250,position:'absolute'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        </View>
          </View>
        </View>
        </>
  );
};

export default OProfile;

const styles = StyleSheet.create({
  buttonEditProfile: {
    flexDirection: 'row',
    height: 40,
    width: '90%',
    marginTop: 13,
  },
  buttonLogout: {
    flexDirection: 'row',
    height: 40,
    width: '90%',
    marginTop: 21,
  },
  imageStyle: {
    width: 168,
    height: 168,
    borderRadius: 168 / 2,
  },
});
