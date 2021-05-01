import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import AddToCart from '../screen/AddToCart';

import AddToFavorite from './AddToFavorite'
import chair from '../../assets/Chair1.png'
export default (props) => {
// console.log(props.navigation)
    return (



        <TouchableOpacity style={[{width:150,marginVertical:10,paddingHorizontal:10},props.style]} onPress={() => props.navigation.navigate('AddToCart', {item:props.item})}>

            <Image style={{width:"100%",height:108,resizeMode:'contain',backgroundColor:'#F5F8FA'}} source={props.item.image[0]}  />
            <View style={styles.secview}>
                <View style={styles.thrdview}>
                    <Text style={{ fontSize: 16 }}>{props.item.name}  </Text>
                    <Text style={{ fontSize: 11 }}>{props.item.price}</Text>
                </View>
                <AddToFavorite />
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    style1:{
        paddingLeft:10
    },
    style2:{

    },

    secview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'

    },
    thrdview: {
      

    },
    tuchable: {
        padding: 0,
    },







});