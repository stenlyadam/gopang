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
import ButtonDetails from '../../components/atoms/buttonDetails';

const HomeMenu = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/*Likupang North*/}
        <View>
          <Image
            source={require('../../assets/home/Likupang.png')}
            style={{
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
              right: 25,
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
        <View style={{marginTop: 31}}>
          {/* Wahyu */}
          <View
            style={{
              height: 90,
              width: 365,
              marginLeft: 23,
              marginBottom: 28,
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: 0,
            }}>
            <Image source={require('../../assets/home/Wahyu.png')} />
            <View
              style={{
                marginLeft: 12,
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 60,
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.wahyu}>Wahyu</Text>
                  <Image source={require('../../assets/icon/Rating.png')} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../../assets/icon/Direction.png')} />
                  <Text>Marinsow Village, North Sulawesi</Text>
                </View>
              </View>
              <View
                style={{
                  width: 245,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#38A7D0', fontWeight: 'bold'}}>
                    IDR 200.000
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>/Night</Text>
                </View>
                <ButtonDetails title="Details" />
              </View>
            </View>
          </View>
          {/* Juniver */}
          <View
            style={{
              height: 90,
              width: 365,
              marginLeft: 23,
              marginBottom: 28,
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: 0,
            }}>
            <Image source={require('../../assets/home/Juniver.png')} />
            <View
              style={{
                marginLeft: 12,
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 60,
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.juniver}>Juniver</Text>
                  <Image source={require('../../assets/icon/Rating.png')} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../../assets/icon/Direction.png')} />
                  <Text>Marinsow Village, North Sulawesi</Text>
                </View>
              </View>
              <View
                style={{
                  width: 245,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#38A7D0', fontWeight: 'bold'}}>
                    IDR 200.000
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>/Night</Text>
                </View>
                <ButtonDetails title="Details" />
              </View>
            </View>
          </View>
          {/* Komplex Jembatan */}
          <View
            style={{
              height: 90,
              width: 365,
              marginLeft: 23,
              marginBottom: 28,
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: 0,
            }}>
            <Image source={require('../../assets/home/Jembatan.png')} />
            <View
              style={{
                marginLeft: 12,
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 60,
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.wahyu}>Komplex Jembatan</Text>
                  <Image source={require('../../assets/icon/Rating.png')} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={require('../../assets/icon/Direction.png')} />
                  <Text>Marinsow Village, North Sulawesi</Text>
                </View>
              </View>
              <View
                style={{
                  width: 245,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#38A7D0', fontWeight: 'bold'}}>
                    IDR 200.000
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>/Night</Text>
                </View>
                <ButtonDetails title="Details" />
              </View>
            </View>
          </View>
        </View>

        {/*Popular Destinations*/}
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft: 25,
          }}>
          Popular Destinations
        </Text>
        <View style={styles.Gdestination}>
          <View style={styles.Fdestination}>
            <View>
              <TouchableOpacity>
                <Image source={require('../../assets/pantai/Paal.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require('../../assets/pantai/Pulisan.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Fdestination}>
            <View>
              <TouchableOpacity>
                <Image source={require('../../assets/pantai/Kinunang.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={require('../../assets/pantai/Larata.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/*Trending Restaurant*/}
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 15,
            marginLeft: 25,
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
    marginLeft: 25,
  },
  wahyu: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 11,
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
  },
  Gdestination: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginHorizontal: 17,
    marginTop: 20,
  },
  Fdestination: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
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
});
