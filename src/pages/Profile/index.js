import React,{useContext,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/molecules/header';
import firebase from '../../config/Firebase';


const Profile = ({navigation}) => {


  const handleSubmit = () => {
      firebase.database().ref('users').once('value',(data)=>{
        const users=data.toJSON();
        console.log(users);
      })
    };
    
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="My Profile" />

      {/* Containers */}
      <View style={{flex: 1}}>
        {/* Photo Profile */}
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>{handleSubmit()}}>
          <Image 
          source={require('../../assets/image/DefaultProfile.jpg')} 
          style={{height:200,width:200,borderRadius:200/2}}
          />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Reyner Senduk
          </Text>
          
          <Text
            style={{
              fontSize: 13,
              color: '#ABABAB',
            }}>
            Reyner.senduk01@gmail.com
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#ABABAB',
            }}>
            085245635363
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 79}}>
          <View style={{height: 128, width: 343, alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.buttonEditProfile}
              onPress={() => navigation.navigate('EditProfile')}>
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
                style={{marginTop: 13, marginLeft: 103}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonLogout}
              onPress={() => navigation.replace('UserScreen')}>
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
                style={{marginTop: 13, marginLeft: 57}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 17}}>
          <View style={{height: 128, width: 343, alignItems: 'center'}}>
            <TouchableOpacity style={styles.buttonEditProfile}>
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
                style={{marginTop: 13, marginLeft: 220}}
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
                style={{marginTop: 13, marginLeft: 185}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  buttonEditProfile: {
    flexDirection: 'row',
    height: 40,
    width: 310,
    marginTop: 13,
  },
  buttonLogout: {
    flexDirection: 'row',
    height: 40,
    width: 310,
    marginTop: 21,
  },
});
