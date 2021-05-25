import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,TouchableOpacity,TextInput,Text, StyleSheet,Image,Linking} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Smallchair from '../component/Smallchair';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { connect } from 'react-redux';
import { _login } from '../store/middlewares/authMiddleware';

class User extends React.Component {
    // componentDidMount() {
    //     console.log(this.props.user)
    //     alert(this.props.user.email)
    // }
    constructor() {
        super();
        this.state = {
            name: '',
            email: ' ',
            phone: '',

        }
    }
    render() {
        return (
             
       
            <View style={{padding:20,flex:1,justifyContent:'space-evenly'}}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Edituser')}  style={{position:'absolute',right:25,top:25}}>

                <MaterialCommunityIcons name="account-edit-outline" size={26} color="black" />
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'flex-start'}}>

              <Image style={{borderRadius:60,width:100,height:100}} source={   require('../../assets/profile.jpg')} />
              <Text style={{fontFamily:'sf',paddingLeft:10,textAlignVertical:'center',fontSize:26}}>
                  {this.props.user.firstName}
                  
              </Text>

                </View>
                <View style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <EvilIcons name="location" size={24} color="black" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        {this.props.user.city}
                    </Text>
                    </View>
                    <View style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <Ionicons name="md-mail-unread-outline" size={24} color="black" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>{this.props.user.email}</Text>
                    </View>
                    <View style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <Ionicons name="md-phone-portrait-outline" size={24} color="black" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        {this.props.user.phone}
                    </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Wishlist')} style={{justifyContent:'center',alignItems:'center',borderWidth:1,width:'50%',height:70,borderColor:'#D1D1D2'}}>
                            
                            <Text style={{textAlignVertical:'center',fontSize:20,fontFamily:'Poppins'}}>Favourite</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderWidth:1,width:'50%',height:70,borderColor:'#D1D1D2'}}>
                            
                            <Text style={{textAlignVertical:'center',fontSize:20,fontFamily:'Poppins'}}>Orders</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Wishlist')} style={{flexDirection:'row',paddingVertical:10,marginTop:10}}>
                    <Text >
                    <EvilIcons name="heart" size={29} color="red" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        Your WishList
                    </Text>
                     </TouchableOpacity>
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
                    <TouchableOpacity onPress={()=> Linking.openURL('whatsapp://send?text=hello&phone=+923346612652') }style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <MaterialCommunityIcons name="whatsapp" size={24} color="red" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        Whatsapp 
                    </Text>
                    </TouchableOpacity >
                    <View style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <MaterialCommunityIcons name="instagram" size={24} color="red" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        Instagram
                    </Text>
                    </View>
                    <TouchableOpacity onPress={()=> Linking.openURL('https://www.facebook.com/Furniture-Shop-105691648354389')} style={{flexDirection:'row',paddingVertical:10}}>
                    <Text>
                    <MaterialCommunityIcons name="facebook" size={24} color="red" />
                    </Text>
                    <Text style={{paddingLeft:10,fontFamily:'Poppins'}}>
                        Facebook
                    </Text>
                    </TouchableOpacity >
                    



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
const mapState = state => {
    return {
        logged: state.authReducer.logged,
        user: state.authReducer.user,

    }
}
const mapDispatch = dispatch =>{
    return{
        _login:(param) => dispatch(_login(param)),
        setLoading: (bol) => dispatch(_setLoading(bol)),


    }
}
export default connect(mapState,mapDispatch)(User)