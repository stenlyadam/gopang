import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/molecules/header';
import TabOrder from '../../components/molecules/TabOrder';
import React,{useState,useEffect} from 'react';
import {useWindowDimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import firebase from '../../config/Firebase';
import OHCardTransaksi from '../../components/molecules/OHCardTransaksi';
import OFCardTransaksi from '../../components/molecules/OFCardTransaksi';

const NavOrder = ({navigation,route}) => {
  const {uid} = route.params;
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Ongoing'},
    {key: 'second', title: 'History'},
  ]);

  const FirstRoute = () => {
    const [transaksi, setTransaksi] = useState([]);
    const [transaksiFood, setTransaksiFood] = useState([]);

    const getTransaksiHomestay = () =>{
      firebase
        .database()
        .ref(`transaksi`)
        .on('value', res => {
          if (res.val()) {
            //ubah menjadi array object
            const rawData = res.val();
            const productArray = [];
            // console.log(keranjang[0].namaProduk);
            Object.keys(rawData).map(key => {
              productArray.push({
                id: key,
                ...rawData[key],
              });
            });
            setTransaksi(productArray);
          }
        });
    }

    const getTransaksiFood = () =>{
      firebase
        .database()
        .ref(`transaksiFood`)
        .on('value', res => {
          if (res.val()) {
            //ubah menjadi array object
            const rawData = res.val();
            const productArray = [];
            // console.log(keranjang[0].namaProduk);
            Object.keys(rawData).map(key => {
              productArray.push({
                id: key,
                ...rawData[key],
              });
            });
            setTransaksiFood(productArray);
          }
        });
    }

    
    useEffect(() => {
      getTransaksiHomestay();
      getTransaksiFood();
    }, []);

    console.log(uid)
    
  const handleSubmit = key => {
    navigation.navigate('TDOwner', {uid: uid, homestayID: key});
  };
  const handleSubmitFood = key => {
    navigation.navigate('DetailOrderFoodOwner', {uid: uid, WarungID: key});
  };
  
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
        <View>
          <Text style={{marginTop:15,fontSize:20,fontWeight:'bold',left:20}}>Homestay</Text>
          {transaksi
            .filter(item =>item.IDhomestay.includes(uid) &&
                          item.status !== 'completed',
                          )
            .map(key => (
              <View style={{width:'90%',alignSelf:'center'}}>
                <OHCardTransaksi
                nama={key.namaHomestay}
                alamat={key.alamatHomestay}
                harga={key.total}
                status={key.status}
                customer={key.namaPenyewa}
                photo={key.fotoHomestay}
                onPress={() => handleSubmit(key.id)}
              />
              </View>
            ))}
        </View>
        <View style={{marginBottom:25}}>
          <Text style={{marginTop:10,fontSize:20,fontWeight:'bold',left:20}}>Food</Text>
          {transaksiFood
            .filter(item =>item.IDwarung.includes(uid) &&
                          item.status !== 'completed',
                          )
            .map(key => (
              <View style={{width:'90%',alignSelf:'center'}}>
                <OFCardTransaksi
                  namaWarung={key.namaWarung}
                  // pesanan={key.alamatHomestay}
                  harga={key.total}
                  status={key.status}
                  customer={key.namaPemesan}
                  photo={require('../../assets/icon/iconCardFood.png')}
                  onPress={() => handleSubmitFood(key.id)}
                />
              </View>
            ))}
        </View>
        </ScrollView>
      </View>
    );
  };

  const SecondRoute = () => {
    const [transaksi, setTransaksi] = useState([]);
    const [transaksiFood, setTransaksiFood] = useState([]);

    const getTransaksiHomestay = () =>{
      firebase
        .database()
        .ref(`transaksi`)
        .on('value', res => {
          if (res.val()) {
            //ubah menjadi array object
            const rawData = res.val();
            const productArray = [];
            // console.log(keranjang[0].namaProduk);
            Object.keys(rawData).map(key => {
              productArray.push({
                id: key,
                ...rawData[key],
              });
            });
            setTransaksi(productArray);
          }
        });
    }

    const getTransaksiFood = () =>{
      firebase
        .database()
        .ref(`transaksiFood`)
        .on('value', res => {
          if (res.val()) {
            //ubah menjadi array object
            const rawData = res.val();
            const productArray = [];
            // console.log(keranjang[0].namaProduk);
            Object.keys(rawData).map(key => {
              productArray.push({
                id: key,
                ...rawData[key],
              });
            });
            setTransaksiFood(productArray);
          }
        });
    }
    
    
    
    useEffect(() => {
      getTransaksiHomestay();
      getTransaksiFood();
    }, []);

    const handleSubmit = key => {
      navigation.navigate('TDOwner', {uid: uid, homestayID: key});
    };
    const handleSubmitFood = key => {
      navigation.navigate('DetailOrderFoodOwner', {uid: uid, WarungID: key});
    };
    
    return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Text style={{marginTop:15,fontSize:20,fontWeight:'bold',left:20}}>Homestay</Text>
        {transaksi
          .filter(
            item =>
              item.IDhomestay.includes(uid) &&
              item.status !== 'unpaid'&&
              item.status !== 'paid',
          )
          .map(key => (
            <View style={{width:'90%',alignSelf:'center'}}>
            <OHCardTransaksi
              nama={key.namaHomestay}
              alamat={key.alamatHomestay}
              harga={key.total}
              status={key.status}
              customer={key.namaPenyewa}
              photo={key.fotoHomestay}
              onPress={() => handleSubmit(key.id)}
            />
            </View>
          ))}
      </View>
      <View style={{marginBottom:25}}>
        <Text style={{marginTop:10,fontSize:20,fontWeight:'bold',left:20}}>Food</Text>
        {transaksiFood
            .filter(item =>
                      item.IDwarung.includes(uid) &&
                      item.status !== 'waiting to accepted'&&
                      item.status !== 'cooking'&&
                      item.status !== 'food on the way',
                      )
            .map(key => (
              <View style={{width:'90%',alignSelf:'center'}}>
                <OFCardTransaksi
                  harga={key.total}
                  status={key.status}
                  customer={key.namaPemesan}
                  photo={require('../../assets/icon/iconCardFood.png')}
                  onPress={() => handleSubmitFood(key.id)}
                />
              </View>
            ))}
      </View>
    </View>
    )
  }
    
    

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#38A7D0'}}
      style={{backgroundColor: 'white'}}
      activeColor="black"
      inactiveColor="#C7C7C7"
      labelStyle={{fontSize:12}}
    />
  );

  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor:'white'}}>
        <Text style={{fontSize:24,alignSelf:'center',marginTop:15,color:'black', fontWeight:'bold'}}>ORDER</Text>
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default NavOrder;

const styles = StyleSheet.create({});
