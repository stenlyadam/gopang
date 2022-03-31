import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/molecules/header';
import {Picker} from '@react-native-picker/picker';

const Filter = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Likupang');

  return (
    <View style={{flex: 1}}>
      <Header title="Filter" onBack={() => navigation.goBack()} />

      {/* Container */}
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../../assets/image/HomestayFilter.png')}
            style={{
              width: '100%',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute',
              top: 103,
              left: 21,
              width: 160,
              height: 41,
            }}>
            Homestay
          </Text>
        </View>

        {/* Destination */}
        <View>
          <Text
            style={{
              marginLeft: 30,
              marginTop: 8,
              fontSize: 14,
              color: '#38A7D0',
            }}>
            Destination
          </Text>

          <View
            style={{
              borderWidth: 0.3,
              height: 41,
              width: 146,
              borderRadius: 10,
              marginLeft: 20,
            }}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                label="Likupang"
                value="Likupang"
                style={{fontSize: 14}}
              />
              <Picker.Item
                label="Pulisan"
                value="Pulisan"
                style={{fontSize: 14}}
              />
              <Picker.Item
                label="Kinunang"
                value="Kinunang"
                style={{fontSize: 14}}
              />
            </Picker>
          </View>

          {/* Check-In/Out */}
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({});
