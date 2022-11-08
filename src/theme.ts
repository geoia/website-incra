import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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
    
    

    h1:{
      fontWeight: 400
      
    },
    button: {
    },
    body1: {

    }
  },
}));



export default theme;