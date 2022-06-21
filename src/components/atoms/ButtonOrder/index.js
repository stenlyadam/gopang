import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ButtonOrder = (props, {navigation}) => {
  return (
    <View style={props.btnView}>
      {/* for se tampil button discreen mana saja */}
      <TouchableOpacity style={styles.Button} onPress={props.onPress}>
        <Text style={styles.textButton}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonOrder;

const styles = StyleSheet.create({
  Button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    width: 130,
    height: 34,
    marginLeft: 65,
    marginTop: 10,
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

// const ButtonOrder = ({props, order}) => {
//   console.log('navigation:', order);
//   return (
//     <TouchableOpacity style={styles.Order}>
//       <Text style={styles.textAdd}>Order</Text>
//     </TouchableOpacity>
//   );
// };

// export default ButtonOrder;

// const styles = StyleSheet.create({
//   Order: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     width: 130,
//     height: 34,
//     marginLeft: 65,
//     marginTop: 10,
//     backgroundColor: '#38A7D0',
//     alignItems: 'center',
//   },
//   textAdd: {
//     fontSize: 15,
//     fontWeight: 'normal',
//     color: 'white',
//   },
// });
