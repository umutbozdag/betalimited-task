import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "app/features/cart/initialState";
import { cartActionTypes } from "app/features/cart/actionTypes";
import { CartItem } from "@/__generated__/graphql";
import { addToCart, subtractFromCart } from "@/utils/cartOperationUtils";
import {
  CartOperationStatusEnum,
  ExecuteCartOperationPayload,
} from "types/Cart";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    [cartActionTypes.FETCH_CART_START]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [cartActionTypes.FETCH_CART_SUCCESS]: (
      state,
      action: PayloadAction<CartItem[]>
    ) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [cartActionTypes.FETCH_CART_FAILURE]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [cartActionTypes.EXECUTE_CART_OPERATION_PENDING]: (
      state,
      _action: ExecuteCartOperationPayload
    ) => {
      state.cartOperationStatus = CartOperationStatusEnum.LOADING;
      state.error = null;
    },
    [cartActionTypes.EXECUTE_CART_OPERATION_SUCCESS]: (
      state,
      action: ExecuteCartOperationPayload
    ) => {
      state.cartOperationStatus = CartOperationStatusEnum.SUCCEEDED;

      const { product, operation } = action.payload;

      if (operation === "add") {
        state.cartItems = addToCart(state.cartItems, product);
      } else if (operation === "subtract") {
        state.cartItems = subtractFromCart(state.cartItems, product);
      }

      state.cartOperationStatus = CartOperationStatusEnum.IDLE;
    },
    [cartActionTypes.EXECUTE_CART_OPERATION_FAILURE]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.cartOperationStatus = CartOperationStatusEnum.FAILED;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCartStart,
  fetchCartSuccess,
  fetchCartFailure,

  executeCartOperationPending,
  executeCartOperationFailure,
  executeCartOperationSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;
