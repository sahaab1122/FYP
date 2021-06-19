// import React from 'react';
// // import logo from './logo.svg';
// // import './todoList.css';
// import ListItems from '../component/ListItems'
// import { View } from 'react-native-animatable';
// import { TextInput } from 'react-native-paper';
// import { Button } from 'react-native';
// // import { library } from '@fortawesome/fontawesome-svg-core'
// // import { faTrash } from '@fortawesome/free-solid-svg-icons'

// // library.add(faTrash)

// class todoList extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       items:[],
//       currentItem:{
//         text:'',
//         key:''
//       }
//     }
//     this.addItem = this.addItem.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//     // this.setUpdate = this.setUpdate.bind(this);
//   }
//   addItem(e){
//     e.preventDefault();
//     const newItem = this.state.currentItem;
//     if(newItem.text !==""){
//       const items = [...this.state.items, newItem];
//     this.setState({
//       items: items,
//       currentItem:{
//         text:'',
//         key:''
//       }
//     })
//     }
//   }
//   handleInput(e){
//     this.setState({
//       currentItem:{
//         text: e.target.value,
//         key: Date.now()
//       }
//     })
//   }
//   deleteItem(key){
//     const filteredItems= this.state.items.filter(item =>
//       item.key!==key);
//     this.setState({
//       items: filteredItems
//     })

//   }
// //   setUpdate(text,key){
// //     console.log("items:"+this.state.items);
// //     const items = this.state.items;
// //     items.map(item=>{      
// //       if(item.key===key){
// //         console.log(item.key +"    "+key)
// //         item.text= text;
// //       }
// //     })
//     // this.setState({
//     //   items: items
//     // })
    
   
  
//  render(){
//   return (
//     <View className="App">
//       <View>
//         <View >
//           <TextInput type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></TextInput>
//           <Button onPress={()=> this.addItem} ></Button>
//         </View>
//         <View>{this.state.items.text}</View>
        
//           <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
//       </View>
//     </View>
//   );
//  }
// }


// export default todoList;
