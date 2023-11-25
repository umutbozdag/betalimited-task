export const productActionTypes = {
  FETCH_PRODUCTS_START: "fetchProductsStart",
  FETCH_PRODUCTS_SUCCESS: "fetchProductsSuccess",
  FETCH_PRODUCTS_FAILURE: "fetchProductsFailure",

  SEARCH_PRODUCT_START: "searchProductStart",
  SEARCH_PRODUCT_SUCCESS: "searchProductSuccess",
  SEARCH_PRODUCT_FAILURE: "searchProductFailure",

  SET_SEARCH_VALUE: "setSearchValue",
} as const;
