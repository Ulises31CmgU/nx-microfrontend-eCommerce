import React, { lazy, Suspense } from 'react';

import { CircularProgress } from '@mui/material';
const ShopPageContentComponent = lazy(
  () => import('shop/ShopPageContentComponent')
);

export default function Index() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ShopPageContentComponent />
    </Suspense>
  );
}
