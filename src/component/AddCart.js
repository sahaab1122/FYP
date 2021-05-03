import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import { connect } from 'react-redux';
// import { addQuantity, addToCart, removeCart, removeItemCart } from '../Store/actions/cartActions'
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import _ from 'lodash'
// import i18n from '../lang/i18n';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class CartBtn extends React.Component {

    // constructor(props) {
    //     super(props);
    state = {
        // shown: true,
        qt: 0,
    }

    increaseCounter = () => {
        this.setState({ qt: this.state.qt + 1 })
    }
    decreaseCounter = () => {
        this.setState({ qt: this.state.qt - 1 })
    }








    // handleChange = async (num) => {
    //     var eff = this.state.qt + num
    //     var product = this.props.product
    //     if (eff < 1) {
    //         await this.props.removeItemCart(product.itemID)
    //         // alert(JSON.stringify(this.props.products))
    //         this.setState({
    //             shown: false,
    //             qt: 0,
    //         })
    //     } else {

    //         let quantity = eff
    //         var id = this.props.product.itemID
    //         this.props.addQuantity({ id, quantity })
    //         this.setState({
    //             qt: eff,
    //         })
    //     }
    // }

    // handleFinalAdding = async () => {

    //     this.props.addToCart(this.props.product)

    //     this.setState({
    //         shown: true,
    //     })
    // }
    // componentDidMount() {
    //     this.handleCheckCarted()
    // }

    // handleCheckCarted = async () => {
    //     let index = this.props.products.findIndex(product => product.itemID == this.props.product.itemID)

    //     if (index !== -1) {
    //         await this.setState({ qt: this.props.products[index]?.quantity, shown: true, })
    //     } else {
    //         await this.setState({ qt: this.props.products[index]?.quantity, shown: false, })
    //     }
    //     if (this.props.onChange) {
    //         this.props.onChange(this.state.qt)
    //     }

    // }
    // componentDidUpdate(prevProps, prevState) {
    //     const { products } = this.props
    //     if (prevProps.products !== products) {
    //         setTimeout(() => {
    //             this.handleCheckCarted()

    //         }, 10);
    //     }
    //     if (prevProps.product !== this.props.product) {
    //         this.handleCheckCarted()
    //     }

    // }

    render() {

        return (
            <View style={{ width:'90%',height:40,alignSelf:'center' }}>
                {this.state.qt === 0 ?
                    <TouchableOpacity onPress={() => this.increaseCounter()}  style={{ height: '100%',backgroundColor:'#000DAE',  alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20,color:'white',paddingHorizontal:20,paddingVertical:5 }}>AddCart</Text>

                    </TouchableOpacity>
                    :
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.decreaseCounter()} style={{ borderRadius: 5 }}  >
                            <AntDesign name="minussquare" size={28} color="black" />
                        </TouchableOpacity>
                        <Text style={{ color: '#960400' }}>{this.state.qt}</Text>
                        <TouchableOpacity onPress={() => this.increaseCounter()} style={{ borderRadius: 5 }}  >
                            <AntDesign name="plussquare" size={28} color="black" />
                        </TouchableOpacity>
                    </View>
                }

            </View>
        );
    }

}



// const mapStateToProps = (state) => ({
//     products: state.cartReducer.products,
//     lang: state.authReducer.lang,
// })

// const mapDispatchToProps = (dispatch) => ({
//     removeCart: (dt) => dispatch(removeCart(dt)),
//     addQuantity: (data) => dispatch(addQuantity(data)),
//     addToCart: (data) => dispatch(addToCart(data)),
//     removeItemCart: (data) => dispatch(removeItemCart(data)),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(CartBtn)