import { createTheme } from '@mui/material';
import { Roboto_Condensed } from 'next/font/google';

const themeColors = {
  primary: '#0C9E4D',
  secondary: '#586F93',
}

const roboto = Roboto_Condensed({ subsets: ['latin'], display: 'swap' });

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: themeColors.primary,
    },
    secondary: {
      main: themeColors.secondary,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: roboto.style.fontFamily,
            fontStyle: roboto.style.fontStyle,
            fontWeight: roboto.style.fontWeight,
            src: `
              local('Roboto Condensed'),
              local('RobotoCondensed-Regular'),
              url('/fonts/roboto-condensed-v20-latin-regular.woff2') format('woff2')
            `,
          },
        ],
      },
    },
  },
});