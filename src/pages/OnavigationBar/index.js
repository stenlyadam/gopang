/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import firebase from '../../config/Firebase';

const Tab = createBottomTabNavigator();
import OwnerMenu from '../OwnerMenu';
import OChatBox from '../OChatBox';
import OOrder from '../OOrder';
import OProfile from '../OProfile';
import {View, Image,Text} from 'react-native';
import Header from '../../components/molecules/header';

const Tabs = ({navigation, route}) => {
  const {uid} = route.params;
  const [onAdmin, setOnAdmin] = useState(false);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/owner/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setOnAdmin(true);
        }
      });
  }, []);

  return onAdmin === true ? (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#28384D',
        headerShown: false,

        tabBarStyle: {
          marginBottom: 0,
          backgroundColor: 'white',
          elevation: 0,
          height: 63,
          paddingBottom: 20,
          paddingHorizontal: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIconStyle: {},
      }}>
      <Tab.Screen
        name="Home"
        component={OwnerMenu}
        initialParams={{uid: uid}}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 16}}>
              {color == '#28384D' ? (
                <Image
                  source={require('../../assets/icon/iconHomeAktif.png')}
                />
              ) : (
                <Image source={require('../../assets/icon/iconHome.png')} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OOrder}
        initialParams={{uid: uid}}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 16}}>
              {color == '#28384D' ? (
                <Image
                  source={require('../../assets/icon/iconOrderAktif.png')}
                />
              ) : (
                <Image source={require('../../assets/icon/iconOrder.png')} />
              )}
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Message"
        component={OChatBox}
        initialParams={{uid: uid}}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 16}}>
              {color == '#28384D' ? (
                <Image
                  source={require('../../assets/icon/iconChatAktif.png')}
                />
              ) : (
                <Image source={require('../../assets/icon/iconChat.png')} />
              )}
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={OProfile}
        initialParams={{uid: uid}}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <View style={{marginTop: 16}}>
              {color == '#28384D' ? (
                <Image
                  source={require('../../assets/icon/iconUserAktif.png')}
                />
              ) : (
                <Image source={require('../../assets/icon/iconUser.png')} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Header
        navigation={navigation}
        onBack={() => navigation.goBack()}
      />
      <Text style={{alignSelf:'center',marginTop:'50%',fontSize:30,fontWeight:'bold',marginBottom:10}}>Memuat...</Text>
      <Text style={{alignSelf:'center'}}>Your account is not registered as a owner.</Text>
      <Text style={{alignSelf:'center'}}>and you will not be able to enter the owner's page</Text>
    </View>
  );
};

export default Tabs;
