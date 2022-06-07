import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../components/molecules/header';
import Input from '../../components/atoms/Input';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/atoms/Button';

const OAddHomestay = ({navigation}) => {
  const [centang, setCentang] = useState(false);
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        title="Add Homestay"
        navigation={navigation}
        onBack={() => navigation.goBack()}
      />

      <TouchableOpacity>
        <Image
          source={require('../../assets/owner/ButtonAddFood.png')}
          style={{margin: 32, width: 347, height: 152}}
        />
      </TouchableOpacity>
      <View>
        <Text style={{marginLeft: 40, fontWeight: 'bold', fontSize: 16}}>
          Homestay Name
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Full Name'}
            input={styles.input}
            //   value={name}
            // onChangeText={value => setName(value)}
          />
        </View>
        <Text
          style={{
            marginLeft: 40,
            paddingTop: 15,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Location
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Full Name'}
            input={styles.input}
            //   value={name}
            // onChangeText={value => setName(value)}
          />
        </View>
        <View style={styles.fasilitas}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/owner/Doublebed.png')}
              style={{height: 28, width: 28}}
            />
            <Text>bedroom</Text>
            <CheckBox
              disabled={false}
              value={centang}
              onValueChange={newValue => setCentang(newValue)}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/owner/bathtub.png')}
              style={{height: 28, width: 28}}
            />
            <Text>bedroom</Text>
            <CheckBox
              disabled={false}
              value={centang}
              onValueChange={newValue => setCentang(newValue)}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/owner/AC.png')}
              style={{height: 28, width: 28}}
            />
            <Text>bedroom</Text>
            <CheckBox
              disabled={false}
              value={centang}
              onValueChange={newValue => setCentang(newValue)}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/owner/wifi.png')}
              style={{height: 28, width: 28}}
            />
            <Text>bedroom</Text>
            <CheckBox
              disabled={false}
              value={centang}
              onValueChange={newValue => setCentang(newValue)}
            />
          </View>
        </View>
        <Text
          style={{
            marginLeft: 40,
            paddingTop: 15,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Description
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Description'}
            input={styles.input}
            //   value={name}
            // onChangeText={value => setName(value)}
          />
        </View>
        <Text
          style={{
            marginLeft: 40,
            paddingTop: 15,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Price
        </Text>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Input
            placeholder={'Price'}
            input={styles.input}
            //   value={name}
            // onChangeText={value => setName(value)}
          />
        </View>
        <Button
          style={{marginTop: 147, marginBottom: 57.69, alignItems: 'center'}}
          title={'Add Homestay'}
        />
      </View>
    </ScrollView>
  );
};

export default OAddHomestay;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 343,
    paddingTop: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.3,
    backgroundColor: '#EDEDF0',
  },
  fasilitas: {
    // flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 39,
    marginLeft: 60,
    marginRight: 60,
    // width: '100%',
    // justifyContent: 'center',
  },
});
