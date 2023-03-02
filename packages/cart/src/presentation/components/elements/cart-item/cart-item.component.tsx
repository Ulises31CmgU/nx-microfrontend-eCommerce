import React from 'react';

import RemoveIcon from '@mui/icons-material/Remove';
import { CartProduct, useCartState } from '@e-commerce/common-types-functions';
import {
  CartItemDetails,
  CartItemImg,
  CartItemTitle,
  CartItemWrapper,
} from './cart-item.styles';
import { IconButton } from '@mui/material';

interface CartItemComponentProps {
  item: CartProduct;
}

export default function CartItemComponent({ item }: CartItemComponentProps) {
  const { cartRemoveItem } = useCartState();

  return (
    <CartItemWrapper>
      <CartItemImg src={item.image} alt="item" />
      <CartItemDetails>
        <CartItemTitle>
          <strong>{item.title}</strong>
        </CartItemTitle>
        <CartItemTitle>
          {item.quantity} X ${item.price}
        </CartItemTitle>
      </CartItemDetails>
      <IconButton onClick={() => cartRemoveItem(item)}>
        <RemoveIcon />
      </IconButton>
    </CartItemWrapper>
  );
}
