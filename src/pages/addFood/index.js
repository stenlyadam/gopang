import React ,{useState, useEffect} from 'react'
import { 
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
    LayoutAnimation,
 } from 'react-native';
import Header from '../../components/molecules/header';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

// const CONTENT = {
//     isExpanded: false,
//     category_name:'Item 1',
//     subcategory: [
//         {id: 1, val: 'Sub 1'}
//     ]
// }

// const ExpandableComponent = ({item, onClickFunction}) => {
//     const [layoutHeight, setLeyoutHeight] = useState(0);

//     useEffect(() => {
//         if (item.isExpanded) {
//             setLeyoutHeight(null);
//         }else {
//             setLeyoutHeight(0);
//         }
//     }, [item.isExpanded])

//     return (
//         <View>
//             <TouchableOpacity style={styles.item} onPress={onClickFunction}>
//             <Text style={styles.itemText}>
//             {item.category_name}
//             </Text>
//             </TouchableOpacity>
//             <View style={{height: layoutHeight,overflow: 'hidden'}}>
//             {
//                 item.subcategory.map((item, key) =>(
//                     <TouchableOpacity
//                     key={key}
//                     style={styles.content}>
//                         <Text style={styles.text}>
//                         {key}. {item.val}
//                         </Text>
//                         <View style={styles.seperator}/>
//                     </TouchableOpacity>
//                 ))
//             }
//             </View>
//         </View>
//     )
// }

const Addfood = ({navigation}) => {
    const [text] = useState(null);
    const [number] = useState(null);
    // const [listDataSource, setDataSource] = useState(CONTENT)

    // const updateLayout = () => {
    //     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    //     const array = [...listDataSource];
    //     if (multiSelect)
    // }

    return (
        <View>
      <Header 
      title="Add Food" 
      onBack={()=>navigation.goBack()}
      />
      <View style={styles.fotoFood}>
        <Image source={require('../../assets/image/ProfileFood.png')}  />  
        <TouchableOpacity
      style={{
          position: 'absolute',
          top: 140,
          left: 220
      }}>
          <Image source={require('../../assets/image/kamera.png')}/>
      </TouchableOpacity>
      </View>
      <View style={styles.InputContainer}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Nama Makanan</Text>
            <Input placeholder={'Nama Makanan'} input={styles.input} />
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Jenis Makanan</Text>
            <Input placeholder={'Jenis Makanan'} type={text} input={styles.input} />
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Harga Makanan</Text>
            <Input placeholder={'Harga Makanan'} type={number} input={styles.input} />
        </View>
        {/* <ScrollView>
            {
                listDataSource.map((item, key) => (
                <ExpandableComponent
                key={item.category_name}
                item={item}
                onClickFunction={() =>{
                    updateLayout(key)
                }}
                />
                ))
            }
        </ScrollView> */}
        <Button title={'Add Food'} btnView={styles.btnSignUp} onPress={() => Alert.alert('Your Food Succesful Added')} />
        </View>
    )
}

export default Addfood

const styles = StyleSheet.create({
    fotoFood: {
        alignItems: 'center',
        // paddingBottom: 50,
    },
    InputContainer:{
        marginTop:50,
        alignItems:'center'
    },
    btnSignUp:{
        // marginTop:40,
        alignItems:'center'
    },
    input:{
        height: 54,
        width:343,
        padding: 10,
        fontSize:16,
        borderRadius:6,
        borderWidth:0.3,
        backgroundColor:'#EDEDF0',
        marginBottom:25,
        marginTop:5,
    },
    // item: {
    //     backgroundColor: 'red',
    //     padding: 20,
    // },
    // itemText: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    // },
    // content: {
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     backgroundColor: '#fff'
    // },
    // text: {
    //     fontSize: 18,
    //     padding: 10
    // },
    // seperator: {
    //     height: 0.5,
    //     backgroundColor: '#c8c8c8',
    //     width: '100%'
    // }
})
