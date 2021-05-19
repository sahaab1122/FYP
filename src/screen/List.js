// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     FlatList,
//     Text,
//     Button,
//     TouchableOpacity,
//     View,Alert,showAlert
// } from 'react-native';
// import { ListItem, Icon } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteFood } from '../store/actions/food';
// import { connect } from 'react-redux'
// import { render } from 'react-dom';
// import { ScrollView } from 'react-native-gesture-handler';

// class List extends Component {
//     static navigationOptions = {
//         title: 'List',
//         headerTintColor: 'white',
//         headerStyle: {
//             backgroundColor: 'green'
//         },
//     };
//   componentDidMount(){

//   }

//     render() {

//         return (
//             <ScrollView>
//                 {
                    
//                      this.props.foods.map((item,index)=>
//                         <View key={index} style={{ backgroundColor: 'yellow', alignSelf:'center',justifyContent:'space-around', width: '90%',height:60, padding: 10, marginTop: 20,flexDirection:'row', }}>
//                             <Text>{item}</Text>

//                             <TouchableOpacity onPress={()=>this.props.delete(index)}   >
                           
//                                 <Text  style={{fontSize:20,}}  >X</Text>
//                             </TouchableOpacity>
//                         </View>

//                     )

//                 }


//             </ScrollView>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     listContainer: {

//         padding: 16
//     },
//     listText: {
//         fontSize: 30
//     },
// });
// const mapStatToProps = (state) => {
    
//     return {
//         foods: state.foodReducer.List
//     }
// }       
// const mapDispatchToProps = (dispatch) => {
//     return {
//         delete: (index) => dispatch(deleteFood(index))
//     }
// }
// export default connect(mapStatToProps, mapDispatchToProps)(List);