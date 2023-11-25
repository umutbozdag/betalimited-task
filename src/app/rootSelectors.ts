import { createSelector } from "@reduxjs/toolkit";
import { IProductState } from "app/features/product/initialState";
import { ICartState } from "app/features/cart/initialState";

export const selectProductState = (state: {
  product: IProductState;
}): IProductState => state.product;
export const selectCartState = (state: { cart: ICartState }): ICartState =>
  state.cart;

const isShowingSearchResults = (state: IProductState) =>
  state.searchResults && state.searchResults.length && state.searchValue;

export const selectProductsAndQuantity = createSelector(
  [selectProductState, selectCartState],
  (productState, cartState) => {
    return (
      isShowingSearchResults(productState)
        ? productState.searchResults
        : productState.products
    ).map((product) => ({
      ...product,
      quantity:
        (
          cartState.cartItems.find((item) => item.productId === product.id) ||
          {}
        ).quantity || 0,
    }));
  }
);
