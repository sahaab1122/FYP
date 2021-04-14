import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,TouchableOpacity,TextInput,Text, StyleSheet,} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Smallchair from '../component/Smallchair';


class Favorite extends React.Component {
    render() {
        return (
            <View style={{}}>
                 <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }} >
                    <View style={{ padding: 20 }}><Smallchair /></View>
                    <View style={{ padding: 20 }}><Smallchair /></View>
                    <View style={{ padding: 20 }}><Smallchair /></View>
                </ScrollView>
            </View>
        )
    };
}
// const styles = StyleSheet.create({

//     main:{
        
//         backgroundColor:'red',
        
//     }
// });
export default Favorite