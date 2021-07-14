import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, SafeAreaView, KeyboardAvoidingView, Dimensions, Platform, ScrollView } from 'react-native';
import Card from '../component/Card'
import Inputfield from '../component/Inputfield';
import BottomHeader from '../component/BottomHeader';
import { getStatusBarHeight } from 'react-native-status-bar-height';


import { connect } from 'react-redux';
import { _getCategories, _getItems } from '../store/middlewares/appMiddleware';




class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                active:"",






        }
    }
    async componentDidMount() {
        await this.props._getCategories()

        await this.props._getItems()
    }


    // async componentDidMount() {
    //   let res = await this.props._getItem()
    // }
    // getitem = async (e) => {
    //   e.preventDefault()
    //   // this.props.setLoading(true)
    //   let res = await this.props._getItems({

    //   })

    //   // this.props.setLoading(false)
    // }

    render() { 
        // <TouchableOpacity onPress={()=> this.props.navigation.navigate('Categories')} style={{ padding: 20 }}><Text>Table</Text></TouchableOpacity>
        return (
            <View style={styles.Container}>
                <BottomHeader navigation={this.props.navigation} btm={50} />
                <Inputfield text='Search Now' />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {
                      this.props.categories &&
                      this.props.categories.map((cat,index)=>
                      <TouchableOpacity onPress={()=> this.setState({active:cat.name})} key={index} style={{ padding: 20 }}><Text style={{ fontFamily: 'sp', fontSize: 12 }} >
                      {cat.name}
                  </Text></TouchableOpacity> )
                  }  
                




                </ScrollView>
                <ScrollView style={{ paddingHorizontal: 20, }}  >

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >


                        {/* {this.state.chair11.map((item, index) =>
                                
                                    <Card navigation={this.props.navigation} item={item} key={index} />
                                
                            )}
                         */}



                    </ScrollView>
                    {/* best Products */}
                    <View>
                        <Text style={{ paddingLeft: 17, fontSize: 22, fontFamily: 'sf' }}>
                            Best Products
                        </Text>
                    </View>


                    <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between", }}>
                        {
                            this.props.items.map((item, index) =>
                                <Card navigation={this.props.navigation} item={item} key={index} />

                            )
                        }


                    </View>

                    {/* <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
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
                    {/* </View> */}
                    <View>

                        {/* //Cupboard */}
                        <Text style={{ paddingLeft: 17, fontSize: 22, fontFamily: 'sf' }}>
                            Cupboard
                        </Text>
                    </View>
                    {/* <View style={{ flexDirection: 'row', justifyContent: "space-around", }}>
                        {this.state.Table1.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index} />
                        )}
                        { this.state.Table1.map((item,index)=>
                        <Card navigation={this.props.navigation} item={item} key={index} />

                        )
                            
                        }
                    </View> */}
                    <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between", }}>
                        {
                            this.props.items.map((item, index) =>
                            this.state.active===item.categoryID &&
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
const mapState = state => {
    return {
        // logged: state.authReducer.logged,
        // items: state.appReducer.items,
        categories: state.appReducer.categories,
        items: state.appReducer.items,

    }
}
const mapDispatch = dispatch => {
    return {
        // _getItem: () => dispatch(_getItems()),
        // setLoading: (bol) => dispatch(_setLoading(bol)),
        _getCategories: () => dispatch(_getCategories()),
        _getItems: () => dispatch(_getItems())

    }
}
export default connect(mapState, mapDispatch)(Home)