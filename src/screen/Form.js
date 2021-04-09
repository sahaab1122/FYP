import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import {StyleSheet,View,TextInput,Text,TouchableOpacity,Image, Alert} from 'react-native'
import { connect, useDispatch } from 'react-redux';
import { addFood } from '../store/actions/food';

class Form extends Component {
  static navigationOptions = {
    title: 'Home',headerTintColor: 'white',headerStyle: {backgroundColor: 'blue'},
  };
  state = {
    foods: ""
  }

  addToReduc = () => {
   
    if (this.state.foods == '') {

      alert('empty field')
        
    }else{
      this.props.add(this.state.foods);
    }
      

  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      /> */}
        <Text style={styles.title}>Redux</Text>
        {<TextInput placeholder='Name'style={styles.foodInput} onChangeText={(foods) => this.setState({ foods })}/>}


        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => this.addToReduc()}>
          <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => this.props.navigation.navigate('List')}>
          <Text style={{ fontSize: 22, color: 'white' }}>Go to FoodList</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  }
});
const mapStatToPorps = (state) => {

  return {
    food: state.foodReducer.foodlist
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    add: (food) => dispatch(addFood(food))
  }
}

export default connect(mapStatToPorps, mapDispatchToProps)(Form);
