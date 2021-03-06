import {
  black, green, grey, red, white, blue, yellow,
} from './colors'

const theme = {
  borderRadius: 12,
  breakpoints: {
    mobile: '400px',
    tablet: '768px',
    desktop: '992px',
    desktopLarge: '1200px',
  },
  color: {
    black,
    grey,
    green,
    red,
    primary: {
      light: yellow.golden,
      main: black,
    },
    secondary: {
      main: blue.golden_complimentary,
    },
    white,
    blue,
    yellow,
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
  topBarSize: 72,
}

export default theme
