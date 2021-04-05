import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { createStore } from 'redux'
import CounterApp from './Counter'
import { Provider } from 'react-redux'
import { State } from "react-native-gesture-handler";
const initialstate={
    counter:0
}
const reducer=(State=initialstate,action)=>{
    switch(action.type){
        case'INCREASE_COUNTER':
        return{counter:State.counter +1}
        case'DECREASE_COUNTER':
        return{counter:State.counter -1}
    }
    return State
}
const store=createStore(reducer)
class Rapp extends Component {

    render() {
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        );
    }
}

export default Rapp
