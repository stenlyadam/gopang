import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import firebase from '../../../config/Firebase';

const CardFoodOwner = props => {
  //console.log(props)

  return (
    <View
      style={{
        height: 100,
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      <Image
        source={{uri: `data:image/jpeg;base64, ${props.image}`}}
        style={{
          marginTop: 14,
          marginBottom: 14,
          width: 127,
          height: 73,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          marginLeft: 12,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 60,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.containerTitle}>
              <Text style={styles.namaMakanan}>{props.title}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 11, top: -7}}>
            <Text style={styles.harga}>IDR. {props.harga}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={props.onEdit} style={styles.buttonEdit}>
            <Text style={styles.textEdit}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.onDelete}
            style={styles.buttonDelete}>
            <Text style={styles.textDelete}>Delete</Text>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            width: 110,
            height: 14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 29,
            marginLeft: 11,
          }}></View> */}
      </View>
    </View>
  );
};

export default CardFoodOwner;

const styles = StyleSheet.create({
  namaMakanan: {
    fontSize: 15,
    fontWeight: 'bold',
    height: 30,
  },
  harga: {
    fontWeight: 'normal',
    fontSize: 15,
    width: 187,
    height: 25,
  },
  location: {
    flexDirection: 'row',
    fontWeight: 'normal',
    fontSize: 13,
    width: 187,
    height: 50,
    marginLeft: 4,
  },
  containerTitle: {
    width: 167,
    height: 22,
    marginTop: 11,
    marginBottom: 5,
    marginLeft: 11,
    marginRight: 55,
  },
  buttonEdit: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: 86,
    height: 25,
    marginLeft: 10,
    backgroundColor: '#38A7D0',
    alignItems: 'center',
  },
  textEdit: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonDelete: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    width: 86,
    height: 25,
    marginLeft: 10,
    backgroundColor: '#F23333',
    alignItems: 'center',
  },
  textDelete: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
