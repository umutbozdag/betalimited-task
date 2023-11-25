import { put, takeLatest, all, call, takeEvery } from "redux-saga/effects";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  searchProductStart,
  searchProductSuccess,
  searchProductFailure,
} from "app/features/product/slice";
import getProductsService from "app/features/product/services/getProductsService";
import searchProductService from "app/features/product/services/searchProductService";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "@/__generated__/graphql";
import { ApolloError } from "@apollo/client";

function* fetchProductsWorker() {
  try {
    const data: ProductItem[] = yield call(getProductsService);
    yield put(fetchProductsSuccess(data));
  } catch (error) {
    yield put(
      fetchProductsFailure((error as ApolloError).message) ||
        "Failed to fetch products"
    );
  }
}

function* searchProductWorker(action: PayloadAction<string>) {
  try {
    const data = yield call(searchProductService, action.payload);
    yield put(searchProductSuccess(data));
  } catch (error) {
    yield put(
      searchProductFailure((error as ApolloError).message) ||
        "Failed to search product"
    );
  }
}

function* fetchProductsWatcher() {
  yield takeLatest(fetchProductsStart.type, fetchProductsWorker);
}

function* searchProductWatcher() {
  yield takeEvery(searchProductStart.type, searchProductWorker);
}

export default function* productSaga() {
  yield all([fetchProductsWatcher(), searchProductWatcher()]);
}
