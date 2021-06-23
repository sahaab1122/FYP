
import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Btn from './Btn';
import AddCart from './AddCart';
import AddToFavorite from './AddToFavorite';
export default ({ item }) => {
    return (

        <View style={{ height: 100, justifyContent: 'center', width: '90%', alignSelf: 'center', backgroundColor: '#F5F8FA' }}>
            <View style={{ position: 'absolute', right: 10, top: 10 }}><AddToFavorite /></View>
            <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                <Image source={{ uri: item.image[0] }} style={{ alignSelf: 'center', height: '100%', width: '35%' }} />


                <View style={styles.thrdview}>

                    <Text style={{ fontSize: 16 }}>{item.name}</Text>
                    <Text style={{ fontSize: 11 }}>{item.price}</Text>


                    <AddCart product={item} />



                </View>
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
        paddingVertical: 15

    },
    thrdview: {
        padding: 10,

        flex: 1

    },






});