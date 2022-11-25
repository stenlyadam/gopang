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
  import React, {useCallback,useEffect} from 'react';
  import Header from '../../components/molecules/header';
  import CategoryFeature from '../../components/molecules/CategoryFeature';
  import Button from '../../components/atoms/Button';
  
  const OptionMenuLarata = ({navigation,route}) => {
    const {uid} = route.params;
    const supportedURL = "https://goo.gl/maps/mTaMYN11Gi1qQ9Eo8";
  
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
        <Header title={'Larata Hill'} onBack={() => navigation.goBack()} />
  
        {/* Container */}
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <Image
            source={require('../../assets/pantai/Larata/Larata1.jpg')}
            style={{width: '100%',height:253,borderBottomLeftRadius:20,borderBottomRightRadius:20}}
          />
  
          {/* Describe */}
          <View style={{width: '100%', flexDirection: 'row', marginTop: 28}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: '5.1%'}}>
              Larata Hill
            </Text>
          </View>
          <View style={{marginLeft: 14, flexDirection: 'row'}} >
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
              Bukit Larata is a tourist attraction in the form of a natural panorama from the top of the highlands in North Sulawesi.
              This beautiful hill is located in the northeast of the North Minahasa Regency administrative area or close to Aris Lumombo Beach and PLTS Likupang.
              The Bukit Larata tourist attraction itself is a tourist spot located between a hill called Bukit Larata in Kinunang Village.
              This hill has a height of approximately 45 meters above sea level.
              For those of you who are confused about where to go on vacation, Bukit Larata in North Sulawesi is really worth it for you to visit.
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
              <Image style={styles.Photos1} source={require('../../assets/pantai/Larata/Larata1.jpg')}/>
              <Image style={styles.Photos} source={require('../../assets/pantai/Larata/Larata2.jpg')}/>
              <Image style={styles.Photos} source={require('../../assets/pantai/Larata/Larata3.jpg')}/>
              <Image style={styles.Photos} source={require('../../assets/pantai/Larata/Larata4.jpg')}/>
              <Image style={styles.Photos} source={require('../../assets/pantai/Larata/Larata5.jpg')}/>
              </ScrollView>
            </View>
          </View> 
          {/* <Button
            title={'Get Direction'}
            btnView={styles.btnView}
          /> */}
          <View style={{alignSelf:'center', marginBottom:19.27}}>
            <OpenURLButton url={supportedURL} btnView={styles.btnView}>Get Directions</OpenURLButton>
          </View>
          
        </ScrollView>
      </View>
    );
  };
  
  export default OptionMenuLarata;
  
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
      marginTop:20
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
  