import { createSelector } from '@reduxjs/toolkit';

export const selectProduct = (state: any) => state.product;

export const selectIsProductRequesting = createSelector(
  [selectProduct],
  (product) => product.isRequesting
);

export const selectProductList = createSelector(
  [selectProduct],
  (product) => product.products
);
