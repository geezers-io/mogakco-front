import { theme } from '@chakra-ui/react';

export const colors = {
  ...theme.colors,

  white: '#FCFCFC',
  black: '#222529',

  ink: {
    50: '#F3F4F5',
    100: '#E6E8EB',
    200: '#D2D5D9',
    300: '#B9BFC4',
    400: '#A0A7AD',
    500: '#828990',
    600: '#656C72',
    700: '#545A60',
    800: '#41474D',
    900: '#32373b',
  },

  blue: {
    50: '#F0F6FA',
    100: '#B4E1FA',
    200: '#A4C8E2',
    300: '#7DB2D5',
    400: '#5B9DCB',
    500: '#4691C7',
    600: '#2b6cb0',
    700: '#0063be',
    800: '#003f83',
    900: '#1A365D',
  },

  yellow: {
    50: '#FFFFF0',
    100: '#FEFCBF',
    200: '#FAF089',
    300: '#F6E05E',
    400: '#ECC94B',
    500: '#fbb500',
    600: '#B7791F',
    700: '#965e00',
    800: '#744210',
    900: '#5F370E',
  },
} as const;
