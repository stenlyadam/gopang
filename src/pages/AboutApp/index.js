import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import Header from '../../components/molecules/header';

const AboutApp = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header
        title="About"
        onBack={() => navigation.goBack()}
        style={{backgroundColor: '#A7DFD8'}}
      />

      <View style={{marginLeft: 20, marginRight: 20, marginTop: 15}}>
        <Text style={{fontSize: 14, color: '#000000', textAlign: 'justify'}}>
          Gopang is an abbreviation of Go Likupang and is made into a tourism
          application for the Likupang area, more precisely in the special
          economic zone
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 15,
            marginTop: 15,
            textAlign: 'justify',
          }}>
          Special Economic Zones located in Likupang include Marinsow Village,
          Pulisan Village, and Kinunang Village. Each village provides a place
          to stay in the form of a homestay for tourists who want to stay for a
          few days or nights.
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 15,
            marginTop: 15,
            textAlign: 'justify',
          }}>
          Each village represents tourist attractions that will be visited by
          tourists, namely Marinsow Village for Paal Beach, Pulisan Village for
          Pulisan Beach, and Kinunang Village for Kinunang Beach.
        </Text>

        <Text
          style={{
            color: '#000000',
            fontSize: 15,
            marginTop: 15,
            textAlign: 'justify',
          }}>
          In this Gopang application will help tourists in finding homestays
          from each village for them to stay, assist them in ordering food
          easily, and assist in finding the Gazebo that are in every existing
          beach.
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 15,
            marginTop: 15,
            textAlign: 'justify',
          }}>
          GOPANG or Go Likupang is a thesis research project II from the Faculty
          of Computer Science, University of Klabat as a graduation requirement
          for thesis 2 course.
        </Text>
      </View>

      {/* Advisor */}
      <View
        style={{
          width: 371,
          height: 150,
          backgroundColor: '#EDEDF0',
          margin: 20,
          borderRadius: 5,
        }}>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontSize: 14,
            color: '#000000',
            fontWeight: 'bold',
          }}>
          Advisor
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View>
            <View>
              <Image
                source={require('../../assets/dummyChat/dummy1.jpg')}
                style={styles.advisor1}
              />
            </View>
            <View>
              <Text style={styles.advisor2}>Ir. Edson Y Putra, M.Kom</Text>
              <Text style={styles.advisor3}>Advisor</Text>
            </View>
          </View>
          <View>
            <View>
              <Image
                source={require('../../assets/dummyChat/dummy1.jpg')}
                style={styles.advisor1}
              />
            </View>
            <View>
              <Text style={styles.advisor2}>Stenly I Adam, MSc</Text>
              <Text style={styles.advisor3}>Co Advisor</Text>
            </View>
          </View>

          <View>
            <View>
              <Image
                source={require('../../assets/dummyChat/dummy1.jpg')}
                style={styles.advisor1}
              />
            </View>
            <View>
              <Text style={styles.advisor2}>Raymon Rotikan,Ms</Text>
              <Text style={styles.advisor3}>Co Advisor</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Mahasiswa */}
      <View
        style={{
          width: 371,
          height: 220,
          backgroundColor: '#EDEDF0',
          margin: 20,
          borderRadius: 5,
          marginTop: -5,
        }}>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontSize: 14,
            color: '#000000',
            fontWeight: 'bold',
          }}>
          Our Team
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <View>
            <Image
              source={require('../../assets/dummyChat/dummy1.jpg')}
              style={styles.team1}
            />
            <View>
              <Text style={styles.team2}>Reyner H. Senduk</Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../../assets/dummyChat/dummy1.jpg')}
              style={styles.team1}
            />
            <View>
              <Text style={styles.team2}>Claudio S. Mambu</Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../../assets/dummyChat/dummy1.jpg')}
              style={styles.team1}
            />
            <View>
              <Text style={styles.team2}>Yehezkiel G. Wonte</Text>
            </View>
          </View>
          <View style={{marginTop: 35}}>
            <Image
              source={require('../../assets/dummyChat/dummy1.jpg')}
              style={styles.team1}
            />
            <View>
              <Text style={styles.team2}>Ferdinand B M. Rattu</Text>
            </View>
          </View>
        </View>
      </View>

      <Text
        style={{
          color: 'black',
          alignSelf: 'center',
          marginTop: 62,
          marginBottom: 62,
          fontSize: 13,
          fontWeight: '300',
        }}>
        © 2021 GOPANG!
      </Text>
    </ScrollView>
  );
};

export default AboutApp;

const styles = StyleSheet.create({
  advisor1: {
    // marginLeft: 30,
    // marginHorizontal: 15,
    // alignItems: 'center',
    alignSelf: 'center',
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    top: 10,
  },
  advisor2: {
    textAlign: 'center',
    width: '100%',
    top: 15,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  advisor3: {
    // position: 'absolute',
    textAlign: 'center',
    // width: 130,
    fontSize: 10,
    fontWeight: '400',
    top: 20,
    color: 'black',
  },
  team1: {
    // marginLeft: 30,
    marginHorizontal: 35,
    // alignSelf: 'center',
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    top: 10,
  },
  team2: {
    textAlign: 'center',
    marginLeft: 3,
    top: 15,
    fontSize: 10,
    fontWeight: 'normal',
    color: 'black',
  },
});
