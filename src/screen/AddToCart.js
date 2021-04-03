
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import { Carousal } from '../component/Carousel';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Btn from '../component/Btn'





class AddToCart extends React.Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:30}}>
            <TouchableOpacity><Entypo name="cross" size={24} color="#A8A8A8" /></TouchableOpacity>
            <TouchableOpacity><FontAwesome5 name="location-arrow" size={20} color="#A8A8A8" /></TouchableOpacity>
            </View>
            <View style={{alignSelf:'flex-end',justifyContent:'flex-end'}}>
                <Carousal active='#000' inActive='#D9D9D9' height={300} images={[require('../../assets/BigChair1.png'),require('../../assets/BigChair1.png'),require('../../assets/BigChair1.png')]}  />
            

            </View>
            <View>
            <Text style={{ paddingLeft: 20,   fontSize: 28, fontFamily: 'Poppins' }}>
                    Premium Chair
              </Text>
              <Text style={{ paddingLeft: 20,   fontSize: 15, fontFamily: 'Poppins',color:'#5A5A5A' }}>
                    Subheaded Chair Content.
              </Text>
            </View>
            <View style={{position: 'absolute',zIndex:10,bottom:80,alignSelf:'center',textAlign:'center',width:'80%'    }}>
            <Btn onPress={()=>this.props.navigation.navigate('MyCart')} text="Add to Cart" color='#000DAE' width="100%" />
            </View>
        </View>

        )


    }
}





























export default AddToCart