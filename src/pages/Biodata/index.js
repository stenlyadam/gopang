import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/molecules/header';
import {setForm} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/atoms/Input';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const Biodata = ({navigation, route}) => {
  const {uid, homestayID} = route.params;

  console.log(homestayID);

  const [users, setUsers] = useState({});
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [youremail, setYouremail] = useState('');
  const [yournumber, setYournumber] = useState('');

  const getUser = () => {
    firebase

      .database()
      .ref(`users/pelanggan/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
          console.log('ini', users);
        }
      });
  };

  const handleSubmit = () => {
    if (
      firstname.length == 0 ||
      lastname.length == 0 ||
      youremail.length == 0 ||
      yournumber.length == 0
    ) {
      showMessage({
        message: 'Your data is not complete',
        type: 'default',
        backgroundColor: '#D9435E',
        color: 'white',
      });
    } else {
      const data = {
        firstname: firstname,
        lastname: lastname,
        youremail: youremail,
        yournumber: yournumber,
      };
      firebase.database().ref(`homestay/${uid}`).set(data);
      navigation.navigate('OverviewPage', {uid: uid});
      showMessage({
        message: 'Sucsess Add Your Data',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // const [text] = useState(null);

  // const form = useSelector(state => state.BiodataReducer); //destructuring form dll.
  // const dispatch = useDispatch();

  // const onInputChange = (value, inputType) => {
  //   dispatch(setForm(inputType, value));
  // };

  // const sendData = () => {
  //   console.log('data yang dikirim', form);
  // };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
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
                input={styles.input}
                value={firstname}
                onChangeText={value => setFirstname(value)}
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
                input={styles.input}
                value={lastname}
                onChangeText={value => setLastname(value)}
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
                input={styles.input}
                value={youremail}
                onChangeText={value => setYouremail(value)}
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
                input={styles.input}
                value={yournumber}
                onChangeText={value => setYournumber(value)}
              />
            </View>

            <ButtonTransaction
              title={'Confirm'}
              btnView={styles.btnView}
              onPress={() => {
                handleSubmit();
              }}
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
