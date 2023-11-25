import { gql } from "@/__generated__";
import client from "api/apolloClient";
import { ProductItem } from "@/__generated__/graphql";

const ADD_TO_CART_MUTATION = gql(`
  mutation AddToCart($productId: ID!) {
   addToCart(productId: $productId)
  }
`);

const addToCartService = async (productId: ProductItem["id"]) => {
  const response = await client.mutate({
    mutation: ADD_TO_CART_MUTATION,
    variables: {
      productId,
    },
    fetchPolicy: 'network-only',
  });
  return response.data!.addToCart;
};

export default addToCartService;
