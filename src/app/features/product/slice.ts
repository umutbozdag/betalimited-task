import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "app/features/product/initialState";
import { productActionTypes } from "app/features/product/actionTypes";
import { ProductItem } from "@/__generated__/graphql";

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    [productActionTypes.FETCH_PRODUCTS_START]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [productActionTypes.FETCH_PRODUCTS_SUCCESS]: (
      state,
      action: PayloadAction<ProductItem[]>
    ) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [productActionTypes.FETCH_PRODUCTS_FAILURE]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [productActionTypes.SEARCH_PRODUCT_START]: (state, _action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
    },
    [productActionTypes.SEARCH_PRODUCT_SUCCESS]: (
      state,
      action: PayloadAction<ProductItem[]>
    ) => {
      state.searchResults = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [productActionTypes.SEARCH_PRODUCT_FAILURE]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.searchResults = [];
      state.isLoading = false;
      state.error = action.payload;
    },

    [productActionTypes.SET_SEARCH_VALUE]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,

  searchProductStart,
  searchProductSuccess,
  searchProductFailure,

  setSearchValue,
} = productSlice.actions;

export default productSlice.reducer;
