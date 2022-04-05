import React, {useState} from 'react';
import {Image, StyleSheet, Text, View,TouchableOpacity,Platform} from 'react-native';
import Header from '../../components/molecules/header';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Filter = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Likupang');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textIn, setTextIn] = useState('Click Here');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.toUTCString(); // + '-' + (tempDate.getMonth() + 1) +'-' + tempDate.getFullYear()
    setTextIn(fDate);

    console.log(fDate)
  }

  const showMode = (currentMode) => {
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
          
          <View style={{backgroundColor:'#EDEDF0',height:64,borderRadius:0.3}}>
            <Text style={{fontSize:14,color:'#38A7D0'}}>Check-in</Text>
            <TouchableOpacity style={styles.ButtonDate} onPress={()=>showMode('date')} >
              <Text style={{fontWeight:'bold',fontSize:20}}>{textIn}</Text>
              <Image source={require('../../assets/icon/Kalender.png')} />
            </TouchableOpacity>
          </View>
          {show && (
              <DateTimePicker
              testID='dateTimePicker'
              minimumDate={date}
              dateFormat='day month year'
              value={date}
              mode={mode}
              is24Hour={true}
              display='default'
              onChange={onChange}
          />)}
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  ButtonDate:{
    fontWeight:'bold',
    fontSize:20,
    flexDirection:'row'
  },

  
});
