import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartProduct, useCartState } from '@e-commerce/common-types-functions';

import {
  CartDropdownContainer,
  CartItem,
  EmptyMessage,
} from './cart-dropdown.styles';

import { Button } from '@mui/material';
import CartItemComponent from '../cart-item/cart-item.component';

export default function CartDropdownComponent() {
  const navigate = useNavigate();

  const { cartItems, cartToggleHidden } = useCartState();

  return (
    <CartDropdownContainer>
      <CartItem>
        {cartItems.length ? (
          cartItems.map((item: CartProduct) => (
            <CartItemComponent key={item.id} item={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItem>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/checkout');
          cartToggleHidden();
        }}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
}
