import { StyleSheet, Text, View, TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'

const CategoryFeature = (props) => {
  return (
    <View>
            <View style={{marginLeft:20,marginTop:13,width:'100%'}}>
                <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Category</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginRight: '58.3%',
                        justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                        onPress={props.onPress1}
                        style={{
                        width: '60%',
                        alignItems: 'center',
                        }}>
                        <View style={styles.navigation}>
                        <Image source={require('../../../assets/icon/Homestay.png')} />
                        </View>
                        <Text style={{fontSize: 15, textAlign: 'center'}}>Homestay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={props.onPress2}
                        style={{
                        width: '60%',
                        alignItems: 'center',
                        marginLeft:25
                        }}>
                        <View style={styles.navigation}>
                        <Image source={require('../../../assets/icon/Gazebo.png')} />
                        </View>
                        <Text style={{fontSize: 15, textAlign: 'center'}}>Gazebo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={props.onPress3}
                        style={{
                        width: '60%',
                        alignItems: 'center',
                        marginLeft:25
                        }}>
                        <View style={styles.navigation}>
                        <Image source={require('../../../assets/icon/Food.png')} />
                        </View>
                        <Text style={{fontSize: 15, textAlign: 'center'}}>Food</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  );
}

export default CategoryFeature;

const styles = StyleSheet.create({
    navigation: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#A7DFD8',
        backgroundColor: '#A7DFD8',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
})