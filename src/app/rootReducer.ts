import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "app/features/session/slice";
import productReducer from "app/features/product/slice";
import cartReducer from "app/features/cart/slice";

const rootReducer = combineReducers({
  session: sessionReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
