import React, { lazy, Suspense } from 'react';
import {
  images,
  useCartState,
  useUserState,
} from '@e-commerce/common-types-functions';
import { CustomLink, CustomLogo } from '@e-commerce/ui-components';

import { AppBar, Button, CircularProgress, Grid, Toolbar } from '@mui/material';

const CartIconComponent = lazy(() => import('cart/CartIconComponent'));
const CartDropdownComponent = lazy(() => import('cart/CartDropdownComponent'));

/* eslint-disable-next-line */
export interface HeaderProps {}

export function HeaderComponent(props: HeaderProps) {
  const { isLoggedIn, logout } = useUserState();
  const { cartHidden } = useCartState();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item>
            <CustomLogo link={'/'} image={images.mainLogo} />
          </Grid>
          <Grid item>
            <Suspense fallback={<CircularProgress />}>
              <Grid container gap={3}>
                <CustomLink route={{ name: 'Shop', url: '/shop' }} />
                <CartIconComponent />
                {isLoggedIn ? (
                  <Button onClick={logout} style={{ color: 'darkblue' }}>
                    Logout
                  </Button>
                ) : (
                  <CustomLink route={{ name: 'Login', url: '/login' }} />
                )}
              </Grid>
              {cartHidden ? null : <CartDropdownComponent />}
            </Suspense>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderComponent;
