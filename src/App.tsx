import React from 'react';
import BaseRoutes from 'src/components/BaseRoutes/BaseRoutes';
import {ThemeProvider} from '@mui/material';
import {theme} from 'src/common/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseRoutes />
    </ThemeProvider>
  )
}

export default App;
