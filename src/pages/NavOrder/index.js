import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/molecules/header';
import TabOrder from '../../components/molecules/TabOrder';
import React,{useState,useEffect} from 'react';
import {useWindowDimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import firebase from '../../config/Firebase';
import HCardTransaksi from '../../components/molecules/HCardTransaksi';

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

    
    useEffect(() => {
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
    }, []);

    
  const handleSubmit = key => {
    navigation.navigate('TD', {uid: uid, homestayID: key});
  };
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* transaksi
            .filter((item) => item.idPenyewa.includes(uid)) */}
        {transaksi
          .filter(item =>item.IDpenyewa.includes(uid) &&
                         item.status !== 'completed',
                        )
          .map(key => (
            <HCardTransaksi
              nama={key.namaHomestay}
              alamat={key.alamatHomestay}
              harga={key.total}
              status={key.status}
              photo={key.fotoHomestay}
              onPress={() => handleSubmit(key.id)}
            />
          ))}
      </View>
    );
  };

  const SecondRoute = () => {
    const [transaksi, setTransaksi] = useState([]);

    
    useEffect(() => {
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
    }, []);

    const handleSubmit = key => {
      navigation.navigate('TD', {uid: uid, homestayID: key});
    };
    
    return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {transaksi
          .filter(
            item =>
              item.IDpenyewa.includes(uid) &&
              item.status !== 'unpaid'&&
              item.status !== 'paid',
          )
          .map(key => (
            <HCardTransaksi
              nama={key.namaHomestay}
              alamat={key.alamatHomestay}
              harga={key.total}
              status={key.status}
              photo={key.fotoHomestay}
              onPress={() => handleSubmit(key.id)}
            />
          ))}
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
