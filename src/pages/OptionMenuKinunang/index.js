import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
    Linking,
    BackHandler
  } from 'react-native';
  import React,{useCallback,useEffect} from 'react';
  import Header from '../../components/molecules/header';
  import CategoryFeature from '../../components/molecules/CategoryFeature';
  import Button from '../../components/atoms/Button';
  
  const OptionMenuKinunang = ({navigation,route}) => {
    const {uid} = route.params;
    const supportedURL = "https://goo.gl/maps/nLgvpbC5Ug99wFoUA";

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

    const handleSubmitGoBack =()=>{
      navigation.goBack();
    };
  
    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        handleSubmitGoBack();
        return true;
      })
      return () => backHandler.remove()
    }, []);

    return (
      <View style={{flex: 1,backgroundColor:'white'}}>
        {/* Header */}
        <Header title={'Kinunang Beach'} onBack={() => navigation.goBack()} />
  
        {/* Container */}
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <Image
            source={require('../../assets/pantai/Kinunang/Kinunang1.jpg')}
            style={{width: '100%',height:253,borderBottomLeftRadius:20,borderBottomRightRadius:20}}
          />
  
          {/* Describe */}
          <View style={{width: '100%', flexDirection: 'row', marginTop: 28}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: '5.1%'}}>
              Kinunang Beach
            </Text>
          </View>
          <View style={{marginLeft: 14, flexDirection: 'row'}}>
            <Image
              source={require('../../assets/icon/Direction.png')}
              style={{width: 20, height: 29}}
            />
            <Text style={{fontSize: 15, width: 288, marginLeft: 3}}>
              Kinunang Village, Kec. Likupang Tim., North Minahasa Regency, North Sulawesi
            </Text>
          </View>
          <View
            style={{marginLeft: '4.8%', marginRight: '4.8%', marginTop: '4.8%'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 12}}>
              Overview
            </Text>
            <Text style={{fontSize: 17,textAlign:'justify'}}>
              The blue stretch of beach combined with white sand immediately attracts anyone who comes to Kinunang Beach in Likupang Village, North Minahasa Regency.
              Another uniqueness of Kinunang Beach is the long cluster of coral reefs that can be seen when the water recedes, there are about 100 meters of coral clusters which the residents of Kampung Kinunang call 'Nyare'.
              Not only that, if you have a long time, you can try several dive spots not far from that location.
              Only by using a snorkel, various types of reef fish and live coral reefs can spoil your eyes.
              You don't need big guts to play between the corals, because to see coral reefs, you only need to dive no more than three meters.
            </Text>
          </View>
  
          {/* Category */}
          <CategoryFeature
            onPress1={() => navigation.navigate('MenuHomestay',{uid:uid})}
            onPress2={() => navigation.navigate('MenuGazeboKinunang',{uid:uid})}
            onPress3={() => navigation.navigate('MenuFoodKinunang',{uid:uid})}
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
              <Image style={styles.Photos1} source={require('../../assets/pantai/Kinunang/Kinunang1.jpg')}/>
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
  
  export default OptionMenuKinunang;
  
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
  