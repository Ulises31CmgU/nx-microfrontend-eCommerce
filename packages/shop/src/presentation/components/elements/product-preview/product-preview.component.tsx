import React from 'react';

import { Product, useCartState } from '@e-commerce/common-types-functions';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

interface ProductPreviewComponentProps {
  product: Product;
}

export default function ProductPreviewComponent({
  product,
}: ProductPreviewComponentProps) {
  const { cartAddItem } = useCartState();

  return (
    <Card sx={{ width: 400 }}>
      <CardMedia
        sx={{
          aspectRatio: 'initial',
          height: 580,
        }}
        image={product.image}
        title="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ height: 100 }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {product.title}
        </Typography>
        <Typography sx={{ height: 270 }} variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={2}
      >
        <Typography variant="h5">{product.price}</Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ShoppingCartCheckoutIcon />}
          onClick={() => cartAddItem(product)}
        >
          Add to cart
        </Button>
      </Grid>
    </Card>
  );
}
