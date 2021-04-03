import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Card from '../component/Card'
import Inputfield from '../component/Inputfield';
import BottomHeader from '../component/BottomHeader';



const Home = (props) => {

    return (

        <View style={styles.Container}>
            <BottomHeader navigation={props.navigation} btm={80} />
            <Inputfield place='Search Now' />
            <ScrollView    >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{ padding: 20 }}><Text style={{ fontFamily: 'sp', fontSize: 12 }}>Chair.</Text></TouchableOpacity>
                    <TouchableOpacity style={{ padding: 20 }}><Text>Cupboard</Text></TouchableOpacity>
                    <TouchableOpacity style={{ padding: 20 }}><Text>Table</Text></TouchableOpacity>
                    <TouchableOpacity style={{ padding: 20 }}><Text>Accesso</Text></TouchableOpacity>
                    <TouchableOpacity style={{ padding: 20 }}><Text>Furniture</Text></TouchableOpacity>
                    <TouchableOpacity style={{ padding: 20 }}><Text>Elighte</Text></TouchableOpacity>

                </ScrollView>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
                    {
                        Array(5).fill().map((item, index) =>
                            <Card style={{ marginRight: 10 }} key={index} />
                        )
                    }


                </ScrollView>
                <View>

                    <Text style={{ paddingLeft: 17, fontSize: 22, fontFamily: 'sf' }}>
                        Best Products
              </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Card />
                    <Card />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Card />
                    <Card />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Card />
                    <Card />
                </View>

            </ScrollView>




        </View>


    )
};

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20




    },















});
export default Home