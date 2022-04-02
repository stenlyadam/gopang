import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/molecules/header';
import {setForm} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/atoms/Input';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';

const Biodata = ({navigation}) => {
  const [text] = useState(null);

  const form = useSelector(state => state.BiodataReducer); //destructuring form dll.
  const dispatch = useDispatch();

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  const sendData = () => {
    console.log('data yang dikirim', form);
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Header title="Fill in your info" onBack={() => navigation.goBack()} />

        {/* Container */}
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 66,
              marginLeft: 46,
              color: 'black',
            }}>
            YOUR INFORMATION
          </Text>

          {/* Input Information */}
          <View>
            <Text
              style={{
                fontSize: 13,
                color: '#555555',
                marginLeft: 46,
                marginTop: 23,
              }}>
              First name
            </Text>
            <View style={{alignItems: 'center'}}>
              <Input
                placeholder={'Enter your first name...'}
                type={text}
                input={styles.input}
                value={form.FirstName}
                onChangeText={value => onInputChange(value, 'FirstName')}
              />
            </View>

            <Text
              style={{
                fontSize: 13,
                color: '#555555',
                marginLeft: 46,
                marginTop: 23,
              }}>
              Last name
            </Text>
            <View style={{alignItems: 'center'}}>
              <Input
                placeholder={'Enter your last name...'}
                type={text}
                input={styles.input}
                value={form.LastName}
                onChangeText={value => onInputChange(value, 'LastName')}
              />
            </View>

            <Text
              style={{
                fontSize: 13,
                color: '#555555',
                marginLeft: 46,
                marginTop: 23,
              }}>
              Email
            </Text>
            <View style={{alignItems: 'center'}}>
              <Input
                placeholder={'Enter your Email...'}
                type={text}
                input={styles.input}
                value={form.Email}
                onChangeText={value => onInputChange(value, 'Email')}
              />
            </View>

            <Text
              style={{
                fontSize: 13,
                color: '#555555',
                marginLeft: 46,
                marginTop: 23,
              }}>
              Phone Number
            </Text>
            <View style={{alignItems: 'center'}}>
              <Input
                placeholder={'Enter your phone number...'}
                type={text}
                input={styles.input}
                value={form.MobilePhone}
                onChangeText={value => onInputChange(value, 'MobilePhone')}
              />
            </View>

            <ButtonTransaction
              title={'Confirm'}
              btnView={styles.btnView}
              onPress={() => navigation.navigate('OverviewPage')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Biodata;

const styles = StyleSheet.create({
  input: {
    height: 54,
    width: 343,
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 0.3,
    backgroundColor: '#EDEDF0',
    marginTop: 12,
  },
  btnView: {
    marginTop: 100,
    marginBottom: 57.69,
    alignItems: 'center',
  },
});
