
import { connect } from 'react-redux';
// import { update_user } from '../actions/authActions';
import { LOGIN, UPDATE } from '../actions/Types';


const initialState = {
    logged: false,   user: {},
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    logged: true,  user: action.user,

                }
            }
     
            default:
                return state;
    
        
        case UPDATE:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    
                    type: UPDATE,   user: info
                }
            }
     
        
    
        }
    
    
    }
    
 
export default  authReducer
     
    