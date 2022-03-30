import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.Text}>Haloo...Haloo...Haloo...Haloo...</Text>
      </View>
      <Text style={styles.date}>4.25 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {marginBottom: 20, alignItems: 'flex-end', paddingRight: 20},
  chatContent: {
    padding: 12,
    paddingRight: 10,
    backgroundColor: '#B0F1FF',
    maxWidth: '70%',
    borderRadius: 10,
    borderTopRightRadius: 0,
  },
  Text: {fontSize: 15, fontWeight: 'normal'},
  date: {fontSize: 12, fontWeight: 'normal', marginTop: 5},
});
