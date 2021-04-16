
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Middle from '../src/component/Middle';
import Btn from '../src/component/Btn';
import Lets from '../src/component/Lets';
import Inputfield from '../src/component/Inputfield';




class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            email: '',
            password: '',
        }
    }
    addToReduc = () => {

        if (this.state.email == '') {
            alert('Please write Email')
        }
        
        else if (this.state.password == '') {
            alert('Please write PASSWORD  ')
        }
        else  {
            this.props.navigation.navigate('Home')
        }
       



    }
    // }else{
    //   this.props.Login(this.state.text);
    // }


    // Login() {
    //     // let rjx = /^[a-Az-z]+$/;
    //     // let isValid = rjx.test(this.state.name)
    //     // console.warn(this.state)
    //     // if (!isValid) {
    //     //     this.setState({})
    //     // }
    //     if(this.state.Login ==""){
    //         this.setState({loginError: 'this'})
    //     }

    // }


    // pasaswordValidator() {
    //     if (this.state.password == "") {
    //         this.setState({ passwordError: 'this field can not be empty' })
    //     }
    //     // else {
    //     //      this.setState.props.navigation.navigate('Home')
    //     // }
    // }


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
                    {/* <Lets /> */}
                    <Middle />

                    <View style={{ width: '100%' }} >

                        {/* <Inputfield text="Email" keyboardType="email-address" /> */}
                        <TextInput  keyboardType={'email-address'}  style={styles.inputfield} placeholder="enter email"
                            onChangeText={(email) => { this.setState({ email }) }}
                        />
                        
                        {/* <Inputfield text="Password" /> */}
                        <TextInput style={styles.inputfield} placeholder="enter password" secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }}
                        />
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Forgetpass')}>

                            <Text style={{alignSelf:'flex-end',paddingHorizontal:20,paddingTop:10,color:'blue'}}>Forget password</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.addToReduc()} style={styles.text} >
                            <Text style={{ color: 'white', }}>Login</Text>
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
        width: "90%"
    },
    inputfield: {
        width: '90%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        padding: 0, margin: 0,
        fontFamily: 'Poppins',
        marginTop: 20,
        color: "#97AABD",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10






    },

});




























export default Login