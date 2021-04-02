
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Middle from '../component/Middle';
import Btn from '../component/Btn';




class RegisterLogin extends React.Component {
    render() {
        return (


            <ImageBackground source={require('../../assets/LogBack.png')} style={{ flex: 1,alignItems:'center',justifyContent:'space-evenly',paddingLeft:20,paddingRight:20, }}>

                <Text style={{fontFamily:'sp',fontSize:23}}>Mughal</Text>
                <Middle />
                <View style={{width:'100%'}} >
                    <Btn onPress={()=>this.props.navigation.navigate('Register')} text="Register" color='#000DAE' width="100%" />
                    <Btn onPress={()=>this.props.navigation.navigate('Login')} text="LogIn" color='#000DAE' width="100%" />
                </View>
            </ImageBackground>

        )


    }
}





























export default RegisterLogin