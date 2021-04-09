
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Middle from '../src/component/Middle';
import Btn from '../src/component/Btn';
import Lets from '../src/component/Lets';
import Inputfield from '../src/component/Inputfield';




class Login extends React.Component {
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

            <View style={{ height: '100%' }}>

                <ImageBackground resizeMode='stretch' source={require('../assets/LogBack.png')} style={{
                    width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                }} />

                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >
                    <Text style={{ fontFamily: 'sp', fontSize: 23, textAlign: 'center' }}>Mughal</Text>
                    <Lets />

                    <View style={{ width: '100%' }} >

                        <Inputfield text="Email" keyboardType="email-address" />
                        <Inputfield text="Password" />

                        <TouchableOpacity style={styles.text} >
                            <Text style={{ color: 'white',  }}>Login</Text>
                        </TouchableOpacity>
                        {/* <Btn onPress={() => this.props.navigation.navigate('Home')} text="Login" color='#000DAE' width="90%" /> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Btn text="FaceBook" color='#97aabd' width="43%" />
                            <Btn text="Google" color='#97aabd' width="43%" />

                        </View>

                    </View>
                </ScrollView>
            </View>

        )


    }
}
const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        height: 43,
        backgroundColor: '#000DAE',
        borderRadius: 3,
        width:"90%"
    },

});




























export default Login