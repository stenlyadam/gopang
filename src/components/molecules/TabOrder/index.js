import * as React from 'react';
import {View, useWindowDimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

const SecondRoute = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

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

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Ongoing'},
    {key: 'second', title: 'History'},
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
