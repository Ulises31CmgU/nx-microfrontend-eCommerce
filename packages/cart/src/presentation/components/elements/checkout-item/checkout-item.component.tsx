import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CartProduct, useCartState } from '@e-commerce/common-types-functions';

import {
  CartItemData,
  CartItemQuantity,
  CheckoutItemWrapper,
  ImageContainer,
} from './checkout-item.styles';

interface CheckoutItemComponentProps {
  item: CartProduct;
}

export default function CheckoutItemComponent({
  item,
}: CheckoutItemComponentProps) {
  const { cartAddItem, cartRemoveItem } = useCartState();

  return (
    <CheckoutItemWrapper>
      <ImageContainer>
        <img src={item.image} alt="item"></img>
      </ImageContainer>
      <CartItemData>
        <strong>{item.title}</strong>
      </CartItemData>
      <CartItemQuantity>
        <div className="arrow" onClick={() => cartRemoveItem(item)}>
          <ArrowBackIosIcon />
        </div>
        <div className="value">{item.quantity}</div>
        <div className="arrow" onClick={() => cartAddItem(item)}>
          <ArrowForwardIosIcon />
        </div>
      </CartItemQuantity>
      <CartItemData className="price">{`$ ${item.price}`}</CartItemData>
    </CheckoutItemWrapper>
  );
}
