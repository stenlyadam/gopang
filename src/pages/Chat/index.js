import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/molecules/header';
import ChatItem from '../../components/molecules/ChatItem';
import InputChat from '../../components/molecules/InputChat';

const Chat = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header
        title="Mr. Wahyu"
        navigation={navigation}
        onBack={() => navigation.goBack()}
      />
      <View style={{flex: 1, backgroundColor: '#D3D3D3'}}>
        <Text style={{alignSelf: 'center', paddingBottom: 20}}>
          Senin, 21 Maret, 2022
        </Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
