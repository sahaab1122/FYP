
import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Transitioning } from 'react-native-reanimated';

class AddToFavourite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heart: false,
        }
    }

    // componentDidMount() {
    //     this.findFav()
    // }

    toggleFav = () => {
        // this.props.setLoading(true)
        // let uid = this.props.user.userID
        // let itemID = this.props.item.itemID
        if (this.state.heart) {


            this.setState({ heart: false, })


        }
        else {


            this.setState({ heart: true, })


        }

    }

    render() {
        return (


            this.state.heart === true ?
                <Text onPress={() => this.toggleFav()}>
                    <  FontAwesome name="heart" size={25} color="black" />
                </Text>
                :
                <Text onPress={() => this.toggleFav()}>
                    < FontAwesome name="heart-o" size={25} color="black" />
                </Text>








        )
    }

}
// const mapState = state => {
// return {
//     fav: state.appReducer.favourites,
//     loading: state.globalReducer.loading,
//     token: state.authReducer.token,
//     user: state.authReducer.user,
// }
// }
// const mapDispatch = dispatch => {
// return {
//     _getFav: (token, uid) => dispatch(_getFavourite(token, uid)),
//     setLoading: bol => dispatch(set_loading(bol))
// }
// }

export default AddToFavourite;






