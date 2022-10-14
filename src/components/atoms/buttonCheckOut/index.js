import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const ButtonCheckOut = props => {
  return (
    <View style={props.btnView}>
      {/* for se tampil button discreen mana saja */}
      <TouchableHighlight
        underlayColor={{color: '#006688'}}
        style={styles.Button}
        onPress={props.onPress}>
        <Text style={styles.textButton}>{props.title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ButtonCheckOut;

const styles = StyleSheet.create({
  Button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: 130,
    height: 34,
    marginLeft: 264,
    marginTop: 15,
    backgroundColor: '#38A7D0',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'white',
  },
});

// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';

// const ButtonCheckOut = ({onSubmit}) => {
//   return (
//     <TouchableOpacity onPress={onSubmit} style={styles.CheckOut}>
//       <Text style={styles.textAdd}>Check Out</Text>
//     </TouchableOpacity>
//   );
// };

// export default ButtonCheckOut;

// const styles = StyleSheet.create({
//   CheckOut: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     width: 130,
//     height: 34,
//     marginLeft: 264,
//     marginTop: 15,
//     backgroundColor: '#38A7D0',
//     alignItems: 'center',
//   },
//   textAdd: {
//     fontSize: 15,
//     fontWeight: 'normal',
//     color: 'white',
//   },
// });
