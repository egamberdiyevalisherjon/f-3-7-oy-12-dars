import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart: function (state = [], action) {
    switch (action.type) {
      case "qoshish":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "olish":
        return {
          ...state,
          cart: state.cart.filter((item) => {
            return item.id !== action.payload;
          }),
        };
      default:
        return state;
    }
  },
  products: function (state = {}, action) {
    return state;
  },
});

export default rootReducer;
