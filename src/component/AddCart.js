import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import { connect } from 'react-redux';
// import { addQuantity, addToCart, removeCart, removeItemCart } from '../Store/actions/cartActions'
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import _ from 'lodash'
// import i18n from '../lang/i18n';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addQuantity, addToCart, removeCart, removeItemCart } from '../store/actions/cartAction'

class AddCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            qt: 0,
        }
    }


    handleChange = async (num) => {
        var total = this.state.qt + num
        var product = this.props.product
        if (total < 1) {
            await this.props.removeItemCart(product._id)
            // alert(JSON.stringify(this.props.items))
            this.setState({ qt: 0, })
        } else {

            let quantity = total
            var _id = this.props.product._id
            this.props.addToCart({ _id, quantity, product: this.props.product })
            this.setState({ qt: total, })
        }
    }

    componentDidMount() {
        this.handleCheckCarted()
    }

    handleCheckCarted = async () => {
        let index = this.props.products.findIndex(product => product._id == this.props.product._id)

        if (index !== -1) {
            await this.setState({ qt: this.props.products[index]?.quantity, })
        }


    }
    componentDidUpdate(prevProps, prevState) {
        const { products } = this.props

        if (prevProps.products !== products) {
            this.handleCheckCarted()
        }

    }

    render() {

        console.log(this.props.products)

        return (
            <View style={{ width: '90%', height: 40, alignSelf: 'center' }}>
                {this.state.qt === 0 ?
                    <TouchableOpacity onPress={() => this.handleChange(1)} style={{ height: '90%', backgroundColor: '#000DAE', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                        <Text style={{ fontSize: 20, color: 'white', paddingHorizontal: 20, paddingVertical: 4 }}>AddCart</Text>

                    </TouchableOpacity>
                    :
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.handleChange(-1)} style={{ borderRadius: 5 }}  >
                            <AntDesign name="minussquare" size={28} color="black" />
                        </TouchableOpacity>
                        <Text style={{ color: '#960400' }}>{this.state.qt}</Text>
                        <TouchableOpacity onPress={() => this.handleChange(1)} style={{ borderRadius: 5 }}  >
                            <AntDesign name="plussquare" size={28} color="black" />
                        </TouchableOpacity>
                    </View>
                }

            </View>
        );
    }

}



const mapState = state => {
    return {
        products: state.cartReducer.products,

    }
}
const mapDispatch = dispatch => {
    return {
        removeCart: (dt) => dispatch(removeCart(dt)),
        addQuantity: (data) => dispatch(addQuantity(data)),
        addToCart: (data) => dispatch(addToCart(data)),
        removeItemCart: (data) => dispatch(removeItemCart(data)),

    }
}
export default connect(mapState, mapDispatch)(AddCart)