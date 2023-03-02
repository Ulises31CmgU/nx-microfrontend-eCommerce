import styled from 'styled-components';

export const CheckoutItemWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 25%;
  padding-right: 15px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

export const CartItemData = styled.span`
  width: 25%;
`;

export const CartItemQuantity = styled.span`
  width: 25%;
  display: flex;
  padding-left: 20px;

  > .arrow {
    cursor: pointer;
  }
  > .value {
    margin: 0 10px;
  }
`;
