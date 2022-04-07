import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Arrow from '../../../assets/icon/Arrow.png';
import chart from '../../../assets/icon/chart.png';

const header = ({onBack, onCharts, setIconChart}) => {
  console.log("isi dari on back:", onBack)
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      //backgroundColor:'red',
      // justifyContent: 'space-around',
    }}>

      <View style={styles.containter}>
      {onBack && (
        <TouchableOpacity
          style={{position: 'absolute', left: 46}}
          onPress={onBack}
          activeOpacity={1.0}
          >
          <View>
            <Image source={Arrow} style={{height: 22.39, width: 10}} />
          </View>
        </TouchableOpacity>
        )}

      {
      <TouchableOpacity
          style={{position: 'absolute', left: 46}}
          onPress={onCharts}
          activeOpacity={1.0}
          >

          <View>
            <Image source={chart} style={{height: 43, width: 50, marginLeft:280}} />
          </View>
          
        </TouchableOpacity>
      }
      </View>

      {/* <View style={styles.containter}>
      
        </View> */}

      {/* <View style={styles.containter}>
      <TouchableOpacity
        style={{position: 'absolute', left: 150}}
        onPress={onBack}>
        <Image source={Search} style={{height: 22.39, width: 20, }} />
      </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  containter: {
    //backgroundColor:'blue',
    width: '50%',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 114,
  },
});
