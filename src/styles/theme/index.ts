import { theme as chakraDefaultTheme } from '@chakra-ui/theme';
import { colors } from 'styles/theme/colors';
import { palette } from 'styles/theme/palette';
import { breakpoints } from 'styles/theme/breakpoints';
import { merge } from 'lodash';

const customTheme = {
  colors,
  palette,
  breakpoints,
};

export const theme = merge(chakraDefaultTheme, customTheme);
