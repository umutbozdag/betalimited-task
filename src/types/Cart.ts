import { ProductItem } from "@/__generated__/graphql";
import { PayloadAction } from "@reduxjs/toolkit";

export enum CartOperationEnum {
  ADD = "add",
  SUBTRACT = "subtract",
}

export enum CartOperationStatusEnum {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export type CartOperationStatus =
  | CartOperationStatusEnum.IDLE
  | CartOperationStatusEnum.LOADING
  | CartOperationStatusEnum.SUCCEEDED
  | CartOperationStatusEnum.FAILED;

export type CartOperation = CartOperationEnum.ADD | CartOperationEnum.SUBTRACT;

export type ExecuteCartOperationPayload = PayloadAction<{
  product: ProductItem;
  operation: CartOperation;
}>;
