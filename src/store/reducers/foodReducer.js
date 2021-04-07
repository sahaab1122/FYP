import { ADD_FOOD, DELETE_FOOD } from '../actions/Types';

const initialState = {
  List: []
}

const foodReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        List: state.List.concat(
           action.data
        )
      };
    case DELETE_FOOD:
      return {
        ...state,
        List: state.List.filter((item,index) =>index !== action.index)
      };
    default:
      return state;
  }
}

export default foodReducer;