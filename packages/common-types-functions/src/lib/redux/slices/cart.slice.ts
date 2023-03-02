import { createSlice } from '@reduxjs/toolkit';

import { CartProduct } from '../../types/product.types';
import { addItemToCart, removeItemFromCart } from '../cart.utils';

const initialState = {
  hidden: true,
  cartItems: <Array<CartProduct>>[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartToggleHidden: (state) => {
      state.hidden = !state.hidden;
    },
    cartAddItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    cartRemoveItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
  },
});

export const { cartToggleHidden, cartAddItem, cartRemoveItem } =
  cartSlice.actions;
export default cartSlice.reducer;
