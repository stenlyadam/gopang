import React from 'react'
import { StyleSheet, Text, View } from 'react-native'; 
import Header from '../../components/molecules/header';

const Helps = ({navigation}) => {
    return (
        <View>
               <Header 
      title="Help" 
      onBack={()=>navigation.goBack()}
      />
      <View style={styles.help1}>
            <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>Kami menyediakan Form pangaduan yang bisa diggunakan untuk masalah terkait GOPANG</Text>
      </View>
    </View>
    )
}

export default Helps

const styles = StyleSheet.create({
    help1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    }
})
