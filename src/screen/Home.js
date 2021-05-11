import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Card from '../component/Card'
import Inputfield from '../component/Inputfield';
import BottomHeader from '../component/BottomHeader';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Chair from '../../assets/BigChair1.png'
import Chair1 from '../../assets/BigChair1.png'
import Chair2 from '../../assets/BigChair1.png'
// import sofa from '../../assets/BigChair1.png'
import sofa1 from '../../assets/product/sofa1.jpg'
import sofa2 from '../../assets/product/sofa2.jpg'
import sofa3 from '../../assets/product/sofa3.jpg'
import sofa4 from '../../assets/product/sofa4.jpg'
import sofa5 from '../../assets/product/sofa5.jpg'
import sofa6 from '../../assets/product/sofa6.jpg'
import sofa7 from '../../assets/product/sofa7.jpg'
import Chair10 from '../../assets/product/chair10.jpg'
import Chair11 from '../../assets/product/chair11.jpg'
import Chair12 from '../../assets/product/chair12.jpg'
import table1 from '../../assets/product/table1.jpg'




class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            chair11: [
                {
                    name: 'Chair',
                    price: '1600$',
                    image: [
                        sofa1, sofa2, sofa3
                    ]
                },
                {
                    name: 'Chair1',
                    price: '1600$',
                    image: [
                        Chair1, Chair, Chair2
                    ]
                },
                {
                    name: 'Chair2',
                    price: '1600$',
                    image: [
                        Chair1, Chair2, Chair
                    ]
                },
                {
                    name: 'Chair',
                    price: '1600$',
                    image: [
                        Chair1, Chair, Chair2
                    ]
                }
            ],
            chair10:[
                {
                    name:'sofa',
                    price:'400$',
                    image:[
                        Chair10,Chair11,Chair12
                     ]
                }

        ],
        chair12:[
            {
                name:'sofa',
                price:'400$',
                image:[sofa4,sofa5,sofa6 ]
            }

    ],
        Chair14:[
            {
                name:'Lsofa',
                price:'200$',
                image:[sofa7,sofa3,sofa7]
        }
    ],
        Table1:[
            {
                name:'Table',
                price:'100$',
                image:[table1]
            }
        ]



        }
    }
    render(props) {
        return (
            <View style={styles.Container}>
                <BottomHeader navigation={this.props.navigation} btm={50} />
                <Inputfield text='Search Now' />
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={{ padding: 20 }}><Text style={{ fontFamily: 'sp', fontSize: 12 }}>Chair.</Text></TouchableOpacity>
                        <TouchableOpacity   style={{ padding: 20 }}><Text>Cupboard</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Categories')} style={{ padding: 20 }}><Text>Table</Text></TouchableOpacity>
                        <TouchableOpacity style={{ padding: 20 }}><Text>Accesso</Text></TouchableOpacity>
                        <TouchableOpacity style={{ padding: 20 }}><Text>Furniture</Text></TouchableOpacity>
                        <TouchableOpacity style={{ padding: 20 }}><Text>Elighte</Text></TouchableOpacity>

                    </ScrollView>
                <ScrollView style={{ paddingHorizontal: 20, }}  >

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
                        
                        
                            {this.state.chair11.map((item, index) =>
                                
                                    <Card navigation={this.props.navigation} item={item} key={index} />
                                
                            )}
                        



                    </ScrollView>
                    {/* best Products */}
                    <View>
                        <Text style={{ paddingLeft: 17, fontSize: 22, fontFamily: 'sf' }}>
                            Best Products
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('AddToCart', {})}>
                            {/* <Card Image={require('../../assets/Chair2.png')} /> */}
                        </TouchableOpacity>
                        <TouchableOpacity>

                            {/* <Card Image={require('../../assets/Chair1.png')} /> */}
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                        {this.state.chair12.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index}  />
                        )}
                         {this.state.chair12.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index}  />
                        )}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                    {this.state.chair12.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index}  />
                        )}
                         {this.state.chair12.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index}  />
                        )}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                    {this.state.chair12.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index}  />
                        )}
                         {this.state.chair12.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index}  />
                        )}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                    {this.state.chair12.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index}  />
                        )}
                         {this.state.chair12.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index}  />
                        )}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                        {this.state.Chair14.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index} />
                        )}
                        {this.state.chair10.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index} />
                        )}
                    </View><View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                        {/* <Card />
                        <Card /> */}
                    </View>
                    <View>

                        {/* //Cupboard */}
                        <Text style={{ paddingLeft: 17, fontSize: 22, fontFamily: 'sf' }}>
                            Cupboard
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                        {this.state.Table1.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index} />
                        )}
                        { this.state.Table1.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index} />

                        )
                            
                        }
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                        {/* <Card /> */}
                        {/* <Card /> */}
                    </View>


                </ScrollView>





            </View>


        )
    };
}

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: '#fff',

        paddingTop: getStatusBarHeight()



    },















});
export default Home