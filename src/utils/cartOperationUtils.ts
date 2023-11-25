import { CartItem, ProductItem } from "@/__generated__/graphql";

export const addToCart = (cartItems: CartItem[], product: ProductItem) => {
  const existingItem = cartItems.find((item) => item.productId === product.id);
  if (cartItems.length && existingItem) {
    return cartItems.map((item) => {
      if (item.productId === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });
  } else {
    return [
      ...cartItems,
      {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      },
    ];
  }
};

export const subtractFromCart = (
  cartItems: CartItem[],
  product: ProductItem
) => {
  return cartItems.map((item) => {
    if (item.productId === product.id && item.quantity > 0) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }
    return item;
  });
};
