
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';




export default ({ item }) => {

    return (


        <View style={{ flexDirection: 'row', backgroundColor: '#f5f8fa', width: 200, height: 80, alignItems: 'center' }}>

            <Image source={{ uri: item.image[0] }} style={{ height: '55%', width: '25%' }} />

            <View >
                <Text style={{ fontSize: 16, paddingRight: 20 }}>{item.name}</Text>
                <Text style={{ fontSize: 11, paddingRight: 20 }}>{item.price} x {item.quantity}</Text>
            </View>
        </View>



    )

}
