
import React from 'react';
// import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView, Image } from 'react-native';
// import Middle from '../component/Middle';
import * as ImagePicker from 'expo-image-picker';

 
import { Entypo } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { _login, _updateuser } from '../store/middlewares/authMiddleware';


class Edituser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            city: "",
            phone: "",
            id:props.user._id
        }
    }
    componentDidMount() {
        this.setState(this.props.user)
        // this.setState({ firstName: user.firstName })
        // this.setState({ lastName: user.lastName })
        // this.setState({ city: user.city })
        // this.setState({ phone: user.phone })  // let user = this.props.user
      
    }

    // openImagePickerAsync = async () => {
    //     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();


    //     let pickerResult = await ImagePicker.launchImageLibraryAsync();
       
    //     this.setState({ image: pickerResult.uri })
    // }
    

 

     
    updateUser = async (e) => {

        // this.props.setLoading(true)
        let param = {
            "firstName": this.state.Fname,
            "lastName": this.state.Lname,
            "phone": this.state.phone,
            "city": this.state.city,
        }
      
      let res = await this.props._updateuser(param,this.state._id)

        // this.props.setLoading(false)
    }
    //     else {
    //         let param = {
    //             "firstName": this.state.Fname, 
    //             "lastName": this.state.Lname,
    //             "phone": this.state.phone, 
    //             "email": this.state.email,
    //             "password": this.state.password,
    //         }
    //         let response =  await api(path.register, "POST",param)
    //         // alert(response.message)
    //         console.log(response.message)
    //         alert(response.message)
    //     }




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

                <ImageBackground resizeMode='stretch' source={require('../../assets/LogBack.png')} style={{
                    width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                }} />

                <ScrollView contentContainerStyle={{ minHeight: Dimensions.get('window').height, justifyContent: 'space-evenly' }} showsVerticalScrollIndicator={false} >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ position: 'absolute', left: 20, top: 30 }}><Entypo name="cross" size={24} color="#171717" /></TouchableOpacity>
                    <Text style={{ fontFamily: 'sp', fontSize: 23, textAlign: 'center' }}>Edit your profile</Text>


                    <TouchableOpacity onPress={this.openImagePickerAsync} style={{ backgroundColor: '#F5F8FA', borderRadius: 120, width: "27%", height: 110, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Image source={{ uri: this.state.image || null }} style={{ width: '100%', height: "100%" ,borderRadius:120}} />
                    </TouchableOpacity>




                    {/* <Lets /> */}

                    <View style={{ width: '100%' }} >
                        {/* <TouchableWithoutFeedback onPress={keyboard.dismiss}/> */}
                        {/* <Inputfield text="First Name" /> */}
                        <TextInput style={styles.inputfield} value={this.state.firstName}
                            placeholder="First Name"
                            onChangeText={(firstName) => { this.setState({ firstName }) }}>

                        </TextInput>




                        <TextInput style={styles.inputfield} value={this.state.lastName}
                            placeholder="Last Name"
                            onChangeText={(lastName) => { this.setState({ lastName }) }}>
                        </TextInput>

                        <TextInput style={styles.inputfield} value={this.state.city}

                            onChangeText={(city) => { this.setState({ city }) }}>

                        </TextInput>

                        <TextInput keyboardType={'phone-pad'} style={styles.inputfield} value={this.state.phone}

                            onChangeText={(phone) => { this.setState({ phone }) }}
                        >
                        </TextInput>

            
                        <TouchableOpacity onPress={() => this.updateUser()} style={styles.text} >
                            <Text style={{ color: 'white', }}>Confirm</Text>
                        </TouchableOpacity>
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Btn text="FaceBook" color='#97aabd' width="43%" />
                            <Btn text="Google" color='#97aabd' width="43%" />

                        </View> */}

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

const mapState = state => {
    return {
        logged: state.authReducer.logged,
        user: state.authReducer.user,
    }

}
const mapDispatch = dispatch => {
    return {
        _updateuser: (param, _id) => dispatch(_updateuser(param, _id)),
        setLoading: (bol) => dispatch(_setLoading(bol)),
    }
}


export default connect(mapState, mapDispatch)(Edituser)