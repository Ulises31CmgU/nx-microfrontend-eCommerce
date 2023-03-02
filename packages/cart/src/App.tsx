import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@e-commerce/ui-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
