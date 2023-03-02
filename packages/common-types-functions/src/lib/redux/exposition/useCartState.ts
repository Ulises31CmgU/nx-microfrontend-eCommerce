import { useDispatch, useSelector } from 'react-redux';

import { CartProduct, Product } from '../../types/product.types';

import {
  selectCartHidden,
  selectCartItemCount,
  selectCartItems,
  selectCartTotal,
} from '../selectors/cart.selectors';
import {
  cartAddItem,
  cartRemoveItem,
  cartToggleHidden,
} from '../slices/cart.slice';

export function useCartState() {
  const cartItems = useSelector(selectCartItems);
  const hidden = useSelector(selectCartHidden);
  const cartItemCount = useSelector(selectCartItemCount);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();

  return {
    cartItems,
    cartHidden: hidden,
    cartItemCount,
    cartTotal,
    cartToggleHidden: () => dispatch(cartToggleHidden()),
    cartAddItem: (item: Product) => dispatch(cartAddItem(item)),
    cartRemoveItem: (item: CartProduct) => dispatch(cartRemoveItem(item)),
  };
}
