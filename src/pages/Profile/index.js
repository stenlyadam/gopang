import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/molecules/header';


const Profile = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Header 
      title="Profile" 
      onBack={()=>navigation.goBack()}
      />
      <View 
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../assets/image/fotoProfile.png')}
      style={{
        width:195,
        height:180,
      }} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:15,fontWeight:'bold'}}>Rayner Senduk</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:11}}>Raynersenduk@gmail.com</Text>
      </View>
      <View style={styles.ukuran}>
      <TouchableOpacity onPress={()=>navigation.navigate('editProfile')}>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 50}}>
        <Image source={require('../../assets/image/userbody.png')} />
        <Text style={{flexDirection: 'row',marginLeft: 10, marginTop: 10}}>Edit Profile</Text>
        {/* <Icon name='Arrow' size={20} /> */}
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 25}}>
        <Image source={require('../../assets/image/iconLogout.png')} />
        <Text style={{flexDirection: 'row',marginLeft: 10, marginTop: 10}}>Logout</Text>
        {/* <Icon name='Arrow' size={20} /> */}
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Help')}>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 25}}>
        <Image source={require('../../assets/image/iconBell.png')} />
        <Text style={{flexDirection: 'row',marginLeft: 10, marginTop: 10}}>Help</Text>
        {/* <Icon name='Arrow' size={20} /> */}
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('aboutApp')}>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 25}}>
        <Image source={require('../../assets/image/iconHeart.png')} />
        <Text style={{flexDirection: 'row',marginLeft: 10, marginTop: 10}}>About App</Text>
        {/* <Icon name='Arrow' size={20} /> */}
      </View>
      </TouchableOpacity>
      </View>
      </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  ukuran: {
    paddingRight: 20,
    paddingLeft: 20,
  }
});
