import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default (props) => {
    return (


        <View   style={{position: 'absolute',zIndex:10,alignSelf:'center',backgroundColor:'#F5F8FA' ,bottom:props.btm  }}>
            <View style={styles.view} >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Home')}>
                        <Octicons name="home" size={24} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Home')}>
                        <Text style={{ paddingLeft: 9, color: 'blue', marginTop: 5 }}>Home</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Ionicons name="search-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('AddToCart')}>
                <FontAwesome name="opencart" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('User')}>
                    <AntDesign name="user" size={24} color="black" />
                </TouchableOpacity>
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