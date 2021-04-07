import { ADD_FOOD, DELETE_FOOD } from './Types';

export const addFood = (food) => (
  {
    type: ADD_FOOD,
    data: food
  }
);

export const deleteFood = (index) => (
  {
    type: DELETE_FOOD,
    index: index
  }
);
