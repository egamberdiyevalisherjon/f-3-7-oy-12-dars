import { ADD_NEW_PRODUCT, REMOVE_NEW_PRODUCT } from "../actions";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return [...state, action.payload];
    case REMOVE_NEW_PRODUCT:
      return [...state.slice(0, state.length - 1)];
    default:
      return state;
  }
}
