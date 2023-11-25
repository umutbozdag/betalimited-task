export const cartActionTypes = {
  FETCH_CART_START: "fetchCartStart",
  FETCH_CART_SUCCESS: "fetchCartSuccess",
  FETCH_CART_FAILURE: "fetchCartFailure",

  ADD_TO_CART_PENDING: "addToCartPending",
  ADD_TO_CART_SUCCESS: "addToCartSuccess",
  ADD_TO_CART_FAILURE: "addToCartFailure",

  SUBTRACT_FROM_CART_PENDING: "subtractFromCartPending",
  SUBTRACT_FROM_CART_SUCCESS: "subtractFromCartSuccess",
  SUBTRACT_FROM_CART_FAILURE: "subtractFromCartFailure",

  EXECUTE_CART_OPERATION_PENDING: "executeCartOperationPending",
  EXECUTE_CART_OPERATION_SUCCESS: "executeCartOperationSuccess",
  EXECUTE_CART_OPERATION_FAILURE: "executeCartOperationFailure",

  SET_SEARCH_VALUE: "setSearchValue",
} as const;
