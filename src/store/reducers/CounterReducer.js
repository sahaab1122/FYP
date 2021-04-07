import { DECREASE_COUNTER, INCREASE_COUNTER } from "../redux/ActionTypes"


const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
     
    if (action.type === INCREASE_COUNTER) {

        return {
            ...state, counter: state.counter + 1
        }
    }
    else if(action.type===DECREASE_COUNTER){
        return{
            ...state,counter:state.counter -1
        }
    }
    else {
        return state

    }

}
export default reducer