import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../components/molecules/header';

const MenuGazebo = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <Header title="Gazebo Available" navigation={navigation} />
      <View style={{backgroundColor: 'white'}} />

      {/* Search */}
      <View style={styles.elevation}>
        <View style={styles.searchBox}>
          <TextInput placeholder="Search Gazebo you want..." />
        </View>
      </View>
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
    paddingLeft: 23,
    paddingRight: 23,
    borderWidth: 1,
    borderRadius: 10,
  },
});
