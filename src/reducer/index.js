import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  user: userReducer,
});

export default rootReducer;
