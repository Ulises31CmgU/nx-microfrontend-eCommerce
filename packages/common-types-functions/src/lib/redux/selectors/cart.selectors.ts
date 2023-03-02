import { createSelector } from 'reselect';
import { CartProduct } from '../../types/product.types';

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity: number, cartItem: CartProduct) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity: number, cartItem: CartProduct) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
