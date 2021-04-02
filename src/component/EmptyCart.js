
       import React from 'react';
       import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
       import { FontAwesome } from '@expo/vector-icons';
       import { Octicons } from '@expo/vector-icons';
       import { Ionicons } from '@expo/vector-icons';
       import { FontAwesome5 } from '@expo/vector-icons';
       import { AntDesign } from '@expo/vector-icons';
       
       export default (props) => {
           return (
       
            <View>
                    <View style={{alignSelf:'center',padding:20}}>
           <Image source={require('../../assets/Texture.png')}/>
       </View>
       <View>
           <Text style={{textAlign:'center',padding:20,fontSize:22,fontFamily:'Poppins'}}>Your Shopping Card{"\n"} is Empty</Text>
       </View>
            </View>
         
           
           )
       }
       
       const styles = StyleSheet.create({
       
       
           view: {
               backgroundColor: '#f5f8fa',
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-evenly',
               width: '90%',
        
               alignSelf: 'center',
               borderBottomLeftRadius: 16,
               borderBottomRightRadius: 16,
               paddingVertical:15
       
           }
       
       
       
       
       
       
       });