import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsProductRequesting,
  selectProductList,
} from '../selectors/product.selectors';
import { productListRequest } from '../slices/products.slice';

export function useProductState() {
  const productsList = useSelector(selectProductList);
  const isRequesting = useSelector(selectIsProductRequesting);

  const dispatch = useDispatch();

  return {
    productsList,
    isRequesting,
    productListRequest: () => dispatch(productListRequest()),
  };
}
