import { CartProduct, Product } from '../types/product.types';

export const addItemToCart = (
  cartItemArray: Array<CartProduct>,
  newProduct: Product
) => {
  const existingCartItem = cartItemArray.find(
    (item) => item.id === newProduct.id
  );

  if (existingCartItem) {
    return cartItemArray.map((item) =>
      item.id === newProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItemArray, { ...newProduct, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItemArray: Array<CartProduct>,
  cartItem: CartProduct
) => {
  if (cartItem.quantity !== 1) {
    return cartItemArray.map((item) =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }

  return cartItemArray.filter((item) => item.id !== cartItem.id);
};
