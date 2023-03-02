import { createSelector } from '@reduxjs/toolkit';

export const selectUser = (state: any) => state.user;

export const selectIsUserLoggedIn = createSelector(
  [selectUser],
  (user) => user.isLoggedIn
);

export const selectIsUserRequesting = createSelector(
  [selectUser],
  (user) => user.isRequesting
);

export const selectUserTokens = createSelector(
  [selectUser],
  (user) => user.tokens
);
