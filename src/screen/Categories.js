
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Middle from '../component/Middle';
import Btn from '../component/Btn';
import { Entypo } from '@expo/vector-icons';
// import *as animation from 'react-native-animatable'




class Categories extends React.Component {
    render() {
        return (


            <ImageBackground source={require('../../assets/B1.png')} style={{ flex: 1, paddingHorizontal: 10 }}>

                <View style={{ position: 'absolute', left: 10, top: 30 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Entypo name="cross" size={24} color="#171717" /></TouchableOpacity>
                </View>




                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 30, justifyContent: 'center' }}>

                    <Text style={{ fontSize: 22, color: '#000', fontFamily: 'Poppins', backgroundColor: 'cyan' }}>Logo</Text>
                </View>
                <View>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 29, color: '#707070' }}>
                        Table
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{height:150,width:'100%'}}>
                    <ImageBackground resizeMode={'stretch'} source={require('../../assets/122.png')} style={{  height: "100%",width:'100%' ,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}} >

                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                            </Text>
                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{height:150,width:'100%',paddingVertical:10}}>
                    <ImageBackground resizeMode={'stretch'} source={require('../../assets/122.png')} style={{  height: "100%",width:'100%' ,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}} >

                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                            </Text>
                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{height:150,width:'100%'}}>
                    <ImageBackground resizeMode={'stretch'} source={require('../../assets/122.png')} style={{  height: "100%",width:'100%' ,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}} >

                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                            </Text>
                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{height:150,width:'100%',paddingTop:10}}>
                    <ImageBackground resizeMode={'stretch'} source={require('../../assets/122.png')} style={{  height: "100%",width:'100%' ,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}} >

                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                            </Text>
                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{height:150,width:'100%',paddingVertical:10}}>
                    <ImageBackground resizeMode={'stretch'} source={require('../../assets/122.png')} style={{  height: "100%",width:'100%' ,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}} >

                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                            </Text>
                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{height:150,width:'100%',paddingBottom:10}}>
                    <ImageBackground resizeMode={'stretch'} source={require('../../assets/122.png')} style={{  height: "100%",width:'100%' ,flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}} >

                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                            </Text>
                        <Text style={{color:'white',padding:10,fontSize:21,fontFamily:'Poppins'}}>
                            hello
                        </Text>
                    </ImageBackground>
                </View>

                </ScrollView>

            </ImageBackground>

        )


    }
}





























export default Categories