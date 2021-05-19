import Register from '../../Auth/Register'
import { LOGIN, LOGOUT, UPDATE_INFO, SET_LOGGED, SET_LANGUAGE, SET_CITY } from '../actions/types'

const initialState = {
    logged: false, token: '', user: [], lang: 'en', city: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    logged: true, token: action.token, user: action.user,

                }
            }
            case Register:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    logged: true, token: action.token, user: action.user,

                }
            }
            default:
                return state;
    
        }
    
    
    }
    export default authReducer
    