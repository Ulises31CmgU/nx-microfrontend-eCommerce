import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '@e-commerce/ui-components';
import Routes from './presentation/routes';
import { HeaderComponent } from './presentation/components';
import { useProductState } from '@e-commerce/common-types-functions';
import { Grid } from '@mui/material';

function App() {
  const { productListRequest } = useProductState();

  useEffect(() => {
    productListRequest();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderComponent />
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        mt={5}
        mb={5}
      >
        <Routes />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
