import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Header from '../../components/molecules/header';

const InfoGazebo = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header
        title="Gazebo Wahyu"
        navigation={navigation}
        onBack={() => navigation.goBack()}
      />

      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={require('../../assets/Gazebo/Gazebo1.jpg')}
            style={styles.gambar}
          />
          <View style={{flexDirection: 'row', paddingTop: 12}}>
            <Text style={styles.namaGazebo}>Gazebo Wahyu</Text>
            <Text style={styles.ukuran}>4x6</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/icon/Direction.png')}
              style={styles.direction}
            />
            <Text style={styles.alamat}>Marinsow Village, Paal beach</Text>
          </View>

          <View>
            <Text style={styles.overview}>Overview</Text>
            <View
              style={{
                borderColor: '#F0F0F0',
                backgroundColor: '#E9E9E9',
                borderRadius: 7,
                // justifyContent: 'center',
                width: '90%',
                marginLeft: 20,
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={styles.deskripsi}>
                Gazebo is a freestanding roofed that you can chillout with your
                family or friends. in gazebo u can buy some food and drinks,
                gazebo near in beach and have a good view.
              </Text>
            </View>
          </View>
          <View style={{marginTop: 28, marginLeft: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Contact</Text>
            <View style={{flexDirection: 'row', marginTop: 18}}>
              <Image
                source={require('../../assets/Gazebo/contact.png')}
                style={{width: 35, height: 40}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Mr. Wahyu
                </Text>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: '#38A7D0'}}>
                  0852-1234-5678
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{flexDirection: 'row', marginTop: 22}}
              onPress={() => navigation.navigate('Chat')}>
              <Image
                source={require('../../assets/icon/iconChatAktif.png')}
                style={{width: 35, height: 40}}
              />
              <View style={{marginTop: 8, marginLeft: 10}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Chat Owner
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoGazebo;

const styles = StyleSheet.create({
  gambar: {
    width: 411,
    height: 270,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  direction: {
    width: 17,
    height: 24,
    marginLeft: 20,
    marginTop: 3,
  },
  alamat: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#9E9D9D',
    marginTop: 3,
  },
  namaGazebo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  ukuran: {fontSize: 18, fontWeight: 'bold', paddingLeft: 130, paddingTop: 12},
  overview: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 16,
  },
  deskripsi: {
    fontSize: 15,
    fontWeight: 'normal',
    marginLeft: 5,
    marginTop: 5,
    // marginLeft: 20,
    // marginTop: 10,
    color: 'black',
  },
});
