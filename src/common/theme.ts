import {createTheme} from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00A884',
    },
    background: {
      default: '#F0F2F5',
    }
  },

  breakpoints: {
    values: {
      xs: 800,
      sm: 1024,
      md: 1280,
      lg: 1440,
      xl: 1600,
    },
  },
});
