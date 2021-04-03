import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default (props) => {
    return (



        <TextInput placeholder={props.place} style={styles.inputfield}   >{props.text}</TextInput>

    )
}

const styles = StyleSheet.create({

    inputfield: {
        width: '90%',
        height: 43,
        borderRadius: 3,
        backgroundColor: '#F5F8FA',
        borderColor: '#97aabd',
        borderWidth: 1,
        padding: 0, margin: 0,
        fontFamily: 'Poppins',
        marginTop: 25,
        color: "#97AABD",
        alignSelf: 'center', 
        alignItems: 'flex-start',
        paddingHorizontal:10
        





    },






});