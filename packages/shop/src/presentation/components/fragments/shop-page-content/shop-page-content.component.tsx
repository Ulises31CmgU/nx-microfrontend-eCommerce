import React from 'react';

import { Product, useProductState } from '@e-commerce/common-types-functions';

import { CircularProgress, Grid } from '@mui/material';
import ProductPreviewComponent from '../../elements/product-preview/product-preview.component';

export default function ShopPageContentComponent() {
  const { isRequesting, productsList } = useProductState();

  return (
    <div>
      {isRequesting ? (
        <CircularProgress />
      ) : (
        <Grid container justifyContent={'center'} alignItems={'center'} gap={2}>
          {productsList.map((product: Product) => (
            <Grid item key={product.id}>
              <ProductPreviewComponent product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
