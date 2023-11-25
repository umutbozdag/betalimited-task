import client from "api/apolloClient";
import { gql } from "@/__generated__";

const SEARCH_PRODUCT = gql(`
  query SearchProduct($query: String!) {
   search(query: $query) {
      discount
      id
      image
      name
      originalPrice
      price
      rating
    }
  }
`);

const searchProductService = async (productName: string) => {
  const searchProductResponse = await client.query({
    query: SEARCH_PRODUCT,
    variables: {
      query: productName,
    },
  });

  return searchProductResponse.data.search;
};

export default searchProductService;
