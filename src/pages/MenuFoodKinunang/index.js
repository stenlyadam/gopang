import React, {useState, useEffect} from 'react';
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
import firebase from 'firebase';

const MenuFoodKinunang = ({navigation, route}) => {
  const {uid, WarungID} = route.params;
  const [Food, setFood] = useState([]);
  const [locationKinunang,setLocationKinunang] = useState('Kinunang');
  const [search, setSearch] = useState('');
  const [choose,setChoose] = useState('');

  const getFood = () => {
    firebase
      .database()
      .ref(`food`)
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          // console.log(keranjang[0].namaProduk);
          Object.keys(rawData).map(key => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setFood(productArray);
        }
      });
  };

  useEffect(() => {
    getFood();
  }, []);

  const handleSubmit=key=>{
    navigation.navigate('ProfilWarung', {uid: uid, WarungID: key});
  }

  return (
    <>
      <View>
        <Header onBack={() => navigation.goBack()} />
      </View>
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.eat}>What do you want to eat?</Text>

        <View style={styles.SectionStyle}>
          <Image
            source={require('../../assets/icon/search.png')}
            style={styles.ImageStyle}
          />
          {/* Fitur Seach  */}
          <TextInput
              placeholder={'Search Food name...'}
              // type={text}
              value={search}
              style={{flex:1}}
              onChangeText={value => setSearch(value)}
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
            onPress={()=> setChoose('Food')}
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
            onPress={()=> setChoose('Snack')}
            >
              <View style={styles.snack}>
                <Image source={require('../../assets/icon/burGer.png')} />
              </View>
              <Text style={{fontSize: 15, textAlign: 'center'}}>Snack</Text>
            </TouchableOpacity>
          </View>

          <View>
            {/* drink */}
            <TouchableOpacity onPress={()=> setChoose('Drink')}>
              <View style={styles.drink}>
                <Image source={require('../../assets/icon/drink.png')} />
              </View>
              <Text style={{fontSize: 15, textAlign: 'center'}}>Drink</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.productContainer}>
        <View style={styles.garis} />
            {search.length === 0 ? (
              <View>
                <View>
                  {Food
                    .filter(food => food.location.includes(locationKinunang)&&
                                    food.name.includes(search)&&
                                    food.kategori.includes(choose))
                    .map(key => (
                      <View>
                        <CardFood
                          title={key.name}
                          harga={key.price}
                          image={key.photo}
                          warung={key.namaWarung}
                          alamat={key.location}
                          kategori={key.kategori}
                          myCondition={1}
                          onPress={()=> handleSubmit(key.IDwarung)}
                        />
                      </View>
                    ))}
                </View>
              </View>
            ) : (
              Food
                .filter(
                  food => food.location.includes(locationKinunang)&&
                          food.name.toLowerCase().includes(search.toLowerCase()))
                .map(key => (
                  <View>
                    <CardFood
                      title={key.name}
                      harga={key.price}
                      image={key.photo}
                      warung={key.namaWarung}
                      alamat={key.location}
                      kategori={key.kategori}
                      myCondition={1}
                      onPress={()=> handleSubmit(key.IDwarung)}
                    />
                  </View>
                ))
            )}
          <View style={styles.garis1} />
          </ScrollView>
      </ScrollView>
    </>
  );
};

export default MenuFoodKinunang;

const styles = StyleSheet.create({
  eat: {
    fontSize: 35,
    fontWeight: 'bold',
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
  garis1: {
    height: 1,
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

// onPress={() => { navigation.navigate('ProfilWarung'); }}
