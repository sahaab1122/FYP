import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import { ListItem, Icon } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood } from '../store/actions/food';
import { connect } from 'react-redux'
import { render } from 'react-dom';
import { ScrollView } from 'react-native-gesture-handler';

class List extends Component {
    static navigationOptions = {
        title: 'List',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'green'
        },
    };
    componentDidMount() {
      
    }

    render() {

        return (
            <ScrollView>
                {
                    this.props.foods.map((item, index) =>
                        <TouchableOpacity key={index} style={{ backgroundColor: 'yellow', justifyContent: 'space-around', alignSelf: 'center', width: '50%', padding: 30, marginTop: 20,flexDirection:'row', }}>
                            <Text>{item}</Text>

                            <TouchableOpacity onPress={()=> this.props.delete(index)}>
                                <Text style={{fontSize:20}}>X</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    )

                }


            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    listContainer: {

        padding: 16
    },
    listText: {
        fontSize: 30
    },
});
const mapStatToPorps = (state) => {
    
    return {
        foods: state.foodReducer.List
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        delete: (index) => dispatch(deleteFood(index))
    }
}
export default connect(mapStatToPorps, mapDispatchToProps)(List);