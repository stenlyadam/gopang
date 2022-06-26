import * as React from 'react';
import {
  View,
  useWindowDimensions,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}>
    <TouchableOpacity style={{flexDirection: 'row'}}>
      <Image
        style={{
          // position: 'absolute',
          marginTop: 30,
          marginLeft: 20,
          width: 60,
          height: 60,
          borderRadius: 10,
        }}
        // source={{uri: `data:image/jpeg;base64, ${homestay.photo}`}}
        source={require('../../../assets/homestay/HomestayWahyu.png')}
      />
      <View style={{marginLeft: 10, marginTop: 24}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Wahyu Homestay</Text>
        <Text style={{fontSize: 10, marginTop: 3}}>Marinsow Village</Text>
        <Text style={{fontSize: 13, marginTop: 10, fontWeight: 'bold'}}>
          Rp.200000
        </Text>
      </View>
      <Text
        style={{
          // position: 'absolute',
          marginTop: 35,
          marginLeft: '25%',
          fontSize: 20,
          fontWeight: '700',
        }}>
        Done
      </Text>
    </TouchableOpacity>
    <View
      style={{
        height: 1,
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: 371,
        alignSelf: 'center',
      }}
    />
  </View>
);

const SecondRoute = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#38A7D0'}}
    style={{backgroundColor: 'white', width: '50%'}}
    activeColor="black"
    inactiveColor="#C7C7C7"
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Homestay'},
    {key: 'second', title: 'Food'},
  ]);

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
}
