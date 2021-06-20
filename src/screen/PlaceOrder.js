
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageBackground, uri, StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Btn from '../component/Btn';
import Smallchair from '../component/Smallchair';
import { connect } from 'react-redux';


class PlaceOrder extends React.Component {

    getTotal = () => {
        let total = 0
        let products = this.props.products;
        products.forEach(item => {
            total = total + item.price * item.quantity
        })
        return total

    }

    render() {
        return (

            <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'space-evenly', padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Entypo name="cross" size={24} color="black" />

                    </TouchableOpacity>
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
                    {
                        this.props.products.map((item, index) =>
                            <View key={index} style={{ padding: 20 }}><Smallchair item={item} /></View>
                        )
                    }
                </ScrollView>

                <View style={{ borderBottomWidth: 1, height: 5, width: '100%', borderBottomColor: '#97aabd' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Total:</Text>
                    <Text>{this.getTotal()}</Text>
                </View>
                <View  >
                    <Btn onPress={() => this.props.navigation.navigate('CompleteOrder')} text="Place Order" color='#000DAE' width="100%" />
                </View>




            </View>


        )


    }
}
const mapState = state => {
    return {
        products: state.cartReducer.products,

    }
}

export default connect(mapState,)(PlaceOrder)