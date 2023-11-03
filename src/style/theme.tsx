import { yellow, grey, orange } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

const typography = {
  fontFamily: [
    '"Press Start 2P"',
    'cursive',
    '"Play"',
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
    h1: {
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 400,
    },
    h2: {
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 400,
    },
    h3: {
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 400,
    },
    h6: {
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "'Play', sans-serif",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'Play', sans-serif",
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: "'Play', sans-serif",
      fontWeight: 400,
      fontSize: '1.3rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    subtitle2: {
      fontFamily: "'Play', sans-serif",
      fontWeight: 700,
      fontSize: '1.3rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    button: {
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 700,
      fontSize:'0.8rem'
    },
    caption: {
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 400,
      fontSize: '0.65rem',
      lineHeight: 4,
    }
}

const primaryLight = {
main: '#121212',
light: '#6c757d'
 }

const primaryDark = {
  main: '#f7f7f7',
  dark: '#6c757d'
}

const secondary = {
  main: '#ffff00',
  light: yellow[200],
  dark: yellow[500],
  contrastText: '#121212'
}

const textLight = {
  primary: '#121212',
  secondary: '#6c757d'
}

const textDark = {
  primary: '#f7f7f7',
  secondary: '#6c757d'
}

const backgroundLight = {
  paper: '#f7f7f7',
  default: 'white',
}

const backgroundDark = {
  paper: '#121212',
  default: '#121212',
}

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
     primary: {
      ...(mode === 'light' ? primaryLight : primaryDark)
    },
    secondary: {
      ...(secondary)
    },
    text: {
      ...(mode === 'light' ? textLight : textDark)
    },
    background: {
      ...(mode === 'light' ? backgroundLight : backgroundDark),
    },
  },
  typography: typography,
  components: {
    ...(mode === "light"
      ? {
        MuiButton: {
          styleOverrides: {
            root: {
              '&:hover': {
                color: '#121212',
                borderColor: yellow['A200'],
              },
            },
          },
        }
      }
      :
      {
        MuiButton: {
          styleOverrides: {
            root: {
              '&:hover': {
                color: yellow['A200'],
                borderColor: '#121212',
              },
            },
          },
        }
      })
  }
});

export default getDesignTokens;

