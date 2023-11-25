import { put, takeLatest, call } from "redux-saga/effects";
import {
  createSessionStart,
  createSessionSuccess,
  createSessionFailure,
} from "app/features/session/slice";
import createSessionService from "app/features/session/services/createSessionService";
import { ApolloError } from "@apollo/client";

function* createSessionWorker() {
  try {
    const response = yield call(createSessionService);
    yield put(createSessionSuccess(response));
  } catch (error) {
    yield put(
      createSessionFailure((error as ApolloError).message) ||
        "Failed to create a session"
    );
  }
}

export default function* sessionSaga() {
  yield takeLatest(createSessionStart.type, createSessionWorker);
}
