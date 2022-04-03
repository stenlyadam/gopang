import React from 'react'
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import Header from '../../components/molecules/header';
const AboutApp = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
               <Header 
      title="About App" 
      onBack={()=>navigation.goBack()}
      />
      
      <View>
            <Text style={styles.bold}>About App</Text>
        </View>
        <View>
            <Text style={styles.text}>Go Likupang is our projectfor skirpsi but we belive this Aplication will be useful for people and tourism.</Text>
        </View>
        <View>
        <Text style={styles.text1}>" Our work will never be in vain because we try our best for this application "</Text>
        </View>
        <View>
            <Text style={styles.team}>The Team</Text>
        </View>
        <View style={styles.fototeam}>
            <View>
                <Image source={require('../../assets/image/AUser.png')} style={{height:140,width:130}} />
                <Text style={{paddingLeft: 10 }}>Rayner H, Senduk</Text>
            </View>
            <View style={{marginLeft:20}}>
                <Image source={require('../../assets/image/AUser.png')} style={{height:140,width:130}} />
                <Text style={{paddingLeft: 10 }}>Yeheskiel G, Wonte</Text>
            </View>
            <View style={{marginTop:25}}>
                <Image source={require('../../assets/image/AUser.png')} style={{height:140,width:130}} />
                <Text>Ferdinand B M, Rattu</Text>
            </View>
            <View style={{marginLeft:20,marginTop:25}}>
                <Image source={require('../../assets/image/AUser.png')} style={{height:140,width:130}} />
                <Text style={{paddingLeft: 15 }}>Claudio, Mambu</Text>
            </View>
        </View>
        <View> 
                <Text style={styles.advisor}>Advisor</Text>
        </View>
        <View style={styles.advisorfoto}>
        <View style={{marginTop:25}}>
                <Image source={require('../../assets/image/AUser.png')} style={{height:140,width:130}} />
                <Text style={{paddingRight:10}}>Ir. Edson Yahuda Putra, M.Kom</Text>
            </View>
        </View>
        <View style={styles.fotocoAdvisor}>
            <View>
                <Image source={require('../../assets/image/AUser.png')} style={{height:140,width:130}} />
                <Text style={{paddingLeft: 10 }}>Stenly Adam, MSc</Text>
            </View>
            <View style={{marginLeft:20}}>
                <Image source={require('../../assets/image/AUser.png')} style={{height:140,width:130}} />
                <Text style={{paddingLeft: 10 }}>Reymon Rotikan, MS</Text>
            </View>
    </View>
    </View>
    </ScrollView>
    );
};

export default AboutApp

const styles = StyleSheet.create({
    bold: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 10,
    },
    text1: {
        fontSize: 25,
        textAlign: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 10,
    },
    team: {
        textAlign: 'center',
        fontSize: 40,
        paddingTop: 20,
        fontWeight: 'bold',
    },
    fototeam: {
        flexWrap: 'wrap',
        flexDirection:'row',
        marginTop: 20,
        width: '100%',
        justifyContent:'center'
      },
      advisor: {
        textAlign: 'center',
        fontSize: 40,
        paddingTop: 20,
        fontWeight: 'bold',
      },
      advisorfoto: {
        flexWrap: 'wrap',
        flexDirection:'row',
        marginTop: 10,
        width: '100%',
        justifyContent:'center',
        paddingLeft: 60,
        textAlign: 'center',
      },
      fotocoAdvisor: {
        flexWrap: 'wrap',
        flexDirection:'row',
        marginTop: 20,
        width: '100%',
        justifyContent:'center'
      },
});
