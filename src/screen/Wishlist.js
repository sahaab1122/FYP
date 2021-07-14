import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Smallchair from '../component/Smallchair';
import { FontAwesome } from '@expo/vector-icons';
import Btn from '../component/Btn';
import AddToFavorite from '../component/AddToFavorite';
import CartPrice from '../component/CartPrice';
import { connect } from 'react-redux';
import Card from '../component/Card';

class Wishlist extends React.Component {
    render(prop) {
        return (


            <View style={{ paddingTop: 20, paddingBottom: 10}}>
                <ImageBackground resizeMode='stretch' source={require('../../assets/LogBack.png')} style={{
                    width: "100%", height: '100%', minHeight: Dimensions.get('window').height, position: 'absolute', alignItems: 'center',

                }} />
                <View style={{ backgroundColor: '#F5F8FA', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={{ fontFamily: 'Poppins', fontSize: 20, paddingHorizontal: 20, alignSelf: 'center' }}>
                        Watch List
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyCart')} style={{ alignSelf: 'center', paddingRight: 20 }}>
                        <FontAwesome name="opencart" size={24} color="black" />
                    </TouchableOpacity>

                </View>


                {/* <View style={{}}>
            <Btn onPress={()=>this.props.navigation.navigate('MyCart')} text="Add to Cart" color='#000DAE' width="100%" />
            </View> */}
                {/* <View >

                    <TouchableOpacity style={{ backgroundColor: '#000DAE', width: '100%', height: 43, justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins' }}>
                        <Text style={{fontSize:20,color:'white'}}>Add all to Cart</Text>
                    </TouchableOpacity>
                </View> */}
                <ScrollView  showsHorizontalScrollIndicator={false} >
                    <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal:20 }}>
                        {
                            this.props.fav.map((item, index) =>
                                <Card key={index} navigation={this.props.navigation} item={item} />
                            )
                        }
                    </View>
                </ScrollView>
                {/* <View style={{ position: 'absolute', zIndex: 10, bottom: 80, alignSelf: 'center', textAlign: 'center', width: '80%' }}>
                    <Btn onPress={() => this.props.navigation.navigate('MyCart')} text="Add all to Cart" color='#000DAE' width="100%" />
                </View> */}
            </View>

        )
    };
}
{/* // const styles = StyleSheet.create({ */ }

//    row: {
//         flexDirection: 'row',
//         marginBottom: 10,
//       }


// });

const mapState = state => ({
    fav: state.appReducer.favourites
})
const mapDispatch = dispatch => ({
    // fav: state.appReducer.favourites
})

export default connect(mapState, mapDispatch)(Wishlist)