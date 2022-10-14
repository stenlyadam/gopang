import React, {useState, useEffect} from 'react';
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
import firebase from '../../config/Firebase';
import {Picker} from '@react-native-picker/picker';
import {G} from 'react-native-svg';

const MenuGazebo = ({navigation, route}) => {
  const {uid} = route.params;
  const [gazebo, setGazebo] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('unavailable');
  const [selectedValue, setSelectedValue] = useState('All');
  const [locationPaal, setLocationPaal] = useState('Paal');
  const [locationPulisan, setLocationPulisan] = useState('Pulisan');
  const [locationKinunang, setLocationKinunang] = useState('Kinunang');

  const handleSubmit = key => {
    navigation.navigate('InfoGazebo', {uid: uid, gazeboID: key});
    console.log('ini gazebo', uid);
  };

  useEffect(() => {
    firebase
      .database()
      .ref(`gazebo`)
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];

          Object.keys(rawData).map(key => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setGazebo(productArray);
          // console.log(productArray);
        }
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <Header title="Gazebo" onBack={() => navigation.goBack()} />
      <View style={{backgroundColor: 'white'}} />

      {/* Gazebo 1 */}
      <Text
        style={{
          marginLeft: 30,
          fontSize: 14,
          marginBottom: 5,
          color: '#38A7D0',
          fontSize: 15,
        }}>
        By Destination
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            borderWidth: 0.3,
            height: 41,
            width: 146,
            borderRadius: 10,
            marginLeft: 20,
            marginBottom: 10,
          }}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            selectedStatus={selectedStatus}
            onStatusChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="All" value="All" style={{fontSize: 15}} />
            <Picker.Item label="Paal" value="Paal" style={{fontSize: 15}} />
            <Picker.Item
              label="Pulisan"
              value="Pulisan"
              style={{fontSize: 15}}
            />
            <Picker.Item
              label="Kinunang"
              value="Kinunang"
              style={{fontSize: 15}}
            />
          </Picker>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.elevation}>
        {selectedValue === 'All' && (
          <View>
            {gazebo.map(key => (
              <View>
                <CardGazebo
                  title={key.name}
                  location={key.location}
                  image={`${key.photo}`}
                  size={key.size}
                  onPress={() => handleSubmit(key.id)}
                />
              </View>
            ))}
          </View>
        )}

        {selectedValue === 'Paal' && (
          <View>
            {gazebo
              .filter(gazebo => gazebo.location.includes(locationPaal))
              .map(key => (
                <View>
                  <CardGazebo
                    title="Gazebo Wahyu"
                    location={key.location}
                    image={`${key.photo}`}
                    size={key.size}
                    onPress={() => handleSubmit(key.id)}
                  />
                </View>
              ))}
          </View>
        )}
        {selectedValue === 'Pulisan' && (
          <View>
            {gazebo
              .filter(gazebo => gazebo.location.includes(locationPulisan))
              .map(key => (
                <View>
                  <CardGazebo
                    title="Gazebo Wahyu"
                    location={key.location}
                    image={`${key.photo}`}
                    size={key.size}
                    onPress={() => handleSubmit(key.id)}
                  />
                </View>
              ))}
          </View>
        )}
        {selectedValue === 'Kinunang' && (
          <View>
            {gazebo
              .filter(gazebo => gazebo.location.includes(locationKinunang))
              .map(key => (
                <View>
                  <CardGazebo
                    title="Gazebo Wahyu"
                    location={key.location}
                    image={`${key.photo}`}
                    size={key.size}
                    onPress={() => handleSubmit(key.id)}
                  />
                </View>
              ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MenuGazebo;

const styles = StyleSheet.create({
  elevation: {
    paddingBottom: 8,
    // paddingLeft: 20,
  },
  searchBox: {
    width: '95%',
    height: '23%',
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
