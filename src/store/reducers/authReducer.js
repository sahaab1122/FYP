
import { connect } from 'react-redux';
// import { update_user } from '../actions/authActions';
import { LOGIN, UPDATE ,LOGOUT} from '../actions/types';


const initialState = {
    logged: false, user: {},
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    logged: true, user: action.user,
                }
            }

        case LOGOUT:
            {
                return {
                    ...state, logged: false, user: [], token: ''
                }
            }
        case UPDATE:
            {
                // console.log(action.coin)
                return {
                    ...state,

                    type: UPDATE, info: info
                }
            }
        default:
            return state;






    }





}


export default authReducer

