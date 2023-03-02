import React from 'react';
import { CartProduct, useCartState } from '@e-commerce/common-types-functions';

import {
  CartTotat,
  CheckoutHeader,
  CheckoutPageWrapper,
} from './checkout-page-content.styles';
import CheckoutItemComponent from '../../elements/checkout-item/checkout-item.component';

export default function CheckoutPageContentComponent() {
  const { cartItems, cartTotal } = useCartState();

  return (
    <CheckoutPageWrapper>
      <CheckoutHeader>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
      </CheckoutHeader>
      {cartItems.map((item: CartProduct) => (
        <CheckoutItemComponent key={item.id} item={item} />
      ))}
      <CartTotat>{`Total: $ ${cartTotal}`}</CartTotat>
    </CheckoutPageWrapper>
  );
}
