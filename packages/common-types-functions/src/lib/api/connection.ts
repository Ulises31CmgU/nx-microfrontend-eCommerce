import { sendRequest } from './axios';

import { ResponseLogin, UserCredentials } from '../types/user.types';
import { API_URLS } from './routes';
import { ResponseProductList } from '../types/product.types';

export const loginRequestConnection = async (credentials: UserCredentials) => {
  const request = {
    post: { path: API_URLS.login, body: credentials },
  };
  return await sendRequest<ResponseLogin>(request);
};

export const productListRequestConnection = async () => {
  const request = {
    get: { path: API_URLS.productList },
  };
  return await sendRequest<ResponseProductList>(request);
};
