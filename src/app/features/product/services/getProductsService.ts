import client from "api/apolloClient";
import { gql } from "@/__generated__";

const GET_PRODUCTS = gql(`
  query GetProducts {
    products {
      discount
      id
      image
      name
      price
      originalPrice
      rating
    }
  }
`);

const getProductsService = async () => {
  const getProductsResponse = await client.query({
    query: GET_PRODUCTS,
  });

  return getProductsResponse.data.products;
};

export default getProductsService;
