import { ProductItem } from "@/__generated__/graphql";

export interface IProductState {
  products: ProductItem[];
  isLoading: boolean;
  error: string | null;
  searchResults: ProductItem[];
  searchValue: string;
}

const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: null,
  searchResults: [],
  searchValue: "",
};

export default initialState;
