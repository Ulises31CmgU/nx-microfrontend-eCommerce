import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../types/product.types';

const initialState = {
  isRequesting: false,
  products: <Array<Product> | null>null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productListRequest: (state) => {
      state.isRequesting = true;
    },
    productListSuccess: (state, action) => {
      state.isRequesting = false;
      state.products = action.payload;
    },
    productListFail: (state) => {
      state.isRequesting = false;
    },
  },
});

export const { productListRequest, productListSuccess, productListFail } =
  productSlice.actions;
export default productSlice.reducer;
