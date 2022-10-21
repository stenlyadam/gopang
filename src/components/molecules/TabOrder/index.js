import React,{useState,useEffect} from 'react';
import {View, useWindowDimensions, StatusBar, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TabOrderOngoing from '../TabOrder2';
import TabOrderHistory from '../TabOder3';
import firebase from '../../../config/Firebase';
import HCardTransaksi from '../HCardTransaksi';

const TabOrder = ({uid,navigation}) => {
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
    navigation.navigate('TransactionDetails', {uid: uid, homestayID: key});
  };

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* transaksi
            .filter((item) => item.idPenyewa.includes(uid)) */}
        {transaksi
          .filter(
            item =>
              item.IDpenyewa.includes(uid) &&
              item.status !== 'completed' &&
              item.kategori.includes('homestay'),
          )
          .map(key => (
            <HCardTransaksi
              nama={key.namaHomestay}
              alamat={key.alamatHomestay}
              harga={key.total}
              status={key.status}
              photo={key.fotoHomestay}
              onPress={() => handleSubmit(key)}
            />
          ))}
      </View>
    );
  };

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TabOrderHistory style={{flex: 1}} />
    </View>
  );

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
    />
  );

  return (
    <View style={{flex: 1}}>
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

export default TabOrder;
