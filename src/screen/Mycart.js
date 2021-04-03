
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import BottomHeader from '../component/BottomHeader'
import EmptyCart from '../component/EmptyCart';
import CartPrice from '../component/CartPrice';
import Btn from '../component/Btn'

class MyCart extends React.Component {
    render(){

    return (

        <View style={styles.Container}>
       <View style={{flexDirection:'row',alignItems:'center',padding:30}}>
       <TouchableOpacity><Entypo name="cross" size={24} color="#171717" /></TouchableOpacity>
       <Text style={{fontSize:22,color:'#000',fontFamily:'Poppins',paddingLeft:10}}>My Cart</Text>
       </View>
       <CartPrice/>
       <View  >
                    <Btn onPress={()=>this.props.navigation.navigate('PlaceOrder')} text="Checkout" color='#000DAE' width="90%" />
                </View>
       <View style={{position: 'absolute',backgroundColor:'cyan',zIndex:10,bottom:0,alignSelf:'center',textAlign:'center',width:'100%'    }}>
           <BottomHeader btm={40} />
       </View>
        </View>


    )
};
}
const styles = StyleSheet.create({

    Container: {

        backgroundColor: '#fff',
        flex:1,
      




    },
















});
export default MyCart