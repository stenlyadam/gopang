import React, {useState, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HCardTransaksi from '../HCardTransaksi';
import firebase from '../../../config/Firebase';

const TabOrderr = ({uid}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Homestay'},
    {key: 'second', title: 'Food'},
  ]);

  const FirstRoute = props => {
    console.log('ini uid taborder2', uid);
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
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
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
              />
            ))}
        </ScrollView>
      </View>
    );
  };

  const SecondRoute = () => {
    return <View style={{flex: 1, backgroundColor: 'white'}}></View>;
  };

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

export default TabOrderr;

// const FirstRoute = props => {
//   const uid = props.uid;
//   console.log('ini uid', uid);
//   const [transaksi, setTransaksi] = useState([]);
//   useEffect(() => {
//     firebase
//       .database()
//       .ref(`transaksi`)
//       .on('value', res => {
//         if (res.val()) {
//           //ubah menjadi array object
//           const rawData = res.val();
//           const productArray = [];
//           // console.log(keranjang[0].namaProduk);
//           Object.keys(rawData).map(key => {
//             productArray.push({
//               id: key,
//               ...rawData[key],
//             });
//           });
//           setTransaksi(productArray);
//         }
//       });
//   }, []);
//   return (
//     <View style={{flex: 1, backgroundColor: 'white'}}>
//       {/* transaksi
//           .filter((item) => item.idPenyewa.includes(uid)) */}
//       {transaksi
//         .filter(
//           item =>
//             item.IDpenyewa.includes(uid) &&
//             item.status !== 'completed' &&
//             item.kategori.includes('homestay'),
//         )
//         .map(key => (
//           <HCardTransaksi
//             nama={key.namaHomestay}
//             alamat={key.alamatHomestay}
//             harga={key.total}
//             status={key.status}
//             photo={key.fotoHomestay}
//           />
//         ))}
//     </View>
//   );
// };

// const SecondRoute = () => {
//   return <View style={{flex: 1, backgroundColor: 'white'}}></View>;
// };

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// const renderTabBar = props => (
//   <TabBar
//     {...props}
//     indicatorStyle={{backgroundColor: '#38A7D0'}}
//     style={{backgroundColor: 'white', width: '50%'}}
//     activeColor="black"
//     inactiveColor="#C7C7C7"
//   />
// );

// export default function TabViewExample() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {key: 'first', title: 'Homestay'},
//     {key: 'second', title: 'Food'},
//   ]);

//   return (
//     <View style={{flex: 1}}>
//       <TabView
//         renderTabBar={renderTabBar}
//         navigationState={{index, routes}}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={{width: layout.width}}
//       />
//     </View>
//   );
// }
