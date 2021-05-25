
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Middle from '../component/Middle';
import Btn from '../component/Btn';
import Next from './Next';
// import *as animation from 'react-native-animatable'




class Landing extends React.Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Next')
            
        }, 4000);
    }
//     componentWillUnmount(){
//         clearTimeout(this.timeoutHandle); 
//    }
    render() {
        return (


            <ImageBackground source={require('../../assets/one.jpg')} style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: 20, paddingRight: 20, }}>


                <View>
                    <Text style={{ textAlign: 'center', fontSize: 35, fontFamily: 'Poppin' ,color:'white'}}>The Right Address {'\n'}For Shopping{'\n'} Anyday</Text>
                 
                </View>
                <View style={{ width: '100%' }}

                >

                </View>

            </ImageBackground>

        )


    }
}





























export default Landing