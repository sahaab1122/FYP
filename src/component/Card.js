import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import AddToFavorite from './AddToFavorite' 
export default ({item,navigation,style}) => {
// console.log(props.navigation)
    return (



        <TouchableOpacity style={[{width:150,marginVertical:10,paddingHorizontal:10},style]} onPress={() =>  navigation.navigate('AddToCart', {item:item})}>

            <Image style={{width:"100%",height:108,resizeMode:'contain',backgroundColor:'#F5F8FA'}} source={{uri: item.image[0]? item.image[0].toString():"no"}}  />
            <View style={styles.secview}>
                <View style={styles.thrdview}>
                    <Text style={{ fontSize: 16 }}>{item.name}  </Text>
                    <Text style={{ fontSize: 11 }}>{item.price}</Text>
                </View>
                <AddToFavorite />
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    style1:{
        paddingLeft:10
    },
    style2:{

    },

    secview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'

    },
    thrdview: {
      

    },
    tuchable: {
        padding: 0,
    },







});