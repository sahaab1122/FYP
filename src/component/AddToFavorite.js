
import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Transitioning } from 'react-native-reanimated';
import { connect } from 'react-redux';
import { set_favourite } from '../store/actions/appAction';

class AddToFavorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heart: false,
        }
    }

    componentDidMount() {
        this.findFav()
    }





    findFav = () => {
        let index = this.props.fav.findIndex(item => item._id === this.props.item._id)
        if (index >= 0) {
            this.setState({ heart: true })
        }
        else {

            this.setState({ heart: false })
        }

    }

    handleChange = () => {
        if (this.state.heart === true) {
            let temp = this.props.fav.filter(item => item._id !== this.props.item._id)
            this.props.setFav(temp)
        }
        else {
            this.props.setFav([...this.props.fav, this.props.item])
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.fav !== this.props.fav) {
            this.findFav()
        }
    }

    render() {
        return (


            <TouchableOpacity onPress={this.handleChange}>

                {
                    this.state.heart === true ?
                        <FontAwesome name="heart" size={25} color="black" />
                        :
                        <FontAwesome name="heart-o" size={25} color="black" />


                }
            </TouchableOpacity>







        )
    }

}
const mapState = state => {
    return {
        fav: state.appReducer.favourites,
        // loading: state.globalReducer.loading,
        // token: state.authReducer.token,
        // user: state.authReducer.user,
    }
}
const mapDispatch = dispatch => {
    return {
        // _getFav: (token, uid) => dispatch(_getFavourite(token, uid)),
        setFav: favs => dispatch(set_favourite(favs))

        // setLoading: bol => dispatch(set_loading(bol))
    }
}

export default connect(mapState, mapDispatch)(AddToFavorite);






