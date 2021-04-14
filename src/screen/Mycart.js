
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
       <View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <Text>Total:</Text>
                    <Text>$900</Text>
                </View>

            </View>
       <View  >
                    <Btn onPress={()=>this.props.navigation.navigate('PlaceOrder')} text="Checkout" color='#000DAE' width="90%" />
                </View>
       
           <View 
           ><BottomHeader navigation={this.props.navigation}  btm={-380} /></View>
       
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