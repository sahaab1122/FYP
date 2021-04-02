import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default (props) => {
    return (

        <TouchableOpacity onPress={() => props.onPress()} style={[styles.text, { backgroundColor: props.colr ? props.colr : props.color, width: props.width, }]}>
            <Text style={{ color: 'white', alignItems: 'center' }}>{props.icon}{props.text}{props.backgoundColorr}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    text: {


        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',

        marginTop: 10,
        height: 43,

        backgroundColor: 'red',
        borderRadius: 3,





    },
});