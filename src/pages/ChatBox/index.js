import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/molecules/header';
import ListChat from '../../components/molecules/ListChat';
import dummy1 from '../../assets/dummyChat/dummy1.jpg';
import dummy2 from '../../assets/dummyChat/dummy2.jpg';
import dummy3 from '../../assets/dummyChat/dummy3.jpg';

const NavChat = ({navigation}) => {
  const [inbox] = useState([
    {
      id: 1,
      profile: dummy1,
      name: 'Mr. Wahyu',
      desc: 'Thank you sir....',
    },
    {
      id: 2,
      profile: dummy2,
      name: 'Mr. Juniver',
      desc: 'Thank you sir....',
    },
    {
      id: 3,
      profile: dummy3,
      name: 'Mr. Yuta',
      desc: 'Halo..',
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Chat" />

      <View style={styles.container}>
        {inbox.map(Inbox => {
          return (
            <ListChat
              key={Inbox.id}
              profile={Inbox.profile}
              name={Inbox.name}
              desc={Inbox.desc}
              navigateInbox={() => navigation.navigate('Chat')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default NavChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
  },
});
