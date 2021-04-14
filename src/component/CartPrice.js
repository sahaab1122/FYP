
import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Btn from './Btn';
import AddCart from './AddCart';
import AddToFavorite from './AddToFavorite';
export default (props) => {
    return (
        <View>
            <View style={{ backgroundColor: '#f8f8f8', height: 100, justifyContent: 'center', width: '90%', alignSelf: 'center' }}>
                <View style={{ position: 'absolute', right: 10, top: 10 }}><AddToFavorite /></View>
                <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                    <Image source={require('../../assets/Cartprice.png')} style={{ alignSelf: 'center' }} />
                    <View style={styles.thrdview}>

                        <Text style={{ fontSize: 16 }}>Scoutch Premium  </Text>
                        <Text style={{ fontSize: 11 }}>$1600</Text>
                        <Text style={{ padding: 10, paddingLeft: 0 }}>

                            <View style={{ flexDirection: 'row' }}>
                                <AddCart />

                            </View>

                        </Text>
                    </View>
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

    },






});