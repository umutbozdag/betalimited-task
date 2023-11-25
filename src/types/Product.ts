import { ProductItem } from "@/__generated__/graphql";

export type ProductItemWithQuantity = ProductItem & { quantity: number };
