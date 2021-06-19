
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import { Carousal } from '../component/Carousel';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Btn from '../component/Btn'
import { AntDesign } from '@expo/vector-icons';
import AddCart from '../component/AddCart'




class AddToCart extends React.Component {
    componentDidMount() {
        // console.log(this.props.route.params);
        this.setState({ Matchcode: this.props.route.params.itemId })
    }
    render() {

        const item = this.props.route.params.item
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Entypo name="cross" size={24} color="#A8A8A8" /></TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('MyCart')}><FontAwesome5 name="location-arrow" size={20} color="#A8A8A8" /></TouchableOpacity>
                </View>

                <Carousal active='#000' inActive='#D9D9D9' height={300} images={item.image} />



                <Text style={{ paddingHorizontal: 20, fontSize: 28, fontFamily: 'Poppins' }}>
                    Name: {item.name}
                </Text>
                <Text style={{ paddingHorizontal: 20, fontSize: 15, fontFamily: 'Poppins', color: '#5A5A5A' }}>
                    Price: {item.price}
                </Text>
                <View>
                    <Text style={{ fontSize: 20, paddingTop: 10, paddingHorizontal: 20 }}>
                        Description:
                    </Text>
                    <Text style={{ paddingHorizontal: 20, color: '#5A5A5A' }}>

                        {item.description}
                    </Text>


                </View>


                {/* <Btn onPress={()=>this.props.navigation.navigate('MyCart')} text="Add to Cart" color='#000DAE' width="100%" /> */}


                <View style={{ flex: .8, justifyContent: 'flex-end' }}>


                    <AddCart />
                </View>



            </View>

        )


    }
}





export default AddToCart