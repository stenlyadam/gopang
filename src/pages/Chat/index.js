import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../../components/molecules/header';
import ChatItem from '../../components/molecules/ChatItem';
import InputChat from '../../components/molecules/InputChat';
import firebase from '../../config/Firebase';

const Chat = ({navigation, route}) => {
  const {uid, homestayID} = route.params;
  const [users, setUsers] = useState({});

  const getUsers = () => {
    firebase

      .database()
      .ref(`users/owner/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
          //   setHarga(res.val().price);
        }
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header
        title={users.name}
        navigation={navigation}
        onBack={() => navigation.goBack()}
      />

      <View style={{flex: 1, backgroundColor: '#D3D3D3'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{alignSelf: 'center', paddingBottom: 20}}>
            Senin, 21 Maret, 2022
          </Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <InputChat />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
