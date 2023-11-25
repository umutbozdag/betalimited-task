import { gql } from "@/__generated__";
import client from "api/apolloClient";

export const GET_CART_QUERY = gql(`
  query GetCartItems {
   cartItems {
     name
     price
     productId
     quantity
   }
  }
`);

const getCartService = async () => {
  const cartItems = await client.query({
    query: GET_CART_QUERY,
    fetchPolicy: "network-only",
  });

  return cartItems.data.cartItems;
};

export default getCartService;
