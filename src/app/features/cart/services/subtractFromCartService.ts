import { gql } from "@/__generated__";
import client from "api/apolloClient";
import { ProductItem } from "@/__generated__/graphql";

const SUBTRACT_FROM_CART = gql(`
  mutation SubtractFromCart($productId: ID!) {
   subtractFromCart(productId: $productId)
  }
`);

const subtractFromCartService = async (productId: ProductItem["id"]) => {
  const response = await client.mutate({
    mutation: SUBTRACT_FROM_CART,
    variables: {
      productId,
    },
    fetchPolicy: "network-only",
  });
  return response.data!.subtractFromCart;
};

export default subtractFromCartService;
