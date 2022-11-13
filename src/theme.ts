import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import "typeface-cormorant";

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#509CBF',
    },
    secondary: {
      main: '#0F1C3C',
    },
  },
  typography: {
    
    fontFamily: [
      'Poppins',
      'serif',
    ].join(','),

    h1:{

      
    },
    button: {
    },
    body1: {

    }
  },
}));



export default theme;