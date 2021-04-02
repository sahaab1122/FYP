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

    constructor(props) {
        super(props);
        this.state = {
            shown: true,
            qt: 1,
        }
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
            <View style={{ minWidth: 130, display: 'flex', marginRight: 10, }}>
                {!this.state.shown ?
                    <TouchableOpacity onClick={() => null} className="ripple" style={{ flexDirection: 'row', alignItems: 'center', height: 50, width: '100%', }}>

                        
                    </TouchableOpacity>
                    :
                    <View style={{ display: 'flex', alignItems: 'center',flexDirection:'row' }}>
                        <TouchableOpacity onClick={() => null} style={{ borderRadius: 5 }} className="btn-1">
                        <AntDesign name="minussquare" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={{ width: 50, display: 'flex', justifyContent: 'center', color: '#960400',textAlign:'center' }}>{this.state.qt}</Text>
                        <TouchableOpacity onClick={() => null} style={{ borderRadius: 5 }} className="btn-1">
                        <AntDesign name="plussquare" size={24} color="black" />
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