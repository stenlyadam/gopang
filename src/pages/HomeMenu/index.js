import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import iconHome from '../../assets/icon/home.png';
import iconOrder from '../../assets/icon/order.png';
import iconChat from '../../assets/icon/chat.png';
import iconUser from '../../assets/icon/user.png';
import CardHomestay from '../../components/molecules/CardHomestay';

const HomeMenu = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/*Likupang North*/}
        <View>
          <Image
            source={require('../../assets/home/Likupang.png')}
            style={{
              width:'100%',
              height: 229,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          />
          <Image
            source={require('../../assets/home/Logo.png')}
            style={{
              height: 34,
              width: 31,
              position: 'absolute',
              top: 13,
              left:282,
              right: 99,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000000',
              position: 'absolute',
              top: 21,
              left: 307,
              right: 26,
              width:79,
              height:25
            }}>
            GOPANG
          </Text>
        </View>

        {/*Kategori*/}
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            marginRight: 240,
            marginTop: 27,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.replace('MenuHomestay')}
            style={{
              width: '60%',
              alignItems: 'center',
            }}>
            <View style={styles.navigation}>
              <Image source={require('../../assets/icon/Homestay.png')} />
            </View>
            <Text style={{fontSize: 15, textAlign: 'center'}}>Homestay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.replace('MenuGazebo')}
            style={{
              width: '60%',
              alignItems: 'center',
            }}>
            <View style={styles.navigation}>
              <Image source={require('../../assets/icon/Gazebo.png')} />
            </View>
            <Text style={{fontSize: 15, textAlign: 'center'}}>Gazebo</Text>
          </TouchableOpacity>
        </View>

        {/*Recomended Homestay*/}
        <Text style={styles.recomHomestay}>Recomended Homestay</Text>
        <View style={{marginTop: 10,width:'100%',justifyContent:'center'}}>
          {/* Wahyu */}
          <CardHomestay title='Wahyu' location='Marinsow Village, North Sulawesi' image={require('../../assets/home/Wahyu.png')} />

          {/* Juniver */}
          <CardHomestay title='Juniver' location='Pulisan Village, North Sulawesi' image={require('../../assets/home/Juniver.png')} />

          {/* Komplex Jembatan */}
          <CardHomestay title='Komplex Jembatan' location='Kinunang Village, North Sulawesi' image={require('../../assets/home/Jembatan.png')} />

        </View>

        {/*Popular Destinations*/}
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 14,
            marginLeft: 20,
          }}>
          Popular Destinations
        </Text>
        <View style={styles.Gdestination}>
            <View>
              <TouchableOpacity>
                <Image source={require('../../assets/pantai/Paal.png')} style={{height:170,width:173}} />
              </TouchableOpacity>
            </View>
            <View style={{marginLeft:20}}>
              <TouchableOpacity>
                <Image source={require('../../assets/pantai/Pulisan.png')} style={{height:170,width:173}} />
              </TouchableOpacity>
            </View>
            <View style={{marginTop:25}}>
              <TouchableOpacity>
                <Image source={require('../../assets/pantai/Kinunang.png')} style={{height:170,width:173}} />
              </TouchableOpacity>
            </View>
            <View style={{marginLeft:20,marginTop:25}}>
              <TouchableOpacity>
                <Image source={require('../../assets/pantai/Larata.png')} style={{height:170,width:173}} />
              </TouchableOpacity>
            </View>
        </View>

        {/*Trending Restaurant*/}
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 15,
            marginLeft: 20,
          }}>
          Trending Restaurant
        </Text>
        <View>
          <View style={styles.restaurant}>
            <TouchableOpacity style={styles.Trestaurant}>
              <Image
                source={require('../../assets/pantai/WarungJessica.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Trestaurant}>
              <Image source={require('../../assets/pantai/WarungWahyu.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Trestaurant}>
              <Image
                source={require('../../assets/pantai/WarungJeniver.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/*Navigation*/}
      <View
        style={{height: 63, flexDirection: 'row', borderStartColor: '#FFFFFF'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Image style={{width: 28, height: 28}} source={iconHome} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Image style={{width: 28, height: 28}} source={iconOrder} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Image style={{width: 28, height: 28}} source={iconChat} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Image style={{width: 28, height: 28}} source={iconUser} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeMenu;

const styles = StyleSheet.create({
  navigation: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#A7DFD8',
    backgroundColor: '#A7DFD8',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recomHomestay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20,
    marginBottom:10
  },
  wahyu: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 11,
    marginBottom:5,
    marginLeft:11,
  },
  juniver: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 11,
  },
  jembatan: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 11,
    marginBottom:5,
    marginLeft:11,
  },
  Gdestination: {
    flexWrap: 'wrap',
    flexDirection:'row',
    marginTop: 10,
    width: '100%',
    justifyContent:'center'
  },
  Fdestination: {
    flexDirection: 'row',
    marginBottom: 17,
  },
  restaurant: {
    flexDirection: 'row',
    marginHorizontal: 17,
    marginTop: 15,
  },
  Trestaurant: {
    marginRight: 21,
  },
  location:{
    fontWeight: 'normal',
    fontSize:12,
    width:187,
    height:16,
    marginLeft:4
  }
});
