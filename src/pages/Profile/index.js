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
        {/* <Text style={{fontSize: 11,color: '#ABABAB'}}>Make changes to your profile</Text> */}
        <View style={{paddingLeft: 140}}>
        <Image source={require('../../assets/icon/ArrowRight.png')}/>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 25}}>
        <Image source={require('../../assets/image/iconLogout.png')} />
        <Text style={{flexDirection: 'row',marginLeft: 10, marginTop: 10}}>Logout</Text>
        {/* <Text style={{fontSize:11, color:'#ABABAB'}}>Further secure your account for safety</Text> */}
        <View style={{paddingLeft: 163}}> 
        <Image source={require('../../assets/icon/ArrowRight.png')}/>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('ProfileOwner')}>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 25}}>
        <Image source={require('../../assets/image/iconBell.png')} />
        <Text style={{flexDirection: 'row',marginLeft: 10, marginTop: 10}}>Help</Text>
        <View style={{paddingLeft: 175}}>
        <Image source={require('../../assets/icon/ArrowRight.png')}/>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('aboutApp')}>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 25}}>
        <Image source={require('../../assets/image/iconHeart.png')} />
        <Text style={{flexDirection: 'row',marginLeft: 10, marginTop: 10}}>About App</Text>
        <View style={{paddingLeft: 135}}>
        <Image source={require('../../assets/icon/ArrowRight.png')}/>
        </View>
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
