import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,TouchableOpacity,TextInput,Text, StyleSheet,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Smallchair from '../component/Smallchair';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class User extends React.Component {
    render() {
        return (
             
       
            <View style={{padding:20,flex:1,justifyContent:'space-evenly'}}>
                <TouchableOpacity style={{position:'absolute',right:25,top:25}}>

                <MaterialCommunityIcons name="account-edit-outline" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'flex-start'}}>

              <Image style={{borderRadius:60,width:100,height:100}} source={require('../../assets/profile.jpg')} />
              <Text style={{fontFamily:'sf',paddingLeft:10,textAlignVertical:'center',fontSize:26}}>
                  Anabella 
                  
              </Text>

                </View>
                <View style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <EvilIcons name="location" size={24} color="black" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        Faisalabad,Pak
                    </Text>
                    </View>
                    <View style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <Ionicons name="md-mail-unread-outline" size={24} color="black" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        annabella@gmail.com
                    </Text>
                    </View>
                    <View style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <Ionicons name="md-phone-portrait-outline" size={24} color="black" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        +923346612652
                    </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>

                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:1,width:'50%',height:70,borderColor:'#D1D1D2'}}>
                            
                            <Text style={{textAlignVertical:'center',fontSize:20}}>Favourite</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:1,width:'50%',height:70,borderColor:'#D1D1D2'}}>
                            
                            <Text style={{textAlignVertical:'center',fontSize:20}}>Orders</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',paddingVertical:10,marginTop:10}}>
                    <Text >
                    <EvilIcons name="heart" size={29} color="red" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        Your WishList
                    </Text>
                     </View>
                        <View style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <AntDesign name="contacts" size={24} color="red" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        Support
                    </Text>
                    </View>
                    <View style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <EvilIcons name="share-google" size={24} color="red" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        Share 
                    </Text>
                    </View>
                    



            </View>
        )
    };
}
const styles = StyleSheet.create({

   row: {
        flexDirection: 'row',
        marginBottom: 10,
      }


});
export default User