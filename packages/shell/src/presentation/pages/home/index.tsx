import React from 'react';

import { Grid } from '@mui/material';
import DirectoryElement from './directoryElement';
import { images } from '@e-commerce/common-types-functions';

export default function Index() {
  return (
    <Grid container gap={5}>
      <DirectoryElement
        categoryName="Electronics"
        categoryDescription="Welcome to our electronics section, where you'll find the latest and greatest technology to suit all your needs! From state-of-the-art smartphones to cutting-edge laptops, high-quality headphones to sleek smartwatches, and everything in between, we have something for everyone."
        imgUrl={images.categoryElectronics.url}
      />
      <DirectoryElement
        categoryName="Jewelery"
        categoryDescription="Our jewelry is crafted from the finest materials and features exquisite designs that will leave you breathless. We offer pieces from renowned jewelry brands, as well as unique and handmade pieces from local artisans."
        imgUrl={images.categoryJewelery.url}
      />
      <DirectoryElement
        categoryName="Womans clothing"
        categoryDescription="We offer a stunning range of fashionable clothing to help you look and feel your best. From trendy tops and dresses to comfortable leggings and jeans, our selection includes a variety of styles and sizes to suit every taste and body type."
        imgUrl={images.categoryWomensClothing.url}
      />
      <DirectoryElement
        categoryName="Mens clothing"
        categoryDescription="Whether you're looking for a classic suit for a formal event or casual clothing for everyday wear, we've got you covered. Our collection features a range of high-quality pieces from top brands, including stylish shirts, comfortable pants, trendy jackets, and more. From business attire to casual wear, we offer an extensive selection of clothing styles to fit any occasion."
        imgUrl={images.categoryMensClothing.url}
      />
    </Grid>
  );
}
