
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
// import Middle from '../component/Middle';
// import Btn from '../src/component/Btn';
// import Lets from '../src/component/Lets';
// import Inputfield from '../src/component/Inputfield';
import { EvilIcons } from '@expo/vector-icons';




class Forgetpass extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            email: '',

        }
    }
    addToReduc = () => {

        if (this.state.email == '') {
            alert('Please write Email')
        }

        else if (this.state.password == '') {
            alert('Please write PASSWORD  ')
        }
        else {
            this.props.navigation.navigate('Home')
        }




    }

    render() {
        return (

            <View style={{ height: '100%', justifyContent: 'space-evenly' }}>

                <ImageBackground resizeMode='stretch' source={require('../../assets/LogBack.png')} style={{
                    width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                }} />


                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >
                    {/* <Image style={{width:'50%',height:150,}} source={require('../../assets/q.png')} /> */}
                    
                    <View>
                        <View>
                        < EvilIcons style={{alignSelf:'center'}} name="question" size={84} color="black" />
                            <Text style={{ textAlign: 'center', fontSize: 32, fontFamily: 'Poppin' }}>Forget Your Password?</Text>
                            <Text style={{ textAlign: 'center', fontFamily: 'Poppins', fontSize: 15 }}>Enter your Email Address to{'\n'}to recieve your password</Text>
                        </View>
                    </View>


                    <View style={{ width: '100%' }} >

                        {/* <Inputfield text="Email" keyboardType="email-address" /> */}
                        <TextInput keyboardType={'email-address'} style={styles.inputfield} placeholder="enter your email or phone#"
                            onChangeText={(email) => { this.setState({ email }) }}
                        />



                        <TouchableOpacity onPress={() => this.addToReduc()} style={styles.text} >
                            <Text style={{ color: 'white', }}>Next</Text>
                        </TouchableOpacity>
                        {/* <Btn onPress={() => this.props.navigation.navigate('Home')} text="Login" color='#000DAE' width="90%" /> */}


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




























export default Forgetpass