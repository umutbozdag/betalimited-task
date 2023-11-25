/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddToCart($productId: ID!) {\n   addToCart(productId: $productId)\n  }\n": types.AddToCartDocument,
    "\n  query GetCartItems {\n   cartItems {\n     name\n     price\n     productId\n     quantity\n   }\n  }\n": types.GetCartItemsDocument,
    "\n  mutation SubtractFromCart($productId: ID!) {\n   subtractFromCart(productId: $productId)\n  }\n": types.SubtractFromCartDocument,
    "\n  query GetProducts {\n    products {\n      discount\n      id\n      image\n      name\n      price\n      originalPrice\n      rating\n    }\n  }\n": types.GetProductsDocument,
    "\n  query SearchProduct($query: String!) {\n   search(query: $query) {\n      discount\n      id\n      image\n      name\n      originalPrice\n      price\n      rating\n    }\n  }\n": types.SearchProductDocument,
    "\n  query CreateSession {\n    session {\n      sessionId\n    }\n  }\n": types.CreateSessionDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddToCart($productId: ID!) {\n   addToCart(productId: $productId)\n  }\n"): (typeof documents)["\n  mutation AddToCart($productId: ID!) {\n   addToCart(productId: $productId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCartItems {\n   cartItems {\n     name\n     price\n     productId\n     quantity\n   }\n  }\n"): (typeof documents)["\n  query GetCartItems {\n   cartItems {\n     name\n     price\n     productId\n     quantity\n   }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SubtractFromCart($productId: ID!) {\n   subtractFromCart(productId: $productId)\n  }\n"): (typeof documents)["\n  mutation SubtractFromCart($productId: ID!) {\n   subtractFromCart(productId: $productId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProducts {\n    products {\n      discount\n      id\n      image\n      name\n      price\n      originalPrice\n      rating\n    }\n  }\n"): (typeof documents)["\n  query GetProducts {\n    products {\n      discount\n      id\n      image\n      name\n      price\n      originalPrice\n      rating\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchProduct($query: String!) {\n   search(query: $query) {\n      discount\n      id\n      image\n      name\n      originalPrice\n      price\n      rating\n    }\n  }\n"): (typeof documents)["\n  query SearchProduct($query: String!) {\n   search(query: $query) {\n      discount\n      id\n      image\n      name\n      originalPrice\n      price\n      rating\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CreateSession {\n    session {\n      sessionId\n    }\n  }\n"): (typeof documents)["\n  query CreateSession {\n    session {\n      sessionId\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;