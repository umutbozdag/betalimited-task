import { put, all, call, takeLatest, takeLeading } from "redux-saga/effects";
import {
  fetchCartSuccess,
  fetchCartFailure,
  fetchCartStart,
  executeCartOperationPending,
  executeCartOperationSuccess,
  executeCartOperationFailure,
} from "app/features/cart/slice";
import addToCartService from "app/features/cart/services/addToCartService";
import getCartService from "app/features/cart/services/getCartService";

import { CartItem } from "@/__generated__/graphql";
import subtractFromCartService from "app/features/cart/services/subtractFromCartService";
import { ApolloError } from "@apollo/client";
import { ExecuteCartOperationPayload } from "types/Cart";

function* fetchCartItemsWorker() {
  try {
    const response: CartItem[] = yield call(getCartService);
    yield put(fetchCartSuccess(response));
  } catch (error) {
    yield put(
      fetchCartFailure((error as ApolloError).message) || "Failed to fetch cart"
    );
  }
}

function* executeCartOperationWorker(action: ExecuteCartOperationPayload) {
  try {
    const { product, operation } = action.payload;
    if (operation === "add") {
      const isSuccess = yield call(addToCartService, product.id);
      if (isSuccess) {
        yield put(executeCartOperationSuccess(action.payload));
      }
    } else if (operation === "subtract") {
      const isSuccess = yield call(subtractFromCartService, product.id);
      if (isSuccess) {
        yield put(executeCartOperationSuccess(action.payload));
      }
    }
  } catch (error) {
    yield put(
      executeCartOperationFailure((error as ApolloError).message) ||
        "Failed to execute operation on product"
    );
  }
}

function* fetchCartItemsWatcher() {
  yield takeLatest(fetchCartStart.type, fetchCartItemsWorker);
}

function* executeCartOperationWatcher() {
  yield takeLeading(
    executeCartOperationPending.type,
    executeCartOperationWorker
  );
}

export default function* cartSaga() {
  yield all([fetchCartItemsWatcher(), executeCartOperationWatcher()]);
}
