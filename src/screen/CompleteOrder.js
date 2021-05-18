
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Btn from '../component/Btn';
import Smallchair from '../component/Smallchair';
import BottomHeader from '../component/BottomHeader';


class CompleteOrder
    extends React.Component {
    render() {
        return (

            <View style={{ backgroundColor: '#fff', flex: 1,justifyContent:'space-evenly', paddingHorizontal: 20 }}>
             <View style={{flexDirection:'row',alignItems:'center'}}>
       <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Entypo name="cross" size={24} color="#171717" /></TouchableOpacity>
       <Text style={{fontSize:22,color:'#000',fontFamily:'Poppins',paddingLeft:10}}>Order Complete</Text>
       </View>
                <View>
                    <Image style={{ width: '83%', height: 210, alignSelf: 'center' }} source={require('../../assets/com.png')} />
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontFamily:'Poppin',fontSize:26}}>
                        Your order is Complete 
                    </Text>
                    <Text style={{color:'#979797'}}>
                    It is now very easy to reach the best quality{"\n"} among all the products on the internet!
                    </Text>
                </View>
                
              






                <View  >
                    <Btn onPress={()=> this.props.navigation.navigate('Home')} text="Back to Home" color='#000DAE' width="90%" />
                </View>
                <View>
                    <BottomHeader navigation={this.props.navigation}  />
                </View>




            </View>


        )


    }
}





























export default CompleteOrder
