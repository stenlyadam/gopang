import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';

const {height, width} = Dimensions.get('window');

const SuccessPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 150}}>
        <Image source={require('../../assets/image/SuccessPage.png')} />
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            marginTop: 27,
            alignSelf: 'center',
            color: '#38A7D0',
          }}>
          It's Ordered
        </Text>
        <Text
          style={{
            fontSize: 18,
            alignSelf: 'center',
            textAlign: 'center',
            width: 250,
            color: '#A8A6A7',
          }}>
          Hai Reyner - thanks for your order, we hope you enjoyed booking with
          us.
        </Text>
      </View>

      <View>
        <ButtonTransaction
          title={'Done'}
          btnView={styles.btnView}
          onPress={() => navigation.replace('NavigationBar')}
        />
      </View>
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnView: {
    marginTop: 161,
    alignItems: 'center',
  },
});
