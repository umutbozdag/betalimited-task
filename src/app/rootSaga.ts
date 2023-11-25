import { all } from "redux-saga/effects";
import sessionSaga from "app/features/session/sessionSaga";
import productSaga from "app/features/product/productSaga";
import cartSaga from "app/features/cart/cartSaga";

export default function* rootSaga() {
  yield all([sessionSaga(), productSaga(), cartSaga()]);
}
