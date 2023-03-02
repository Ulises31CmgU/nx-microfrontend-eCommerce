import React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface DirectoryElementProps {
  categoryName: string;
  categoryDescription: string;
  imgUrl: string;
}

export default function DirectoryElement({
  categoryName,
  categoryDescription,
  imgUrl,
}: DirectoryElementProps) {
  return (
    <Card sx={{ width: 345 }}>
      <Link to={'/shop'}>
        <CardActionArea>
          <CardMedia
            sx={{
              aspectRatio: '9/7',
              height: 'auto',
            }}
            component="img"
            height="140"
            image={imgUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {categoryName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {categoryDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
