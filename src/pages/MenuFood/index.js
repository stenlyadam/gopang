import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../../components/molecules/header';
import CardFood from '../../components/molecules/CardFood';

const MenuFood = ({navigation}) => {
  return (
    <>
      <View>
        <Header onBack={() => navigation.goBack()} />
      </View>
      {/* chart */}
      <TouchableOpacity
        style={{position: 'absolute', marginLeft: 320, top: 13}}
        onPress={() => navigation.navigate('ChartFood')}>
        <Image
          source={require('../../assets/icon/chart.png')}
          style={{height: 43, width: 50}}
        />
      </TouchableOpacity>
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.eat}>What do you want to eat?</Text>

        <View style={styles.SectionStyle}>
          <Image
            source={require('../../assets/icon/search.png')} //Change your icon image here
            style={styles.ImageStyle}
          />

          <TextInput
            style={{flex: 1}}
            placeholder="Food / Restaurant name"
            // underlineColorAndroid="transparent"
          />
        </View>

        <View
          style={{
            marginTop: '4%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View>
            {/* food */}
            <TouchableOpacity
            // onPress={() => navigation.replace('MenuHomestay')}
            >
              <View style={styles.food}>
                <Image source={require('../../assets/icon/cutlery.png')} />
              </View>
              <Text style={{fontSize: 15, textAlign: 'center'}}>Food</Text>
            </TouchableOpacity>
          </View>

          <View>
            {/* snack */}
            <TouchableOpacity
            // onPress={() => navigation.replace('MenuHomestay')}
            >
              <View style={styles.snack}>
                <Image source={require('../../assets/icon/burGer.png')} />
              </View>
              <Text style={{fontSize: 15, textAlign: 'center'}}>Snack</Text>
            </TouchableOpacity>
          </View>

          <View>
            {/* drink */}
            <TouchableOpacity
            // onPress={() => navigation.replace('MenuHomestay')}
            >
              <View style={styles.drink}>
                <Image source={require('../../assets/icon/drink.png')} />
              </View>
              <Text style={{fontSize: 15, textAlign: 'center'}}>Drink</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu makan */}
        <View style={styles.garis} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfilWarung');
          }}>
          <CardFood
            title="Pisang Goroho krepek"
            harga="Rp. 12.000"
            image={require('../../assets/imgFood/kerpek.png')}
            location="Warung Jessica, Paal Beach"
            myCondition={1}
          />
        </TouchableOpacity>

        <View style={styles.garis} />

        <CardFood
          title="Nutrisari"
          harga="Rp. 5.000"
          image={require('../../assets/imgFood/Nutrisari.png')}
          location="Warung Jessica, Paal Beach"
          myCondition={1}
        />

        <View style={styles.garis} />

        <CardFood
          title="Jagung Rebus"
          harga="Rp. 10.000"
          image={require('../../assets/imgFood/jagung.png')}
          location="Warung Wahyu, Paal Beach"
          myCondition={1}
        />

        <View style={styles.garis} />

        <CardFood
          title="Nasi Kuning"
          harga="Rp. 15.000"
          image={require('../../assets/imgFood/naskun.png')}
          location="Warung Wahyu, Paal Beach"
          myCondition={1}
        />

        <View style={styles.garis} />
      </ScrollView>
    </>
  );
};

export default MenuFood;

const styles = StyleSheet.create({
  eat: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
    alignItems: 'center',
    textAlign: 'center',
    //color: 'black',
  },
  food: {
    width: 74,
    height: 57,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    backgroundColor: '#F5F5F5',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 38,
    // marginRight: 299,
  },
  snack: {
    width: 74,
    height: 57,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    backgroundColor: '#F5F5F5',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drink: {
    width: 74,
    height: 57,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    backgroundColor: '#F5F5F5',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 200,
    //marginRight: 38,
  },
  garis: {
    height: 1,
    marginTop: 21,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 48.5,
    borderRadius: 5,
    margin: 10,

    //
    maxWidth: '80%',
    marginHorizontal: '10%',
    borderWidth: 0.3,
    borderRadius: 10,
    fontSize: 14,
  },
  ImageStyle: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
