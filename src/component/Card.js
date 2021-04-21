import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import AddToCart from '../screen/AddToCart';

import AddToFavorite from './AddToFavorite'

export default (props) => {
    return (



        <View style={[{width:150,marginVertical:10},props.style]}>

            <Image style={{width:"100%",resizeMode:'contain',backgroundColor:'#F5F8FA'}} source={props.Image} />
            <View style={styles.secview}>
                <View style={styles.thrdview}>
                    <Text style={{ fontSize: 16 }}>Chair  </Text>
                    <Text style={{ fontSize: 11 }}>$1600</Text>
                </View>
                <AddToFavorite />
            </View>

        </View>

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