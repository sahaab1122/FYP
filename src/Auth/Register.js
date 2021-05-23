
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Middle from '../component/Middle';
import Btn from '../component/Btn';
import Lets from '../component/Lets';
import Inputfield from '../component/Inputfield';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import api from '../api/api';
import path from '../api/path';

class Register extends React.Component {
    
//   async  componentDidMount(){
//     let param = {
//         "email":"sajaaj",
//         "password": "12345678",
//         "firstName":'sahaab ',
//         "lastName":'sabir',
//         "Phone":'000',

//     }
//      await api(path.register, "POST",param).then((res)=>
//      console.log(res))
  
// }
    constructor() {
        super();
        this.state = {
            Fname: '',
            Lname: '',
            email: '',
            password: '',
            Cpassword: '',
            phone: '',

        }
    }
    addToReduc =async () => {

        if (this.state.Fname == '') {
            alert('Please write First Name')
        }

        else if (this.state.Lname == '') {
            alert('Please write Last Name  ')
        }
        else if (this.state.email == '') {
            alert('Please write Email  ')
        }
        else if (this.state.password == '') {
            alert('Please write PASSWORD  ')
        }
        else if (this.state.Cpassword == '') {
            alert('Please write Confirm PASSWORD  ')
        }
        else if (this.state.phone == '') {
            alert('Please write Phone and Email  ')
        }
        else {
            let param = {
                "firstName": this.state.Fname, 
                "lastName": this.state.Lname,
                "phone": this.state.phone, 
                "email": this.state.email,
                "password": this.state.password,
            }
            let response =  await api(path.register, "POST",param)
            // alert(response.message)
            console.log(response.message)
        }




    }
 
    registerHandler = async (e) => {
        e.preventDefault()
        if (this.state.password !== this.state.confirmPassword) {
            return alert('Passeord not match')
        }
        this.props.setLoading(true)
        let user = {
            firstName: this.state.Fname.trim(),
            lastName: this.state.Lname.trim(),
            phone: this.state.phone.trim(),
            email: this.state.email.trim(),
            password: this.state.password,
            Cpassword: this.state.Cpassword,
           
           
            
        }
        let res = await api.registerUser(user)
        if (res) {
            await this.props._login(this.state.email, this.state.password)
            window.location.replace("/")


        }
        this.props.setLoading(false)
    }
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

                <ImageBackground resizeMode='stretch' source={require('../../assets/LogBack.png')} style={{
                    width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                }} />

                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >
                    <Text style={{ fontFamily: 'sp', fontSize: 23, textAlign: 'center' }}>Mughal</Text>
                    <Lets />

                    <View style={{ width: '100%' }} >
                        {/* <TouchableWithoutFeedback onPress={keyboard.dismiss}/> */}
                        {/* <Inputfield text="First Name" /> */}
                        <TextInput style={styles.inputfield} placeholder="First Name"
                            onChangeText={(Fname) => { this.setState({ Fname }) }}
                        />
                        {/* <Inputfield text="Last Name" /> */}
                        <TextInput style={styles.inputfield} placeholder="Last Name"
                            onChangeText={(Lname) => { this.setState({ Lname }) }}
                        />
                        {/* <Inputfield  text="Phone or Mail" /> */}
                        <TextInput  keyboardType={'email-address'}  style={styles.inputfield} placeholder="Phone or Mail"
                            onChangeText={(phone) => { this.setState({ phone }) }}
                        />
                        {/* <Inputfield text="Email" keyboardType="email-address" /> */}
                        <TextInput keyboardType={'email-address'} style={styles.inputfield} placeholder="Email" 
                            onChangeText={(email) => { this.setState({ email }) }}
                        />
                        {/* <Inputfield text="Password" /> */}
                        {/* <View style={[styles.inputfield,{justifyContent:'center'}]} >
                        <Ionicons name="eye-off-outline" size={24} color="black" style={{position:'absolute',right:20,zIndex:1,}} />
                        <TextInput style={{fontFamily:'Poppins'}}  placeholder="Password" secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }} 
                            />
                            </View> */}
                             <TextInput style={styles.inputfield} placeholder="Password" secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }}
                        />
                        {/* <Inputfield text="Confirm Password" /> */}
                        <TextInput style={styles.inputfield} placeholder="Confirm Password" secureTextEntry={true}
                            onChangeText={(Cpassword) => { this.setState({ Cpassword }) }}
                        />
                        
                        {/* <Btn onPress={() => this.props.navigation.navigate('Login')}  text="Register" color='#000DAE' width="90%" /> */}
                        <TouchableOpacity onPress={() => this.addToReduc()} style={styles.text} >
                            <Text style={{ color: 'white', }}>Register</Text>
                        </TouchableOpacity>
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
        // color: "#97AABD",
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        






    },






});





























export default Register