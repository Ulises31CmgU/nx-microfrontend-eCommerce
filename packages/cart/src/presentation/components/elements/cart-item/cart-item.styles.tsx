import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const CartItemImg = styled.img`
  width: 30%;
`;

export const CartItemDetails = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 0px 10px 10px;
`;

export const CartItemTitle = styled.span`
  font-size: 16px;
  color: black;
`;
