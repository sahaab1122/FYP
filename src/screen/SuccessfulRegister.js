
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView, Alert } from 'react-native';
// import Middle from '../component/Middle';
// import Btn from '../src/component/Btn';
// import Lets from '../src/component/Lets';
// import Inputfield from '../src/component/Inputfield';
import { EvilIcons } from '@expo/vector-icons';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { set } from 'react-native-reanimated';




class SuccessfulRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            code: '',
            Matchcode:''
         
            
        }
    }
    addToReduc = (code) => {
       console.log(code)
        if ( code === this.state.Matchcode) {
            this.props.navigation.navigate('Home')
            
        }
        
       
        else  {
            alert('Please write code')
        }
       



    }
    componentDidMount(){
        console.log(this.props.route.params);
        this.setState({ Matchcode:this.props.route.params.itemId })
    }
    render( ) {

        console.log(this.state.Matchcode)
        return (

            <View style={{ height: '100%', justifyContent: 'space-evenly' }}>

                <ImageBackground resizeMode='stretch' source={require('../../assets/LogBack.png')} style={{
                    width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                }} />


                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >
                    {/* <Image style={{width:'50%',height:150,}} source={require('../../assets/q.png')} /> */}

                    <View>
                        <View>
                            <EvilIcons name="check" size={84} color="black" style={{ alignSelf: 'center' }} />
                            <Text style={{ textAlign: 'center', fontSize: 32, fontFamily: 'Poppin' }}>Verification Code Sent{'\n'}To Your Email</Text>
                            <Text style={{ textAlign: 'center', fontFamily: 'Poppins', fontSize: 15 }}>Please Check Your Email{'\n'}And Recover Your {'\n'}Password</Text>
                        </View>
                        <View style={{justifyContent:'center',alignSelf:'center'}}>
                            <SmoothPinCodeInput
                                cellStyle={{
                                    borderBottomWidth: 2,
                                    borderColor: 'gray',
                                }}
                                cellStyleFocused={{
                                    borderColor: 'black',
                                }}
                                value={ this.state.code}
                                onTextChange={code => this.setState({ code })}
                                onFulfill ={code => this.addToReduc(code)}

                            />
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




























export default SuccessfulRegister