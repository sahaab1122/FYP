import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Middle from '../component/Middle';
import Btn from '../component/Btn';
// import *as animation from 'react-native-animatable'




class Next extends React.Component {
    render() {
        return (


            <ImageBackground source={require('../../assets/NextBack.png')} style={{ flex: 1,alignItems:'center',justifyContent:'space-evenly',paddingLeft:20,paddingRight:20, }}>

                
                <Middle />
                <View style={{width:'100%'}} 
                
                >
                    <Btn onPress={()=>this.props.navigation.navigate('RegisterLogin')} text="Next" color='#000DAE' width="50%" />
                </View>
            </ImageBackground>

        )


    }
}





























export default Next