import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Linking
} from 'react-native';
import React,{useCallback} from 'react';
import Header from '../../components/molecules/header';
import CategoryFeature from '../../components/molecules/CategoryFeature';
import Button from '../../components/atoms/Button';

const OptionMenuPulisan = ({navigation,route}) => {
  const {uid} = route.params;
  const supportedURL = "https://goo.gl/maps/uww8dpFt4wBJufEY6";

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        await Linking.openURL(url);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <Header title={'Pulisan Beach'} onBack={() => navigation.goBack()} />

      {/* Container */}
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/pantai/Pulisan/Pulisan5.jpg')}
          style={{width: '100%',height:253,borderBottomLeftRadius:20,borderBottomRightRadius:20}}
        />

        {/* Describe */}
        <View style={{width: '100%', flexDirection: 'row', marginTop: 28}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: '5.1%'}}>
            Pulisan Beach
          </Text>
          <Image
            source={require('../../assets/icon/Rating.png')}
            style={{width: 51, height: 17, marginTop: 12, marginLeft: '34%'}}
          />
        </View>
        <TouchableOpacity style={{marginLeft: 14, flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icon/Direction.png')}
            style={{width: 20, height: 29}}
          />
          <Text style={{fontSize: 15, width: 288, marginLeft: 3}}>
            Marinsow Village, East Likupang District, North Minahasa Regency,
            North Sulawesi
          </Text>
        </TouchableOpacity>
        <View
          style={{marginLeft: '4.8%', marginRight: '4.8%', marginTop: '4.8%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 12}}>
            Overview
          </Text>
          <Text style={{fontSize: 17,textAlign:'justify'}}>
          Pulisan Beach has an area of ​​​​approximately 3 hectares with a coastline of 500 meters. 
          On this beach there are 3 scenic spots, namely sand, rocks, and savanna. 
          Plus the beautiful underwater scenery makes it suitable for snorkeling. 
          Enjoying the underwater scenery on this beach is a good choice.
          This beach with soft white sand is a favorite destination in Likupang. 
          The clear sea water adds to its beauty. You can see the scenery in the water clearly. 
          Not only that, the existence of a rock that resembles a cave is a special attraction.
          </Text>
        </View>

        {/* Category */}
        <CategoryFeature
          onPress1={() => navigation.navigate('MenuHomestay')}
          onPress2={() => navigation.navigate('MenuGazeboPulisan',{uid:uid})}
          onPress3={() => navigation.navigate('MenuFood')}
        />
        <View style={{marginLeft: 20, marginBottom: 27}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 18,
              marginTop: 20,
            }}>
            Galery
          </Text>
          <View style={styles.GaleryPhotos}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image style={styles.Photos1} source={require('../../assets/pantai/Pulisan/Pulisan1.jpg')}/>
            <Image style={styles.Photos} source={require('../../assets/pantai//Pulisan/Pulisan2.jpg')}/>
            <Image style={styles.Photos} source={require('../../assets/pantai/Pulisan/Pulisan3.jpg')}/>
            <Image style={styles.Photos} source={require('../../assets/pantai/Pulisan/Pulisan4.jpg')}/>
            <Image style={styles.Photos} source={require('../../assets/pantai/Pulisan/Pulisan5.jpg')}/>
            </ScrollView>
          </View>
        </View>
        <View style={{alignSelf:'center', marginBottom:19.27}}>
          <OpenURLButton url={supportedURL} btnView={styles.btnView}>Get Directions</OpenURLButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default OptionMenuPulisan;

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
  btnView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 19.27,
  },
  GaleryPhotos:{
    flexDirection: 'row',
    marginTop: 15,
  },
  Photos1:{
    width:160,
    height:160,
    borderRadius:20,
    resizeMode:'cover'
  },
  Photos:{
    width:160,
    height:160,
    borderRadius:20,
    marginLeft:20,
  }
});
