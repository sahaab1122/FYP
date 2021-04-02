
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Btn from '../component/Btn';
import Smallchair from '../component/Smallchair';


class PlaceOrder extends React.Component {
    render() {
        return (

            <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'space-evenly', padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Entypo name="cross" size={24} color="black" />
                    <Entypo name="plus" size={24} color="black" />
                </View>
                <View>
                    <Image style={{ width: '83%', height: 210, alignSelf: 'center' }} source={require('../../assets/COD2.png')} />
                </View>
                <View style={{ borderBottomWidth: 1, height: 5, width: '100%', borderBottomColor: '#97aabd' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}><EvilIcons name="location" size={24} color="black" />
                        <Text>
                            Shipping
                    </Text>
                    </View>
                    <View >
                        <Entypo name="plus" size={24} color="black" />
                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <Btn text="Home" color="#00086D" width='48%' />
                    <Btn text="JOB" color="#000" width='48%' />

                </View>
                <View style={{ borderBottomWidth: 1, height: 5, width: '100%', borderBottomColor: '#97aabd' }} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }} >
                    <View style={{ padding: 20, paddingLeft: 0 }}><Smallchair /></View>
                    <View style={{ padding: 20 }}><Smallchair /></View>
                    <View style={{ padding: 20 }}><Smallchair /></View>
                </ScrollView>

                <View style={{ borderBottomWidth: 1, height: 5, width: '100%', borderBottomColor: '#97aabd' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Total:</Text>
                    <Text>$900</Text>
                </View>
                <View  >
                    <Btn text="Place Order" color='#000DAE' width="100%" />
                </View>




            </View>


        )


    }
}





























export default PlaceOrder