import { ADD_TO_CART, ADD_QUANTITY_TO_CART, REMOVE_ITEM_CART, REMOVE_CART } from '../actions/types'
// import update from 'immutability-helper';

const initialState = {
  products: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let allProducts = state.products
      let modifier = state.products.findIndex((product) => {
        return product?._id == action?.payload?._id
      })

      if (modifier !== -1 && allProducts?.length) {
        //
      } else {
        let product=action.payload.product
        product.quantity = 1
        return {
          ...state,
          products: state.products.concat(product),
        }
      }
    }
    case ADD_QUANTITY_TO_CART: {

      return {
        ...state,
        products: state.products.map((pro) =>
          pro._id === action.payload._id
            ? { ...pro, quantity: action.payload.quantity }
            : pro
        ),
      }
    }
    case REMOVE_CART:
      return {
        ...state,
        products: [],
      }
    case REMOVE_ITEM_CART:
      return {
        ...state,
        products: state.products.filter(
          (item) => item._id !== action.payload
        ),
      }
   
    default:
      return state
  }
}
