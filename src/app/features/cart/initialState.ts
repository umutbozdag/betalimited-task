import { CartItem } from "@/__generated__/graphql";
import { CartOperationStatus, CartOperationStatusEnum } from "types/Cart";

export interface ICartState {
  cartItems: CartItem[];
  isLoading: boolean;
  error: string | null;
  cartOperationStatus: CartOperationStatus;
  subtractFromCartStatus: CartOperationStatus;
}

const initialState: ICartState = {
  cartItems: [],
  isLoading: false,
  error: null,
  cartOperationStatus: CartOperationStatusEnum.IDLE,
  subtractFromCartStatus: CartOperationStatusEnum.IDLE,
};

export default initialState;
