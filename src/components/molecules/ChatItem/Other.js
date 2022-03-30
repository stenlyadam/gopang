import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Other = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.Text}>Haloo...Haloo...Haloo...Haloo...</Text>
      </View>
      <Text style={styles.date}>4.25 AM</Text>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {marginBottom: 20, alignItems: 'flex-start', paddingLeft: 20},
  chatContent: {
    padding: 12,
    paddingRight: 10,
    backgroundColor: '#51E0FF',
    maxWidth: '70%',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    color: 'white',
  },
  Text: {fontSize: 15, fontWeight: 'normal', color: 'white'},
  date: {fontSize: 12, fontWeight: 'normal', marginTop: 5},
});
