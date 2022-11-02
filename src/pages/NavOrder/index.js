import {StyleSheet, Text, View,BackHandler, ScrollView} from 'react-native';
import Header from '../../components/molecules/header';
import TabOrder from '../../components/molecules/TabOrder';
import React,{useState,useEffect} from 'react';
import {useWindowDimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import firebase from '../../config/Firebase';
import HCardTransaksi from '../../components/molecules/HCardTransaksi';
import FCardTransaksi from '../../components/molecules/FCardTransaksi';

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
    
    useEffect(() => {
      getTransaksiHomestay();
      getTransaksiFood();

    }, []);

    
    const handleSubmit = key => {
      navigation.navigate('TD', {uid: uid, homestayID: key});
    };

    const handleSubmitFood = key => {
      navigation.navigate('DetailOrderFoodUser', {uid: uid, WarungID: key});
    };

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
        {/* transaksi
            .filter((item) => item.idPenyewa.includes(uid)) */}
            <View>
              <Text style={{marginTop:15,fontSize:20,fontWeight:'bold',left:20}}>Homestay</Text>
              {transaksi
                .filter(item =>item.IDpenyewa.includes(uid) &&
                              item.status !== 'completed',
                              )
                .map(key => (
                  <View style={{width:'90%',alignSelf:'center'}}>
                  <HCardTransaksi
                    nama={key.namaHomestay}
                    alamat={key.alamatHomestay}
                    harga={key.total}
                    status={key.status}
                    photo={key.fotoHomestay}
                    onPress={() => handleSubmit(key.id)}
                  />
                  </View>
                ))}
            </View>
            <View>
            <Text style={{marginTop:10,fontSize:20,fontWeight:'bold',left:20}}>Food</Text>
            {transaksiFood
              .filter(item =>item.IDPemesan.includes(uid) &&
                            item.status !== 'completed',
                            )
              .map(key => (
                <View style={{width:'90%',alignSelf:'center'}}>
                  <FCardTransaksi
                    namaWarung={key.namaWarung}
                    // pesanan={key.alamatHomestay}
                    harga={key.total}
                    status={key.status}
                    customer={key.namaPemesan}
                    photo={key.photo}
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
    
    useEffect(() => {
      getTransaksiHomestay();
      getTransaksiFood();

    }, []);

    const handleSubmit = key => {
      navigation.navigate('TD', {uid: uid, homestayID: key});
    };

    const handleSubmitFood = key => {
      navigation.navigate('DetailOrderFoodUser', {uid: uid, WarungID: key});
    };
    
    return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
      <View>
        <Text style={{marginTop:15,fontSize:20,fontWeight:'bold',left:20}}>Homestay</Text>
        {transaksi
            .filter(
              item =>
                item.IDpenyewa.includes(uid) &&
                item.status !== 'unpaid'&&
                item.status !== 'paid',
            )
            .map(key => (
              <View style={{width:'90%',alignSelf:'center'}}>
              <HCardTransaksi
                nama={key.namaHomestay}
                alamat={key.alamatHomestay}
                harga={key.total}
                status={key.status}
                photo={key.fotoHomestay}
                onPress={() => handleSubmit(key.id)}
              />
              </View>
            ))}
      </View>
      <View>
        <Text style={{marginTop:10,fontSize:20,fontWeight:'bold',left:20}}>Food</Text>
        {transaksiFood
              .filter(item =>item.IDPemesan.includes(uid) &&
                            item.status !== 'waiting to accepted'&&
                            item.status !== 'cooking'&&
                            item.status !== 'food on the way',
                            )
              .map(key => (
                <View style={{width:'90%',alignSelf:'center'}}>
                  <FCardTransaksi
                    namaWarung={key.namaWarung}
                    // pesanan={key.alamatHomestay}
                    harga={key.total}
                    status={key.status}
                    customer={key.namaPemesan}
                    photo={key.photo}
                    onPress={() => handleSubmitFood(key.id)}
                  />
                </View>
              ))}
      </View>
      </ScrollView>
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
