
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Middle from '../src/component/Middle';
import Btn from '../src/component/Btn';
import Lets from '../src/component/Lets';
import Inputfield from '../src/component/Inputfield';




class Register extends React.Component {
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     address: '',
    //     password: '',
    //     confirmPassword: '',
    //     phone: '',


    //     loading: true

    // }
    render() {
        return (

            <KeyboardAvoidingView >
                <ImageBackground source={require('../assets/LogBack.png')} style={{ minHeight: Dimensions.get('window').height, alignItems: 'center', justifyContent: 'space-evenly', paddingLeft: 20, paddingRight: 20, }}>

                    <Text style={{ fontFamily: 'sp', fontSize: 23 }}>Mughal</Text>
                    <Lets />
                    <View style={{ width: '100%' }} >
                        <Inputfield text="First Name" />
                        <Inputfield text="Last Name" />
                        <Inputfield text="Email" />
                        <Inputfield text="Password" />
                        <Inputfield text="Confirm Password" />
                        <Inputfield text="Phone or Mail" />
                        <Btn onPress={() => this.props.navigation.navigate('Login')} text="Register" color='#000DAE' width="90%" />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Btn text="FaceBook" color='#97aabd' width="43%" />
                            <Btn text="Gmail" color='#97aabd' width="43%" />


                        </View>


                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )


    }
}





























export default Register