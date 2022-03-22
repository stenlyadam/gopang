import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../../components/molecules/header';
import CardGazebo from '../../components/molecules/CardGazebo';

const MenuGazebo = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <Header title="Gazebo Available" onBack={() => navigation.goBack()} />
      <View style={{backgroundColor: 'white'}} />

      {/* Search */}
      <View style={styles.elevation}>
        <View style={styles.searchBox}>
          <TextInput placeholder="Search Gazebo you want..." />
          <Image
            source={require('../../assets/icon/search.png')}
            style={styles.search}
          />
        </View>
      </View>

      <ScrollView>
        {/* Gazebo 1 */}
        <CardGazebo
          title="Gazebo Wahyu"
          location="Marinsow Village, North Sulawesi"
          image={require('../../assets/home/Wahyu.png')}
          onPress={() => navigation.navigate('InfoGazebo')}
        />

        {/* Gazebo 2 */}
        <CardGazebo
          title="Gazebo Juniver"
          location="Marinsow Village, North Sulawesi"
          image={require('../../assets/home/Juniver.png')}
          onPress={() => navigation.navigate('InfoGazebo')}
        />
        {/* Gazebo 3 */}
        <CardGazebo
          title="Gazebo Jembatan"
          location="Marinsow Village, North Sulawesi"
          image={require('../../assets/home/Juniver.png')}
        />
      </ScrollView>
    </View>
  );
};

export default MenuGazebo;

const styles = StyleSheet.create({
  elevation: {
    paddingBottom: 8,
    paddingLeft: 20,
  },
  searchBox: {
    width: 371,
    height: 45,
    paddingRight: 20,
    paddingLeft: 26,
    borderWidth: 1,
    borderRadius: 10,
    position: 'relative',
  },
  search: {
    position: 'absolute',
    top: 10,
    left: 6.41,
  },
});
