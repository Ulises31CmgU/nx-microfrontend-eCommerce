import React from 'react';
import { useCartState } from '@e-commerce/common-types-functions';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';

export default function CartIconComponent() {
  const { cartItemCount, cartToggleHidden } = useCartState();

  return (
    <IconButton onClick={cartToggleHidden}>
      <Badge badgeContent={cartItemCount} color={'secondary'}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
