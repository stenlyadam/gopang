import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import Header from '../../components/molecules/header';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import { Button } from 'react-native-paper';

const Filter = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Likupang');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) =>{
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = moment(tempDate).format('dddd, DD MMMM YYYY');
    setText(fDate)
    console.log(fDate);
  }

  const showMode =(currentMode)=> {
    setShow(true);
    setMode(currentMode);
  }

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
                label="Paal"
                value="Paal"
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

const styles = StyleSheet.create({
  ButtonDate: {
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'row',
  },
  picker:{
    backgroundColor:'grey'
  },
  checkIn:{
    backgroundColor:'#EDEDF0',
    marginTop:30,
    alignSelf:'center',
    width:371,
    height:64
  },
  checkOut:{
    backgroundColor:'#EDEDF0',
    alignSelf:'center',
    marginTop:18,
    width:371,
    height:64
  }
});
