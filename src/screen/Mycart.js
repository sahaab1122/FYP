
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import BottomHeader from '../component/BottomHeader'
import EmptyCart from '../component/EmptyCart';
import CartPrice from '../component/CartPrice';
import Btn from '../component/Btn'
import { connect } from 'react-redux';


class MyCart extends React.Component {


    getTotal = () => {
        let total = 0
        let products = this.props.products;
        products.forEach(item => {
            total = total + item.price *item.quantity
        })
        return total

    }


    render() {
        return (

            <View style={styles.Container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 30 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Entypo name="cross" size={24} color="#171717" /></TouchableOpacity>
                    <Text style={{ fontSize: 22, color: '#000', fontFamily: 'Poppins', paddingLeft: 10 }}>My Cart</Text>
                </View>

                {
                    this.props.products.map((item, index) =>
                        <CartPrice item={item} key={index} />
                    )
                }
                <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        <Text>Total:</Text>
                        <Text>{this.getTotal()}</Text>
                    </View>

                </View>

                <Btn onPress={() => this.props.navigation.navigate('PlaceOrder')} text="Checkout" color='#000DAE' width="90%" />


                <View
                ><BottomHeader navigation={this.props.navigation} btm={-380} /></View>

            </View>


        )
    };
}
const styles = StyleSheet.create({

    Container: {

        backgroundColor: '#fff',
        flex: 1,

    },

});

const mapState = state => {
    return {
        products: state.cartReducer.products,

    }
}

export default connect(mapState,)(MyCart)