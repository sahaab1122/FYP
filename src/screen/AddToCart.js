
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
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Entypo name="cross" size={24} color="#A8A8A8" /></TouchableOpacity>
                    <TouchableOpacity><FontAwesome5 name="location-arrow" size={20} color="#A8A8A8" /></TouchableOpacity>
                </View>
                
                    <Carousal active='#000' inActive='#D9D9D9' height={300} images={this.props.route.params.item.image} />


                
                    <Text style={{ paddingHorizontal:20, fontSize: 28, fontFamily: 'Poppins' }}>
                        Name: {this.props.route.params.item.name}
                    </Text>
                    <Text style={{paddingHorizontal:20, fontSize: 15, fontFamily: 'Poppins', color: '#5A5A5A' }}>
                        Price: {this.props.route.params.item.price}
                    </Text>
                    <View>
                        <Text style={{fontSize:20,paddingTop:10,paddingHorizontal:20}}>
                            Description:
                        </Text>
                        <Text style={{paddingHorizontal:20,color: '#5A5A5A'}}>
                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Text>


                    </View>
                

                {/* <Btn onPress={()=>this.props.navigation.navigate('MyCart')} text="Add to Cart" color='#000DAE' width="100%" /> */}
               

                <View style={{flex:.8,justifyContent:'flex-end'}}>

                    
                        <AddCart />
                </View>
              

                
            </View>

        )


    }
}





























export default AddToCart