import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 440px;
  height: 370px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
