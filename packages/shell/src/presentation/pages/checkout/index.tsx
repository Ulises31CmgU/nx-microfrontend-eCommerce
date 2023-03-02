import React, { lazy, Suspense } from 'react';

import { CircularProgress } from '@mui/material';
const CheckoutPageContentComponent = lazy(
  () => import('cart/CheckoutPageContentComponent')
);

export default function Index() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <CheckoutPageContentComponent />
    </Suspense>
  );
}
