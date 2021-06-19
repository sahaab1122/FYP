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
import { connect } from 'react-redux';
import { _getCategories, _getItems } from '../store/middlewares/appMiddleware';




class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //     chair11: [
        //         {
        //             name: 'Chair',
        //             price: '1600$',
        //             decribtion:'',
        //             image: [
        //                 sofa1, sofa2, sofa3
        //             ]
        //         },
        //         {
        //             name: 'Chair1',
        //             price: '1600$',
        //             image: [
        //                 Chair1, Chair, Chair2
        //             ]
        //         },
        //         {
        //             name: 'Chair2',
        //             price: '1600$',
        //             image: [
        //                 Chair1, Chair2, Chair
        //             ]
        //         },
        //         {
        //             name: 'Chair',
        //             price: '1600$',
        //             image: [
        //                 Chair1, Chair, Chair2
        //             ]
        //         }
        //     ],
           
        
        Table1:[
            {
                name:'Table',
                price:'100$',
                image:[table1]
            }
        ]



        }
    }
    async componentDidMount() {
        let res = await this.props._getCategories()
      }
      getcategorie = async (e) => {
        e.preventDefault()
        // this.props.setLoading(true)
        let res = await this.props._getCategories({
    
        })
    }
    async componentDidMount() {
        let res = await this.props._getItems()
      }
      getitem = async (e) => {
        e.preventDefault()
        // this.props.setLoading(true)
        let res = await this.props._getItems({
    
        })
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
        // console.log(this.props.items)
         
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

                    
                    <View style={{ flexDirection: 'row',flexWrap:"wrap", justifyContent: "space-between", }}>
                       {
                           this.props.items.map((item,index) => 
                           <Card navigation={this.props.navigation} item={item} key={index}    />
                           
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
const mapState = state => {
    return {
        // logged: state.authReducer.logged,
        // items: state.appReducer.items,
        categories: state.appReducer.categories,
        items: state.appReducer.items,

    }
}
const mapDispatch = dispatch =>{
    return{
        // _getItem: () => dispatch(_getItems()),
        // setLoading: (bol) => dispatch(_setLoading(bol)),
        _getCategories: () => dispatch(_getCategories()),
        _getItems: () => dispatch(_getItems())

    }
}
export default connect(mapState,mapDispatch)(Home)