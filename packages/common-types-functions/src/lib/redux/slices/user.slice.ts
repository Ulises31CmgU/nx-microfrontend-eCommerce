import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRequesting: false,
  isLoggedIn: false,
  tokens: <string | null>null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginRequest: (state, action) => {
      state.isRequesting = true;
    },
    userLoginSuccess: (state, action) => {
      state.isRequesting = false;
      state.isLoggedIn = true;
      state.tokens = { ...action.payload };
    },
    userLoginFail: (state) => {
      state.isRequesting = false;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
      state.tokens = null;
    },
  },
});

export const { userLoginRequest, userLoginSuccess, userLoginFail, userLogout } =
  userSlice.actions;
export default userSlice.reducer;
